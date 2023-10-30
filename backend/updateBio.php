<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$emailpsicologo = $dados->email;
		$biopsicologo = $dados->bio;
	}

	$sql = "select * from tb_psicologo where nm_email = '$emailpsicologo';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $sqli = "update tb_psicologo SET ds_apresentacao = '$biopsicologo'
		WHERE nm_email = '$emailpsicologo';";

        $conn->query($sqli);

		echo json_encode(['response' => "Dados Atualizados com sucesso"]);
	} else {
		echo json_encode(['response' => "Algo deu errado"]);
	}
	
    $conn->close();
?>