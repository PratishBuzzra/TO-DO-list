const inputBox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
// const errorMsg = document.getElementById('errorMsg');
let addTask = ()=>{
    if(inputBox.value == ""){
        // errorMsg.style.display = "block";
        alert("Add Your Text First")
    }else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    // errorMsg.style.display = "none";
    let span = document.createElement('span')

    span.innerHTML = "\u00d7";
    
    li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

let mark = (e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        saveData();
       
    }

}


listcontainer.addEventListener('click', mark);
let saveData = ()=>{
    localStorage.setItem("data", listcontainer.innerHTML);
}
let showTask = ()=>{
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask();

