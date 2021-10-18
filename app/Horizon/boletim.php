<html>

  <head>
    <title>PHP Test</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Georama&display=swap" rel="stylesheet"> 
  </head>

  <body>
    <center>
    <h1>BOLETIM ESCOLAR</h1>

    <?php
      class Aluno {
        private $nome, $escola, $turma;

        public function __construct($nome, $escola, $turma){
          $this->nome = $nome;
          $this->escola = $escola;
          $this->turma = $turma;
        }

        public function getInfo(){
          $informacao = <<<EOL
            <strong>Aluno:</strong> {$this->nome}<br>
            <strong>Escola:</strong> {$this->escola}<br>
            <strong>Turma:</strong> {$this->turma}
EOL;

          echo $informacao;
        }

        public function getMedia($nota1, $nota2){
          return (($nota1 + $nota2) / 2);
        }
      }

      function boletim($pt1, $pt2, $ptMED, $mat1, $mat2, $matMED, $ing1, $ing2, $ingMED, $esp1, $esp2, $espMED, $ptStatus, $matStatus, $ingStatus, $espStatus){
        $boletim = <<<EOD
          <table border='1' class='boletim'>
            <thead>
              <th>Matéria</th>
              <th>1º Semestre</th>
              <th>2º Semestre</th>
              <th>Média</th>
              <th>Situação</th>
            </thead>
            <tbody>
              <tr>
                <td>Português</td>
                <td>{$pt1}</td>
                <td>{$pt2}</td>
                <td>{$ptMED}</td>
                <td>{$ptStatus}</td>
              </tr>
              <tr>
                <td>Matemática</td>
                <td>{$mat1}</td>
                <td>{$mat2}</td>
                <td>{$matMED}</td>
                <td>{$matStatus}</td>
              </tr>
              <tr>
                <td>Inglês</td>
                <td>{$ing1}</td>
                <td>{$ing2}</td>
                <td>{$ingMED}</td>
                <td>{$ingStatus}</td>
              </tr>
              <tr>
                <td>Espanhol</td>
                <td>{$esp1}</td>
                <td>{$esp2}</td>
                <td>{$espMED}</td>
                <td>{$espStatus}</td>
              </tr>
            </tbody>
          </table>
EOD;

        echo "$boletim";
      }

     //recebe notas e informações do aluno
      $nome = $_POST['nomeAluno'];
      $escola = $_POST['nomeColegio'];
      $turma = $_POST['turma'];
      $pt1 = $_POST['port1sem'];
      $pt2 = $_POST['port2sem'];
      $mat1 = $_POST['mat1sem'];
      $mat2 = $_POST['mat2sem'];
      $ing1 = $_POST['ing1sem'];
      $ing2 = $_POST['ing2sem'];
      $esp1 = $_POST['esp1sem'];
      $esp2 = $_POST['esp2sem'];

      $aluno = new Aluno($nome, $escola, $turma);
      $aluno->getInfo();

      // MÉDIAS
      $ptMED = $aluno->getMedia($pt1, $pt2);
      $matMED = $aluno->getMedia($mat1, $mat2);
      $ingMED = $aluno->getMedia($ing1, $ing2);
      $espMED = $aluno->getMedia($esp1, $esp2);

      //APROVA OU REPROVA
      $ptStatus = $ptMED > 70 ? "<p class='aprovado'>APROVADO</p>" : "<p class='reprovado'>REPROVADO</p>";
      $matStatus = $matMED > 70 ? "<p class='aprovado'>APROVADO</p>" : "<p class='reprovado'>REPROVADO</p>";
      $ingStatus = $ingMED > 70 ? "<p class='aprovado'>APROVADO</p>" : "<p class='reprovado'>REPROVADO</p>";
      $espStatus = $espMED > 70 ? "<p class='aprovado'>APROVADO</p>" : "<p class='reprovado'>REPROVADO</p>";

      boletim($pt1, $pt2, $ptMED, $mat1, $mat2, $matMED, $ing1, $ing2, $ingMED, $esp1, $esp2, $espMED, $ptStatus, $matStatus, $ingStatus, $espStatus);
    ?> 

    <div class="nav">
      <a href="/">VOLTAR</a>
      <a href="">CÓDIGO FONTE DESTE SITE</a>
      <a href="https://redwars22.github.io/Portfolio/">MAIS PROJETOS</a>
    </div>
    <p>Criado por André Pereira usando HTML, PHP e CSS. Hospedado no servidor Replit.</p>
    </center>
  </body>
</html>