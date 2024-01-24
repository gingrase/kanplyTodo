import { newProject, getProject, getProjectStatus, getAllProjects, editProject, deleteProject } from './project.js';
import { newTodo, getTodo, getTodosProject, editTodo, deleteTodo, editTodosOfAProject } from './todo.js';
import { refreshContent } from './domGenerateContent.js';
import { resetModal } from './domGenerateModal.js';
import { addProjectToSidebar, editProjectInSidebar } from './domGenerateSidemenu.js';

function activateProjectDropdown(title) {
    document.getElementById("modalProjectDropdownContent").innerHTML = "";

    // fill dropdown
    getAllProjects().forEach(project => {
        const aProject = document.createElement('li');
            aProject.id = project.name;
            aProject.innerHTML = project.name;
            aProject.classList = "optionProject";
        document.getElementById("modalProjectDropdownContent").appendChild(aProject);
    })

    // select default
    if (title) {
        document.getElementById("titleTodoPartOfProject").innerHTML = title;
    } else {
        document.getElementById("titleTodoPartOfProject").innerHTML = "Défaut";
    };

    // activate the dropdown to select to which project the todo should be a part of
    document.querySelectorAll(".optionProject").forEach(element => {
        element.addEventListener(
            "click", function() {
                document.querySelectorAll('.optionProject').forEach(e => {e.classList.remove('selected');});
                element.classList.add('selected');
                document.getElementById("titleTodoPartOfProject").innerHTML = element.innerHTML;
            }
        );
    });
}

function activateTodoButton() {
    // activate the todo button (show the project selection dropdown)  
    document.getElementById("typeTodo").addEventListener(
        "change", function() {
            document.getElementById("modalFormInputTodoPartOfProject").style.display = "block";
        }
    );
}

function activateProjectButton() {
    // activate the project button (hide the project selection dropdown)  
    document.getElementById("typeProject").addEventListener(
        "change", function() {
            document.getElementById("modalFormInputTodoPartOfProject").style.display = "none";
        }
    );
}

function activateSaveButton(objectName, typeOfObject) {
    // activate the save button depending on the context (new or edit an object)
    document.getElementById("saveButton").addEventListener(
        "click", (e) => {

            // Get priority form modal form
            var priority;
            if (document.getElementById("priorityHigh").checked) {
                priority = "High";
            } else if (document.getElementById("priorityMed").checked) {
                priority = "Med";
            } else {
                priority = "Low";
            };

            // New project OR todo changed in project
            if ((document.getElementById("typeProject").checked) && ((!objectName) || (typeOfObject === "todo"))) {
                if (getProject(document.getElementById("objectTitle").value)) {
                    alert("Un projet possède le même titre et il ne peut pas y avoir deux projets portant le même titre.");
                } else {
                    newProject(
                        document.getElementById("objectTitle").value, 
                        document.getElementById("objectDes").value, 
                        document.getElementById("objectDueDate").value,
                        priority
                    );
                    addProjectToSidebar(document.getElementById("objectTitle").value); 
                    if (typeOfObject === "todo") {
                        deleteTodo(objectName);
                    }
                }

            // New todo OR project changed in todo
            } else if ((document.getElementById("typeTodo").checked) && ((!objectName) || (typeOfObject === "project"))) {
                if (getTodo(document.getElementById("objectTitle").value)) {
                    alert("Une tâche possède le même titre et il ne peut pas y avoir deux tâches portant le même titre.");
                } else if (objectName === "Défaut") {
                    alert('Le projet "Défaut" ne peut être modifié.');
                } else {
                    newTodo(
                        document.getElementById("objectTitle").value,
                        document.getElementById("objectDes").value,
                        document.getElementById("titleTodoPartOfProject").innerText,
                        document.getElementById("objectDueDate").value,
                        priority
                    );
                    const newTodosProjectName = getTodosProject(document.getElementById("objectTitle").value);
                    if (getProjectStatus(newTodosProjectName) === "completed") {
                        editProject(newTodosProjectName, "uncompleted");
                    }
                    if (typeOfObject === "project") {
                        document.getElementById("sidebarSubmenuItemProject"+objectName).parentNode.removeChild(document.getElementById("sidebarSubmenuItemProject"+objectName));   
                        deleteProject(objectName);
                        editTodosOfAProject(objectName, "Défaut");
                    }
                }

            // Edit an object without changing its type
            } else {
                var currentStatus;
                if (document.getElementById(objectName+"Checkbox").checked) 
                {
                    currentStatus = "completed"; 
                } else {
                    currentStatus = "uncompleted";
                }

                // Edit project
                if ((document.getElementById("typeProject").checked) && (typeOfObject === "project")) {
                    if (objectName === "Défaut") {
                        alert('Le projet "Défaut" ne peut être modifié.');
                    } else {
                        editProject(
                            objectName,
                            currentStatus,
                            document.getElementById("objectTitle").value, 
                            document.getElementById("objectDes").value, 
                            document.getElementById("objectDueDate").value,
                            priority
                        );
                        if (objectName != document.getElementById("objectTitle").value) {
                            editTodosOfAProject(objectName, document.getElementById("objectTitle").value);
                            editProjectInSidebar(objectName, document.getElementById("objectTitle").value);
                        }
                    }

                // Edit todo
                } else if ((document.getElementById("typeTodo").checked) && (typeOfObject === "todo")) {
                    editTodo(
                        objectName,
                        currentStatus,
                        document.getElementById("objectTitle").value,
                        document.getElementById("objectDes").value,
                        document.getElementById("titleTodoPartOfProject").innerText,
                        document.getElementById("objectDueDate").value,
                        priority
                    );
                }
            }

            refreshContent();
            resetModal();
            modal.style.display = "none";
            e.preventDefault();
        }
    );
}

function activateCloseButton() {
    // activate "Close" ("x")
    document.getElementById("closeModalButton").addEventListener(
        "click", (e) => {
            resetModal();
            modal.style.display = "none";
        }
    );
}

function activateModal(objectName, typeOfObject, projectName) {
    activateProjectDropdown(projectName);
    activateTodoButton();
    activateProjectButton();
    activateSaveButton(objectName, typeOfObject); 
    activateCloseButton();   
}

function activateModalEdit(objectName, typeOfObject) {
    resetModal(objectName, typeOfObject);
    modal.style.display = "block";
}

export {
    activateModal,
    activateModalEdit
}