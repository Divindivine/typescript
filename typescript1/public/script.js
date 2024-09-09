const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
import { ListTemplate } from "./classes/LlistTemplate.js";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// class Invoice{
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     // constructor(c: string, d: string, a: number){
//         // this.client = c;
//         // this.details = d;
//         // this.amount = a;
//     // }
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ){}
//     format(){
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
0;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
Invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#type");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: 4,
    data: { name: 'yoshi' }
};
let arr = ['ryu', 25, true];
arr[0] = false;
arr[i] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
let values;
