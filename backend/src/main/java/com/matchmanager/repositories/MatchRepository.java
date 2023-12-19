package com.matchmanager.repositories;

import com.matchmanager.model.Match;
import com.matchmanager.model.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;


public interface MatchRepository extends JpaRepository<Match, Long> {

    @Modifying
    @Query("DELETE FROM Match match WHERE match.id = :matchId AND EXISTS (SELECT 1 FROM match.jogadores jogador WHERE jogador.id = :jogadorId)")
    void deleteJogadorFromMatch(@Param("matchId") Long matchId, @Param("jogadorId") Long jogadorId);

    @Modifying
    @Query("DELETE FROM Jogador jogador WHERE jogador.id = :jogadorId")
    void deleteJogadorById(@Param("jogadorId") Long jogadorId);

}
