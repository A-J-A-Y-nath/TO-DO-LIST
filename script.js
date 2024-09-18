let inputBox = document.getElementById("input-box");
let set_btn = document.getElementById("set-btn");
let listContainer = document.querySelector(".list-container");
let editingItem = null;

set_btn.addEventListener('click',function () {
if (set_btn.value == 'set'){
    //if there is no data written
    if(inputBox.value == ''){
        return;
    }

    // creating oneData div element

    let oneData = document.createElement('div');
    oneData.className='oneData';

    //creating buttons div element inside oneData div element
    let buttons = document.createElement('div')
    buttons.className='buttons'

    // creating the element li

    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    
    //creating buttons

    let done = document.createElement('button');
    done.innerHTML = "&#x2713;"
    done.className = "done";
    done.style.color = "green";
    let cancel = document.createElement('button');
    cancel.innerHTML = "&#x274c;"
    cancel.className = "cancel";
    let edit = document.createElement('button');
    edit.innerHTML = "&#x270D"
    edit.className = "edit";

    // appending list,done,cancell,edit to buttons div element to represent one row with
    // one list data and 3 buttons in buttons div such as done cancel edit

 
    buttons.appendChild(done);
    buttons.appendChild(cancel);
    buttons.appendChild(edit);

    // appending list and buttons to oneData

    oneData.appendChild(li);
    oneData.appendChild(buttons);

    //appending oneData to listcontainer

    listContainer.appendChild(oneData);

    //defining functions

    done.addEventListener('click',function(){
        li.style.textDecoration = "line-through";
    })

    cancel.addEventListener('click', function(){
        oneData.remove();
    })

    edit.addEventListener('click',function(){
        inputBox.value = li.innerHTML;
        set_btn.value = 'ok';
        editingItem = li;
    })

inputBox.value = '';
}
else if(set_btn.value == 'ok'){
    if(editingItem){
        editingItem.innerHTML = inputBox.value;
        set_btn.value = 'set';
        inputBox.value = '';
    }

}
});