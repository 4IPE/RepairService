package ru.RepairService.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import ru.RepairService.dto.RepairRequestTechniqueInDto;
import ru.RepairService.model.RepairRequestTechnique;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RRTMapper {

    RepairRequestTechnique toRepairRequestTechnique(RepairRequestTechniqueInDto RRTDto);

}
