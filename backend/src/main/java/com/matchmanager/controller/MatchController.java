package com.matchmanager.controller;

import com.matchmanager.model.Jogador;
import com.matchmanager.model.JogadorDTO;
import com.matchmanager.model.Match;
import com.matchmanager.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class MatchController {
    @Autowired
    private MatchService matchService;

    @GetMapping("/matches")
    public List<Match> getMatches(){
        return matchService.read();
    }

    @GetMapping("/matches/{id}")
    public Match getMatch(@PathVariable("id") Long id){
        return this.matchService.readById(id);
    }

    @PostMapping("/matches")
    public Match createMatch(@RequestBody Match match){
        return this.matchService.create(match);
    }

    @PutMapping("/matches/details/{id}/edit")
    public Match updateMatch(@RequestBody Match match){
        return this.matchService.update(match);
    }

    @DeleteMapping("/matches/{id}")
    public void deleteMatch(@PathVariable("id") Long id){
        this.matchService.delete(id);

    }
    @PutMapping("/matches/details/{id}")
    public void addJogador(@PathVariable("id") Long id, @RequestBody JogadorDTO jogadorDTO){
        this.matchService.addJogador(id, jogadorDTO);
    }

    @PutMapping("/matches/details/{id}/delete")
    public void deleteJogador(@PathVariable("id") Long MatchId, @RequestBody Long JogadorId){
        this.matchService.deleteJogador(MatchId, JogadorId);
    }

}
