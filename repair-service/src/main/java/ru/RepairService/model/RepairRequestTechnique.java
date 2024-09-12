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
    @Column(name = "date_repair")
    private String date;
    @Column(name = "time_repair")
    private String time;
    @Column
    private String name;
    @Column
    private String phone;
    @Column
    private String address;
}
