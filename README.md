# Match Manager

## Descrição do Problema
Imagine uma partida de futebol entre amigos, onde a diversão deveria ser a regra, mas a seleção desequilibrada dos times transforma o jogo em uma competição desigual. As "panelinhas" acabam se formando, tornando a competição injusta. Desse problema surgiu o MManager, a solução para garantir que cada jogo seja emocionante, competitivo e, acima de tudo, justo.

A ideia do MManager é que com apenas alguns cliques, você possa criar sorteios de times que levam em conta a habilidade e a experiência de cada jogador, eliminando assim as disparidades e as "panelinhas". Sendo o mais abrangente possível, podendo escolher o número de times, quantos jogadores em cada time e esporte praticado.
Solução a ser implementada:

## Resolução do Problema
1. Criação da "Pelada" 
Comece definindo a sua "pelada" - o dia da semana, horário e o esporte praticado. Dê um nome à sua pelada para torná-la única e fácil de identificar.

2. Gerenciamento de Jogadores
Adicione os jogadores que frequentam sua pelada regularmente. Insira seus nomes e atribua classificações de 1 a 5 estrelas para refletir suas habilidades e experiência.

3. Posições Especiais
Inicialmente o MManager trabalhará apenas com futebol ou vôlei, onde existem duas posições chaves que devem ser levadas em consideração na hora do sorteio. Por exemplo, no vôlei, o "Levantador" é uma posição crucial, enquanto no futebol, o "Goleiro" desempenha um papel fundamental. Portanto, é indispensável que cada time tenha o seu.

4. Sorteios Precisos
Quando estiver pronto para o próximo jogo, indique quais jogadores estarão presentes e determine o número de times e jogadores por time. O MManager faz o resto.

5. Equipes Balanceadas 
O algoritmo do MManager se encarregará de criar times equilibrados. Cada equipe terá um jogador especial (Levantador ou Goleiro) e uma média de estrelas tão próxima quanto possível, garantindo que cada jogo seja uma competição justa.




# Configuração do Ambiente
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
