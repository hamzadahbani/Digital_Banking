package net.dahbani.ebank_backend;

import net.dahbani.ebank_backend.entities.CurrentAccount;
import net.dahbani.ebank_backend.entities.Customer;
import net.dahbani.ebank_backend.entities.Operation;
import net.dahbani.ebank_backend.entities.SavingAccount;
import net.dahbani.ebank_backend.enums.AccountStatus;
import net.dahbani.ebank_backend.enums.OperationType;
import net.dahbani.ebank_backend.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.UUID;
import java.util.stream.Stream;

@SpringBootApplication
public class EbankBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EbankBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner start(CustomerRepository customerRepository,
                            BankAccountRepository bankAccountRepository,
                            AccountOperationRepository accountOperationRepository){
        return args -> {
            Stream.of("Hamid", "Hassan", "Widad").forEach(name->{
                Customer customer = new Customer();
                customer.setName(name);
                customer.setEmail(name+"gmail.com");
                customerRepository.save(customer);
            });

            customerRepository.findAll().forEach(customer -> {
                // Current account
                CurrentAccount currentAccount = new CurrentAccount();
                currentAccount.setId(UUID.randomUUID().toString());
                currentAccount.setBalance(Math.random()*10000);
                currentAccount.setCreatedAt(new Date());
                currentAccount.setStatus(AccountStatus.CREATED);
                currentAccount.setCustomer(customer);
                currentAccount.setOverDraft(9000);
                bankAccountRepository.save(currentAccount);
                // Savings account
                SavingAccount savingsAccount = new SavingAccount();
                savingsAccount.setId(UUID.randomUUID().toString());
                savingsAccount.setBalance(Math.random()*10000);
                savingsAccount.setCreatedAt(new Date());
                savingsAccount.setStatus(AccountStatus.CREATED);
                savingsAccount.setCustomer(customer);
                savingsAccount.setInterestRate(1.2);
                bankAccountRepository.save(savingsAccount);
            });

            bankAccountRepository.findAll().forEach(account->{
                for(int i = 0; i<10; i++){
                    Operation operation = new Operation();
                    operation.setDate(new Date());
                    operation.setAmount(Math.random()*10000);
                    operation.setBankAccount(account);
                    operation.setType(Math.random()>0.5? OperationType.DEBIT : OperationType.CREDIT);
                    accountOperationRepository.save(operation);
                }
            });
        };
    }

}
