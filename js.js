const todos = document.querySelectorAll('.task');
const all_statuses = document.querySelectorAll('.swim-lane');
let draggableTodo = null;

todos.forEach(todo => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
});

/// this o day la lay doi tuong ra
function dragStart() {
    draggableTodo = this;

    console.log('dragStart');
}

/// this o day ket thuc doi tuong
function dragEnd() {
    draggableTodo = null;
    console.log('dragEnd');
}

all_statuses.forEach(status => {
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
});

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.background = '#ccc';
    console.log('dragEnter');
}
function dragLeave() {
    this.style.background = 'white';
    console.log('dragLeave');
}

function dragDrop() {
    this.style.background = 'white';
    this.appendChild(draggableTodo);
    console.log('dragLeave');
}

const todo_submit = document.getElementById('todo_submit');

todo_submit.addEventListener('click', createTodo);

function createTodo(e) {
    e.preventDefault();
    const todo_div = document.createElement('div');
    const input_val = document.getElementById('todo-input').value;
    const txt = document.createTextNode(input_val);

    if (!input_val) {
        alert('vui long nhap mon hoc');
        return false;
    }

    todo_div.appendChild(txt);
    todo_div.classList.add('task');
    todo_div.setAttribute('draggable', 'true');

    const span = document.createElement('span');
    const span_txt = document.createTextNode('\u00D7');
    span.classList.add('close');
    span.appendChild(span_txt);

    todo_div.appendChild(span);

    todo_lane.appendChild(todo_div);

    span.addEventListener('click', () => {
        span.parentElement.remove();
    });

    console.log(todo_div);

    todo_div.addEventListener('dragstart', dragStart);
    todo_div.addEventListener('dragend', dragEnd);

    document.getElementById('todo-input').value = '';
}

const close_btns = document.querySelectorAll('.close');

close_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
    });
});
