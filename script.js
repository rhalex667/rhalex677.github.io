
let tasks = [1

];


function renderTasks() {
    const tasksGrid = document.querySelector('.tasks-grid');
    tasksGrid.innerHTML = '';

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        taskCard.innerHTML = `
            <span class="task-status">${task.status}</span>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <div class="task-date">Entrega: ${task.dueDate}</div>
        `;
        tasksGrid.appendChild(taskCard);
    });
}


const modal = document.getElementById('taskModal');
const addButton = document.querySelector('.add-task-btn');

addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

function closeModal() {
    modal.style.display = 'none';
}


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const newTask = {
        id: tasks.length + 1,
        title: formData.get('lowdata'),
        description: formData.get('description'),
        dueDate: formData.get('dueDate'),
        subject: formData.get('subject'),
        status: formData.get('status')
    };
    tasks.push(newTask);
    renderTasks();
    closeModal();
    taskForm.reset();
});

renderTasks();