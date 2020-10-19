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

//If get post data
if (!empty($post["body"])) {
  echo 'yes post is ok <br/>';
  var_dump($post); die();

  foreach ($post['body'] as $key => $value) {
    echo $key . ' = ' . $value;
  }

} else {
  echo 'post is not ok <br/>';
}


// $data = [
//   'body' => [
//     [
//       'a' => 'Fråga 1',
//       'a_svar' => 'svaret för 1',
//     ],
//     [
//       'b' => 'Fråga 2',
//       'b_svar' => 'svaret för 2',
//     ],
//     [
//       'c' => 'Fråga 3',
//       'c_svar' => 'svaret för 3',
//     ],
//     [
//       'd' => 'Fråga 4',
//       'd_svar' => 'Ja',
//       'd_text' => '<script>document.body.style.background = "red";</script>',
//     ],
//     [
//       'e' => 'Fråga5',
//       'e_svar' => 'svar 5',
//     ],
//     [
//       'f' => 'kontakt uppgifter ?',
//       'f_email' => 'moahmmed.motar.mm@gmail.com',
//       'f_foretagsnamn' => 'svar 6 företagsnamn',
//       'f_namn' => 'svar',
//       'f_tel' => '3216879354',
//     ]
//   ],
// ];


// if ($_POST["body"]) {
//   // echo 'this is post from vue' . $_POST[""] . '<br/>';
//   echo 'Lyckades';
// }

// // validated data
// $validatedEmail = null;
// $validateName = null;
// $validateForetagsnamn = null;
// $validateTel = null;
// $validate_d_text = $data['body'][3]['d_text'];

// // Validate data
// $email = $data['body'][5]['f_email'];
// $name = $data['body'][5]['f_namn'];
// $tel = $data['body'][5]['f_tel'];
// $foretag = $data['body'][5]['f_foretagsnamn'];

// // remove illegal characters from email
// $email = filter_var($email, FILTER_SANITIZE_EMAIL);

// // validate email
// if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
//   echo 'email is valid <br/>';
//   $validatedEmail = $email;
// } else {
//   echo 'email is invalid!!!!!!! <br/>';
//   $validatedEmail = null;
// }

// // validate name

// if (!preg_match("/^([a-zA-Z ]){2,30}$/i", $name)) {
//   $validateName = null;
//   echo 'name invalid!!! <br/>';
// } else {
//   $validateName = $name;
// }

// if (!preg_match("/^\+?[0-9]+$/", $tel)) {
//   $validateTel = null;
//   echo 'phone number invalid!!!! <br/>';
// } else {
//   $validateTel = $tel;
// }

// if (!preg_match("/^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/i", $foretag)) {
//   $validateForetagsnamn = null;
//   echo 'företagsnamn invalid!!!';
// } else {
//   $validateForetagsnamn = $foretag;
// }

// validateData($validatedEmail);
// validateData($validateName);
// validateData($validateForetagsnamn);
// $validate_d_text = htmlspecialchars($validate_d_text);

// function validateData($data)
// {
//   $data = trim($data);
//   $data = stripslashes($data);
//   $data = htmlspecialchars($data);
//   return $data;
// }

// // echo $email;


// // Save data to db
// $a = $data['body'][0]['a'] . ', ' . $data['body'][0]['a_svar'];
// $b = $data['body'][1]['b'] . ', ' . $data['body'][1]['b_svar'];
// $c = $data['body'][2]['c'] . ', ' . $data['body'][2]['c_svar'];
// $d = $data['body'][3]['d'] . ', ' . $data['body'][3]['d_svar'] . ', ' . $validate_d_text;
// $e = $data['body'][4]['e'] . ', ' . $data['body'][4]['e_svar'];
// $f = $data['body'][5]['f'] . ', ' . $validatedEmail . ', ' . $validateForetagsnamn . ', ' . $validateName . ', ' . $validateTel;

// if ($validatedEmail === null || $validateName === null || $validateTel === null || $validateForetagsnamn === null) {
//   echo 'kan inte spara till databasen <br/>';
// } else {
//   $sql = 'INSERT questions(a, b, c, d, e, f) VALUES(:a, :b, :c, :d, :e, :f)';
//   $finish = $pdo->prepare($sql);
//   $finish->execute(['a' => $a, 'b' => $b, 'c' => $c, 'd' => $d, 'e' => $e, 'f' => $f]);

//   echo 'Added to mySql';
// }

// echo $validatedEmail . '<br/>';
// echo $validateName . '<br/>';
// echo $validateTel . '<br/>';
// echo $validateForetagsnamn . '<br/>';