// problem 1
// ----------------------------------
{
  let str = "hello";
  const reverse = str.split("").reverse().join("");
  // console.log(reverse);
}

// problem 2
// ----------------------------------
{
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
  // console.log(count);
}

// problem 3
// ----------------------------------
{
  const latter = "madam";
  const result = latter.split("").reverse().join("");
  if (latter === result) {
    //   console.log("true");
  } else {
    //   console.log("false");
  }
  // console.log(result);
}

// problem 4
// ----------------------------------
{
  const numbers = [5, 1, 9, 3, 29];
  let num = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > num) {
      num = numbers[i];
    }
  }
  //   console.log("max no: ", num);
}

// problem 5
// ----------------------------------
{
  let input = [1, 2, 2, 3, 6, 5, 5, 4, 4];
  const number = [];
  for (let i = 0; i < input.length; i++) {
    //   console.log(input[i]);
    if (!number.includes(input[i])) {
      number.push(input[i]);
    }
  }
  //   console.log(number);
}

// problem 6
// ----------------------------------
{
  const inputs = [1, 2, 3, 4];
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    sum = sum + inputs[i];
  }
  //   console.log("sum no", sum);
}

// problem 7
// ----------------------------------
{
  const Input = [1, 2, 3, 4, 5, 6, 34, 56];
  for (let i = 0; i < Input.length; i++) {
    if (Input[i] % 2 === 0) {
      //     console.log("Even no:", Input[i]);
    }
  }
}

// problem 8
// ----------------------------------
