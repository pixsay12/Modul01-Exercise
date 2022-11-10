// EXERCISE 1
let student = [
    { name: "a", email: "a@gmail.com", age: 14, score: 80 },
    { name: "b", email: "b@gmail.com", age: 13, score: 78 },
    { name: "c", email: "c@gmail.com", age: 14, score: 83 },
  ];

function maxAge(data) {
return (resultMax = data.reduce((min, p) => (p.age > min ? p.age : min), data[0].age));
}
function minAge(data) {
return (resultMax = data.reduce((min, p) => (p.age < min ? p.age : min), data[0].age));
}
  
// score
function maxScore(data) {
return (resultMax = data.reduce((min, p) => (p.score > min ? p.score : min), data[0].score));
}
function minScore(data) {
return (resultMin = data.reduce((min, p) => (p.score < min ? p.score : min), data[0].score));
}
  
// avg score
var arr = student.map((obj) => obj.score);

let avgScore = 0;
for (i = 0; i < arr.length; i++) {
avgScore += arr[i];
}
let hasil = Math.floor(avgScore / arr.length);
  
// avg age
var arr = student.map((obj) => obj.age);

let avgAge = 0;
for (i = 0; i < arr.length; i++) {
avgAge += arr[i];
}
let hasilAge = Math.floor(avgAge / arr.length);

  console.log(hasilAge);
  console.log(hasil);
  console.log("highest score: ", maxScore(student));
  console.log("lowest score: ", minScore(student));
  console.log("highest age: ", maxAge(student));
  console.log("lowest age: ", minAge(student));
  
//2

  
class Product {
constructor(name, price) {
    this.name = name;
    this.price = price;
}
}