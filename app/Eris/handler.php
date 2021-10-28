<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📑️🌟️ PROJECT ERIS<</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script>
      function source(){
        location.replace('https://github.com/Redwars22/Portfolio');
      }
    </script>
    <header>
      <h1>📑️🌟️ PROJECT ERIS</h1>
    </header>
    <main>
      <h3>O seu arquivo está pronto!</h3>
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
    <h4>No entanto, ele não estará disponível para sempre e poderá ser deletado<br> dos servidores a qualquer momento!
    Recomenda-se que o baixe agora mesmo!
    </h4>
    </main>
    <footer>
      <p>
        <strong>Project Eris</strong>, editor de texto criado por André Pereira em HTML, CSS e PHP.<br>
        <em>Para ativar o verificador ortográfico, baixe a extensão LanguageTool.</em>
      </p>
      <button class="button source" onClick="source()">CÓDIGO FONTE</button>
    </footer>
</body>
</html>