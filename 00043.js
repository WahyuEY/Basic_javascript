// di data structure, yang harus student achieve:
// - forming sebuah array berisikan object
// - bisa mengakses isi terdalam dari array berisikan object
// - bisa melakukan operasi filtering / grouping data

// ---------------
// Students Report
// ---------------
// PROBLEM
// =======
// Diberikan sebuah function bernama getReport.
// Function akan menerima sebuah parameter array of object dengan format:
// [
//   { name: <nama student>, score: <score student>, classCode: <kode kelas>},
//   { name: <nama student>, score: <score student>, classCode: <kode kelas>},
//   ...
// ]
// Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
// Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
// [
//   { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
//   { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
//   ...
// ]
// Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
// Standard kelulusan adalah minimum 70.


function getReport(studentGrades) {
  // only code here..
  const classes = [];
  const passed = [];
  const failed = [];

  // Membuat list kelas unik
  studentGrades.forEach((student) => {
    if (!classes.includes(student.classCode)) {
      classes.push(student.classCode);
    }
  });

  // Mengelompokkan student berdasarkan kelas dan hasil ujian
  const report = classes.map((classCode) => {
    const passedStudents = [];
    const failedStudents = [];

    studentGrades.forEach((student) => {
      if (student.classCode === classCode) {
        if (student.score >= 70) {
          passedStudents.push(student.name);
        } else {
          failedStudents.push(student.name);
        }
      }
    });

    return { classCode, passed: passedStudents, failed: failedStudents };
  });

  return report;
}


var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));
