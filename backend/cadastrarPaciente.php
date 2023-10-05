<?php
    include("conexao.php");

    $nomePessoa = "";
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);
		$nomePessoa = $dados->pessoa;
	}

    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
	
	$sql = "select * from tb_paciente where nm_paciente = '" . $nomePessoa . "';";
	
	$result = $conn->query($sql);

	if ($result->rowCount() > 0) {
		echo "já existe uma pessoa com este nome";
	} else {
        //Falta completar os outros dados
		$sql = "insert into tb_paciente (nm_paciente, nr_cpf, dt_cadastro, dt_nascimento, nm_email, nr_telefone, nm_senha, nm_foto_perfil) VALUES ('". $nomePessoa ."', nr_cpf, dt_cadastro, dt_nascimento, nm_email, nr_telefone, nm_senha, nm_foto_perfil);";
		$conn->exec($sql);
		
		echo "funciono";
	}

    $conn = null;
?>