<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include('./conexao.php');

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';


    $nomePessoa = "";
	$cpf = "";
	$telefone  = "";
	$email = "";
	$dtNascimento= "";
	$senha = "";
	$sql = "";
	$bio = "";
	$areaAtuacao = "";
	$localizacao = "";
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$nomePessoa = $dados->nome;
		$cpf = $dados->CPF;
		$telefone = $dados->telefone;
		$email = $dados->email;
		$dtNascimento = $dados->dataNascimento;
		$senha = $dados->senha;
		$imagem = $dados->imagePath;
		$localizacao = $dados->localizacao;
		$areaAtuacao = $dados->areaAtuacao;
		$bio = $dados->bio;

		echo $imagem;
		echo $nomePessoa;

		$chave = uniqid(rand(), true);
		$mail = new PHPMailer(true);

	try {
		//Server settings
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'tccatena729@gmail.com';                     //SMTP username
		$mail->Password   = 'uamo hove xphi rzmu';                               //SMTP password
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		//Recipients
		$mail->setFrom('tccatena@gmail.com', 'Atena');
		$mail->addAddress($email);     //Add a recipient

		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = 'Confirmar E-mail';
		$mail->Body    = "<b> Primeiramente obrigado por nos ajudar a melhorar o nosso mundo, por favor confirme seu e-mail clicando no link abaixo para continuar o cadastro.</b> <br/> <a href='http://localhost:8080/TCC-Atena-Ordinario/backend/validarEmailPsicologo.php?chave=$chave'> Clique aqui!</a>";
		$mail->AltBody = "Primeiramente obrigado por nos ajudar a melhorar o nosso mundo, por favor confirme seu e-mail clicando no link abaixo para continuar o cadastro. \n\n http://localhost:8080/TCC-Atena-Ordinario/backend/validarEmailPsicologo.php?chave=$chave Clique aqui!";

		$mail->send();
		// echo 'Message has been sent';
	} catch (Exception $e) {
		// echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}

	try {
		//Server settings
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'tccatena729@gmail.com';                     //SMTP username
		$mail->Password   = 'uamo hove xphi rzmu';                               //SMTP password
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		//Recipients
		$mail->setFrom('tccatena@gmail.com', 'Atena');
		$mail->addAddress('tccatena@gmail.com');     //Add a recipient

		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = 'Validar novo(a) psicólogo(a)';
		$mail->Body    = "<b>Validar o(a) psicólogo(a) com o CPF $cpf e E-mail: $email </b>";

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}


	}

	$sql = "select * from tb_psicologo where nr_cpf = '" . $cpf . "';";

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		echo json_encode(['response' => "já existe uma pessoa com este nome"]);
	}  else {

		$sqli = "insert into tb_psicologo (nm_psicologo, nr_cpf, nr_telefone, nm_email, dt_cadastro, dt_nascimento, nm_foto_perfil, nm_area_atuacao, nm_localizacao, nm_senha, ds_apresentacao, st_e_psi, st_crp, cd_id, acesso)
		 values('$nomePessoa', '$cpf', '$telefone','$email', date(now()), '$dtNascimento', '$imagem', '$areaAtuacao', '$localizacao', '$senha','$bio', 0 , 0 , '$chave', 0);";
		$conn->query($sqli);
		echo json_encode(['response' => "Cadastrado"]);
	}

    $conn->close();
?>