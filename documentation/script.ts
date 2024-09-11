interface Student{
    studentId: number;
    studentName: string;
}


interface User{
    userId : number;
    name: string;
}


const Divin: User = {
    userId: 241424,
    name: "Divin"
};

interface Customer{
    name: string,
    accountNo: number,
    loanApplied: boolean
}

class Account{
    name: string;
    accountNo: number;
    loanApplied: boolean;

    constructor(
        name:string,
        accountNo: number,
        loanApplied: boolean
    ){
        this.name = name;
        this.accountNo = accountNo;
        this.loanApplied = loanApplied;
    }
}

const Shijil: Customer= new Account("Shijil", 101010, true);
console.log(Shijil);

type userOrCustomer = User | Student;

const Lionel: userOrCustomer = {
    userId: 0,
    name: "Lionel"
}

const Cristiano: userOrCustomer = {
    studentId: 9777,
    studentName: "Cristiano",
}

function displayDetails(obj: userOrCustomer):string{
    return "hai"
};

console.log(displayDetails(Cristiano));
console.log(displayDetails(Lionel));

interface Point{
    x: number;
    y: number;
}

function logPoint(p : Point){
    console.log(p.x,p.y)
}

logPoint({x:9744, y:812803});


class virtualPoint{
    x: number
}

