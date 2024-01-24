import icon_task from './images/icon_task.png';
import icon_project from './images/icon_project-arrow.png';
import { createImg, createDiv } from './domGenerateHTMLElement.js';
import { generateProjectCards, generateTodoCards } from './domGenerateCards.js';
import { activateContent } from './domActivateContent.js';

function generateContentTitle(type, status, priority, deadline, project) {
    const title = createDiv("title", "", "");
        var context;
        if (type === "project") {
            context = createDiv("context", "context", "Projets : ");
            context.prepend(createImg(icon_project, "iconProject"));
        } else if (status === "completed") {
            context = createDiv("context", "context", "Tâches : Complétées");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (status === "uncompleted") {
            context = createDiv("context", "context", "Tâches : Non-complétées");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (priority === "High") {
            context = createDiv("context", "context", "Tâches : Priorité élevée");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (priority === "Med") {
            context = createDiv("context", "context", "Tâches : Priorité moyenne");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (priority === "Low") {
            context = createDiv("context", "context", "Tâches : Priorité basse");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (deadline === "today") {
            context = createDiv("context", "context", "Tâches : À compléter aujourd'hui !");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (deadline === "week") {
            context = createDiv("context", "context", "Tâches : À compléter d'ici une semaine !");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (deadline === "month") {
            context = createDiv("context", "context", "Tâches : À compléter d'ici un mois !");
            context.prepend(createImg(icon_task, "iconTask"));
        } else if (project) {
            context = createDiv("context", "context", "Tâches : Du projet " + project);
            context.prepend(createImg(icon_task, "iconTask"));
        } else {
            context = createDiv("context", "context", "Tâches : Toutes");
            context.prepend(createImg(icon_task, "iconTask"));                        
        }
    title.appendChild(context); 
    return title;
}


function generateContent(type, status, priority, deadline, project) {
    const content = createDiv("content", "content", "");    
        const contentContext = createDiv("contentContext", "", "");
            const contextBar = document.createElement('nav');
                contextBar.classList = "contextBar";
            if (type === "project") {
                contextBar.appendChild(generateContentTitle(type));
            } else if (status) {
                contextBar.appendChild(generateContentTitle(type, status));
            } else if (priority) {
                contextBar.appendChild(generateContentTitle(type, undefined, priority));
            } else if (deadline) {
                contextBar.appendChild(generateContentTitle(type, undefined, undefined, deadline));
            } else if (project) {
                contextBar.appendChild(generateContentTitle(type, undefined, undefined, undefined, project));
            } else {
                contextBar.appendChild(generateContentTitle());
            }
        contentContext.appendChild(contextBar);       
        if (type === "project") {
            contentContext.appendChild(generateProjectCards());
        } else if (status) {
            contentContext.appendChild(generateTodoCards(status));
        } else if (priority) {
            contentContext.appendChild(generateTodoCards(undefined, priority));
        } else if (deadline) {
            contentContext.appendChild(generateTodoCards(undefined, undefined, deadline));
        } else if (project) {
            contentContext.appendChild(generateTodoCards(undefined, undefined, undefined, project));
        } else {
            contentContext.appendChild(generateTodoCards());
        }
    content.appendChild(contentContext);
    return content;
}

function refreshContent() {
    document.getElementById("content").remove();
    // find selected submenu
    var filter;
        document.querySelectorAll('.sidebarSubmenuItemSelected').forEach(e => {if (!e.id.includes("Shrinked")) { filter = e.id.slice(18);}});
    
    // call generateContent accordingly to the filter (from the selected submenu item)
    if (filter === "InboxAll") {
        document.getElementById("pageLayout").appendChild(generateContent());
    } else if(filter === "InboxTodo") {
        document.getElementById("pageLayout").appendChild(generateContent("todo", "uncompleted"));
    } else if(filter === "InboxDone") {
        document.getElementById("pageLayout").appendChild(generateContent("todo", "completed"));
    } else if(filter.includes("Priority")) {
        document.getElementById("pageLayout").appendChild(generateContent("todo", undefined, filter.slice(8)));
    } else if(filter.includes("Calendar")) {
        document.getElementById("pageLayout").appendChild(generateContent("todo", undefined, undefined, filter.slice(8)));
    } else if(filter === "EditProjects") {
        document.getElementById("pageLayout").appendChild(generateContent("project"));
    } else if(filter.includes("Project")) {
        document.getElementById("pageLayout").appendChild(generateContent("todo", undefined, undefined, undefined, filter.slice(7)));
    }
    activateContent();
}

export {
    generateContent,
    refreshContent
};