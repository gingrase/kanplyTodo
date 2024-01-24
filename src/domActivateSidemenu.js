import { refreshContent } from './domGenerateContent.js';

function shrinkSidemenu() {
    document.getElementById("pageLayout").className = "shrinkedPageLayout";
    document.getElementById("expandedSidebar").style.display = "none";
    document.getElementById("shrinkedSidebar").style.display = "block";
}

function expandSidemenu() {
    document.getElementById("pageLayout").className = "expandedPageLayout";
    document.getElementById("shrinkedSidebar").style.display = "none";
    document.getElementById("expandedSidebar").style.display = "block";
}

function activateMenuButton() {
    document.querySelectorAll(".menuButton").forEach(element => {
        element.addEventListener(
            "click", function() {
                if (document.getElementById("pageLayout").className === "expandedPageLayout") {
                    shrinkSidemenu();
                } else {
                    expandSidemenu();
                }
            } 
        )
    });
}

function unselectMenuItems() {
    document.querySelectorAll('.sidebarItemSelected').forEach(e => {e.classList.remove('sidebarItemSelected');});
}

function unselectSubmenuItems() {
    document.querySelectorAll('.sidebarSubmenuItemSelected').forEach(e => {e.classList.remove('sidebarSubmenuItemSelected');});
}

function selectSubmenuItems(submenuId) {
    document.querySelectorAll("#" + submenuId).forEach(e => {e.classList.add('sidebarSubmenuItemSelected');});
}

function hideSubmenus() {
    document.querySelectorAll('.sidebarSubmenu').forEach(e => {e.style.display = "none";});
}

function selectMenuItem(itemToSelect) { 
    const x = document.getElementById("sidebarSubmenu" + itemToSelect);
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    const y = document.getElementById("sidebarSubmenu" + itemToSelect + "Shrinked");
    if (y.style.display !== "block") {
        y.style.display = "block"; 
    } else {
        y.style.display = "none"; 
    }
}

function activateMenuItems() {
    document.querySelectorAll('.sidebarItem').forEach(element => { 
        element.addEventListener(
            "click", function() {
                selectMenuItem(element.id.substring(11));
            } 
        )
    });
}

function activateSubmenuItems() {
    document.querySelectorAll('.sidebarSubmenuItem').forEach(element => { 
        element.addEventListener(
            "click", function() {
                unselectSubmenuItems();
                element.classList.add("sidebarSubmenuItemSelected");
                if (element.id.includes("Shrinked")) {
                    document.getElementById(element.id.slice(0,-8)).classList.add("sidebarSubmenuItemSelected");
                } else {
                    document.getElementById(element.id + "Shrinked").classList.add("sidebarSubmenuItemSelected");
                }
                refreshContent();
            } 
        )
    });
}

function activateNew() {
    document.getElementById("newButton").addEventListener(
        "click", function () {
            modal.style.display = "block";
            modal.scrollTo(0, 0);
        }
    );

    document.getElementById("newButtonShrinked").addEventListener(
        "click", function () {
            modal.style.display = "block";
            modal.scrollTo(0, 0);
        }
    );
}

function activateSidebar() {
    activateMenuButton();   
    activateNew(); 
    activateMenuItems();
    activateSubmenuItems();
}

function activateSidebarProject(project) {
    console.log(project);
    document.querySelectorAll("[id^='sidebarSubmenuItemProject"+project+"']").forEach(element => { 
        element.addEventListener(
            "click", function() {
                unselectSubmenuItems();
                element.classList.add("sidebarSubmenuItemSelected");
                if (element.id.includes("Shrinked")) {
                    document.getElementById(element.id.slice(0,-8)).classList.add("sidebarSubmenuItemSelected");
                } else {
                    document.getElementById(element.id + "Shrinked").classList.add("sidebarSubmenuItemSelected");
                }
                refreshContent();
            } 
        )
    });
}

function initialSidebarSelection() {
    document.getElementById("sidebarSubmenuItemInboxAll").classList.add("sidebarSubmenuItemSelected");
    document.getElementById("sidebarSubmenuItemInboxAllShrinked").classList.add("sidebarSubmenuItemSelected");
}

export {
    shrinkSidemenu,
    activateSidebar,
    activateSidebarProject,
    initialSidebarSelection
};