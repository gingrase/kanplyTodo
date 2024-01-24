import './style.css';
import { generateHeader } from './domGenerateHeader.js';
import { generateExpandedSidebar, generateShrinkedSidebar } from './domGenerateSidemenu.js';
import { generateContent } from './domGenerateContent.js';
import { generateModal } from './domGenerateModal.js';
import { activateHeader } from './domActivateHeader.js';
import { activateSidebar, initialSidebarSelection, shrinkSidemenu } from './domActivateSidemenu.js';
import { activateContent } from './domActivateContent';
import { activateModal } from './domActivateModal.js';
import { createDiv } from './domGenerateHTMLElement.js';
import { loadAllProjects } from './project.js';
import { loadAllTodos } from './todo.js';

// load local storage content in session
loadAllProjects();
loadAllTodos();

// build page layout
const pageLayout = createDiv("expandedPageLayout", "pageLayout", "");
    pageLayout.appendChild(generateHeader());
    pageLayout.appendChild(generateExpandedSidebar());
    pageLayout.appendChild(generateShrinkedSidebar());
    pageLayout.appendChild(generateContent());
    pageLayout.appendChild(generateModal());
document.body.appendChild(pageLayout);

// activate buttons
activateHeader();
activateSidebar();
activateContent();
activateModal();

// initial display selection
initialSidebarSelection();

// shrink when windows width < 640px 
window.addEventListener('resize', () => {
    if (window.matchMedia("(max-width: 640px)").matches) { shrinkSidemenu(); }
});
