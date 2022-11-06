"use strict";
let theName = "Anas";
let theAge = 24;
let hire = true;
let all = "Anas Ali Banat";
let myFriends = ["Anas", "Adham", "Mohammed"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, 2, 3, 4, 5, "A", "B", "C"];
let arrayFour = [
    1,
    2,
    4,
    5,
    6,
    "A",
    "B",
    "V",
    ["X", "Y", "Z"],
    [true, false],
];
let showMsg = true;
function showDetails(name, age, salary) {
    if (showMsg) {
        return `Hello ${name}, Age is ${age}, Salary is ${salary}`;
    }
}
console.log(showDetails("Anas", 24, 1000));
function showData(name = "Anas", age = 24, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("Anas", 24, "Palestine"));
const changeColor = (selectors, color, exclude) => {
    document
        .querySelectorAll(`${selectors}:not(${exclude})`)
        .forEach((selector) => {
        selector.style.color = color;
    });
};
// This will change the color of the paragraph to red that doesn't have the class "test"
changeColor("p", "red", ".test");
// This will change the color of the anchors to green that doesn't have the class primary
changeColor("a", "green", ".primary");
/**
 * Function
 * - Rest Parameters
 * - What About Float => All Is Under Type Number
 **/
function addAll(...nums) {
    let result = 0;
    // for(let i = 0; i < nums.length; i++) {
    //   result += nums[i];
    // }
    nums.forEach((num) => (result += num));
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
/**
 * Function
 * - Anonymous Function
 * - Arrow Function
 **/
const addAnonymousFunction = function (num1, num2) {
    return num1 + num2;
};
console.log(addAnonymousFunction(20, 30));
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(20, 40));
let theName1 = "Anas";
theName1 = "Aseel";
theName1 = "Arkan";
console.log(theName1);
let all1 = 10;
all1 = 100;
all1 = "Anas";
console.log(all1);
function getActions(btns) {
    console.log(`Actions For Button Up Is ${btns.up}`);
    console.log(`Actions For Button Right Is ${btns.right}`);
    console.log(`Actions For Button Down Is ${btns.down}`);
    console.log(`Actions For Button Left Is ${btns.left}`);
    console.log(`Actions For Button X Is ${btns.x}`);
}
getActions({
    up: "Jumb",
    right: "Go Right",
    down: "Go Down",
    left: "Go Left",
    x: true,
});
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
/**
 * Data Types
 * - Tuple
 * --- Is Another Sort Of Array Type
 * --- We Knows Exactly How Many Elements It Contains
 * --- We Knows Which Types It Contains At Specific Positions
 **/
let article = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
/**
 * Data Types
 * - Void
 * --- Function That Will Return Nothing
 * --- Function In JavaScript That Not Return A Value Will Show undefined
 * --- undefined is Not void
 * - Never
 * --- Return Type Never Returns
 * --- The Function Doesn't Have A Normal Completion
 * --- It Throws An Error Or Never Finished Running At All "Infinite Loop"
 **/
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("I am A Message"));
const fail = (msg) => {
    throw new Error(msg);
    return;
};
/**
 * Data Types
 * - Enums => Enumerations
 * --- Allow Us To Declare A Set Of Named Constants
 * --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
 * --- It Organize Your Code
 * --- By Default Enums Are Number-Based, First Element Is 0
 * --- There's A Numeric Enums
 * --- There's A String-Based Enums
 * --- There's Heterogeneous Enums [String + Number]
 * -- Enum Can Refer To Other Enum
 * -- Enum Can Refer To Same Enum
 * -- Enum Can Have Calculations
 * -- Enum Can Have Functions
 **/
// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
/**
 * Data Types
 * - Type Assertions
 * --- Sometimes Compiler Doesn't Know The Information We Do
 * --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
 **/
// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement>document.getElementById("my-img");
// console.log(myImg.src);
// let data: any = 1000;
let data = "1000";
console.log(data.repeat(3));
function getActionss(btn) {
    console.log(`Hello ${btn.one}`);
    console.log(`Hello ${btn.two}`);
    console.log(`Hello ${btn.three}`);
    console.log(`Hello ${btn.five}`);
}
getActionss({ one: "String", two: 100, three: true, five: true });
/**
 * Type Annotations With Object
**/
let myObject = {
    username: "Anas",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS",
    }
};
// myObject.username = "Aseel";
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills);
console.log(myObject.skills.one);
console.log(myObject.skills.two);
let user = {
    id: 100,
    username: "Anas",
    country: "Palestine",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
user.country = "Syria";
console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
let user2 = {
    id: 100,
    username: "Anas",
    country: "Palestine",
    role: "Mod",
    protect: true,
};
console.log(user2.id);
console.log(user2.role);
console.log(user2.protect);
/**
 * Type Annotations With Class
**/
class User3 {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.u} Your Salary Is ${this.s}`;
        };
    }
    sayMsg() {
        return `hello ${this.u} Your Salary Is ${this.s}`;
    }
}
let userOne = new User3("Anas", 1000);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
/**
 * Class
 * - Data Access Modifiers & Parameters Properties
 * --- Public
 * ------ All Members Of A Class In TypeScript Are Public
 * ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
 * --- Private
 * ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
 * --- Protected
 * ------ Same Like Private But Can Be Accessed Using The Deriving Class
 *
 * - TypeScript Is A Layer On Top Of JavaScript
 * - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
**/
class User4 {
    constructor(_username, salary, address) {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        // this.username = username;
        // this.salary = salary;
        this.msg = () => {
            return `Hello ${this._username} Your Salary Is ${this.salary} Your Address Is ${this.address}`;
        };
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary Is ${this.salary} Your Address Is ${this.address}`;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
}
let userTwo = new User4("Anas", 1000, "Gaza");
console.log(userTwo.username);
userTwo.username = "Aseel";
console.log(userTwo.username);
console.log(userTwo.salary);
console.log(userTwo.msg());
console.log(userTwo.sayMsg());
/**
 * Class
 * - Static Members
 * --- Don't Use "name, length, call"
**/
class User5 {
    constructor(username) {
        this.username = username;
        User5.created++;
    }
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
}
User5.created = 0;
let u1 = new User5("Anas");
let u3 = new User5("Ali");
let u2 = new User5("Banat");
// console.log(User5.created);
User5.getCount();
class User6 {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let userThree = new User6("Anas", true, "Open Sans");
console.log(userThree.username);
console.log(userThree.font);
userThree.save();
userThree.update();
/**
 * Class
 * - Abstract Classes And Members
 * --- We Cannot Create An Interface Of An Abstract Class
**/
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Pizza Is One Hour`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Burger Is Half Hour`);
    }
}
let pizzaOne = new Pizza(`Awesome Pizza`, 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
/**
 * Class
 * - Polymorphism & Method Override
 *
 * - Ploymorphism
 * --- Classes Have The Same Methods But Different Implementations
 *
 * - Method Override
 * --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
 * --- A Method In Child Class must HaVe Same Name As Parent Class
 *
 * --- noImplicitOverride
**/
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking Now`);
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        // super.attack();
        console.log(`Attacking With Spear`);
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        // super.attack();
        console.log(`Attacking With Axe`);
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian("Anas", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
/**
 * Generics
 * - Help Write A Reusable Code
 * - Allow To Pass Type As A Parameter To Another Type
 * - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
 * - We Can Create:
 * --- Generic Classes
 * --- Generic Functions
 * --- Generic Methods
 * --- Generic interfaces
**/
function returnNumber(val) {
    return val;
}
function returnString(val) {
    return val;
}
function returnBoolean(val) {
    return val;
}
console.log(returnNumber(100));
console.log(returnString("Anas"));
console.log(returnBoolean(true));
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("Anas"));
console.log(returnType(true));
console.log(returnType([1, 2, 3, 4]));
/**
 * Generics
 * - Arrow Function
 * - Multiple Types
 * - Discussions
**/
function returnGeneric(val) {
    return val;
}
console.log(returnGeneric(100));
console.log(returnGeneric("Anas"));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Anas"));
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("Anas"));
function multipleType(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value Is ${valueTwo}`;
}
console.log(multipleType("Anas", 100));
console.log(multipleType("Anas", true));
/**
 * Generics
 * - Classes
**/
class User7 {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let userFour = new User7("Anas");
console.log(userFour.value);
userFour.show(`Message`);
let userFive = new User7(100);
console.log(userFive.value);
userFive.show(`Message`);
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 1920 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 1080 });
console.log(itemOne);
console.log(itemOne.data);
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
console.log(itemTwo.data);
/**
 * How To Continue
 * Practice
 * Other Topics Not In Course
 * JSDocs
 * TsConfig
**/ 
