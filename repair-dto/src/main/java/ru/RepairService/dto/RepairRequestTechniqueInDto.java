package ru.RepairService.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.validation.annotation.Validated;

@Validated
public class RepairRequestTechniqueInDto {
    @NotNull
    @NotEmpty
    @NotBlank
    private String date;
    @NotNull
    @NotEmpty
    @NotBlank
    private String time;
    @NotNull
    @NotEmpty
    @NotBlank
    private String phone;
    @NotNull
    @NotEmpty
    @NotBlank
    private String name;
    @NotNull
    @NotEmpty
    @NotBlank
    private String address;
}
