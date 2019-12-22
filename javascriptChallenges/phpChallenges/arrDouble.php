function maps($x)
{
$result = array();

  foreach ($x as $value) {
       $value = $value * 2;
      array_push($result,$value);

}

return $result;

}