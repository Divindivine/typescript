interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
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
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;
0;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let Invoices: Invoice[] = [];
Invoices.push(invOne);
Invoices.push(invTwo);

Invoices.forEach((inv) => {
  console.log(inv.client, inv.details, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#type") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul');
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');

});

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: 4,
    data: { name: 'yoshi'}
}

let arr = ['ryu', 25, true];
arr[0] = false;
arr[i] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
let values: [string, string, number];

