import {addDoc,collection,auth,db,query,where,getDocs} from "./firebase.js"
console.log(auth)
async function getItems(){
    if(!auth.currentUser){
        return setTimeout(getItems,1000)
    }
    const items = await getDocs(query(collection(db,"tasks"),where("user","==",auth.currentUser.uid)))
    renderItems(items.docs.map(doc => doc.data()))
}

function renderItems(items){
    for (let item of items){
        renderItem(item)
    }
}

function renderItem(item){
    const todoItems = document.querySelector(".todo-items")

    const todoItem =document.createElement("div")
    todoItem.classList.add("todo-item")

    todoItem.textContent = item.task

    const todoItemComplete = document.createElement("input")
    todoItemComplete.type = "checkbox"
    todoItem.appendChild(todoItemComplete)

    todoItems.appendChild(todoItem)
}

async function addItem(event){
    event.preventDefault()

    const todoInput =document.getElementById("todo-input")
    const task = todoInput.value
    todoInput.value=""

    const newTaskData = {
        task:task,
        isComplete:false,
        user:auth.currentUser.uid
    }
    const newTask = await addDoc(collection(db,"tasks"),newTaskData)
    console.log("Document written with ID: ", newTask.id);
    renderItem(newTaskData)
}

function markCompleted(id){
 
}

getItems();
document.getElementById("newTaskForm").addEventListener("submit",addItem)