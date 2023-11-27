<?php

    include("conexao.php");

	if(isset($_FILES['image'])){
		$nomeArquivo = $_FILES['image']['name'];
		$tmp_nomeArquivo = $_FILES['image']['tmp_name'];
		$novoCaminho = "C:/Users/choki/Downloads/USBWebserver v8.6/root/TCC-Atena-Ordinario/imagens/" . $nomeArquivo;


		if(move_uploaded_file($tmp_nomeArquivo, $novoCaminho)){
			echo json_encode(['imagePath' => "http://localhost:8080/TCC-Atena-Ordinario/imagens/" . $nomeArquivo]);
		}
		else{
			echo "Falha ao fazer o upload do arquivo " . $nomeArquivo . "!";
		}
	}
	else{
		echo "Nenhum arquivo selecionado";
	}

?>