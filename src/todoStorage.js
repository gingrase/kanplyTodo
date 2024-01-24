function storeTodo (todo) {   
    var newTodoIndex = retrieveNextTodoIndexFromStorage();
        if (newTodoIndex) {
            storeNextTodoIndex(newTodoIndex+1);             
        } else {
            storeNextTodoIndex(1);
            newTodoIndex = 0;
        }
    localStorage.setItem('Todo_'+newTodoIndex, JSON.stringify(todo));
}

function storeNextTodoIndex (index) {
    localStorage.setItem('Next_Todo_Index', JSON.stringify(index));
}

function findTodoInStorage (name) {
    const lastTodoIndex = retrieveNextTodoIndexFromStorage();
    var todoToFind;
    for (let i = 0; i < lastTodoIndex; i++) {
        const todo = retrieveTodoFromStorage(i);
        if (todo) {
            if (todo.name == name) {
                todoToFind = i;
            }
        }
    };
    return todoToFind;
}

function editTodoInStorage (name, todoToEdit) {
    localStorage.setItem('Todo_'+findTodoInStorage(name), JSON.stringify(todoToEdit));
}

function retrieveTodoFromStorage (todoId) {
    return JSON.parse(localStorage.getItem('Todo_'+todoId));
}

function retrieveNextTodoIndexFromStorage () {
    return JSON.parse(localStorage.getItem('Next_Todo_Index'));
}

function removeTodoFromStorage (name) {
    const todoToRemoveFromStorage = findTodoInStorage(name);    
    if (todoToRemoveFromStorage) {
        localStorage.removeItem('Todo_'+todoToRemoveFromStorage);
    }
}

function retrieveAllTodosFromStorage () {
    const todos = [];
    const lastTodoIndex = retrieveNextTodoIndexFromStorage();
    var todosIndex = 0;
    for (let i = 0; i < lastTodoIndex; i++) {
        const todo = retrieveTodoFromStorage(i);
        if (todo) {
            todos[todosIndex++] = todo;
        }
    };
    return todos;
}

export {
    storeTodo,
    editTodoInStorage,
    removeTodoFromStorage,
    retrieveAllTodosFromStorage
}