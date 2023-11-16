<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);
		$idPessoa = $dados->cd_psicologo;
	}

	$sqli = "DELETE FROM tb_disponibilidade WHERE fk_cd_psicologo = '$idPessoa';";
	$conn->query($sql);

	/*
	try{
		$sqli = "DELETE FROM tb_disponibilidade WHERE fk_cd_psicologo = '$idPessoa'";
		$conn->query($sql);
		
		$sql = "insert into";

		try{
			
		} catch (Exception $e){
			echo json_encode(['response' => false]);
		}
	} catch (Exception $e){
		echo json_encode(['response' => false]);
	}
	*/

	echo json_encode("da");

    $conn->close();
?>