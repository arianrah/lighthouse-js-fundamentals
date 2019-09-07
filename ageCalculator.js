const ageCalculator  = function (name, birthYear, currentYear) {
  let age = currentYear - birthYear;
  let toPrint = name + " is " + age + " years old.";
  return toPrint;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
