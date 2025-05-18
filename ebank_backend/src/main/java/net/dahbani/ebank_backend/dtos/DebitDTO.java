package net.dahbani.ebank_backend.dtos;

import lombok.Data;

@Data
public class DebitDTO {
    private String accountId;
    private double Amount;
    private String description;
}
