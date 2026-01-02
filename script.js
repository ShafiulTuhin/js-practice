// --> Nested loop

for (i = 1; i <= 3; i++) {
  console.log(`************Gym part - ${i}***********`);
  for (j = 1; j <= 5; j++) {
    console.log(`Do exercise number - ${j} in the morning`);
  }
}

//--> Reverse name
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

// --? Multiplier

const number = 10;

console.log(`${number}'s Multipication`);
for (i = 1; i < 11; i++) {
  console.log(`${number} x ${i} = ${number * i} `);
}

//Max Number:
const numbers = [25, 82, 27, 56, 89, 47, 72];
let max = numbers[0];

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

//Min Number
const allNumber = [25, 82, 27, 56, 89, 47, 72];
let min = allNumber[0];

for (i = 0; i < allNumber.length; i++) {
  if (allNumber[i] < min) {
    min = allNumber[i];
  }
}
console.log(min);
