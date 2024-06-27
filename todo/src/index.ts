import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection: TodoCollection = new TodoCollection ("Adam", todos);

let newid: number = collection.addTodo("Go for run"); 
let todoltem: TodoItem = collection.getTodoById(newid); 
todoltem.printDetails(); 