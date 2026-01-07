//this keyword 
const empinfo = {
    firstname: " Naga ",
    lastname: "Harini",
    empdetails: function() {
        return this.firstname + " " + this.lastname;
    }
}
console.log(empinfo.empdetails())