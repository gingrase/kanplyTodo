function storeProject (project) {   
    var newProjectIndex = retrieveNextProjectIndexFromStorage();
        if (newProjectIndex) {
            storeNextProjectIndex(newProjectIndex+1);             
        } else {
            storeNextProjectIndex(1);
            newProjectIndex = 0;
        }
    localStorage.setItem('Project_'+newProjectIndex, JSON.stringify(project));
}

function storeNextProjectIndex (index) {
    localStorage.setItem('Next_Project_Index', JSON.stringify(index));
}

function retrieveProjectFromStorage (projectId) {
    return JSON.parse(localStorage.getItem('Project_'+projectId));
}

function retrieveNextProjectIndexFromStorage () {
    return JSON.parse(localStorage.getItem('Next_Project_Index'));
}

function findProjectInStorage (name) {
    const lastProjectIndex = retrieveNextProjectIndexFromStorage();
    var projectToFind;
    for (let i = 0; i < lastProjectIndex; i++) {
        const project = retrieveProjectFromStorage(i);
        if (project) {
            if (project.name == name) {
                projectToFind = i;
            }
        }
    };
    return projectToFind;
}

function editProjectInStorage (name, projectToEdit) {
    localStorage.setItem('Project_'+findProjectInStorage(name), JSON.stringify(projectToEdit));
}

function removeProjectFromStorage (name) {
    const lastProjectIndex = retrieveNextProjectIndexFromStorage();
    var projectToRemoveFromStorage = 0;
    for (let i = 1; i < lastProjectIndex; i++) {
        const project = retrieveProjectFromStorage(i);
        if (project) {
            if (project.name == name) {
                projectToRemoveFromStorage = i;
            }
        }
    };
    if (projectToRemoveFromStorage != 0) {
        localStorage.removeItem('Project_'+projectToRemoveFromStorage);
    };
}

function retrieveAllProjectsFromStorage () {
    const projects = [];
    const lastProjectIndex = retrieveNextProjectIndexFromStorage();
    var projectsIndex = 0;
    for (let i = 0; i < lastProjectIndex; i++) {
        const project = retrieveProjectFromStorage(i);
        if (project) {
            projects[projectsIndex++] = project;
        }
    };
    return projects;
}

export {
    storeProject,
    editProjectInStorage,
    removeProjectFromStorage,
    retrieveAllProjectsFromStorage
}