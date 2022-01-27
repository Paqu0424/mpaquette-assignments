<?php

/*
TASK 01
*/
$fname_str = "John, Jenna, Harry, Don";
$lname_str = "Smith, Cores, Zab, Willson";
$age_str = "15, 25, 35, 45";

$fname_arr = explode(", ", $fname_str);
$lname_arr = explode(", ", $lname_str);
$age_arr = explode(", ", $age_str);

/*
TASK 02
*/
$sum = 0;
$i = 0;
while ($i < count($fname_arr)) {
  echo nl2br($fname_arr[$i] . " " . $lname_arr[$i] . " " . $age_arr[$i] . "\n");
  $i++;
  $sum += (int)$age_arr[$i];
}

/*
TASK 03
*/
echo nl2br("\n" . $fname_arr[1] . " " . $lname_arr[1] . " is " . $age_arr[1]);

/*
TASK 04
*/
echo nl2br("\n\nThe sum of all array elements is " . $sum);
