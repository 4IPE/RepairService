package ru.RepairService.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.RepairService.dto.RepairRequestTechniqueInDto;
import ru.RepairService.mapper.RRTMapper;
import ru.RepairService.model.RepairRequestTechnique;
import ru.RepairService.repository.RRTRepository;

@Service
@RequiredArgsConstructor
public class RRTServiceImpl implements RRTService {

    private final RRTRepository repository;
    private final RRTMapper mapper;

    @Override
    public void saveRRT(RepairRequestTechniqueInDto rrtDto){
        RepairRequestTechnique rrt = mapper.toRepairRequestTechnique(rrtDto);
        repository.save(rrt);
    }

}
