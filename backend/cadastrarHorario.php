<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);
		$idPessoa = $dados->cd_psicologo;
	}
	
	$sql = "select * FROM tb_disponibilidade WHERE fk_cd_psicologo = '$idPessoa';";

	try{
		$result = $conn->query($sql);
		if($result->num_rows > 0){
			$sql = "DELETE FROM tb_disponibilidade WHERE fk_cd_psicologo = '$idPessoa';";
			$conn->query($sql);

			foreach ($dados->consulta as $arr) {
				$sql = "insert into tb_disponibilidade (id_dia, hr_inicio, hr_termino, fk_cd_psicologo) values('$arr->dia', '$arr->dtInicio', '$arr->dtTermino', '$idPessoa');";
				$conn->query($sql);
			}
		} else{
			foreach ($dados->consulta as $arr) {
				$sql = "insert into tb_disponibilidade (id_dia, hr_inicio, hr_termino, fk_cd_psicologo) values('$arr->dia', '$arr->dtInicio', '$arr->dtTermino', '$idPessoa');";
				$conn->query($sql);
			}
		}

		echo json_encode(['response' => "funciono"]);
	} catch (Exception $e) {
		echo json_encode(['response' => false]);
	}

    $conn->close();
?>