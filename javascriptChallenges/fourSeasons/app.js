function fourSeasons(d) {

  if (d >= 365)
    return 'The year flew by!';

  if (d >= 355 || d <= 79)
    return 'Winter Season';
    
  if (d <= 171)
    return 'Spring Season';
    
  if (d <= 263)
    return 'Summer Season';
    
  return 'Autumn Season';

}