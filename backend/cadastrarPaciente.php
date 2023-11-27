<?php



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include('./conexao.php');

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';



$dados = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {


	$valorRecebido = file_get_contents("php://input");
	$dados = json_decode($valorRecebido);

	$nome = $dados->nome;
	$cpf = $dados->cpf;
	$dataNascimento = $dados->dataNascimento;
	$email = $dados->email;
	$telefone = $dados->telefone;
	$senha = $dados->senha;
	$imagem = $dados->imagePath;



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
		$mail->Body    = "<b> Prezada paciente, por favor confirme seu e-mail clicando no link abaixo para continuar o cadastro.</b> <br/> <a href='http://localhost:8080/TCC-Atena-Ordinario/backend/validarEmail.php?chave=$chave'> Clique aqui!</a>";
		$mail->AltBody = "Prezada paciente, por favor confirme seu E-mail clicando no link para continuar o cadastro. \n\n http://localhost:8080/TCC-Atena-Ordinario/backend/validarEmail.php?chave=$chave Clique aqui!";

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}

	


}




$sql = "SELECT * FROM tb_paciente WHERE nr_cpf = '" . $cpf . "';";




$result = $conn->query($sql);

if ($result->num_rows > 0) {
} else {
	$sql = "INSERT INTO tb_paciente (nm_paciente, nr_cpf, dt_cadastro, dt_nascimento, nm_email, nr_telefone, nm_senha, nm_foto_perfil, cd_id, acesso) VALUES (
			'$nome', 
			'$cpf', 
			date(NOW()),
			'$dataNascimento', 
			'$email', 
			'$telefone', 
			'$senha', 
			'$imagem',
			'$chave',
			0);";

	if ($conn->query($sql) === true) {
		echo " Cadastrada com sucesso! ";
		echo $imagem;
	} else echo "Não cadastrado";
}

$conn->close();

