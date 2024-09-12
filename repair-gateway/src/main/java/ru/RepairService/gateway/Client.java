package ru.RepairService.gateway;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import ru.RepairService.dto.RepairRequestTechniqueInDto;

@Service
public class Client {

    private final WebClient webClient;

    public Client() {
        this.webClient = WebClient.create("http://localhost:9090");
    }

    public Mono<String> sendPostRequest(RepairRequestTechniqueInDto rrt) {
        return webClient.post()
                .uri("/add")  // путь к API на внешнем сервисе
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(rrt), RepairRequestTechniqueInDto.class)
                .retrieve()  // отправляем запрос и получаем ответ
                .bodyToMono(String.class)  // конвертируем ответ в String
                .onErrorResume(e -> {
                    // Обработка ошибок
                    return Mono.just("Error: " + e.getMessage());
                });
    }
}
