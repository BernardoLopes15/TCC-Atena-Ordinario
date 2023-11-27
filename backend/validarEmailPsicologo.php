<?php 

include("./conexao.php");

// echo "<h1> Teste <h1/>";

$chave = filter_input(INPUT_GET, "chave", FILTER_SANITIZE_STRING);
// echo $chave;



if(!empty($chave)){


    $sql = "UPDATE tb_psicologo SET acesso = 1 where cd_id = '$chave' ";

    $conn->query($sql);

    if($conn->query($sql)){
    echo "Cadastro feito com sucesso";

 }

 header('Location: https://tccatena.com/');
//  die();

} else {
    echo " <script> alert('E-mail inválido, tente outro'); </script>"; 
    // header('http://localhost/login');
}


?> 