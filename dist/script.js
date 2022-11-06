"use strict";
// Type Script - TS
// Data Types: boolean, number, string
// Types Special Values: undefined, null
// Special Types: any, unknown
class Controller {
    create() {
        // console.log("Create")
    }
    read() { }
    update() { }
    delete() { }
}
class UserController extends Controller {
}
let user1 = new UserController();
user1.create();
