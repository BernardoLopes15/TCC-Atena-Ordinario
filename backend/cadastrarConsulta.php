<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$descricao = $dados->descricaoConsulta;
		$cd_cliente = $dados->id;
		$cd_psicologo = $dados->psicologo->cd_psicologo;
		$diaConsulta = $dados->dataSelecionada;
		$hrconsulta = $dados->horaSelecionada;
	}

	try{
		$sqli = "insert into tb_consulta (ds_consulta, dt_consulta, hr_consulta, fk_cd_paciente, fk_cd_psicologo)
					values ('$descricao', '$diaConsulta', '$hrconsulta', '$cd_cliente', '$cd_psicologo');";

		$result = $conn->query($sqli);

		echo json_encode(['response' => "FUNCIONO"]);
	} catch (Exception $e){
		echo json_encode(['response' => $e]);
	}

    $conn->close();
?>