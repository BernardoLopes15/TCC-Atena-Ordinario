<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$idPsicologo = $dados->id;
	}

	$sql = "select * from tb_psicologo where cd_psicologo = '$idPsicologo';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$resposta = array("nome" => $row["nm_psicologo"], "email" => $row["nm_email"], "cpf" => $row["nr_cpf"], 
			"dataNascimento" => $row["dt_nascimento"], "telefone" => $row["nr_telefone"], "bio" => $row["ds_apresentacao"],"especialidade" => $row["nm_area_atuacao"], "localizacao" => $row["nm_localizacao"] );
		}

		echo json_encode(['response' => $resposta]);
	} else {
		echo json_encode(['response' => "Não encontrado"]);
	}

    $conn->close();
?>