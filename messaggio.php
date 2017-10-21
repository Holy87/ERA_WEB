<?php
$to = "info@eraascensori.it";
$from = $_POST["mail"];
$name = $_POST["nome"];
$message = $_POST["messaggio"];
$subj_text = 'Hai un nuovo messaggio da un visitatore';

$message.= "\n\r *Questo messaggio è stato inviato usando il form di contatto dal sito web.";

$headers = "MIME-Version: 1.0 \r\n";
$headers .= "Content-type:text/html;charset=UTF-8 \r\n";
$headers .= "From: ".$name." <sito@eraascensori.it> \r\n";
$headers .= "Reply-To: ".$name." <".$from."> \r\n";

if(mail($to,$subj_text,$message,$headers)) {
    echo "ok";
} else {
    echo "error";
}