<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Create an instance; passing `true` enables exceptions

include("conexao.php");

$dados = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$mail = new PHPMailer(true);

	try {
		//Server settings
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'root';                     //SMTP username
		$mail->Password   = 'usbw';                               //SMTP password
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		//Recipients
		$mail->setFrom('from@example.com', 'Mailer');
		$mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
		$mail->addAddress('ellen@example.com');               //Name is optional
		$mail->addReplyTo('info@example.com', 'Information');
		$mail->addCC('cc@example.com');
		$mail->addBCC('bcc@example.com');

		//Attachments
		$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
		$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = 'Here is the subject';
		$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}

	$valorRecebido = file_get_contents("php://input");
	$dados = json_decode($valorRecebido);

	$nome = $dados->nome;
	$cpf = $dados->cpf;
	$dataNascimento = $dados->dataNascimento;
	$email = $dados->email;
	$telefone = $dados->telefone;
	$senha = $dados->senha;
	$imagem = $dados->imagem;
}

$sql = "SELECT * FROM tb_paciente WHERE nr_cpf = '" . $cpf . "';";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
} else {
	$sql = "INSERT INTO tb_paciente (nm_paciente, nr_cpf, dt_cadastro, dt_nascimento, nm_email, nr_telefone, nm_senha, nm_foto_perfil) VALUES (
			'$nome', 
			'$cpf', 
			date(NOW()),
			'$dataNascimento', 
			'$email', 
			'$telefone', 
			'$senha', 
			'$imagem');";

	if ($conn->query($sql) === true) {
		echo "Cadastrada com sucesso!";
	}
}

$conn->close();
