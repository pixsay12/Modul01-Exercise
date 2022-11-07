function convert(x1){
    return x1 + 32 + "F";
}

function check(x){
    if(x%2 == 0){
         console.log('genap');

    }
    else{
        console.log('ganjil');

    }
}

function prime(x)
{
    for(var i = 2; i < x; i++)
    {
      if(x % i === 0)
      {
        return false;
        //console.log('prima')
        // break;
      }
    }
    return true;  
  
}

function calculate(x){
    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += 1;  // sum = sum + i
    }
    return sum
}
// console.log(calculate(5))

function faktorial(x) {
    if (x < 0) 
          return -1;
    else if (x == 0 || x == 1) 
        return 1;
    else {
        return (x * faktorial(x - 1));
    }
  }
// console.log(faktorial(1))

function fib(x){
    if (x < 0){
        console.log("jangan minus");
    }
    else if (x == 0){
        return 0;
    }
    else if(x == 1 || x == 2){
        return 1;
    }
    else{
        return fib(x-1) + fib(x-2)};
} 
console.log(fib(5));

