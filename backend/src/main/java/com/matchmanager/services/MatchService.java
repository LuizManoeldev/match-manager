package com.matchmanager.services;

import com.matchmanager.model.Jogador;
import com.matchmanager.model.JogadorDTO;
import com.matchmanager.model.Match;
import com.matchmanager.repositories.JogadorRepository;
import com.matchmanager.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MatchService {
    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private JogadorRepository jogadorRepository;



    public List<Match> read(){
        return this.matchRepository.findAll();
    }

    public Match readById(Long id){
        return this.matchRepository.findById(id).orElse(null);
    };

    public Match create(Match match){
        return this.matchRepository.save(match);
    }

    public Match update(Match match){
        return this.matchRepository.save(match);
    }

    public void delete(Long id){
        this.matchRepository.deleteById(id);

    }

    public void addJogador(Long id, JogadorDTO jogadorDTO){
        Match match = this.matchRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Match não encontrado com o ID: " + id));


        Jogador jogador = new Jogador();
        jogador.setNome(jogadorDTO.getNome());
        jogador.setCapitao(jogadorDTO.isCapitao());
        jogador.setScore(jogadorDTO.getScore());


        match.addJogador(jogador);
        jogador.setMatch(match);

        this.matchRepository.save(match);



    }

    public void deleteJogador(Long matchId, Long jogadorId) {
        Match match = this.matchRepository.findById(matchId)
                .orElseThrow(() -> new RuntimeException("Match não encontrado com o ID: " + matchId));

        Jogador jogadorParaExcluir = null;

        for (Jogador j : match.getJogadores()) {
            if (j.getId().equals(jogadorId)) {
               System.out.println(j.getId());
                jogadorParaExcluir = j;
                break;
            } else {
                throw new RuntimeException("Jogador n encontrado com o ID: " + jogadorId);
            }
        }

        if (jogadorParaExcluir != null) {
            match.getJogadores().remove(jogadorParaExcluir);
            jogadorParaExcluir.setMatch(null);

            this.matchRepository.save(match);
            this.matchRepository.deleteJogadorById(jogadorId);

        }


    }

}
