const nums = [1, 2, 3, 4, 5];

function sum(acc, n) {
  return acc + n;
}

const result = nums.reduce(sum, 0);
console.log(result);
const students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 70 },
  { name: "C", marks: 90 },
];

const total = students
  .filter((s) => s.marks >= 50)
  .map((s) => s.marks)
  .reduce((sum, m) => sum + m, 0);

console.log(total);
