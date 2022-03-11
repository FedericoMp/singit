import { submitInpt } from "../utils/dom-el.js";

// Set attribute to disabled the submit input
export function disableInputSearch() {
    submitInpt.setAttribute("disabled", "");
}

// Remove disabled attribute the submit input
export function removeDisableInputSearch() {
    submitInpt.removeAttribute("disabled");
}