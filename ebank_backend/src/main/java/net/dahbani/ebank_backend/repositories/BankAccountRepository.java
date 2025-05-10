package net.dahbani.ebank_backend.repositories;

import net.dahbani.ebank_backend.entities.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount, String> {
}
