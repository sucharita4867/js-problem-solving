const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];
let duplicate = [];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (!duplicate.includes(arr[i])) {
    duplicate.push(arr[i]);
  }
}
console.log(duplicate);
// const duplicate = [1, 2, 2, 3, 4, 4, 5];
// let numbers = [];
// for (let i = 0; i < duplicate.length; i++) {
//   console.log(duplicate[i]);
//   if (!numbers.includes(duplicate[i])) {
//     numbers.push(duplicate[i]);
//   }
// }
// console.log(numbers);
