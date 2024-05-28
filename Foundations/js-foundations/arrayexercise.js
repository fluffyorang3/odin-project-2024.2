//sumOfTripledEvens(array) => 1.Take an array 
// 2. For every even number, it will triple it
// 3. Then it will sum all those even numbers

let array = [1, 2, 3, 4, 5];

function isEven(num){
  if (num % 2 == 0){
    return num;
  }
}
function triple(num) {
  return num * 3;
}

console.log(array.filter(isEven).map(triple).reduce((acc, curr) => acc + curr));
