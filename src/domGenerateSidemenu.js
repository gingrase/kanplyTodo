import icon_hamburger from './images/icon_hamburger.png';
import logo_kanply_long from './images/logo-kanply-long.png';
import icon_new from './images/icon_new.png';
import icon_inbox from './images/icon_inbox.png';
import icon_mail from './images/icon_mail.png';
import icon_mail_todo from './images/icon_mail-todo.png';
import icon_mail_check from './images/icon_mail-check.png';
import icon_priority from './images/icon_priority.png';
import icon_priority_red from './images/icon_priority-red.png';
import icon_priority_yellow from './images/icon_priority-yellow.png';
import icon_priority_orange from './images/icon_priority-orange.png';
import icon_priority_green from './images/icon_priority-green.png';
import icon_calendar from './images/icon_calendar.png';
import icon_calendar_1 from './images/icon_calendar-1.png';
import icon_calendar_7 from './images/icon_calendar-7.png';
import icon_calendar_30 from './images/icon_calendar-30.png';
import icon_project from './images/icon_project.png';
import icon_project_arrow from './images/icon_project-arrow.png';
import icon_edit from './images/icon_edit.png';
import {createImg, createDiv} from './domGenerateHTMLElement';
import { getAllProjects } from './project';
import { activateSidebarProject } from './domActivateSidemenu.js';

function createMenuItem(itemIcon, itemIconAlt, itemClass, itemId, itemContent) {
    const div = document.createElement('div');
    div.classList = itemClass;
    div.id = itemId;
    if (itemContent == null) {
        div.innerHTML = "";
    } else {
        div.innerHTML = itemContent;
    }
    div.prepend(createImg(itemIcon, itemIconAlt));
    return div;
}

function addProjectToSidebar(project) {
    document.getElementById("sidebarSubmenuProject").appendChild(createMenuItem(icon_project_arrow, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+project, '<div class="sidebarSubmenuItemProjectExpanded">'+project+'</div>'));
    document.getElementById("sidebarSubmenuProjectShrinked").appendChild(createMenuItem(icon_project_arrow, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+project+"Shrinked"));
    activateSidebarProject(project);
}

function editProjectInSidebar(oldName, newName) {
    document.getElementById("sidebarSubmenuItemProject"+oldName).id = "sidebarSubmenuItemProject"+newName;   
    document.getElementById("sidebarSubmenuItemProject"+newName).innerHTML = '<div class="sidebarSubmenuItemProjectExpanded">'+newName+'</div>';
    document.getElementById("sidebarSubmenuItemProject"+newName).prepend(createImg(icon_project_arrow, "iconProjectArrow"));
    document.getElementById("sidebarSubmenuItemProject"+oldName+"Shrinked").id = "sidebarSubmenuItemProject"+newName+"Shrinked";  
    activateSidebarProject(newName);
}

function generateExpandedSidebar() {
    const sidebar = createDiv("sidebar", "expandedSidebar", "");
        const sidebarTitle = createDiv("sidebarTitle", "", "");
            sidebarTitle.appendChild(createImg(icon_hamburger, "iconHamburger", "iconHamburger", "menuButton"));
            sidebarTitle.appendChild(createImg(logo_kanply_long, "logo_kanply"));
        sidebar.appendChild(sidebarTitle);

        const sidebarNewButton = createDiv("sidebarNewButton", "", "");
            const newButton = document.createElement('button');
                newButton.classList = "newButton";
                newButton.id = "newButton";
                newButton.appendChild(createImg(icon_new, "iconNew"));            
                newButton.innerHTML += "<span>Nouveau</span>";
            sidebarNewButton.append(newButton);
        sidebar.appendChild(sidebarNewButton);

        const sidebarMenu = createDiv("sidebarMenu", "", "");
            sidebarMenu.appendChild(createMenuItem(icon_inbox, "iconInbox", "sidebarItem", "sidebarItemInbox", "Boîte de réception"));
            const sidebarSubmenuInbox = createDiv("sidebarSubmenu", "sidebarSubmenuInbox", "");
                sidebarSubmenuInbox.appendChild(createMenuItem(icon_mail, "iconInboxAll", "sidebarSubmenuItem", "sidebarSubmenuItemInboxAll", "Tous"));
                sidebarSubmenuInbox.appendChild(createMenuItem(icon_mail_todo, "iconInboxTodo", "sidebarSubmenuItem", "sidebarSubmenuItemInboxTodo", "À faire"));
                sidebarSubmenuInbox.appendChild(createMenuItem(icon_mail_check, "iconInboxDone", "sidebarSubmenuItem", "sidebarSubmenuItemInboxDone", "Terminé"));
            sidebarMenu.appendChild(sidebarSubmenuInbox);

            sidebarMenu.appendChild(createMenuItem(icon_priority, "iconPriority", "sidebarItem", "sidebarItemPriority", "Priorité"));
            const sidebarSubmenuPriority = createDiv("sidebarSubmenu", "sidebarSubmenuPriority", "");
                sidebarSubmenuPriority.appendChild(createMenuItem(icon_priority_red, "iconPriorityRed", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityHigh", "Élevée"));
                sidebarSubmenuPriority.appendChild(createMenuItem(icon_priority_orange, "iconPriorityOrange", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityMed", "Moyenne"));
                sidebarSubmenuPriority.appendChild(createMenuItem(icon_priority_yellow, "iconPriorityYellow", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityLow", "Basse"));
            sidebarMenu.appendChild(sidebarSubmenuPriority);

            sidebarMenu.appendChild(createMenuItem(icon_calendar, "iconCalendar", "sidebarItem", "sidebarItemCalendar", "Calendrier"));
            const sidebarSubmenuCalendar = createDiv("sidebarSubmenu", "sidebarSubmenuCalendar", "");
                sidebarSubmenuCalendar.appendChild(createMenuItem(icon_calendar_1, "iconCalendar1", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar1", "Aujourd'hui"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(icon_calendar_7, "iconCalendar7", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar7", "Prochains 7 jours"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(icon_calendar_30, "iconCalendar30", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar30", "Prochains 30 jours"));
            sidebarMenu.appendChild(sidebarSubmenuCalendar);

            sidebarMenu.appendChild(createMenuItem(icon_project, "iconProject", "sidebarItem", "sidebarItemProject", "Projets"));        
            const sidebarSubmenuProject = createDiv("sidebarSubmenu", "sidebarSubmenuProject", "");
                sidebarSubmenuProject.appendChild(createMenuItem(icon_edit, "iconEdit", "sidebarSubmenuItem", "sidebarSubmenuItemEditProjects", "Éditer les projets"));
                getAllProjects().forEach(e => {sidebarSubmenuProject.appendChild(createMenuItem(icon_project_arrow, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+e.name, '<div class="sidebarSubmenuItemProjectExpanded">'+e.name+'</div>'));});
            sidebarMenu.appendChild(sidebarSubmenuProject);
        sidebar.appendChild(sidebarMenu);
    return sidebar;
}

function generateShrinkedSidebar() {
    const sidebar = createDiv("sidebar", "shrinkedSidebar", "");
        const sidebarTitle = createDiv("sidebarTitle", "", "");
            sidebarTitle.appendChild(createImg(icon_hamburger, "iconHamburger", "iconHamburger", "menuButton"));
        sidebar.appendChild(sidebarTitle);

        const sidebarNewButton = createDiv("sidebarNewButton", "", "");
            const newButton = document.createElement('button');
                newButton.classList = "newButton";
                newButton.id = "newButtonShrinked";
                newButton.appendChild(createImg(icon_new, "iconNew")); 
            sidebarNewButton.append(newButton);
        sidebar.appendChild(sidebarNewButton);

        const sidebarMenu = createDiv("sidebarMenu", "", "");
            sidebarMenu.appendChild(createMenuItem(icon_inbox, "iconInbox", "sidebarItem", "sidebarItemInbox"));
            const sidebarSubmenuInbox = createDiv("sidebarSubmenu", "sidebarSubmenuInboxShrinked", "");
                sidebarSubmenuInbox.appendChild(createMenuItem(icon_mail, "iconInboxAll", "sidebarSubmenuItem", "sidebarSubmenuItemInboxAllShrinked"));
                sidebarSubmenuInbox.appendChild(createMenuItem(icon_mail_todo, "iconInboxTodo", "sidebarSubmenuItem", "sidebarSubmenuItemInboxTodoShrinked"));
                sidebarSubmenuInbox.appendChild(createMenuItem(icon_mail_check, "iconInboxDone", "sidebarSubmenuItem", "sidebarSubmenuItemInboxDoneShrinked"));
            sidebarMenu.appendChild(sidebarSubmenuInbox);

            sidebarMenu.appendChild(createMenuItem(icon_priority, "iconPriority", "sidebarItem", "sidebarItemPriority"));
            const sidebarSubmenuPriority = createDiv("sidebarSubmenu", "sidebarSubmenuPriorityShrinked", "");
                sidebarSubmenuPriority.appendChild(createMenuItem(icon_priority_red, "iconPriorityRed", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityHighShrinked"));
                sidebarSubmenuPriority.appendChild(createMenuItem(icon_priority_orange, "iconPriorityOrange", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityMedShrinked"));
                sidebarSubmenuPriority.appendChild(createMenuItem(icon_priority_yellow, "iconPriorityYellow", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityLowShrinked"));
            sidebarMenu.appendChild(sidebarSubmenuPriority);

            sidebarMenu.appendChild(createMenuItem(icon_calendar, "iconCalendar", "sidebarItem", "sidebarItemCalendar"));
            const sidebarSubmenuCalendar = createDiv("sidebarSubmenu", "sidebarSubmenuCalendarShrinked", "");
                sidebarSubmenuCalendar.appendChild(createMenuItem(icon_calendar_1, "iconCalendar1", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar1Shrinked"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(icon_calendar_7, "iconCalendar7", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar7Shrinked"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(icon_calendar_30, "iconCalendar30", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar30Shrinked"));
            sidebarMenu.appendChild(sidebarSubmenuCalendar);

            sidebarMenu.appendChild(createMenuItem(icon_project, "iconProject", "sidebarItem", "sidebarItemProject"));        
            const sidebarSubmenuProject = createDiv("sidebarSubmenu", "sidebarSubmenuProjectShrinked", "");
                sidebarSubmenuProject.appendChild(createMenuItem(icon_edit, "iconEdit", "sidebarSubmenuItem", "sidebarSubmenuItemEditProjectsShrinked"));
                getAllProjects().forEach(e => {sidebarSubmenuProject.appendChild(createMenuItem(icon_project_arrow, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+e.name+"Shrinked"));});
            sidebarMenu.appendChild(sidebarSubmenuProject);
        sidebar.appendChild(sidebarMenu);
    return sidebar;
}

export {
    generateExpandedSidebar,
    generateShrinkedSidebar,
    addProjectToSidebar,
    editProjectInSidebar
};