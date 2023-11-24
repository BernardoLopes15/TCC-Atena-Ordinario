<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$cd_cliente = $dados->id;
		$descricao = $dados->ds_descricao;
		$cd_psicologo = $dados->id_psicologo;
	}

	try{
		$sqli = "insert into tb_consulta (ds_consulta, dt_consulta, hr_consulta, fk_cd_paciente, fk_cd_psicologo)
					values ('$descricao', '$diaConsulta', '$hrconsulta', '$cd_cliente', '$cd_psicologo');";

		$result = $conn->query($sqli);

		echo json_encode(['response' => true]);
	} catch (Exception $e){
		echo json_encode(['response' => false]);
	}

    $conn->close();
?>