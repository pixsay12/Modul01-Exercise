// 1
// function check(x){
//     //min
//     var min = x.reduce((a,b) => Math.min(a,b));
//     console.log(min);

//     //max
//     var max = x.reduce((a,b) => Math.max(a,b));
//     console.log(max);

//     //average
//     var sum = 0;
//     for(number of x){
//         sum += number;
//     }
//     var average = sum / x.length;
//     console.log(average);
// }
// check([4,3,2])


// // 2
// function concat(x){
//     var kosong = "";
//     for(i=0; i < x.length -1; i++){
//         kosong += x[i] + ", ";
//     }
//     kosong += "and " + x[x.length-1];
//     console.log(kosong);
// }
// concat(["nama", "pisah"]);


// // 3 Belum
// function pisah(x, y){
//     temp = []
// }



// 4
// function calc(x, y){
//     var total = [];
//     var panjang = x.length < y.length ? x.length : y.length;
//     console.log(panjang);
//     for(i = 0; i < panjang; i++){
//         total.push(x[i] + y[i])
//     }
//     console.log(total);

//     if(x.length > y.length){
//         for(i = panjang; i < x.length; i++){
//             total.push(x[i])
//         }
//     }
//     else{
//         for(i = panjang; i < y.length; i++){
//             total.push(y[i])
//         }
//     }
    
//     console.log(total);
// }
// calc([1,2,3,4,5], [2,3,4])


// // 5
// function add(x, y){
//     if(!x.includes(y)){
//         x.push(y);
//     }
//     console.log (x);
// }
// add(["nama"], 'nama')


// 6
// function del(x){
//     temp = []
//     for(i = 0; i < x.length; i++){
//         if(x[i] % 2 == 0){
//             temp.push(x[i])
//         }
//         // console.log(x[i]);
//     }
//     console.log(temp);
// }
// del([1,2,3,4,5,6,6])