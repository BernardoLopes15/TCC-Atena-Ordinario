<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$idPsicologo = $dados->id;
	}

	$sql = "select * from tb_paciente where cd_paciente = '$idPsicologo';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		foreach ($conn->query($sql) as $row) {
			$resposta = $row;
		}

		echo json_encode(['response' => $resposta]);
	} else {
		echo json_encode(['response' => "Não encontrado"]);
	}

    $conn->close();
?>