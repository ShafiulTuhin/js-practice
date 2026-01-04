//1.Print Number for 1-10
for (i = 1; i < 11; i++) {
  console.log(i);
}
//2.Print a Even Number
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`Even number is: ${i}`);
  }
}
//3.Sum of number 1-100
let sum = 0;
for (i = 1; i < 101; i++) {
  sum = sum + i;
}
console.log(sum);
//4.Print Multipication table of 5
const multi = 5;

console.log(`${multi}'s Multipication`);
for (i = 1; i < 11; i++) {
  console.log(`${multi} x ${i} = ${multi * i} `);
}
//5.Reverse a number

for (i = 5; i >= 1; i--) {
  console.log(i);
}
//6 Reverse a String
let str = "Javascript";
let reversedStr = "";
for (i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
//7.Max Number:
const numbers = [25, 82, 27, 56, 89, 47, 72];
let max = numbers[0];

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

//8.Min Number
const allNumber = [25, 82, 27, 56, 89, 47, 72];
let min = allNumber[0];

for (i = 0; i < allNumber.length; i++) {
  if (allNumber[i] < min) {
    min = allNumber[i];
  }
}
console.log(min);

//9. Reverse string without loop
let nam = "Adiyaan";
const split = nam.split("");
console.log(split);

const reverse = split.reverse();
console.log(reverse);

const join = reverse.join("");
console.log(join);
// --> In one line
const reverseName = nam.split("").reverse().join("");
console.log(reverseName);
//10.Nested loop
for (i = 1; i <= 3; i++) {
  console.log(`************Gym part - ${i}***********`);
  for (j = 1; j <= 5; j++) {
    console.log(`Do exercise number - ${j} in the morning`);
  }
}
//11. Prime number
// A prime number is a number which only can be divided by 1 and itself.
let num = 7;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}
