function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
loadTodos();

function displayTodos(todos){
    const todosContainer = document.getElementById('todos-container');
    // console.log(todosContainer);
    for(const todo of todos){
        const p = document.createElement('p');
        p.innerText= todo.title;
        todosContainer.appendChild(p);
    }
}