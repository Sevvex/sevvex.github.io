<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    
    $to = "atzen@post.com";
    $subject = "Neue Kontaktanfrage von $name";
    $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
    $headers = "From: $email";

    
    if (mail($to, $subject, $body, $headers)) {
        echo "Danke! Ihre Nachricht wurde gesendet.";
    } else {
        echo "Entschuldigung, es gab ein Problem beim Senden Ihrer Nachricht.";
    }
}
?>
