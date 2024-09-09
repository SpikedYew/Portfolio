document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasksContainer');
    const addButton = document.getElementById('addButton');

    // Load tasks from localStorage
    loadTasks();

    addButton.addEventListener('click', function() {
        if (taskInput.value.trim() !== "") {
            addTask(taskInput.value);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerText = taskText;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', function() {
            tasksContainer.removeChild(task);
            saveTasks();
        });

        task.appendChild(deleteButton);
        tasksContainer.appendChild(task);
        
        saveTasks();
    }
    // LocalStorage functions to save tasks and load them on user PC
    
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task').forEach(task => {
            tasks.push(task.innerText.replace('Delete', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(taskText => {
                addTask(taskText);
            });
        }
    }
});
