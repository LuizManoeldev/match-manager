package com.matchmanager.model;

import jakarta.persistence.*;
import com.matchmanager.model.Jogador;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Match {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String dia_da_semana;
    private String esporte;
    @OneToMany(mappedBy="match", cascade = CascadeType.ALL) // Sempre Usar LIST
    private List<Jogador> jogadores = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDia_da_semana() {
        return dia_da_semana;
    }

    public void setDia_da_semana(String dia_da_semana) {
        this.dia_da_semana = dia_da_semana;
    }

    public String getEsporte() {
        return esporte;
    }

    public void setEsporte(String esporte) {
        this.esporte = esporte;
    }

    public List<Jogador> getJogadores() {
        return jogadores;
    }

    public void addJogador(Jogador jogador) {
        this.jogadores.add(jogador);
    }
}
