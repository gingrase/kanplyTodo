import { getAllProjects } from './project.js';
import { getAllTodos } from './todo.js';
import { createImg, createDiv } from './domGenerateHTMLElement.js';
import icon_clock from './images/icon_clock.png';
import icon_clockGrey from './images/icon_clock-grey.png';
import icon_clockCompleted from './images/icon_clock-completed.png';
import icon_bin from './images/icon_bin.png';
import icon_binGrey from './images/icon_bin-grey.png';

function generateProjectCard(project) {
    const card = createDiv("card projectCard card" + project.priority + "Priority", "ProjectCard_"+project.name, "");
        const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = project.name + "Checkbox";
            checkbox.setAttribute("onchange", "this.checked = !this.checked");
            checkbox.classList = "cardProjectCheckbox";
            if (project.status == "completed") { checkbox.checked = true; }
    card.appendChild(checkbox);
    if (project.status == "completed") { 
        card.appendChild(createDiv("cardTitle cardProjectTitle cardCompleted", "cardTitle"+project.name, project.name));
        card.appendChild(createImg(icon_clockCompleted, "iconClockCompleted", "clockButton"+project.name, "cardIcon"));
        card.appendChild(createDiv("cardContent cardCompleted", "cardDueDate"+project.name, project.dueDate));
        card.appendChild(createImg(icon_bin, "iconBin", "trashButton"+project.name, "cardProjectTrashIcon"));
    } else {
        card.appendChild(createDiv("cardTitle cardProjectTitle", "cardTitle"+project.name, project.name));
        if (project.name != "Défaut") {
            card.appendChild(createImg(icon_clock, "iconClock", "clockButton"+project.name, "cardIcon"));
            card.appendChild(createDiv("cardContent", "cardDueDate"+project.name, project.dueDate));
            card.appendChild(createImg(icon_bin, "iconBin", "trashButton"+project.name, "cardProjectTrashIcon"));
        }
    }
    return card;
}

function generateTodoCard(todo) {
    const card = createDiv("card todoCard card" + todo.priority + "Priority", "TodoCard_"+todo.name, "");
        const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = todo.name + "Checkbox";
            checkbox.classList = "cardTodoCheckbox";
            if (todo.status == "completed") { checkbox.checked = true; }
    card.appendChild(checkbox);
    if (todo.status == "completed") { 
        card.appendChild(createDiv("cardTitle cardTodoTitle cardCompleted", "cardTitle"+todo.name, todo.name)); 
        card.appendChild(createImg(icon_clockCompleted, "iconClockCompleted", "clockButton"+todo.name, "cardIcon"));
        card.appendChild(createDiv("cardContent cardCompleted", "cardDueDate"+todo.name, todo.dueDate));
    } else { 
        card.appendChild(createDiv("cardTitle cardTodoTitle", "cardTitle"+todo.name, todo.name)); 
        card.appendChild(createImg(icon_clock, "iconClock", "clockButton"+todo.name, "cardIcon"));
        card.appendChild(createDiv("cardContent", "cardDueDate"+todo.name, todo.dueDate));
    }
    card.appendChild(createImg(icon_bin, "iconBin", "trashButton"+todo.name, "cardTodoTrashIcon"));
    return card;
}

function generateProjectCards() {
    const cardContainer = createDiv("cardsContainer", "", "");
    const projects = getAllProjects();
        projects.forEach(element => {
            cardContainer.appendChild(generateProjectCard(element));
        });   
    return cardContainer;
}

function generateTodoCards(status, priority, deadline, project) {
    const cardContainer = createDiv("cardsContainer", "", "");
    const todos = getAllTodos();
        todos.forEach(element => {
            if (!(status) && !(priority) && !(deadline) && !(project)) {
                cardContainer.appendChild(generateTodoCard(element));
            } else if ((status) && (status === element.status)) {
                cardContainer.appendChild(generateTodoCard(element));
            } else if ((priority) && (priority === element.priority)) {
                cardContainer.appendChild(generateTodoCard(element));
            } else if (deadline) {
                var dueDate = new Date(element.dueDate);
                dueDate.setTime(dueDate.getTime() + dueDate.getTimezoneOffset()*60*1000);
                const today = new Date();
                var in7Days = new Date();
                in7Days.setDate(in7Days.getDate()+7);
                var in30Days = new Date();
                in30Days.setDate(in30Days.getDate()+30);
                if ((deadline == 1) && ((!element.dueDate) || (dueDate < today))) {
                    cardContainer.appendChild(generateTodoCard(element));
                } else if ((deadline == 7) && ((!element.dueDate) || (dueDate < in7Days))) {
                    cardContainer.appendChild(generateTodoCard(element));
                } else if ((deadline == 30) && ((!element.dueDate) || (dueDate < in30Days))) {
                    cardContainer.appendChild(generateTodoCard(element));
                }
            } else if ((project) && (project === element.project)) {
                cardContainer.appendChild(generateTodoCard(element));
            }
        });   
    return cardContainer;
}

export {
    generateProjectCards,
    generateTodoCards
};