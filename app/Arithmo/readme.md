![Captura de tela de 2021-10-27 16-49-31](https://user-images.githubusercontent.com/26885598/139143224-1be46ca8-9415-4e07-a90d-13f1f9b78ad2.png)


# 🇧🇷 VERSÃO EM PORTUGUÊS
## 💁 SOBRE O PROJECT ARITHMOS
O Arithmo é uma adaptação de um outro projeto meu, o RandNum (feito em Angular e TypeScript) para o PHP. Ele usa a biblioteca Math e dispõe de um formulário para que o usuário possa definir o intervalo dentro do qual o número aleatórios será gerado.

[EXECUTE O PROJECT ARITHMOS AQUI](https://projectarithmo.redwars22.repl.co/)

## ☸️ COMO FUNCIONA
O usuário insere o intervalo dentro do qual quer que seja gerado o número aleatório e, quando aperta o botão GERAR, o formulário envia a entrada do usuário para o arquivo random.php, que recebe a informação e, por meio da função rand(), gera um número aleatório, que é exibido na tela. Eis o código necessário para isso:

```php
<?php
    $min = $_POST['limMin'];
    $max = $_POST['limMax'];

    $number = rand($min, $max);

    echo $number;
?>
```

Eu sei, é um código muito simples, com apenas 6 linhas, mas é a parte mais importante do programa. É onde a mágica acontece, digamos.

## 💻 CÓDIGO FONTE
O código de fonte deste programa está disponível no meu repositório no GitHub e você pode baixar, modificar e compartilhá-lo livremente.

[OBTER SEU CÓDIGO FONTE](https://github.com/Redwars22/Portfolio)

## 🧰 TECNOLOGIAS EMPREGADAS
A página principal e o formulário são feitos basicamente em HTML e CSS. Ah, não podemos nos esquecer do Materialize, o framework CSS que escolhi para este projeto e que embeleza a interface. E, o mais importante, PHP! Embora haja apenas 6 linhas de código PHP neste programa, ele não funcionaria sem essas 6 linhas de códigos PHP!!!

<hr/>

# 🇺🇲 ENGLISH VERSION
## 💁 ABOUT PROJECT ARITHMOS
Arithmos is an adaptation of another project of mine, RandNum (made in Angular and TypeScript), to PHP. It uses the Math library and has a form so that the user can define the range in which a random number will be generated.

[RUN PROJECT ARITHMOS HERE](https://projectarithmo.redwars22.repl.co/)

## ☸️ HOW IT WORKS
The user defines the range in the random number will be generated and, when he taps the GENERATE button, the form sends the user entry to the random.php file, which receives the information and, through the rand() function, generates a random number, that is shown on the screen. Here's the code required to do that:

```php
<?php
    $min = $_POST['limMin'];
    $max = $_POST['limMax'];

    $number = rand($min, $max);

    echo $number;
?>
```
I know, it is a very simple code, with only 6 lines, but it is the most important part of the program. Let's say that it is where the magic happens.

## 💻 SOURCE CODE
This program's source code is available in my GitHub repository, and you can download, modify and share it freely.

[GET THE SOURCE CODE](https://github.com/Redwars22/Portfolio)

## 🧰 TECHNOLOGIES
The main page and the form are made basically with HTML and CSS. Ah, we shouldn't forget Materialize, the framework that I chose for this project. Its function is to make the user interface prettier. And, the most important thing, PHP! Even though there are only 6 lines of PHP code in the entire program, it would not work without those 6 lines of PHP code!!!
