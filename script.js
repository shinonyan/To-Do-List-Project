const inputBox = document.getElementById('input');
const listcontainer = document.getElementById('list-container');

function AddTask(){
    if(inputBox.value === ''){
        alert("Insert atleast one task!");
    }
    else{
        let li = document.createElement("li");
        //creating an html element with a tagname li & storing it in 'li' var
        li.innerHTML = inputBox.value;
        //in li we have to add text too, the text we have added in input field
        listcontainer.appendChild(li);
        //the li should be displayed in the listcontainer
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //code for 'x' icon
        //adding x icon in span tag
        li.appendChild(span);
        //displaying span tag and adding CSS next part
    }
    //to clear input field after adding text
    inputBox.value = "";
    saveData();
}

//code or click function //check or uncheck //click x to delete task
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //will remove the parent Element LI so the task will be deleted
        saveData();
    }
}, false);

//to store the values in browser even after refreshing

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
    //...we can display this with localStorage.getItem("data, listcontainer.innerHTML") 
    //...data in listcontainer will be stored w 'data' name in browser
    //...call saveData everytime we add any changes
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();