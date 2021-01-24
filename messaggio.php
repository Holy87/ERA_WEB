<?php
header('Access-Control-Allow-Origin: http://www.eraascensori.it');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$from = $_POST["email"];
$name = $_POST["name"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$subject = $_POST["subject"];

switch ($subject) {
    case "AST":
        $to = "assistenza@eraascensori.it";
        $subj_text = "Richiesta di assistenza";
        break;
    case "COM":
        $to = "commerciale@eraascensori.it";
        $subj_text = "Richiesta di contatto commerciale";
        break;
    default:
        $to = "info@eraascensori.it";
        $subj_text = ($subject == "INF" ? "Richiesta di informazioni" : "Hai un messaggio da un visitatore");
        break;
}

$recaps = "Recapiti:\nEmail: <a href=\"".$from."\">".$from."</a>";
if (isset($phone)) {
    $recaps = $recaps."\nTelefono: ".$phone;
}

$signature = "*Questo messaggio è stato inviato usando il form di contatto dal sito web.";

$body = "<html><body>
<h1>Messaggio:</h1>
<p>$message</p>
<p>$recaps</p>
<hr>
<p>$signature</p>
</body></html>";
$headers = "MIME-Version: 1.0 \r\n";
$headers .= "Content-type:text/html;charset=UTF-8 \r\n";
$headers .= "From: $name <sito@eraascensori.it> \r\n";
$headers .= "Reply-To: ".$name." <".$from."> \r\n";

if(mail($to,$subj_text,$body,$headers)) {
    $outp = json_encode(['ok' => true]);
} else {
    $outp = json_encode(['ok' => false]);
}
echo "result($outp)";