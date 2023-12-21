package com.matchmanager.services;

import com.matchmanager.model.Jogador;
import com.matchmanager.model.JogadorDTO;
import com.matchmanager.model.Match;
import com.matchmanager.repositories.JogadorRepository;
import com.matchmanager.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
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

    public Match updateMatchInfos(Match match){

        Match match_r = this.matchRepository.findById( match.getId())
                .orElseThrow(() -> new RuntimeException("Match não encontrado com o ID: " + match.getId()));

        match_r.setNome(match.getNome());
        match_r.setEsporte(match.getEsporte());
        match_r.setDia_da_semana(match.getDia_da_semana());

        return this.matchRepository.save(match_r);
    }

    public void delete(Long id){
        this.matchRepository.deleteById(id);

    }

    public Match addJogador(Long id, JogadorDTO jogadorDTO, Boolean especial){
        Match match = this.matchRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Match não encontrado com o ID: " + id));


        Jogador jogador = new Jogador();
        jogador.setNome(jogadorDTO.getNome());
        jogador.setEspecial(especial);
        jogador.setScore(jogadorDTO.getScore());


        match.addJogador(jogador);
        jogador.setMatch(match);

        return this.matchRepository.save(match);

    }

    public Match deleteJogador(Long matchId, Long jogadorId) {
        Match match = this.matchRepository.findById(matchId)
                .orElseThrow(() -> new RuntimeException("Match não encontrado com o ID: " + matchId));


        for (Jogador j : match.getJogadores()) {
            if (j.getId().equals(jogadorId)) {
                match.getJogadores().remove(j);
                j.setMatch(null);
                break;
            }
        }
        return this.matchRepository.save(match);



    }

}
