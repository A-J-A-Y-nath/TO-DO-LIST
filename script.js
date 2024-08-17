

var btn = document.getElementById("btn");
btn.addEventListener("click",addTask);

function addTask(){
    var inputbox = document.getElementById("textbox");
    task=inputbox.value;
    if(task=='') return;

    var ul = document.getElementById("list_values");
    var listItem = document.createElement("li");
    listItem.innerHTML=task;
    listItem.className='list';
    var divList = document.createElement("div")
    divList.className = 'myList';
    divList.appendChild(listItem);
    ul.appendChild(divList);
    var button1= document.createElement("button");
    button1.className='button1'
    button1.innerHTML = "&#x2713;";
    divList.appendChild(button1);
    var button2= document.createElement("button");
    button2.innerHTML = "&#x274c;";
    button2.className='button2';
    divList.appendChild(button2);
    let btn1=document.getElementsByClassName("button1");
    let btn2=document.getElementsByClassName("button2");
    for(let i=0;i<btn1.length;i++){
        btn1[i].addEventListener("click",done);
        btn2[i].addEventListener("click",remove);
        function done(){
            var list = document.getElementsByClassName("list");
            list[i].style.textDecoration = "line-through";
        }
        function remove(){
            let myList = document.getElementsByClassName("myList");
            myList[i].remove();
           
        }
    } 
    inputbox.value='';
}




