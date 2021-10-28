![Captura de tela de 2021-10-28 14-57-11](https://user-images.githubusercontent.com/26885598/139317479-c1ac85c3-8618-4246-8426-b9fb43c99818.png)


# 🇧🇷 VERSÃO EM PORTUGUÊS
## 💁 SOBRE O PROJECT ERIS
O Project Eris é uma versão alternativa do Project Cobalt e, como ele, é um editor de texto simples que funciona em qualquer navegador. Ele também permite baixar o texto digitado como um arquivo RTF que pode ser aberto em praticamente qualquer editor de texto, como o LibreOffice por exemplo. Sua interface naturalmente possui cores e um papel de parede escuro que são amigáveis aos olhos do usuário.

[EXECUTE O PROJECT ERIS AQUI](https://projecteris.redwars22.repl.co/)

## ☸️ COMO FUNCIONA
O texto digitado é enviado para o arquivo **handler.php**, que gera um arquivo no servidor e fornece um link para que o usuário o baixe. Para gerar esse arquivo, usa-se as funções fwrite(), fopen() e fclose() do PHP. Eis aqui o código que faz a mágica acontecer:

```php
<?php
    $content = $_POST['textEdit'];
    $code = rand(10000, 999999);
    $filename = strval($code) . ".rtf";

    function generateFile($filename, $content){
        $file = fopen("data/".$filename, "w");
        $data = $content;
        fwrite($file, $content);
        fclose($file);
    }

    generateFile($filename, $content);

    echo "<a href='data/".$filename."'>BAIXAR ARQUIVO</a>";
?>
```

## 💻 CÓDIGO FONTE
O código de fonte deste programa está disponível no meu repositório no GitHub e você pode baixar, modificar e compartilhá-lo livremente.

[OBTER SEU CÓDIGO FONTE](https://github.com/Redwars22/Portfolio)

## 🧰 TECNOLOGIAS EMPREGADAS
A interface da página é feita basicamente em HTML e CSS puro, enquanto que o back-end é feito em PHP e hospedado no servidor do Replit.

<hr/>

# 🇺🇲 ENGLISH VERSION
## 💁 ABOUT PROJECT ARITHMOS
Project Eris is an alternative version of Project Cobalt and, like it, is a simple text editor that works in any browser. It also lets you download the text as an RTF file that you can open in practically any text editor, such as LibreOffice, for example. Its user interface naturally has dark colors and wallpaper that are easy on the user's eyes.

[RUN PROJECT ERIS HERE](https://projecteris.redwars22.repl.co/)

## ☸️ HOW IT WORKS
The text is sent to the file **handler.php**. It then generates a file on the server and gives a link to the user to download it. To generate that file, it uses the PHP functions fwrite(), fopen(), and fclose(). Here's the code that makes the magic happen:

```php
<?php
    $content = $_POST['textEdit'];
    $code = rand(10000, 999999);
    $filename = strval($code) . ".rtf";

    function generateFile($filename, $content){
        $file = fopen("data/".$filename, "w");
        $data = $content;
        fwrite($file, $content);
        fclose($file);
    }

    generateFile($filename, $content);

    echo "<a href='data/".$filename."'>BAIXAR ARQUIVO</a>";
?>
```

## 💻 SOURCE CODE
This program's source code is available in my GitHub repository, and you can download, modify and share it freely.

[GET THE SOURCE CODE](https://github.com/Redwars22/Portfolio)

## 🧰 TECHNOLOGIES
The page's UI basically uses HTML and pure CSS, whereas the back-end uses PHP and is stored at Replit's servers.
