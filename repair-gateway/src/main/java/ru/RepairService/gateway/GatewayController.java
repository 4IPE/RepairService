package ru.RepairService.gateway;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import ru.RepairService.dto.RepairRequestTechniqueInDto;

@RestController
@RequestMapping("/request")
@RequiredArgsConstructor
@Slf4j
@Validated
public class GatewayController {
    private final Client client;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping()
    public Mono<String> request(@RequestBody RepairRequestTechniqueInDto object) {
        log.info("Я тут!!!!!!!!!!!!!!");
        return client.sendPostRequest(object);
    }
}
