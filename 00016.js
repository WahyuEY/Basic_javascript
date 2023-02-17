// Tentukan Deret Geometri

// Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
// Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. 
// Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).

function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  // Menghitung rasio
  const ratio = arr[1] / arr[0];

  // Menguji apakah setiap angka pada array adalah kelipatan dari angka sebelumnya
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== ratio) {
      return false;
    }
  }

  // Jika semua angka memenuhi syarat, kembalikan true
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false