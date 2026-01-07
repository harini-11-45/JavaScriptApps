//Apply method
const studentinfo = {
    studentdetails: function (qualification, branch) {
        return this.rollno + " " + this.studentname + " " + " " + qualification + " " + branch;
    }
}
const student = {
    rollno: 6776,
    studentname: " Harini"
}
console.log(studentinfo.studentdetails.apply(student, ["Btech", "CSE"]));