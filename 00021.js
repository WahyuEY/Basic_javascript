// Faktor Persekutuan Terbesar

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  // you can only write your code here!
  let smallestAngka = angka1 < angka2 ? angka1 : angka2;
  let biggestAngka = angka1 > angka2 ? angka1 : angka2;
  
  for (i = smallestAngka; i >= 1; i--) {
    if (smallestAngka%i === 0 && biggestAngka%i === 0) {
      return i
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1