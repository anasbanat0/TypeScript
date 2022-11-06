// Type Script - TS
// Data Types: boolean, number, string
// Types Special Values: undefined, null
// Special Types: any, unknown

// let varName: Type = Value
// let firstName: string = "";
// let email: string = "";
// let age: number = 10;
// let graduated: boolean = true;

// let value: any = "";
// value = 10;
// value = false;

// let v1 = undefined;
// let v2 = null;

// let v3: unknown = 10;
// v3 = "Ahmed";
// console.log(`V3 Type: ${typeof v3}`);

// let data: Array<string> = new Array<string>;
// let data: Array<string> = [];
// let stringArray: string[] = [];
// let numberArray: number[] = [];

// stringArray.push("");
// numberArray.push(2);
// console.log(typeof numberArray);

// let data: readonly string[] = ["A", "B", "C"];
// console.log(data);

// Objects & Type Interface
// let obName: {vName: TypeError, vName: TypeError, ...} = {vName: valueAsType, ...}

// let o1: {name: string, email: string} = {name: "Anas Banat", email: "anasba315@gmail.com"}

// Type Alias
// type SuiteableName = Object/Type
// type Name = string
// type email = string

// type Name = string;
// type Email = string;
// let fName: Name = "";
// let mName: Name = "";
// let lName: Name = "";

// type O1Types = {name: string, email: string};
// let o1: O1Types = {name: "Anas Banat", email: "anasba315@gmail.com"}

// type UserObject = {name: Name, age: number, graduated: boolean, email?:Email};

// let user: UserObject = {
//   name: "Anas",
//   age: 24,
//   graduated: true,
//   email: "anasba315@gmail.com",
// }

// console.log(user);

// type objectType = {v1: string, v2: number, v3: boolean, ov1?: string, ov2?: number, ov3?: boolean};

// let ot1: objectType = {v1: "", v2: 3, v3: true};

// Union Types => Type | Type -> Type Or Type
// type CarDetails = {name: string, model: string, year: number | string};

// let car: CarDetails = {
//   name: "Houdai",
//   model: "Cyra",
//   year: 2022,
// }

// function Student(name: string, age: number | string = "24") {
//   this.fullName = name;
//   this.userAge = age;
// }

// let std = new Student("Anas");
// console.log(std.userAge)

// function fun(num1: number = 20, num2: number = 10): number {
//   return num1 + num2;
// }

// console.log(fun(30, 20));

// let fun2 = (name: string) => console.log(`Name: ${name}`);
// fun2("Anas")

// let arrowFunction = (p1: number, p2: string) => console.log(`P1: ${p1} - P2: ${p2}`);
// let functionName = (param: Type, param: Type) => executionsStatements;

/**
 * Access Modifiers:
 * - public
 * - private
 * - protected
 **/

// class User {
//   public name: string;
//   private email: string;
//   protected age: number;

//   get _email() {
//     return this.email;
//   }

//   set _email(email: string) {
//     this.email = email;
//   }
// }

// let u1 = new User();
// u1.name = "Anas";
// console.log(u1.name);

// u1._email = "anasba315@gmail.com";
// console.log(u1._email);

// class User {
//   // Instance Variables
//   public publicVar: string = "";
//   protected protectedVar: string = "";
//   private privateVar: string = "";

//   // Class Variables
//   public static publicStaticVar: string;

//   sayWelcome() {
//     console.log("Hello Super Class");
//   }
//   protected sayHello() {
//     console.log("Hello Anas");
//   }
// }

// // let u1: User = new User();
// // User.publicStaticVar;

// class Student extends User {
//   constructor() {
//     super();
//     super.protectedVar;
//   }

//   // Override
//   sayWelcome(): void {
//     super.sayWelcome();
//     super.sayHello();
//     console.log("Hello Sub Class");
//   }
// }

// let std: Student = new Student();
// std.sayWelcome();
// console.log("-------------");

// // Polymorphisim -> Polymorphic Instantiation
// let u1: User = new User();
// let u2: User = new Student();
// // console.log(u2.publicVar);
// u1.sayWelcome();
// console.log("----------");

// let n1: number = 1;
// let n2: number = 2;
// let n3 = n1 + n2;
// console.log(n3);

// let s1: string = "A";
// let s2: string = "B";
// let s3: string = s1 + s2;
// console.log(s3)

// function Test(v1: string, v2?:string) {
//   this.value1 = v1;
//   this.value2 = v2;
// }

// let t1 = new Test("Anas");
// console.log(t1.value1);

// class Car {
//   readonly model: string = "Hundai";
// }

// let c1: Car = new Car();
// console.log(c1.model);

// class User {
//   // Instance Variables
//   public publicVar: string = "";
//   protected protectedVar: string = "";
//   private privateVar: string = "";

//   // Class Variables
//   public static publicStaticVar: string;

//   // Instance: Functions
//   public publicFunction() {}
//   private privateFunction() {}
//   protected protectedFunction() {}

//   // Class: Function
//   public static publicStaticFunction() {}
// }

// class Student extends User {
//   constructor() {
//     super();
//   }
// }

// let std1 = new Student();

// abstract class Car {
//   constructor(){}
//   public normalFunction(){}
//   public abstract abstractFunction(): any;
// }

// // let c1: Car = new Car();

// class Hundai extends Car {
//   public abstractFunction() {
//     console.log("Hello");
//   }

//   // override
//   normalFunction() {
//     super.normalFunction();
//   }
// }

// let c1: Car = new Hundai();
// c1.abstractFunction();

interface CrudOperations {
  create(): void;
  read(): void;
  update(): void;
  delete(): void;
}

abstract class Controller implements CrudOperations {
  create(): void {
    // console.log("Create")
  }
  read(): void {}
  update(): void {}
  delete(): void {}
}

class UserController extends Controller {}

let user1: Controller = new UserController();

user1.create();