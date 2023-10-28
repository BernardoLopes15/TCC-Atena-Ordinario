<?php
	include("conexao.php");

	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$email = $dados->email;
		$senha = $dados->senha;
	}

    $sql = "select * from tb_psicologo where nm_email = '$email' and nm_senha = '$senha';";

	try{
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				$listaProdutos[] = $row;
			}

			echo json_encode(['response' => [$listaProdutos[0]['nm_email'], "psicologo", $listaProdutos[0]['nm_psicologo']]]);

		} else {
			$sql = "select * from tb_paciente where nm_email = '$email' and nm_senha = '$senha';";

			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					$listaProdutos[] = $row;
				}

				echo json_encode(['response' => [$listaProdutos[0]['nm_email'], "paciente", $listaProdutos[0]['nm_paciente']]]);
			}
		}
	} catch (Exception $e){
		echo json_encode(['response' => false]);
	}


    $conn->close();
?>