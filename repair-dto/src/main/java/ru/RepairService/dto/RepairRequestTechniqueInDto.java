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
    private String problem;
    @NotNull
    @NotEmpty
    @NotBlank
    private String model;
    @NotNull
    @NotEmpty
    @NotBlank
    private String oldTechnique;
    @NotNull
    @NotEmpty
    @NotBlank
    private String nameComplainant;
    @NotNull
    @NotEmpty
    @NotBlank
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    private String numberComplainant;
}
