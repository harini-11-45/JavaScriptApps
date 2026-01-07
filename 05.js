const arrowdemo = (a, b,...c) => {
    console.log("Value of a:" + a);
    console.log("Value of b:" + b);
    console.log("Value of c:" + c);

};
arrowdemo(20, 40, 30, 50);
//REST PARAMETER
//DEFAULT PARAMETERS
const addNums = (a=10, b) => {
    console.log(a+b)
}
addNums(10);