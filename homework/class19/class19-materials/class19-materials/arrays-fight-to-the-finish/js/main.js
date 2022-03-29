//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["get it", "jingle all the way", "big momma"];

// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
//   document.querySelector("#h2").innerText += movies[i] + "\n";
// }

movies.forEach((e, i, a) => {
  document.querySelector("#h2").innerText += e + "\n";
});
// document.querySelector("#h2").innerHTML = "abc";
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

// num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// num.forEach((e, i, a) => {
//   e += 3;
//   num[i] = e;
// });
// console.log(num);

num = [];
const looper = (x) => {
  for (let i = 1; i <= x; i++) {
    num.push(i);
  }
};
looper(10000);
console.log(num);

//Find the average of all the numbers from question three
var sum = 0;
var avg = 0;
num.forEach((e, i, a) => {
  sum += num[i];
  //   console.log(e);
  //   console.log(sum);
});
avg = sum / num.length;
console.log(" ");
console.log(sum);
console.log(num.length);
console.log(avg);
