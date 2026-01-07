//without closure
//global variable
let counter = 1;
//local variable
const counterresult = () => {
    let counter = 0
    counter += 1;
    return counter;
}
console.log(counterresult());
console.log(counterresult());
console.log(counterresult());
