// let user = {name: "divin", age: 10};

// console.log("divin");
// console.log(user.name);
// // console.log(user.email);

// let greetings: string = "hello divine";
// greetings.toUpperCase();
// console.log(greetings);

// let userId: number = 334455;

// let isLoggedIn: boolean = true;

// //any
// let hero;

// function getHero() {
//   return "ola";
// }

// hero = getHero();

// export {};

// function addTwo(num: number): number{
//     return num + 2;
//     // return "sui";
// }

// function getUpper(val: string){
//     return val.toUpperCase();
// }

// function signUpUser(name: string, email: string, isPaid: boolean){

// }

// let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// let sum = addTwo(5);
// getUpper("arigetho");
// signUpUser("divin", "@vonnue.com", false);
// loginUser ("divin", "@vonnue.com");

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true;
//     }
//     else{
//         return "200 ok";
//     }
// }

// const getHello = (s: string): string => {
//     return "";
// }

// // const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, true, "ironman"];

// heros.map((hero): string => {
//     return `hero is ${hero}`;
// });

// function consoleError(errmsg: string): void{
//     console.log(errmsg);
// }

// function handleError(errmsg: string): never{
//     throw new Error(errmsg);
// }

// const user = {
//     name: "Divin",
//     email: "divin@vonnue.com",
//     isActive: true
// }

// function createUser({name:string,isPaid: boolean}){

// }

// createUser({name: "divin", isPaid: true});

// function createCourse():{}{
//     return {};
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User){
// }

// createUser({name: "", email: "", isActive: true});

// type User = {
//     readonly _id: string
//     name: string;
//     email: string;
//     isActive: boolean
//     creditCard?: number;
// }

// let myUser: User = {
//     _id: "1234",
//     name: "h",
//     email: ".com",
//     isActive: false
// }

// // myUser._id = "fasd"

// type cardNumber = {
//     cardNumber: string
// }

// type cardDate = {
//     cardDate: string
// }

// type cardDetails = cardNumber & cardDate & {
//     cvv: number;
// }

// const superHeros: string[] = [];
// const heroPower: Array<number> = [];

// superHeros.push("spiderman");

// type User = {
//   name: string;
//   isActve: boolean;
// };

// const allUsers: User[] = [];
// allUsers.push({ name: "ironman", isActve: true });

// const MLModels: number[][] = [
//   [1, 2, 3, 4],
//   [3, 4, 6, 6, 4],
// ];

// let score: number|string  = 33;
// score = 44;
// score = "55";

// type User = {
//     name: string;
//     id: number
// }

// type Admin = {
//     userName: string;
//     id: number;
// }

// let user1: User | Admin = {name: "Divin", id: 9744};

// user1 = {userName: "Pavin", id:9495};

// function getDbId(id: number | string){
//     console.log(`DB id is ${id}`)
// }

// getDbId(3);
// getDbId("3");

// function getDbIds(id: number | string){
//     if(typeof id === "string"){
//         id.toUpperCase();
//     }
// }

// const data : number[] = [1, 2, 3, ];
// const data1: string[] = ["1", "2", "3"];
// const data2: (number | string | boolean)[] = [1, "2", true];

// let seatAllotment : "aisle" | "middle" | "window";

// seatAllotment = "aisle";
// seatAllotment = "middle";

// const user: (string | number)[] = [1,"divin"];

// let user: [string, number, boolean];
// // user = [true, 8, "divin"];
// user = ["divin", 916, true];

// let rgb: [number, number, number] = [255, 122, 233];

// type User = [number, string];
// let user1: User = [98, "ola"];

// user1[1] = "hc.com";

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if(seat === AISLE){

// }

// enum seatChoice{
//     AISLE = "aisle",
//     MIDDLE = 10,
//     WINDOW,
//     FOURTH
// }

// const hcSeat = seatChoice.AISLE

// interface User {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   startTrail: () => string;
//   startTrial1(): string;
//   getCoupon(coupanName: string, value: number): number;
// }

// interface User{
//   githubToken: string;
// }

// interface Admin extends User{
//    role: "admin" | "ta" | "learner";
//   }

// const divin: User = {
//   dbId: 897,
//   email: "divi.com",
//   userId: 123,
//   startTrail: () => {
//     return "ola";
//   },
//   startTrial1() {
//     return "asdf";
//   },
//   getCoupon(name:"divin", age: 21){
//     return 234
//   },
//   githubToken: "Divindivine",
// };

// const client: Admin = {
//   dbId: 78,
//   email: "ad.com",
//   userId: 123,
//   startTrail: () => {
//     return "ola";
//   },
//   startTrial1() {
//     return "asdf";
//   },
//   getCoupon(name:"divin", age: 21){
//     return 234
//   },
//   githubToken: "Divindivine",
//   role: "admin",
// }

// interface user{
//   name: "divin";
//   age: number;
//   readonly id: number;
// }

// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Kalpetta";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// class User {

//     protected _courseCount = 1;

//     readonly city: string = "Kalpetta";
//     constructor (
//       public email: string,
//       private name: string
//     ){}

//     private deleteToken(){
//         console.log("Token deleted");
//     }

//     get getAppleEmail(): string{
//         return `apple${this.email}`
//     }

//     get courseCount(): number{
//         return this._courseCount;
//     }

//     set courseCount(courseNum){
//         if(courseNum <= 1){
//             throw new Error("Course count should be more than  1")
//         }
//         this._courseCount = courseNum;
//     }
// }

// class SubUser extends User{
//     isFamily: boolean = true;
//     changeCourseCount(){
//         this._courseCount = 4;

//     }
// }

// const divin = new User("divin@vonnue.com", "divin");
// // divin.city = "Kochi";
// console.log(divin);

// interface TakePhoto{
//     cameraMode: string;
//     filter: string;
//     burst: number;
// }

// interface Story{
//     createStory(): void;
// }

// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }

// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){}
//     createStory(): void {
//         console.log("story view")
//     }
// }

// abstract class TakePhoto {
//   constructor(public cameramode: string, public filter: string) {}

//   abstract getSepia(): void;
//   getReelTime(): number{
//     return 8;
//   }
// }

// // const divine = new TakePhoto("test", "test");

// class Instagram extends TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){
//         super(cameraMode, filter)
//     }
//     getSepia(): void {

//     }
// }

// const divine = new Instagram("test", "test", 3);

// const score: Array<number> = [];
// const names: Array<string> = [];

// function identityOne(val: boolean | number): boolean | number {
//   return val;
// }

// function identityTwo(val: any): any {
//   return val;
// }

// function identityThree<Type>(val: Type): Type {
//   return val;
// }

// function identityFour<T>(val: T): T {
//   return val;
// }

// interface Bootle {
//   brand: string;
//   type: number;
// }

// function getSearchProducts<T>(products: T[]): T {
//   const myIndex = 3;
//   return products[myIndex];
// }

// const getMoreSearchProducts = <T>(products: T[]): T => {
//   const myIndex = 4;
//   return products[myIndex];
// };

// function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
//   return {
//     valOne,
//     valTwo,
//   };
// }

// interface Database {
//   connection: string;
//   uername: string;
//   password: string;
// }

// anotherFunction(3, 2);
// anotherFunction({}, 0);

// interface Quiz{
//     name: string;
//     type: string
// }

// interface Course{
//     name: string,
//     author: string,
//     subject: string
// }

// class Sellable<T>{
//     public cart: T[] = [];
//     addToCart(products: T){
//         this.cart.push(products)
//     }
// }

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

function logvalue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet;
        return "fish food";
    }
    else{
        pet;
        return "bird food";
    }
}

interface Circle{
  kind: "circle",
  radius: Number,
}

interface Square{
  kind: "square",
  side: "number"
}

interface Rectangle{
  kind: "rectangle",
  length: number,
  breadth: number
}

type Shape = Circle | Square;

// function getTrueShape(shape: Shape){
//   if(shape.kind === "circle"){
//     return Math.PI * shape.radius ** 2;
//   }
//   return shape.side * shape.side;
// }

// function getArea(shape: Shape){
//   switch(shape.kind){
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.side * shape. side;
//     default: 
//     const _exhaustiveCheck : never = shape;
//   }
// }
