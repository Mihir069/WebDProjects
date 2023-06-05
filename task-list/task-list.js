const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
    //Remove Task event
    taskList.addEventListener('click',removeTask);
    //clear task event 
    clearBtn.addEventListener('click',clearTask);
    //filter Task event
    filter.addEventListener('keyup',filterTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }
    console.log(taskInput.value);

    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));


    taskList.appendChild(li);

    taskInput.value = ' ';
    console.log(li);

    e.preventDefault();
}
//remove Task
// function removeTask(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
//         e.target.parentElement.parentElement.remove();
//     }
// }
//clear task
function clearTask(e){
    //taskList.innerHTML ='';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
// forEach(function(){
//     if(/*..*/){
//         //Block of Statement.
//     }
// });
// function filterTask(e){
//     const text = e.target.value.lowerCase();

//     document.querySelectorAll('.collection-item').forEach(function(Task){
//         const item = Task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text)!=-1){
//             Task.style.display = 'block';
//         }
//         else{
//             Task.style.display = 'none';
//         }
//     });
// }