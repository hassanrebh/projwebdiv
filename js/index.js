import {addDoc,collection,doc,auth,db,query,where,getDocs,updateDoc} from "./firebase.js"

async function getItems(){
    if(!auth.currentUser){
        return setTimeout(getItems,1000)
    }
    const items = await getDocs(query(collection(db,"tasks"),where("user","==",auth.currentUser.uid)))
    renderItems(items.docs.map(doc => ({id:doc.id,...doc.data()})))
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
    todoItemComplete.addEventListener("click",(event)=>{
        // event.target.checked
        console.log(item)
        updateDoc(doc(db,"tasks",item.id),{
            isComplete:event.target.checked
        })
    })
    todoItemComplete.checked = item.isComplete
    todoItem.appendChild(todoItemComplete)

    const todoItemSpeak = document.createElement("button")
    todoItemSpeak.textContent= "listen"
    todoItemSpeak.addEventListener("click",(event)=>{
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'en-US';
        utter.text = item.task;
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);
    })
    todoItem.appendChild(todoItemSpeak)

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
    renderItem({id:newTask.id,...newTaskData})
}

function markCompleted(id){
 
}

getItems();
document.getElementById("newTaskForm").addEventListener("submit",addItem)