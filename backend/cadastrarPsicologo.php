<?php
    include("conexao.php");

    $nomePessoa = "";
	$cpf = "";
	$telefone  = "";
	$email = "";
	$dtNascimento= "";
	$senha = "";
	$sql = "";
	$bio = "";
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$nomePessoa = $dados->nome;
		$cpf = $dados->CPF;
		$telefone = $dados->telefone;
		$email = $dados->email;
		$dtNascimento = $dados->dataNascimento;
		$senha = $dados->senha;
		$bio = $dados->bio;
	}

	$sql = "select * from tb_psicologo where nr_cpf = '" . $cpf . "';";
	
	echo json_encode(["response" => [$nomePessoa, $cpf, $telefone, $email, $dtNascimento, $senha, $bio]]);
	return;

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		echo "já existe uma pessoa com este nome";
		echo json_encode(['response' => "teste"]);
	} else {
        //Falta completar os outros dados
		$sqli = "insert into tb_psicologo (nm_psicologo, nr_cpf, nr_telefone, nm_email, dt_cadastro, dt_nascimento, nm_senha, ds_apresentacao, st_e_psi, st_crp) values('$nomePessoa', '$cpf', '$telefone','$email', date(now()), '$dtNascimento', '$senha','$bio',1,1);";
		$conn->query($sqli);
		echo json_encode(['response' => "teste"]);
	}

    $conn->close();
?>