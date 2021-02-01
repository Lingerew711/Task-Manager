// Define UI Variables 

const taskInput = document.querySelector('#task');               //the task input text field
const form = document.querySelector('#task-form');             //The form at the top
const filter = document.querySelector('#filter');                      //the task filter text field
const taskList = document.querySelector('.collection');          //The ul
const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button
const reloadIcon = document.querySelector('.fa');           //the reload button at the top right of navigation
// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

function deleteMessage() {
    message.style.display = "none";
}

function addNewTask(e){
    // alert("Add new task");
    e.preventDefault(); //disable form submission
    if(taskInput.value === ""){
        taskInput.style.borderColor = "red";
        alert("Please fill out the required task")
        return;
        
    }
    deleteMessage();
    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);
    taskInput.value = ""; //clearing the input
    deleteMessage();

}

 
function clearAllTasks(){
    //This is the first way
    // taskList.innerHTML = "";
   //  Second Way 
   while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
}

}
function filterTasks(e){
    /*  
      Instruction for Handling the Search/filter 
      
      1. Receive the user input from the text input 
      2. Assign it to a variable so the us can reuse it 
      3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
      4. Iterate over the collection item Node List using forEach
      5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
      6 . If it contains , change the display content of the element as block , else none      
      */ 
     let searchedFor = filter.value //make it lower case

     let AllTasks = document.querySelectorAll('.collection-item')
 
     AllTasks.forEach(function (task) {
         taskTextContent = task.textContent
         let searchResult = taskTextContent.indexOf(searchedFor.toLowerCase())
         
        if (searchResult == -1){
             task.style.display = "none"
         }else{
             task.style.display = "block"
         }
     })
}
// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
         }

    }

}
// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}






