//  написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).

/**
 * 
 * @param {any} value 
 * @returns {boolean}
 */
function checkNumber(value){
  const checkValue = value ==='' || value === null || Number.isNaN(Number(value))
  return !checkValue;
}


const number = prompt("enter number:", 1);
if (checkNumber(number)){
  console.log(checkParity(Number(number)));
} else {
  console.log("Error, value must be number");
}


/**
 *
 * @param {number} number
 * @returns {string}
 */
//  function retParityWord(number = prompt()) {
  function checkParity(number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
};



// // написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.
// Варіант1

const value1 = '1414';
const value2 = 14;
console.log(compareTwoValue(value1,value2));
/**
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {any | null}
 */
// debugger
function compareTwoValue(value1, value2) {
  if (typeof value1 === typeof value2) {
    if (value1 === value2) 
      return null;
  if (value1 > value2)
    return value1;
    return value2;
}
  return null;  
}



