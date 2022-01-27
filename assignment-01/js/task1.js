// Declare the variable a
$vara = 3;
// Declare the variable b
$varb = 5;
// Declare the variable c
$varc = '';

nL = '\n'

// alert( "description of alerted_value: " + alerted_value );

alert
  ('var a = ' + $vara + ';\n' +
  'var b = ' + $varb + ';\n'+
  'var c = ' + $varc + ';\n' +
  '----------\n' +
  'a + b = '.concat($vara + $varb) + nL +
  'a - b = '.concat($vara - $varb) + nL +
  'a * b = '.concat($vara * $varb) + nL +
  'a / b = '.concat($vara / $varb) + nL +
  'a % b = '.concat($vara % $varb) + nL +
  '(a += b): '.concat($vara += $varb) + nL +
  '(a -= b): '.concat($vara -= $varb)+ nL +
  '(a *= b): '.concat($vara *= $varb)+ nL +
  '(a /= b): '.concat($vara /= $varb)+ nL +
  '(a %= b): '.concat($vara %= $varb)+ nL +
  '(a == b): '.concat($vara == $varb)+ nL +
  '(a != b): '.concat($vara != $varb)+ nL +
  '(a > b): '.concat($vara > $varb)+ nL +
  '(a < b): '.concat($vara < $varb) + nL +
  '(!a && !c): '.concat(!$vara && !$varc) + nL +
  '(!a || !c): '.concat(!$vara || !$varc)
)

alert(output)
