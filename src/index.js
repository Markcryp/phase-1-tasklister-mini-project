document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const priorityInput = document.getElementById('priority-input');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get the task description and priority
      const taskDescription = taskInput.value.trim();
      const priority = priorityInput.value;

      if (taskDescription) {
          // Create a new list item
          const listItem = document.createElement('li');
          listItem.textContent = taskDescription;
          listItem.classList.add(priority);

          // Create a delete button
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.classList.add('delete');
          listItem.appendChild(deleteButton);

          // Add the list item to the task list
          taskList.appendChild(listItem);

          // Clear the input field
          taskInput.value = '';
      }
  });

  // Add event listener for task deletion
  taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
          const listItem = event.target.parentElement;
          taskList.removeChild(listItem);
      }
  });

  // Optional: Add event listener for marking tasks as completed
  taskList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
          event.target.classList.toggle('completed');
      }
  });
});
