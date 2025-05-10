package net.dahbani.ebank_backend.dtos;

import lombok.Data;
import net.dahbani.ebank_backend.enums.OperationType;

import java.util.Date;

@Data
public class OperationDTO {
    private Long id;
    private Date date;
    private double amount;
    private OperationType type;
    private String description;
}
