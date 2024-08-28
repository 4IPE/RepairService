package ru.RepairService.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.RepairService.dto.RepairRequestTechniqueInDto;
import ru.RepairService.service.RRTService;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
@Slf4j
@Validated
public class MainController {

    private  final RRTService service;

    @PostMapping("/request")
    public ResponseEntity<String> submitRepairRequest(@Valid @RequestBody RepairRequestTechniqueInDto request) {
        service.saveRRT(request);
        return ResponseEntity.ok("Repair request submitted successfully");
    }
}
