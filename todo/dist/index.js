"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_js_1 = require("./todoItem.js");
const todoCollection_js_1 = require("./todoCollection.js");
let todos = [
    new todoItem_js_1.TodoItem(1, "Buy Flowers"), new todoItem_js_1.TodoItem(2, "Get Shoes"),
    new todoItem_js_1.TodoItem(3, "Collect Tickets"), new todoItem_js_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_js_1.TodoCollection("Adam", todos);
let newid = collection.addTodo("Go for run");
let todoltem = collection.getTodoById(newid);
todoltem.printDetails();
// collection.addTodo(todoltem);
