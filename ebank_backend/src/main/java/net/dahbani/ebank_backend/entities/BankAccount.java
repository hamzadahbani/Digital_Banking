package net.dahbani.ebank_backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.dahbani.ebank_backend.enums.AccountStatus;


import java.util.Date;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", length = 4)
@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class BankAccount {
    @Id
    private String id;
    private Date createdAt;
    private double balance;
    private AccountStatus status;
    private String currency;
    @ManyToOne
    private Customer customer;
    @OneToMany(mappedBy = "bankAccount", fetch = FetchType.LAZY)
    private List<Operation> operations;
}
