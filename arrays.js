// Arrays in js
//Literal syntax
const demoarray = [10, 20, "Ramesh", "Suresh"]
console.log(demoarray);
const pnames = ["Realme", "Samsung", "Vivo", "Lg"]
console.log(pnames);
//object syntax
let prices = new Array(20000, 30000, 25000, 15000);
console.log(prices);
// To get values
console.log(pnames[1])
for (let names of pnames) {
    console.log(names);
}
//call back function =function within function
let products = pnames.forEach((val) => {
    console.log(val)
})
//to add push,unshift,splice
pnames.push("OnePlus");
console.log(pnames);
pnames.unshift("Poco")
console.log(pnames);
pnames.splice(2,0,"Moto","Oppo")
console.log(pnames);
//to remove pop,shift,splice
pnames.pop();
console.log(pnames);
pnames.shift();
console.log(pnames);
pnames.splice(3, 1)
console.log(pnames);
//delete pnames[1];
//console.log(pnames);
//sort
prices.sort();
console.log(prices);
//reverse
pnames.reverse();
console.log(pnames);
//to update
pnames[2] = "MotoPro";
console.log(pnames);
//concate
let pnames1 = ["Redmi", "Nokia"] 
pnames1.concat();
console.log(pnames1);
//spread
let productnames = [...pnames, ...pnames1];
console.log(productnames);
//array advanced methods
let sum = prices.reduce((tot, val) => {
    return tot+val
});
console.log(sum)
//map
let offerprice = prices.map((val )=> {
    return val - 2000
});
console.log(offerprice);
