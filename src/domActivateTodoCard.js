import { editTodo, deleteTodo, getTodosProject, getTodosOfAProject } from './todo.js';
import { refreshContent } from './domGenerateContent.js';
import { activateModalEdit } from './domActivateModal.js';
import { editProject } from './project.js';

function activateCheckbox() {
    document.querySelectorAll('.cardTodoCheckbox').forEach(e => {
        e.addEventListener(
            "change", function() {
                const todosName = e.id.slice(0, -8);
                const todosProjectName = getTodosProject(todosName);
                if (e.checked) {
                    editTodo(todosName, "completed");
                    document.getElementById("cardTitle"+todosName).classList.add("cardCompleted");
                    if (getTodosOfAProject(todosProjectName).filter((e) => e.status == "uncompleted").length == 0) { 
                        editProject(todosProjectName, "completed"); 
                    }
                } else {
                    editTodo(todosName, "uncompleted");
                    document.getElementById("cardTitle"+todosName).classList.remove("cardCompleted");
                    editProject(todosProjectName, "uncompleted");
                }
                refreshContent();
            }
        );
    });
}

function activateTodoTrashIcons() {
    document.querySelectorAll('.cardTodoTrashIcon').forEach(e => {
        e.addEventListener(
            "click", function() {
                deleteTodo(e.id.slice(11));
                refreshContent();
            }
        );
    });
}

function activateTodoCard() {
    document.querySelectorAll('.cardTodoTitle').forEach(e => {
        e.addEventListener(
            "click", function() {
                activateModalEdit(e.id.slice(9), "todo");
            }
        );
    });
}

function activateTodoCards () {
    activateTodoCard();
    activateCheckbox();
    activateTodoTrashIcons();
}

export {
    activateTodoCards
};