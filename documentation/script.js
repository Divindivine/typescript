"use strict";
const Divin = {
    userId: 241424,
    name: "Divin"
};
class Account {
    constructor(name, accountNo, loanApplied) {
        this.name = name;
        this.accountNo = accountNo;
        this.loanApplied = loanApplied;
    }
}
const Shijil = new Account("Shijil", 101010, true);
console.log(Shijil);
const Lionel = {
    userId: 0,
    name: "Lionel"
};
const Cristiano = {
    studentId: 9777,
    studentName: "Cristiano",
};
function displayDetails(obj) {
    return "hai";
}
;
console.log(displayDetails(Cristiano));
console.log(displayDetails(Lionel));
function logPoint(p) {
    console.log(p.x, p.y);
}
logPoint({ x: 9744, y: 812803 });
class virtualPoint {
}
