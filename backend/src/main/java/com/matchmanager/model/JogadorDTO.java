package com.matchmanager.model;

public class JogadorDTO {
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isEspecial() {
        return especial;
    }

    public void setEspecial(boolean especial) {
        this.especial = especial;
    }

    public boolean getEspecial(){
        return this.especial;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }


    private String nome;
    private boolean especial;
    private Integer score;

    // getters e setters
}
