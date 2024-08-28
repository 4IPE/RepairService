package ru.RepairService.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "requests")
@Getter
@Setter
public class RepairRequestTechnique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String problem;
    @Column
    private String model;
    @Column
    private String oldTechnique;
    @Column
    private String nameComplainant;
    @Column
    private String numberComplainant;
}
