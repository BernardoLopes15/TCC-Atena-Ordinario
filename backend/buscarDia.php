<?php
    include("conexao.php");

    $nomePessoa = "";
	$cpf = "";
	$telefone  = "";
	$email = "";
	$dtNascimento= "";
	$senha = "";
	$sql = "";
	$bio = "";

	$sql = "select * from tb_psicologo;";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		foreach ($conn->query($sql) as $row) {
			$psicologos[] = $row;
		}
		
		echo json_encode(['response' => $psicologos]);
	} else {
		echo json_encode(['response' => "teste"]);
	}

    $conn->close();
?>