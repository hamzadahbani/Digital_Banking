package net.dahbani.ebank_backend.dtos;

import lombok.Data;
import net.dahbani.ebank_backend.enums.AccountStatus;

import java.util.Date;

@Data
public class SavingBankAccountDTO extends BankAccountDTO{
    private String id;
    private Date createdAt;
    private double balance;
    private AccountStatus status;
    private String currency;
    private double interestRate;
    private CustomerDTO customerDTO;

}