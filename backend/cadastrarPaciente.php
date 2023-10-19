<?php
	include("conexao.php");

	$dados = array();
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$nome = $dados->nome;
		$cpf = $dados->cpf;
		$dataNascimento = $dados->dataNascimento;
		$email = $dados->email;
		$telefone = $dados->telefone;
		$senha = $dados->senha;
		$imagem = $dados->imagem;
	}

	echo json_encode($cpf . " | " . $nome);
	

	/*$sql = "SELECT * FROM tb_paciente WHERE nr_cpf = '" . $cpf . "';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		echo "Já existe uma pessoa com este CPF.";
	} else {
		$sql = "INSERT INTO tb_paciente (nm_paciente, nr_cpf, dt_cadastro, dt_nascimento, nm_email, nr_telefone, nm_senha, nm_foto_perfil) VALUES (
			'$nome', 
			'$cpf', 
			date(NOW()),
			'$dataNascimento', 
			'$email', 
			'$telefone', 
			'$senha', 
			'$imagem');";

		if ($conn->query($sql) === true) {
			echo "Dados cadastrados com sucesso";
		} else {
			echo "Erro ao cadastrar os dados: " . $conn->error;
		}
	}*/

	$conn->close();
?>
