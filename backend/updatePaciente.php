<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$emailpaciente = $dados->email;
        $nomepaciente = $dados->nome;
        $telefonepaciente = $dados->telefone;
        $dataNascimentopaciente = $dados->dataNascimento;
        $senhapaciente = $dados->senha;
		$cpfpaciente = $dados->cpf;
	}

	echo json_encode($dados);

	$sql = "select * from tb_paciente where nr_cpf = '$cpfpaciente';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $sqli = "update tb_paciente SET nm_paciente = '" . $nomepaciente . "', nm_email = '" . $emailpaciente . "', dt_nascimento = '" . $dataNascimentopaciente . "', nr_telefone = '" . $telefonepaciente . "' ,nm_email = '$emailpaciente'
		WHERE nr_cpf = '$cpfpaciente';";

        $conn->query($sqli);

        //Precisa atualizar o token do paciente e formatar a data para o update

		echo json_encode(['response' => "Sucesso"]);
	} else {
		echo json_encode(['response' => "Algo deu errado"]);
	}
	
    $conn->close();
?>