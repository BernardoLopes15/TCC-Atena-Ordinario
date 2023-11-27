<?php
    include("conexao.php");

	$idPsicologo = "";

	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);
		$idPsicologo = $dados->id;
	}

	$sql = "select * from tb_consulta where fk_cd_psicologo = '$idPsicologo';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		foreach ($conn->query($sql) as $row) {
			$consultas[] = $row;
		}
		
		echo json_encode(['response' => $consultas]);
	} else {
		echo json_encode(['response' => false]);
	}

    $conn->close();
?>