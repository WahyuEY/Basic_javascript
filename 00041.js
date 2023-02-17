
//   Vowels Counter Recursive

//   Diberikan sebuah function consonantCounterRecursive(sentences) yang menerima satu parameter berupa
//   string. Function akan me-return jumlah huruf konsonan yang terdapat di dalam parameter inputan.
//   Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

// - Wajib menggunakan metode rekursif
//   - DILARANG menambahkan parameter baru
//   - DILARANG membuat variable di luar function consonantCounterRecursive
//   - DILARANG mengubah tipe data parameter
//   - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
//   - DILARANG menambahkan function di luar maupun di dalam function consonantCounterRecursive
//   - DILARANG menggunakan built in function .indexOf atau .include
//   - DILARANG menggunakan REGEX

function consonantCounterRecursive(sentences) {
    if (sentences.length === 0) {
        return 0;
      }
    
      const firstChar = sentences.charAt(0).toLowerCase();
      const vowels = ["a", "i", "u", "e", "o"];
    
      if (firstChar >= "a" && firstChar <= "z") {
        let isConsonant = true;
        for (let i = 0; i < vowels.length; i++) {
          if (firstChar === vowels[i]) {
            isConsonant = false;
            break;
          }
        }
    
        if (isConsonant) {
          return 1 + consonantCounterRecursive(sentences.slice(1));
        } else {
          return consonantCounterRecursive(sentences.slice(1));
        }
      } else {
        return consonantCounterRecursive(sentences.slice(1));
      }
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //13
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
