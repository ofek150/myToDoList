let toDoList = [];
const toDoListContainer = document.getElementById("to-do-list-container");

function loadToDoList(){
    toDoList = localStorage.getItem("myToDoList");
    toDoList = JSON.parse(toDoList);
    console.log(toDoList);
    if (toDoList==null){
        toDoList = [];
    }

    for(i in toDoList){
        addToDoItem(toDoList[i]);
    }
}

function clearList(){
    toDoList = [];
    localStorage.clear();
    toDoListContainer.innerHTML = "";
}

function addToDo(){

    const toDoInput = document.getElementById("to-do-input");
    toDoValue = toDoInput.value;
    if(toDoValue == ""){
        return;
    }

    toDoInput.value = "";
    toDoList.push(toDoValue);
    updateToDoList();
    addToDoItem(toDoValue);
}

function updateToDoList(){
    localStorage.setItem("myToDoList", JSON.stringify(toDoList));
}

function addToDoItem(value){
    const toDoItem = document.createElement('div');
    toDoItem.className = "to-do-item";
    toDoItem.innerHTML = value;

    // const removeToDo = document.createElement('button');
    // removeToDo.className = "remove-to-do-btn";

    // toDoItem.appendChild(removeToDo);
    toDoListContainer.appendChild(toDoItem);
}

window.onload = loadToDoList();



