<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$idPessoa = $dados->id;
	}

	$sql = "select * from tb_disponibilidade where fk_cd_psicologo = '$idPessoa';";

	try{
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				$listaDados[] = ["dia" => $row["id_dia"], "dtInicio" =>  $row["hr_inicio"], "dtTermino" => $row["hr_termino"]];
			}

			echo json_encode(['response' => $listaDados]);
		} else {
			echo json_encode(['response' => false]);
		}
	} catch (Exception $e){
		echo json_encode(['response' => false]);
	}

    $conn->close();
?>