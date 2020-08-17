// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners 
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    //DOM load event 
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task Event 
    form.addEventListener('submit', addTask)
    //remove task event 
    taskList.addEventListener('click', removeTask);
    //Clear task event 
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks event 
    filter.addEventListener('keyup', filterTasks);
}

//Get tasks from local storage 
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node and append to li 
        li.appendChild(document.createTextNode(task));
        // Create new link element 
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        //Add icon HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append the link to li 
        li.appendChild(link);

        //Append li to ul 
        taskList.appendChild(li);


    });
}

//Add Task 
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    //create li element 
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element 
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li 
    li.appendChild(link);

    //Append li to ul 
    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input 
    taskInput.value = '';

    e.preventDefault();
}

//Store Task 
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();

            //remove from ls 
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//remove from ls
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear tasks 
function clearTasks() {
    // taskList.innerHTML = ''; 

    //Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    //clear from ls 
    clearTasksFromLocalStorage();
}

//clear tasks from ls 
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

//Filter tasks 
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

}