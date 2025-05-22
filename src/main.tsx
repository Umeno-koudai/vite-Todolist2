interface Todo{
  id: number,
  text: string,
}

let newTodo = document.getElementById('input-text') as HTMLInputElement;
let todoList = document.getElementById('task-list') as HTMLUListElement;
let addButton = document.getElementById('add-button') as HTMLButtonElement;

let todos: Todo[] = [];
let currentId = 0;

function reloadTodo(): void{

  todoList.innerHTML = '';
  todos.forEach((todo) => {
    let li = document.createElement('li');

    let content = document.createElement('p');
    content.textContent = todo.text;
    content.className = 'todo';

    let deleteButton = document.createElement('button');
    deleteButton.classList = 'delete-button'
    deleteButton.innerHTML = '削除';

    deleteButton.addEventListener('click', () => {
      todos = todos.filter(item => {
        item.id !== todo.id;
        console.log(item.id);
      });
      reloadTodo();
    })

    li.appendChild(content);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
  })
}

function addButtonEvent(): void{
  const inputText = newTodo.value.trim();
  if(inputText !== ''){
    let addTodo: Todo = {
      id: todos[todos.length-1].id + 1,
      text: inputText
    }
    console.log(addTodo.id);
    todos.push(addTodo);
    newTodo.value = '';
    reloadTodo();
  }
}

addButton.addEventListener('click', addButtonEvent);