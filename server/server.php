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

// Set variables for response if could save to MySQL or not
$savedQuestion = $savedUsers = false;

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
  } else {
    $email = null;
  }

  // validate name
  if (!preg_match("/^([a-zA-Z ]){2,30}$/i", $name)) {
    $name = null;
  }

  // validate phone
  if (!preg_match("/^\+?[0-9]+$/", $phone)) {
    $phone = null;
  }

  // validagte company name
  if (!preg_match("/^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/i", $company_name)) {
    $company_name = null;
  }

  if ($email === null || $name === null || $phone === null || $company_name === null) {
    $savedUsers = null;
  } else {
    // Save user info to MySQL
    $userInfo = 'INSERT question_user(name, email, phone, company_name) VALUES(:name, :email, :phone, :company_name)';
    $saveUserInfo = $pdo->prepare($userInfo);
    $saveUserInfo->execute(['name' => $name, 'email' => $email, 'phone' => $phone, 'company_name' => $company_name]);

    $lastUserID = $pdo->lastInsertId();

    $savedUsers = true;
  }

  // Get questions and answers and save it to MySQL
  foreach ($post['questions'] as $questions) {
    // Save to MySQL
    $question = $questions['question'];

    if (!isset($questions['text'])) {
      $answer = $questions['answer'];
    } else {
      $answer = $questions['answer'] . ', ' . $questions['text'];
    }

    $sql = 'INSERT questions(question, answer, user_id) VALUES(:question, :answer, :user_id)';
    $saveValues = $pdo->prepare($sql);
    $saveValues->execute(['question' => $question, 'answer' => $answer, 'user_id' => $lastUserID]);

    $savedQuestion = true;
  }

  $response;
  if ($savedQuestion && $savedUsers) {
    $response = ['response' => 'success'];
  } else {
    $response = ['response' => 'failed'];
  }

  echo json_encode($response);
}