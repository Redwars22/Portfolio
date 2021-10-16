<?php
    /*$horarios = "05:00 06:10 07:20 08:30 09:40 10:50 12:00 13:10 14:20 15:30";

    echo "<h2>Dias úteis</h2>";
    echo $horarios;*/

    class LinhaOnibus 
    {
        private $codigoLinha;

        public function __construct()
        {

        } 
    }

    //$onibus = new LinhaOnibus();

    $codigo = $_POST['linhaNumero'];
    echo $codigo;
    $onibus = new LinhaOnibus($codigo);
?>