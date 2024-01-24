import { deleteProject } from "./project";
import { editTodosOfAProject } from "./todo.js";
import { refreshContent } from './domGenerateContent.js';
import { activateModalEdit } from './domActivateModal.js';

function activateTrashIcons() {
    document.querySelectorAll('.cardProjectTrashIcon').forEach(e => {
        e.addEventListener(
            "click", function() {
                editTodosOfAProject(e.id.slice(11), "Défaut");
                document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)).parentNode.removeChild(document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)));  
                document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)+"Shrinked").parentNode.removeChild(document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)+"Shrinked"));                 
                deleteProject(e.id.slice(11));
                refreshContent();
            }
        );
    });
}

function activateProjectCard() {
    document.querySelectorAll('.cardProjectTitle').forEach(e => {
        e.addEventListener(
            "click", function() {
                if (e.id.slice(9) != "Défaut") { activateModalEdit(e.id.slice(9), "project"); }
            }
        );
    });
}

function activateProjectCards () {
    activateProjectCard();
    activateTrashIcons();
}

export {
    activateProjectCards
};