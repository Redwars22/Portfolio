<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔢 Project Arithmo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h3>🔢 Project Αριθμο</h3>
    </header>

    <main>
        <h1 class="number">
            <?php
                $min = $_POST['limMin'];
                $max = $_POST['limMax'];

                $number = rand($min, $max);

                echo $number;
            ?>
        </h1>
    </main>

    <footer>
        <p>
            <strong>Project Arithmo</strong>, feito por André Pereira com PHP, HTML, CSS e Materialize.
        </p>
        <a 
            class="waves-effect waves-light btn yellow darken-4"
            href="https://github.com/Redwars22/Portfolio"    
        >
            CÓDIGO FONTE
        </a>
        <a 
            class="waves-effect waves-light btn yellow darken-4"
            href="/index.php"    
        >
            GERAR MAIS NÚMEROS
        </a>
    </footer>
</body>
</html>