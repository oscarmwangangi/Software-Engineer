<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'mwangangioscar2016@gmail.com';
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    $email_subject = "Contact Form: " . $subject;
    $email_body = "You have received a new message from the contact form on your website.<br><br>";
    $email_body .= "<strong>Name:</strong> " . $name . "<br>";
    $email_body .= "<strong>Email:</strong> " . $email . "<br>";
    $email_body .= "<strong>Message:</strong><br>" . nl2br($message) . "<br>";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
} else {
    echo 'error';
}
?>
