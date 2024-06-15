document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        span.addEventListener('click', () => {
          span.parentElement.classList.toggle('completed');
        });
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          li.remove();
        });
  
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
  
        taskInput.value = '';
      }
    };
  
    addTaskButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });