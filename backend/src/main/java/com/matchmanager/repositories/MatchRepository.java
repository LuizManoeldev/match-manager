package com.matchmanager.repositories;

import com.matchmanager.model.Match;
import com.matchmanager.model.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;


public interface MatchRepository extends JpaRepository<Match, Long> {

}
