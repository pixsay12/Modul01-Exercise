// 1
let coba1 = {
  name: "saymen",
  keterangan: {
    tinggi: "144",
    berat: "50",
  },
};
let coba2 = {
  name: "saymen",
  keterangan: {
    tinggi: "144",
    berat: "50",
  },
};
let coba3 = {
  name: "jon",
  keterangan: {
    tinggi: "150",
    berat: "50",
  },
};

let equal = (obj1, obj2) => {
  return obj1.name === obj2.name;
};
console.log(equal(coba1, coba2));

// 2

//3

//4
let student = {
  name: "David",
  age: 20,
};

let swap = (student) => {
  let keyStudent = Object.keys(student);
  let propStudent = Object.values(student);

  let result = {};

  propStudent.forEach((element, index) => {
    result[element] = keyStudent[index];
  });
  return result;
};
console.log(swap(student));

// 5
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log(factorial(5));
