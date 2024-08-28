package ru.RepairService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.RepairService.model.RepairRequestTechnique;

public interface RRTRepository extends JpaRepository<RepairRequestTechnique,Long> {
}
