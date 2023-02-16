const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

function addTask(task){
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> <span>${task}</span><button>Delete</button>`;
    taskList.append(listItem);
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.value;
    addTask(task);
    input.value = '';
})

taskList.addEventListener('click', (event)=>{
    const target = event.target;
    if(target.tagName === 'BUTTON'){
        const listItem = target.parentElement;
        taskList.removeChild(listItem);
    } else if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const taskText = target.nextElementSibling;
        taskText.classList.toggle('completed');
    }
});
