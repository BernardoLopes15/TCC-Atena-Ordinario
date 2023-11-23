<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$cpfpaciente = $dados->cpf;
	}

	$sql = "select * from tb_paciente where nr_cpf = '$cpfpaciente';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $sqli = "DELETE FROM tb_paciente WHERE nr_cpf = '$cpfpaciente' ;";

        $conn->query($sqli);

		echo json_encode(['response' => "Sucesso"]);
	} else {
		echo json_encode(['response' => "Algo deu errado"]);
	}
	
    $conn->close();
?>