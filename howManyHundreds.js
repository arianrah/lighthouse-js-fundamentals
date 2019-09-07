const howManyHundreds = function (num) {

  let hundreds = num / 100;

  if (hundreds >= 1){
    return Math.floor(hundreds)
  } else {
    return 0;
  }

}