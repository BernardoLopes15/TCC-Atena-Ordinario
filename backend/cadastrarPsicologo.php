<?php
    include("conexao.php");

    $nomePessoa = "";
	$cpf = "";
	$telefone  = "";
	$email = "";
	$dtNascimento= "";
	$senha = "";
	$sql = "";
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$nomePessoa = $dados->nome;
		$cpf = $dados->cpf;
		$telefone = $dados->telefone;
		$email = $dados->email;
		$dtNascimento = $dados->dtNascimento;
		$senha = $dados->senha;
	}
	
	$sql = "select * from tb_psicologo where nr_cpf = '" . $cpf . "';";
	

	$result = $conn->query($sql);

	if ($result->rowCount() > 0) {
		echo "já existe uma pessoa com este nome";
	} else {
        //Falta completar os outros dados
		$sqli = "insert into tb_psicologo (nm_psicologo, nr_cpf, nr_telefone, nm_email, dt_cadastro, dt_nascimento, nm_senha) values('$nomePessoa', '$cpf', '$telefone','$email', date(now()), '$dtNascimento', '$senha');";
		$conn->exec($sqli);
		echo "funciono";
	}

    $conn = null;
?>