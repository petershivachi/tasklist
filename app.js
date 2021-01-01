//create ui varriables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const ul = document.querySelector('.collection');
const filterItems = document.querySelector('#filter');

//function to load all the event listeners
loadEventListeners();

//create function to load all the vebt listeners
function loadEventListeners(){

form.addEventListener('submit', addTask)

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
  li.appendChild(link)

  //append the li
  console.log(li)
ul.appendChild(li);

  e.preventDefault(li);
}