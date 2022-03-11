import { loaderResult, searchResults, submitInpt, resetBtn } from "../utils/dom-el.js";
import { disableInputSearch } from "./stateControl.js";

/**
 * Depend of the status to render the spinner on the ui
 * @constructor
 * @param {boolean} status - The status of the request.
 */
export function inptLoaderStatus(status) {
    (status) ? readyData() : waitData();
};

// When the data is ready to show, hide ui elements
function readyData() {
    loaderResult.style.display = "none";
    submitInpt.style.display = "none";
    resetBtn.style.display = "block";
}

// When is waiting the data, show the spinner
function waitData() {
    disableInputSearch();
    loaderStyles();
    searchResults.innerHTML = "";
}

// Spinner loader styles
function loaderStyles() {
    loaderResult.style.display = "flex";
    loaderResult.style.justifyContent = "center";
    loaderResult.style.alignItems = "center";
}