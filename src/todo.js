import { storeTodo, editTodoInStorage, removeTodoFromStorage, retrieveAllTodosFromStorage } from './todoStorage.js';

var todos = (function() {
    'use strict';

    const todoFactory = (name, description, project, dueDate, priority, status) => {
        return { name, description, project, dueDate, priority, status };
    };    

    var _todoList = [];

    function _addTodo(name, description, project, dueDate, priority) {
        const newTodo = todoFactory(name, description, project, dueDate, priority, "uncompleted");
        storeTodo(newTodo);
        _todoList.push(newTodo);
    }

    function addTodo(name, description, project, dueDate, priority) {
        _addTodo(name, description, project, dueDate, priority);
    }

    function _retrieveTodoId(name) {
        return _todoList.map(e => e.name).indexOf(name);
    }

    function _getTodo(name) {
        return _todoList[_retrieveTodoId(name)];
    }

    function getTodo(name) {
        return _getTodo(name);
    }

    function _editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority) {
        const index = _retrieveTodoId(name);
        if (_todoList[index].status != newStatus) { 
            _todoList[index].status = newStatus;
        } else {
            _todoList[index] = todoFactory(newName, newDescription, newProject, newDueDate, newPriority, newStatus);
        }
        editTodoInStorage(name, _todoList[index]);
    }

    function editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority) {
        _editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority);
    }

    function _removeTodo(name) {
        removeTodoFromStorage(name);
        _todoList.splice(_retrieveTodoId(name), 1);
    }

    function removeTodo(name) {
        _removeTodo(name);
    }

    function _getTodosProject(todoName) {
        return getTodo(todoName).project;
    }

    function getTodosProject(todoName) {
        return _getTodosProject(todoName);
    }

    function _getTodosOfAProject(projectName) {
        return _todoList.filter((e) => e.project == projectName);
    }

    function getTodosOfAProject(projectName) {
        return _getTodosOfAProject(projectName);
    }

    function _editTodosOfAProject(oldProjectName, newProjectName) {
        _todoList.filter((e) => e.project == oldProjectName).forEach((todo) => {todo.project = newProjectName; editTodoInStorage(oldProjectName, todo);});
    }

    function editTodosOfAProject(oldProjectName, newProjectName) {
        _editTodosOfAProject(oldProjectName, newProjectName);
    }

    function getTodoList() {
        return _todoList;
    }

    function loadTodos() {
        _todoList.push(...retrieveAllTodosFromStorage());
    }
   
    return {
        addTodo: addTodo,
        getTodo: getTodo,
        editTodo: editTodo,
        removeTodo: removeTodo,
        getTodosProject: getTodosProject,
        getTodosOfAProject: getTodosOfAProject,
        editTodosOfAProject: editTodosOfAProject,
        getTodoList: getTodoList,
        loadTodos: loadTodos
    };
})();

function newTodo (name, description, project, dueDate, priority) {
    todos.addTodo(name, description, project, dueDate, priority);
}

function editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority) {
    todos.editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority);
}

function getTodo(name) {
    return todos.getTodo(name);
}

function deleteTodo(name) {
    todos.removeTodo(name);
}

function getTodosProject(todoName) {
    return todos.getTodosProject(todoName);
}

function getTodosOfAProject(projectName) {
    return todos.getTodosOfAProject(projectName);
}

function editTodosOfAProject(oldProjectName, newProjectName) {
    todos.editTodosOfAProject(oldProjectName, newProjectName);
}

function getAllTodos() {
    return todos.getTodoList();
}

function loadAllTodos() {   
    todos.loadTodos();
}

export {
    newTodo,
    editTodo,
    getTodo,
    deleteTodo,
    getTodosProject,
    getTodosOfAProject,
    editTodosOfAProject,
    getAllTodos,
    loadAllTodos
}