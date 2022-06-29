let input = document.querySelector('#newtask input')
let add = document.getElementById('push')
add.addEventListener('click',push)
let tasks;
function push(event){
    // debugger
    if(input.value.length === 0){
        alert('please enter a anything')
    }
    else{
         tasks = document.getElementById('tasks')
        tasks.innerHTML += `<div class="task">
        <span id = "taskname">${input.value}</span>
        <button class="delete">X</button>
    </div>`
   
    let btndelete = document.getElementsByClassName('delete')
    for(let i = 0;i<btndelete.length;i++){
        btndelete[i].onclick = function (event){
            // debugger
            this.parentNode.remove()
        } 
      }
      let t = document.querySelectorAll('#taskname')
      for(let i = 0;i<t.length;i++){
        t[i].onclick = function (){
            debugger
            this.classList.toggle('completed')
        }
      }
    }
}


