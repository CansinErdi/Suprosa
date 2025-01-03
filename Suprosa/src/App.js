export default function App() {
    let todos = [];
  
    function addTodo() {
      const todoInput = document.getElementById('todo-input');
      if (todoInput.value.trim()) {
        todos.push(todoInput.value.trim());
        todoInput.value = '';
        renderTodos();
      }
    }
  
    function deleteTodo(index) {
      todos.splice(index, 1);
      renderTodos();
    }
  
    function renderTodos() {
      const todoList = document.getElementById('todo-list');
      todoList.innerHTML = todos
        .map(
          (todo, index) =>
            `<li>${todo} <button onclick="deleteTodo(${index})">Delete</button></li>`
        )
        .join('');
    }
  
    return `
      <h1>ToDo App</h1>
      <input id="todo-input" type="text" placeholder="Add a new task" />
      <button onclick="addTodo()">Add</button>
      <ul id="todo-list"></ul>
      <script>
        ${addTodo.toString()}
        ${deleteTodo.toString()}
        ${renderTodos.toString()}
      </script>
    `;
  }