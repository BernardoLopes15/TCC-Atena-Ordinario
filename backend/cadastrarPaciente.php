<?php
    include("conexao.php");

    $dados = array();
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);
	}

	//echo $dados->nome . " | " . $dados->cpf . " | " . $dados->telefone . " | " . $dados->senha . " | " . $dados->dataNascimento . " | " . $dados->email;
	
	$sql = "select * from tb_paciente where nr_cpf = '" . $dados->cpf . "';";
	
	$result = $conn->query($sql);

	if ($result->rowCount() > 0) {
		echo "já existe uma pessoa com este cpf";
	} else {
        //Falta completar os outros dados
		$sql = "insert into tb_paciente (nm_paciente, nr_cpf, dt_cadastro, dt_nascimento, nm_email, nr_telefone, nm_senha, nm_foto_perfil) VALUES (
			'". $dados->nome ."', 
			'". $dados->cpf ."', 
			date(now()), 
			'". $dados->dataNascimento ."', 
			'". $dados->email ."', 
			'". $dados->telefone ."', 
			'". $dados->senha ."', 
			'". $dados->imagem ."');";
		$conn->exec($sql);
		
		echo "Dados cadastrados com sucesso";
	}

    $conn = null;
?>