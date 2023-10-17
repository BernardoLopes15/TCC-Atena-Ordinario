<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$nomePessoa = $dados->nome;
	}

	$sql = "select * from tb_psicologo where nm_psicologo = '" . $nomePessoa . "';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		foreach ($conn->query($sql) as $row) {
			$resposta[] = $row;
		}

		echo json_encode(['response' => $resposta]);
	} else {
		echo json_encode(['response' => "teste"]);
	}

    $conn->close();
?>