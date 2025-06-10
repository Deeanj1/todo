todo
// console.log(document.getElementById('inputbox'))

function addNewTask() {
 let inputbox = document.getElementById('inputbox');

//  console.log(inputbox.value);

//  document.getElementById('task').textContent = inputbox.value;

let newTask = document.createElement('li');
newTask.textContent = inputbox.value;
document.getElementById('tasklist').appendChild(newTask);
inputbox.value = ''; // Clear the input box after adding the task

newTask.onclick

newTask.addEventListener('click', function() {
    newTask.style.textDecoration = 'line-through';
    newTask.style.color = 'red';
    
  });


}