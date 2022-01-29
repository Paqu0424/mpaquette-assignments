<?php

/* TASK 01 */
$x = 1;
while ($x <= 30) {
  if ($x <= 10) {
    echo "$x<br>";
  } elseif ($x > 10 and $x <= 20) {
    echo "<strong>$x</strong><br>";
  } elseif ($x >= 21 and $x <= 30) {
    echo "<em>$x</em><br>";
  }
  $x++;
}

echo "<br>";

/* TASK 02 */
$number_arr = array(2, 4, 7, 8, 10, 11);
foreach ($number_arr as $num) {
  echo number_format($num / 3, 3) . "<br>";
}

echo "<br>";

/* TASK 03 */
$employee_numbers = [
  "Sam Jerry" => "1849",
  "David Flint" => "2274",
  "Lena Vincent" => "2532",
  "Robert Vanny" => "3471"
];

echo "<ul>";
foreach ($employee_numbers as $name => $number) {
  $code = substr($number, 0, 1);
  $sector;
  switch ($code) {
    case "1":
      $sector = "MANAGEMENT";
      break;
    case "2":
      $sector = "TECHNICAL DEPARTMENT";
      break;
    case "3":
      $sector = "ACCOUNTING";
      break;
  }
  echo "<li>$name's employee number is: $number :: $sector</li>";
}
echo "</ul>";
