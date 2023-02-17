// Angka Prima

// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
  // you can only write your code here!
  var flag = true
  for(var i = angka-1; i>1; i--) {
    if (angka%i === 0) {
      flag = false
    } 
  }
  return flag
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false