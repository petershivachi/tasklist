//create ui varriables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const ul = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

//function to load all the event listeners
loadEventListeners();

//create function to load all the vebt listeners
function loadEventListeners(){

document.addEventListener('DOMContentLoaded', getTasks)

  //add a task event
form.addEventListener('submit', addTask)

//remove a task event
ul.addEventListener('click', removeTask)

//clear tasks event
clearBtn.addEventListener('click', clearTasks);

//filter tasks event
filter.addEventListener('keyup', filterTasks)
}

//get tasks from LS
function getTasks(){
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } 

  tasks.forEach(function(task){
    // create an li element

  const li = document.createElement('li');

  //Give a classname to the li
  li.className = 'collection-item';

  //create value and append to the child
  li.appendChild(document.createTextNode(task));

  //create link element
  const link = document.createElement('a');

  //add a class to the link
  link.className = 'delete-item secondary-content';

  //add the <i> tag to the link
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  //append the li to the ul
  li.appendChild(link);

  //append the li
  // console.log(li)
  ul.appendChild(li);
  })
}

//create event listeners
function addTask(e){
  if(taskInput.value === ''){
    alert(' Add a task ')
  }
  // create an li element

  const li = document.createElement('li');

  //Give a classname to the li
  li.className = 'collection-item';

  //create value and append to the child
  li.appendChild(document.createTextNode(taskInput.value));

  //create link element
  const link = document.createElement('a');

  //add a class to the link
  link.className = 'delete-item secondary-content';

  //add the <i> tag to the link
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  //append the li to the ul
  li.appendChild(link);

  //append the li
  //console.log(li)
  ul.appendChild(li);

  //Store in LS
  storeInLocalStorage(taskInput.value);

  e.preventDefault(li);
}


//storeTasks function
function storeInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')  === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } 

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log(e.target);
    if(confirm('Are you sure ?')){
      e.target.parentElement.parentElement.remove();
    }
  }

  removeFromLocalStorage(e.target.parentElement.parentElement);
  
}

//remove task from LS
function removeFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index)=>{
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clearTasks()
function clearTasks(){
 // ul.innerHTML = '';

  //Faster
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }

  //clear from LS
  clearTasksFromLocalStorage();
}

//clearTasks from LS
function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//filterTasks()
function filterTasks(e){
const text = e.target.value.toLowerCase();


document.querySelectorAll('.collection-item').forEach((task)=>{
  const item = task.firstChild.textContent;
  if (item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block';
  }else {
    task.style.display = 'none';
  }
});
}

