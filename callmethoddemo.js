//Call method 
const prodinfo = {
    
    pdetails: function (rating, price) { 
        return this.pid + " " + this.pname + " " + rating + " " + price;
        
    }
}
const product = {
    pid: 6776,
    pname : "RealMe"

}
console.log(prodinfo.pdetails.call(product,4,30000));