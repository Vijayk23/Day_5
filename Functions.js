//anonymous function - Find Odd Number

let odd = function () {
  for (var i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
odd();



//arrow Function - Find Odd Number

oddNumbers = (array) => {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }
};
oddNumbers();



//anonymous Function - title caps string


let msg = "Convert all the strings to title caps in a string array"

function title(msg){
msg = msg.toLowerCase().split(' ');
for (var i = 0; i < msg.length; i++) {
msg[i] = msg[i].charAt(0).toUpperCase() + msg[i].slice(1);
}
return msg.join(' ');
}
console.log(title(msg));



//arrow Function - title caps string

let mg = "Convert all the strings to title caps in a string array"

titleCase = (mg) =>{
mg = mg.toLowerCase().split(' ');
for (var i = 0; i < mg.length; i++) {
mg[i] = mg[i].charAt(0).toUpperCase() + mg[i].slice(1);
}
return mg.join(' ');

}
titleCase(mg); 

console.log(titleCase(mg));

//anonymous Function - sum of array

let array =[1,2,3,4,5,6,7,8,9,10];

function sum(array){
let sum = 0;
for (i=0; i<array.length; i++){
sum = sum + array[i]
}
return sum;

}
console.log(sum(array));


//arrow Function - sum of array

let aray =[1,2,3,4,5,6,7,8,9,10];

sum = (array) => {
let sum = 0;
for (i=0; i<aray.length; i++){
sum = sum + aray[i]
}
return sum;

}
console.log(sum(aray));


//anonymous Function - Prime Number

let num = [2,3,4,5,6,7,8,9,10];
let result = [];
function isPrime(num) {
  for (let i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); 


//arrow function - Prime Number

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//checkPalindrome

function checkPalindrome(str) {
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
}


result = checkPalindrome("LEVEL")
if(result == true){
	console.log("The given string is Palindrome");
}
else{
  	console.log("The given string is NOT Palindrome");
}
