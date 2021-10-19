<html>
  <head>
    <title>📐️ TrigonPHP</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <center>
    <header>
      <img height="128" width="128" src="https://cdn3.iconfinder.com/data/icons/education-science-vol-2-1/512/z6-math_maths_formula_mathematics-256.png">
      <h1>TrigonPHP</h1>
      <a href="/">VOLTAR</a>
    </header>
    <?php

    $number = $_POST['number'];

    function convert($num){
      return deg2rad($num);  
    }

    function getSin($num){
      return sin($num);
    }

    function getCosin($num){
      return cos($num);
    }

    function getTangent($num){
      return tan($num);
    }

    $sqroot = sqrt($number);
    $binary = decbin($number);
    $octal = decoct($number);
    $hexa = strtoupper(dechex($number));

    $orig_number = $number;
    $number = convert($number);

    $sin = getSin($number);
    $cos = getCosin($number);
    $tan = getTangent($number);

    echo "<h3>NÚMERO INFORMADO: $orig_number</h3>";
    echo "ℹ️ Eis aqui informações sobre esse número:"."<br><br><div class='info'>";
    printf("📐️ Seno: %.2f"."<br>", $sin);
    printf("📐️ Cosseno: %.2f"."<br>", $cosin);
    printf("📐️ Tangente: %.2f"."<br>", $tan);
    printf("📐️ Radianos: %.2f"."<br>", $number);
    printf("Raíz quadrada: %.1f"."<br>", $sqroot);
    printf("Binário: %s"."<br>", $binary);
    printf("Octal: %s"."<br>", $octal);
    printf("Hexadecimal: %s"."<br>", $hexa);
    echo "</div>";

    if($orig_number == 90){
      printf("<p style='color: red;'>NÃO EXISTE TANGENTE DE 90</p>");
    }

    ?>
  </center>
  </body>
</html>