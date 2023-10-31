//This is an way of implementing an code to the problem
/*Here the solution  is to create a logic to find the number that ranges 
from zero to ten million  where it satisfies two different conditions
1.The number needs to be a prime number 
2. The number that is display is prime and the difference between
the pair of the number should be one (1).*/
/***
* @param {determineDifference}  //have used this as my variable value
* this will store the difference value*/
const determineDifference = (num) => {
  /**  @param {numToArray} // Used this to convert the integer to String*/
  let numToArray = Array.from(num.toString());
  /**@param {isValid} Given it a boolena to value to satisfy the condition*/
  let isValid = true;
  /*This piece of code will help us to determine the difference value 
  for each element that will pass through the loop till it's range.*/
  numToArray.forEach((elem, i) => {
    /**@param {Math.abs} used for removing the negative values.*/
    let OddNumber = Math.abs(+numToArray[i + 1] - +elem)
      != 1 && i != numToArray.length - 1;
    // This if condition its values accordingly.
    if (OddNumber) {
      /** 
       * @param {isValid} /if the conditon is prime it returns 
      If not prime it will return false.*/
      isValid = false;
    }
    return;
  });
  //calling the function isValid.
  return isValid;
};
//This code is used to check if the number is prime or not
/** 
 * @param {isPrime} /is a function used to check wheather the number 
 * is prime or not.
*/
const isPrime = (n) => {
  let prime = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
    }
  }
  return prime;
};
//storing all the results in the finalResults.
let finalResults = [];
/*I have intialized the range from 12 as technically as condition satisfies 
double digits number and above*/
for (i = 12; i < 10000000; i++) {
  if (determineDifference(i) && isPrime(i)) {
    /** @param {finalResults} // for storing the results in the array */
    //Using the push() method to push  elemets in the array.
    finalResults.push(i);
  }
}
console.log(finalResults, finalResults.length);
/*here the conditions are satisfied 
 and is being printed by using console.log method.*/