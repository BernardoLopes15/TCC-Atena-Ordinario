<?php
    include("conexao.php");

	$nomePessoa = "";

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);
		$nomePessoa = $dados->nome;
	}

	$sql = "select * from tb_psicologo where nm_psicologo LIKE '%$nomePessoa%';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		foreach ($conn->query($sql) as $row) {
			$psicologos[] = $row;
		}
		
		echo json_encode(['response' => $psicologos]);
	} else {
		echo json_encode(['response' => false]);
	}

    $conn->close();
?>