<?php
  if (!empty($_POST['send']) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $site_name = 'shyichuk.com';
    $from = 'support@shyichuk.com';

    $to = 'oks.melnuk@gmail.com'; // Кому
    $subject = 'Заявка з сайту '.$site_name; // Тема повідомлення
    
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $specialist = $_POST['specialist'];
    $city = $_POST['city'];
    $comment = $_POST['comment'];
    $recommendation = $_POST['recommendation'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($name))
    {
      $name = test_input($name);
      $comment = test_input($comment);

      $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
      $headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
      $headers .= "From: ".$site_name." <". $from .">\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

      $message = '<p>Від: <b>'.$name.'</b></p>';
      $message .= '<p>Номер телефону: '.$phone.'</p>';
      $message .= '<p>Email: <a href="mailto:'.$email.'">'.$email.'</a></p>';
      $message .= '<br />';
      $message .= '<p>Спеціаліст: '.$specialist.'</p>';
      $message .= '<p>Місто: '.$city.'</p>';
      $message .= '<br />';
      $message .= '<p>Коментар: '.$comment.'</p>';
      $message .= '<br />';

      if (!empty($recommendation)) {
        $message .= '<p>Я за рекомендацією: '.$recommendation.'</p>';
      }

      mail( $to, $subject, $message, $headers );
    }
  }
        
  function test_input ($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
