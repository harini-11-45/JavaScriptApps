//Bind method
const movieinfo = {
    heroname: "Vijay Devarakonda",
    villianname: "Devdas Shetty",
    moviedetails: function () {
        return this.heroname + " " + this.villianname;
    }

}
const bahubali = {
    heroname: "Prabhas",
    villianname: "Rana"
}
const movieresult= movieinfo.moviedetails.bind(bahubali);
console.log(movieresult());