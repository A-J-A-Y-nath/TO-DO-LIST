

var btn = document.getElementById("btn");
btn.addEventListener("click",addTask);

function addTask(){
    var task = document.getElementById("textbox").value;
    if(task=='') return;
    var ul = document.getElementById("list_values");
    var list = document.createElement("li");
    list.innerHTML=task;
    ul.appendChild(list);
}

