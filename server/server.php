<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, DELETE, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

$post = json_decode(file_get_contents("php://input"), true);

$host = 'localhost';
$user = 'mohammed';
$password = 'root1234';
$dbname = 'nxte_kampanj';

// Set DNS
$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;

// create PDO instance
$pdo = new PDO($dsn, $user, $password);

// set variables
$name = $company_name = $phone = $email = $text = null;

$question = $answer = $lastUserID = null;

if (!empty($post['questions'])) {
  // Get user data first and save it to MySQL
  foreach ($post['user'] as $key => $value) {
    if ($key == 'name') $name = $value;
    if ($key == 'company_name') $company_name = $value;
    if ($key == 'phone') $phone = $value;
    if ($key == 'email') $email = $value;
  }

  // ************* Validate user data *************

  // remove illegal characters from email
  $email = filter_var($email, FILTER_SANITIZE_EMAIL);

  // Validate email
  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'email is valid';
  } else {
    $email = null;
    echo 'email is not valid!!!';
  }

  // validate name
  if (!preg_match("/^([a-zA-Z ]){2,30}$/i", $name)) {
    $name = null;
    echo 'name invalid!!! <br/>';
  }

  // validate phone
  if (!preg_match("/^\+?[0-9]+$/", $phone)) {
    $phone = null;
    echo 'phone number invalid!!!! <br/>';
  }

  // validagte company name
  if (!preg_match("/^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/i", $company_name)) {
    $company_name = null;
    echo 'företagsnamn invalid!!!';
  }


  if ($email === null || $name === null || $phone === null || $company_name === null) {
    echo 'kan inte spara!';
  } else {

    // Save user info to MySQL
    $userInfo = 'INSERT users(name, email, phone, company_name) VALUES(:name, :email, :phone, :company_name)';
    $saveUserInfo = $pdo->prepare($userInfo);
    $saveUserInfo->execute(['name' => $name, 'email' => $email, 'phone' => $phone, 'company_name' => $company_name]);

    // Save last user id in variable so i can use it in user_id in questions
    $lastUserID = $pdo->lastInsertId();

    echo 'saved userInfo to mySQL';
  }


  // Get questions and answers and save it to MySQL
  foreach ($post['questions'] as $questions) {
    // Save to MySQL
    $question = $questions['question'];
    $answer = $questions['answer'] . ', ' . $questions['text'];

    $sql = 'INSERT questions(question, answer, user_id) VALUES(:question, :answer, :user_id)';
    $saveValues = $pdo->prepare($sql);
    $saveValues->execute(['question' => $question, 'answer' => $answer, 'user_id' => $lastUserID]);

    echo 'Saved to MySQL';
  }
}