// let tes=125;

// for (i = 1; i <= tes; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("bizzbuzz " + i);
//     }
//     else if(i % 5 == 0){
//         console.log("buzz " + i);
//     }
//     else if(i % 3 == 0){
//         console.log("bizz " + i);
//     }

// }
// loop=10
// for(i = 1; i <= loop; i++){
//     console.log("9x" + i);
// }


// x = "eyee";

// if(x == x.split("").reverse().join("")){
//     console.log("palindrom");
// }
// else{
//     console.log("bukan");
// }

// cm = 120000;
// km = cm/100000; 
// console.log(km + " km");

// const uang = 10000;
// y = uang.toString()
// z = y.substring(0, 2);
// console.log("Rp. " + y.substring(0, 2) + "." + y.substring(2,5) + ",00");

// teks = "Hello World";
// newString = teks.replace('rld', '');
// console.log(newString);

// teks2 = "huruf ini kecil";
// teks_news = teks2.split(" ");
// for (let i = 0; i < teks_news.length; i++) {
//     teks_news[i] = teks_news[i][0].toUpperCase() + teks_news[i].substr(1);
// }
// console.log(teks_news.join(" "));

// kata = "balik"
// console.log(kata.split("").reverse().join("")); 



string = "PurWaDhika";
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
result = "";

z = string.replace(/[aeiou]/ig,'');
y = string.match(/[aeiou]/ig,'');
console.log(z);
console.log(y.join(""));

let listVokal = "";
let listKonsonan = "";
let vokal = "aeiou";
let string4 = "hello testing";
string5 = string4.split(" ").join("");

for (i = 0; i < string5.length; i++) {
  if (vokal.includes(string5[i])) {
    if (listVokal.includes(string5[i])) {
      continue;
    }
    listVokal += string5[i];
  } else {
    if (listKonsonan.includes(string5[i])) {
      continue;
    }
    listKonsonan += string5[i];
  }
}
console.log(`Kata : ${string4}`);
console.log(`Kata Vokal : ${listVokal}`);
console.log(`Kata Konsonan : ${listKonsonan}\n`);
