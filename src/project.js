import { storeProject, editProjectInStorage, removeProjectFromStorage, retrieveAllProjectsFromStorage } from './projectStorage.js';

var projects = (function() {
    'use strict';

    const projectFactory = (name, description, dueDate, priority, status) => {
        return { name, description, dueDate, priority, status };
    };    

    var _projectList = [];

    function _addProject(name, description, dueDate, priority) {
        const newProject = projectFactory(name, description, dueDate, priority, "uncompleted");
        storeProject(newProject);
        _projectList.push(newProject);
    }

    function addProject(name, description, dueDate, priority) {
        _addProject(name, description, dueDate, priority);
    }

    function _retrieveProjectId(name) {
        return _projectList.map(e => e.name).indexOf(name);
    }

    function _getProject(name) {
        return _projectList[_retrieveProjectId(name)];
    }

    function getProject(name) {
        return _getProject(name);
    }
    
    function _getProjectStatus(name) {
        return _projectList[_retrieveProjectId(name)].status;
    }

    function getProjectStatus(name) {
        return _getProjectStatus(name);
    }

    function _editProject(name, newStatus, newName, newDescription, newDueDate, newPriority) {
        const index = _retrieveProjectId(name);
        if (_projectList[index].status != newStatus) {
            _projectList[index].status = newStatus;
        } else if (arguments.length > 2) {
            _projectList[index] = projectFactory(newName, newDescription, newDueDate, newPriority, newStatus);
        }
        editProjectInStorage (name, _projectList[index]);
    }
    
    function editProject(name, newStatus, newName, newDescription, newDueDate, newPriority) {
        _editProject(name, newStatus, newName, newDescription, newDueDate, newPriority);
    }

    function _removeProject(name) {
        removeProjectFromStorage(name);
        _projectList.splice(_retrieveProjectId(name), 1);
    }

    function removeProject(name) {
        _removeProject(name);
    }

    function getProjectList() {
        return _projectList;
    }

    function loadProjects() {
        _projectList.push(...retrieveAllProjectsFromStorage());
    }
  
    return {
        addProject: addProject,
        getProject: getProject,
        getProjectStatus: getProjectStatus,
        editProject: editProject,
        removeProject: removeProject,
        getProjectList: getProjectList,
        loadProjects: loadProjects
    };
})();

function newProject (name, description, dueDate, priority) {
    projects.addProject(name, description, dueDate, priority);
}

function editProject(name, newStatus, newName, newDescription, newDueDate, newPriority) {
    projects.editProject(name, newStatus, newName, newDescription, newDueDate, newPriority);
}

function getProject(name) {
    return projects.getProject(name);
}

function getProjectStatus(name) {
    return projects.getProjectStatus(name);
}

function deleteProject(name) {
    projects.removeProject(name);
}

function getAllProjects() {
    return projects.getProjectList();
}

function loadAllProjects() {   
    projects.loadProjects();

    //create default project if it doesn't already exists
    if (getAllProjects().length == 0) {
        newProject("Défaut", "Projet par défaut (ne peut pas être modifié).", "", "Low");
    }
}

export {
    newProject,
    editProject,
    getProject,
    getProjectStatus,
    deleteProject,
    getAllProjects,
    loadAllProjects,
}