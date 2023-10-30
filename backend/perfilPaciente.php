<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$emailPaciente = $dados->email;
	}

	$sql = "select * from tb_paciente where nm_email = '$emailPaciente';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$resposta = array("nome" => $row["nm_paciente"], "email" => $row["nm_email"], "cpf" => $row["nr_cpf"], 
			"dataNascimento" => $row["dt_nascimento"], "telefone" => $row["nr_telefone"]);
		}

		echo json_encode(['response' => $resposta]);
	} else {
		echo json_encode(['response' => "Não encontrado"]);
	}

    $conn->close();
?>