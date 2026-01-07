// problem 1
// ----------------------------------
let str = "hello";
const reverse = str.split("").reverse().join("");
// console.log(reverse);

// problem 2
// ----------------------------------
let input = "programming";
let count = 0;
for (let i = 0; i < input.length; i++) {
//   console.log(input[i]);
  if (
    input[i] == "a" ||
    input[i] == "e" ||
    input[i] == "i" ||
    input[i] == "o" ||
    input[i] == "u"
  ) {
    count = count + 1;
  }
}
console.log(count);
