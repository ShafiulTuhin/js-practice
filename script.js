// --> Nested loop

for (i = 1; i <= 3; i++) {
  console.log(`************Gym part - ${i}***********`);
  for (j = 1; j <= 5; j++) {
    console.log(`Do exercise number - ${j} in the morning`);
  }
}

//--> Reverse name
let name = "Tuhin";
let reversedName = name.split("").reverse().join("");

console.log(reversedName);
