package net.dahbani.ebank_backend.repositories;

import net.dahbani.ebank_backend.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
