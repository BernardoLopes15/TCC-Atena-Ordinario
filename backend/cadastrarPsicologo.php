<?php
    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\SMTP;
    // use PHPMailer\PHPMailer\Exception;

	// require'./mailer/vendor/autoload.php';
    include("conexao.php");
	

    $nomePessoa = "";
	$cpf = "";
	$telefone  = "";
	$email = "";
	$dtNascimento= "";
	$senha = "";
	$sql = "";
	$bio = "";

	// $mail = new PHPMailer(true);

	// try {
	// 	$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
	// 	$mail->isSMTP();                                            //Send using SMTP
	// 	$mail->Host       = 'localhost:3306';                     //Set the SMTP server to send through
	// 	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	// 	$mail->Username   = 'root';                     //SMTP username
	// 	$mail->Password   = 'root';                               //SMTP password
	// 	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	// 	$mail->Port       = 3306;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`	

	// } catch (Exception $e) {
	// 	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

	// }
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$nomePessoa = $dados->nome;
		$cpf = $dados->CPF;
		$telefone = $dados->telefone;
		$email = $dados->email;
		$dtNascimento = $dados->dataNascimento;
		$senha = $dados->senha;
		$bio = $dados->bio;
	}

	$sql = "select * from tb_psicologo where nr_cpf = '" . $cpf . "';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		echo json_encode(['response' => "já existe uma pessoa com este nome"]);
	} else {
        //Falta completar os outros dados
		$sqli = "insert into tb_psicologo (nm_psicologo, nr_cpf, nr_telefone, nm_email, dt_cadastro, dt_nascimento, nm_senha, ds_apresentacao, st_e_psi, st_crp) values('$nomePessoa', '$cpf', '$telefone','$email', date(now()), '$dtNascimento', '$senha','$bio',1,1);";
		$conn->query($sqli);
		echo json_encode(['response' => "teste"]);
	}

    $conn->close();
?>