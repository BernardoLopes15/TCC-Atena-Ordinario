<?php
	include("conexao.php");

	$dados = array();
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$email = $dados->email;
		$senha = $dados->senha;
	}

    echo "Seu e-mail é " . $email . " e sua senha é " . $senha;

    $conn->close();
?>