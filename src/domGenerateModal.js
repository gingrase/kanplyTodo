import { createDiv } from './domGenerateHTMLElement';
import { activateModal } from './domActivateModal';
import { getTodo } from './todo.js';
import { getProject } from './project.js';

function generateModal () {
    const modal = createDiv("modal", "modal", "");
        const modalContainer = createDiv("modalContainer", "modalContainer", "");
            const modalHeader = createDiv("modalHeader", "", "");
                const modalTitle = createDiv("modalTitle", "", " ");
            modalHeader.appendChild(modalTitle);
                const closeModal = createDiv("closeModal", "", "");
                    const closeModalButton = document.createElement('button');
                        closeModalButton.classList = "closeModalButton";
                        closeModalButton.id = "closeModalButton";           
                        closeModalButton.innerHTML = "&times;";
                closeModal.appendChild(closeModalButton);
            modalHeader.appendChild(closeModal);
        modalContainer.appendChild(modalHeader);

            const modalForm = document.createElement('form');
                modalForm.id = "modalForm";
                modalForm.setAttribute("action", " ");
                modalForm.setAttribute("method", "get");
                modalForm.classList = "modalForm";
                modalForm.setAttribute("onkeydown", "return event.key != 'Enter';");

                const modalFormFieldset = createDiv("modalForm-fieldset", "", "");      
                    const modalFormInputTypeOf = createDiv("modalForm-inputSelection", "", "");
                        const labelTypeOfProject = document.createElement('label');            
                            const inputTypeOfProject = document.createElement('input');
                                inputTypeOfProject.id = "typeProject";
                                inputTypeOfProject.setAttribute("type", "radio");
                                inputTypeOfProject.setAttribute("name", "typeOf");
                        labelTypeOfProject.appendChild(inputTypeOfProject);
                            const projectBox = createDiv("project box", "", "");
                                const inputTypeOfProjectSpan = document.createElement('span');
                                    inputTypeOfProjectSpan.innerHTML = "Projet";
                            projectBox.appendChild(inputTypeOfProjectSpan);
                        labelTypeOfProject.appendChild(projectBox);
                    modalFormInputTypeOf.appendChild(labelTypeOfProject);
                        const labelTypeOfTodo = document.createElement('label');
                            const inputTypeOfTodo = document.createElement('input');
                                inputTypeOfTodo.id = "typeTodo";
                                inputTypeOfTodo.setAttribute("type", "radio");
                                inputTypeOfTodo.setAttribute("name", "typeOf");
                                inputTypeOfTodo.setAttribute("checked", "checked");
                            labelTypeOfTodo.appendChild(inputTypeOfTodo);
                            const todoBox = createDiv("todo box", "", "");
                                const inputTypeOfTodoSpan = document.createElement('span');
                                    inputTypeOfTodoSpan.innerHTML = "Tâche";
                            todoBox.appendChild(inputTypeOfTodoSpan);
                        labelTypeOfTodo.appendChild(todoBox);
                    modalFormInputTypeOf.appendChild(labelTypeOfTodo);
                modalFormFieldset.appendChild(modalFormInputTypeOf);

                    const modalFormInputTodoPartOfProject = createDiv("modalForm-inputSelection", "modalFormInputTodoPartOfProject", "");
                        const labelTodoPartOfProject = document.createElement('label');
                            labelTodoPartOfProject.setAttribute("for", "modalProjectDropdown");
                            labelTodoPartOfProject.innerHTML = "Projet auquel appartient cette tâche :";
                    modalFormInputTodoPartOfProject.appendChild(labelTodoPartOfProject);
                        const todoPartOfProject = createDiv("modalDropdown", "modalProjectDropdown", "");
                            const titleTodoPartOfProject = document.createElement('span');
                                titleTodoPartOfProject.id = "titleTodoPartOfProject";
                                titleTodoPartOfProject.classList = "dropdownTitle";
//                                titleTodoPartOfProject.innerHTML = "Défaut";
                        todoPartOfProject.appendChild(titleTodoPartOfProject);
                            const contentTodoPartOfProject = document.createElement('ul');
                                contentTodoPartOfProject.id = "modalProjectDropdownContent";
                                contentTodoPartOfProject.classList = "dropdownContent";                              
                        todoPartOfProject.appendChild(contentTodoPartOfProject);
                    modalFormInputTodoPartOfProject.appendChild(todoPartOfProject);
                modalFormFieldset.appendChild(modalFormInputTodoPartOfProject);

                    const modalFormInputPriority = createDiv("modalForm-inputSelection", "modalForm-inputPriority", "");
                        const labelPriority = document.createElement('label');
                            labelPriority.setAttribute("for", "modalForm-inputPriority");
                            labelPriority.innerHTML = "Priorité : ";
                    modalFormInputPriority.appendChild(labelPriority);
                        const labelPriorityHigh = document.createElement('label');
                            const inputPriorityHigh = document.createElement('input');
                                inputPriorityHigh.id = "priorityHigh";
                                inputPriorityHigh.setAttribute("type", "radio");
                                inputPriorityHigh.setAttribute("checked", "checked");
                                inputPriorityHigh.setAttribute("name", "priority");
                        labelPriorityHigh.appendChild(inputPriorityHigh);
                            const priorityHighBox = createDiv("priority high", "", "");
                                const inputPriorityHighSpan = document.createElement('span');
                                    inputPriorityHighSpan.innerHTML = "Haute";
                            priorityHighBox.appendChild(inputPriorityHighSpan);
                        labelPriorityHigh.appendChild(priorityHighBox);
                    modalFormInputPriority.appendChild(labelPriorityHigh);
                        const labelPriorityMed = document.createElement('label');
                            const inputPriorityMed = document.createElement('input');
                                inputPriorityMed.id = "priorityMed";
                                inputPriorityMed.setAttribute("type", "radio");
                                inputPriorityMed.setAttribute("name", "priority");
                        labelPriorityMed.appendChild(inputPriorityMed);
                            const priorityMedBox = createDiv("priority med", "", "");
                                const inputPriorityMedSpan = document.createElement('span');
                                    inputPriorityMedSpan.innerHTML = "Moyenne";
                            priorityMedBox.appendChild(inputPriorityMedSpan);
                        labelPriorityMed.appendChild(priorityMedBox);
                    modalFormInputPriority.appendChild(labelPriorityMed);
                        const labelPriorityLow = document.createElement('label');
                            const inputPriorityLow = document.createElement('input');
                                inputPriorityLow.id = "priorityLow";
                                inputPriorityLow.setAttribute("type", "radio");
                                inputPriorityLow.setAttribute("name", "priority");
                        labelPriorityLow.appendChild(inputPriorityLow);
                            const priorityLowBox = createDiv("priority low", "", "");
                                const inputPriorityLowSpan = document.createElement('span');
                                    inputPriorityLowSpan.innerHTML = "Basse";
                            priorityLowBox.appendChild(inputPriorityLowSpan);
                        labelPriorityLow.appendChild(priorityLowBox);
                    modalFormInputPriority.appendChild(labelPriorityLow);
                modalFormFieldset.appendChild(modalFormInputPriority);

                    const modalFormInputTitle = createDiv("modalForm-input", "", "");
                        const labelTitle = document.createElement('label');
                            labelTitle.setAttribute("for", "objectTitle");
                            labelTitle.innerHTML = "Titre du projet ou de la tâche";
                    modalFormInputTitle.appendChild(labelTitle);
                        const inputTitle = document.createElement('input');
                            inputTitle.id = "objectTitle";
                            inputTitle.setAttribute("name", "objectTitle");
                            inputTitle.setAttribute("type", "text");
                    modalFormInputTitle.appendChild(inputTitle);    
                modalFormFieldset.appendChild(modalFormInputTitle);

                    const modalFormInputReqDes = createDiv("modalForm-input", "", "");
                        const labelReqDes = document.createElement('label');
                            labelReqDes.setAttribute("for", "objectDes");
                            labelReqDes.innerHTML = "Description du projet ou de la tâche";
                    modalFormInputReqDes.appendChild(labelReqDes);
                        const inputReqDes = document.createElement('textarea');
                            inputReqDes.id = "objectDes";
                            inputReqDes.setAttribute("name", "objectDes");
                            inputReqDes.setAttribute("rows", "4");
                            inputReqDes.setAttribute("cols", "85");
                            inputReqDes.setAttribute("maxlength", "200");
                    modalFormInputReqDes.appendChild(inputReqDes);    
                modalFormFieldset.appendChild(modalFormInputReqDes);

                    const modalFormInputDueDate = createDiv("modalForm-input", "", "");
                        const labelDueDate = document.createElement('label');
                            labelDueDate.setAttribute("for", "objectDueDate");
                            labelDueDate.innerHTML = "Date limite compléter le projet ou la tâche";
                    modalFormInputDueDate.appendChild(labelDueDate);
                        const inputDueDate = document.createElement('input');
                            inputDueDate.id = "objectDueDate";
                            inputDueDate.setAttribute("type", "date");
                            inputDueDate.setAttribute("name", "objectDueDate");
                    modalFormInputDueDate.appendChild(inputDueDate);    
                modalFormFieldset.appendChild(modalFormInputDueDate);
            modalForm.appendChild(modalFormFieldset);
        modalContainer.appendChild(modalForm);

                const modalButtons = createDiv("modalButtons", "", "");
                    const saveButtonContainer = createDiv("saveButtonContainer", "", "")
                        const saveButton = document.createElement('button');
                            saveButton.id = "saveButton";
                            saveButton.classList = "saveButton"
                            saveButton.innerHTML = "Enregistrer";
                saveButtonContainer.appendChild(saveButton);
            modalButtons.appendChild(saveButtonContainer);                   
        modalContainer.appendChild(modalButtons);

    modal.appendChild(modalContainer);

    return modal;    
};

function resetModal (objectName, typeOfObject) {
    document.getElementById("modal").remove();
    document.getElementById("pageLayout").appendChild(generateModal());
    if (typeOfObject === "todo") {
        const todo = getTodo(objectName);
        fillModal(todo, "todo");
        activateModal(objectName, typeOfObject, todo.project);
    } else if (typeOfObject === "project") {
        fillModal(getProject(objectName), "project");
        activateModal(objectName, typeOfObject);
    } else {
        activateModal();
    }
}

function fillModal(object, typeOfObject) {
    if (typeOfObject === "todo") {
        document.getElementById("typeProject").checked = false;
        document.getElementById("typeTodo").checked = true;
        document.getElementById("titleTodoPartOfProject").innerHTML = object.project;
    } else {
        document.getElementById("typeTodo").checked = false;
        document.getElementById("typeProject").checked = true;
        document.getElementById("modalFormInputTodoPartOfProject").style.display = "none";
    }
    document.getElementById("priorityHigh").checked = false;
    document.getElementById("priorityMed").checked = false;
    document.getElementById("priorityLow").checked = false;
    document.getElementById("priority"+object.priority).checked = true;
    document.getElementById("objectTitle").value = object.name;
    document.getElementById("objectDes").value = object.description;
    document.getElementById("objectDueDate").value = object.dueDate;
}

export {
    generateModal,
    resetModal
};

