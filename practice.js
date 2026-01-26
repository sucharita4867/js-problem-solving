const number = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = number[i] + sum;
}
// console.log(sum);

const num = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNo = [];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log("even no:", num[i]);
    evenNo.push(num[i]);
  }
  //   else console.log("odd no", num[i]);
}
console.log(evenNo);
