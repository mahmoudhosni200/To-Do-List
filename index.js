const InputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

InputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask(){
    if(InputBox.value === ''){
        alert("Please Enter The Task!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u2717";
        li.appendChild(span)
    }
    InputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showListt()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showListt();    