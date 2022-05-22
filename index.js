let todos = [];

function addTodo (text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    };

    todos.push(todo);
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    });
}

function render() {
    console.log(todos);
}

addTodo('Buy bread');
render();