<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$idConsulta = $dados->id;
	}

	try{
        $sqli = "UPDATE tb_consulta SET id_realizada = 'c' WHERE cd_consulta = '$idConsulta' and id_realizada = 'p';";

        $conn->query($sqli);

		echo json_encode(['response' => true]);
	} catch (Exception $e) {
		echo json_encode(['response' => false]);
	}
	
    $conn->close();
?>