<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$emailpsicologo = $dados->email;
        $nomepsicologo = $dados->nome;
        $telefonepsicologo = $dados->telefone;
        $dataNascimentopsicologo = $dados->dataNascimento;
        $senhapsicologo = $dados->senha;
		$cpfpsicologo = $dados->cpf;
	}

	$sql = "select * from tb_psicologo where nr_cpf = '$cpfpsicologo';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $sqli = "update tb_psicologo SET nm_psicologo = '" . $nomepsicologo . "', nm_email = '" . $emailpsicologo . "', dt_nascimento = '" . $dataNascimentopsicologo . "', nr_telefone = '" . $telefonepsicologo . "' ,nm_email = '$emailpsicologo'
		WHERE nr_cpf = '$cpfpsicologo';";

        $conn->query($sqli);

		echo json_encode(['response' => "Sucesso"]);
	} else {
		echo json_encode(['response' => "Algo deu errado"]);
	}
	
    $conn->close();
?>