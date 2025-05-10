package net.dahbani.ebank_backend.repositories;

import net.dahbani.ebank_backend.entities.Operation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountOperationRepository extends JpaRepository<Operation, Long> {
}
