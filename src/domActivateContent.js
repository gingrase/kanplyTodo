import { activateProjectCards } from "./domActivateProjectCard.js";
import { activateTodoCards } from "./domActivateTodoCard.js";

function activateCards () {
    activateProjectCards();
    activateTodoCards();
}

function activateContent () {
    activateCards();
}

export {
    activateContent
};