<?php
echo "conexão";
header("Access-Control-Allow-Origin: *");
/*include("conexao.php");

echo $conexao->query('select database()')->fetchColumn();*/

$data = [

        [
            'mensagem'=>'bom dia', 
            'conteudo'=>'donuts'
        ],
        [
            'mensagem'=>'felicidade de macarrão', 
            'conteudo'=>'azeitona'
        ],
        [
            'mensagem'=>'garimpo ilegal', 
            'conteudo'=>'jabuticaba'
        ]

];