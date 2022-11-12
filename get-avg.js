function getAverage(scoreArray){

  const count = scoreArray.length;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum = sum + scoreArray[i];
  }

  const avg = sum / count;
  const roundedDown = Math.floor(avg);

  return roundedDown;
  
}