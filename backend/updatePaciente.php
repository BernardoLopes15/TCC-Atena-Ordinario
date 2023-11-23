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

	if($nomepaciente != "" && $nomepaciente != null) $nome = $nomepaciente;
	if($emailpaciente != "" && $emailpaciente != null) $email = $emailpaciente;
	if($telefonepaciente != "" && $telefonepaciente != null) $telefone = $telefonepaciente;
	if($dataNascimentopaciente != "" && $dataNascimentopaciente != null) $dataNascimento = $dataNascimentopaciente;
	if($senhapaciente != "" && $senhapaciente != null) $senha = $senhapaciente;

	$sql = "select * from tb_paciente where nr_cpf = '$cpfpaciente';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
        $sqli = "update tb_paciente SET nm_paciente = '" . $nome . "', nm_email = '" . $email . "', dt_nascimento = '" . $dataNascimento . "', nr_telefone = '" . $telefone . "' ,nm_email = '$email'
		WHERE nr_cpf = '$cpfpaciente';";

        $conn->query($sqli);

		echo json_encode(['response' => "Sucesso"]);
	} else {
		echo json_encode(['response' => "Algo deu errado"]);
	}
	
    $conn->close();
?>