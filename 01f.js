
const users = [
   { name: "Abhi", marks: 77 },
   { name: "Bhagath", marks: 41 },
   { name: "Charan", marks: 39 }
];

const result1 = users.filter((u) => u.marks < 40);
const result2 = users.filter((u) => u.marks > 40);


console.log(result1);
console.log(result2);