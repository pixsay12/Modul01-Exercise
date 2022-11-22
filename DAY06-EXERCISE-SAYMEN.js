// class Mobil {

//     constructor(merek) {
//       this._merekmobil = merek;
//     }

//     get merekmobil() {
//       return this._merekmobil;
//     }

//     set merekmobil(merek) {
//       this._merekmobil = merek;
//     }
//   }

//   mobil = new Mobil("Toyota");
//   console.log(mobil.merekmobil)

//   mobil.merekmobil = "honda"
//   console.log(mobil.merekmobil)

//   mobil.merekmobil = "Toyota2"
//   console.log(mobil.merekmobil)
//   console.log(Mobil);

// class User{
//     greeting(){
//         console.log("helo");
//     }
// }

// const user = new User();
// tes = user
// console.log(tes);

// class user {
//   name = "";

//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     console.log(`hello ${this.name}`);
//   }
// }
// const userr = new user("hai");
// userr.greeting();

// Buat Student class agar format bisa digunakan oleh dbStudent
class Student{
  constructor(name, email, date, score){
      this.name = name,
      this.email = email,
      this.date = date,
      this.score = score
  }
}

let dbStudent = [
  new Student("satu", "satu@mail.com", "06-24-2008", 85),
  new Student("dua", "dua@mail.com", "06-24-2003", 82),
  new Student("tiga", "tiga@mail.com", "06-24-2004", 81),
  new Student("empat", "empat@mail.com", "06-24-2009", 80),
]

let calculateStudent = (arr) =>{
  // Flow -> load data dari index 0-terakhir, looping sebanyak data, bandingkan nilai dari index 0-terakhir
  // Highest score
  highestScore = arr[0].score;
  for (i = 1; i < arr.length; i++) {
      if (arr[i].score > highestScore) {
        highestScore = arr[i].score;
      }
    }

  // Lowest Score
  lowestScore = arr[0].score;
  for (i = 1; i < arr.length; i++) {
      if (arr[i].score < lowestScore) {
          lowestScore = arr[i].score;
      }
  }

  // Average Score
  let avgScore = 0;
  for (i = 0; i < arr.length; i++) {
      avgScore += arr[i].score;
  }
  avgScore = avgScore / arr.length;



  // kurang lengkap -> kalau dia highest, lowest, avg -> show data komplit, contoh nama: satu, nilai:85, email:a@a, uumur:"22-03-98" convert ke angka
  // Kurang Age

  let result = {
      Score:{
          highestScore,
          lowestScore,
          avgScore,
      },
      // Age:{
      //     highestAge,
      //     lowestAge,
      //     avgAge,
      // },
  };
  return result;
}
console.log(calculateStudent(dbStudent));
