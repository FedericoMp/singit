import { searchInpt, resetBtn, searchResults, splash } from "./dom-el.js";
import { disableInputSearch, removeDisableInputSearch} from "../control/stateControl.js";
import { createResetMsg } from "../ui/resetMsj.js";

// Function that enable or disable the search input.
function enableInput() {
    (searchInpt.value === "") 
        ? disableInputSearch()
        : removeDisableInputSearch();
}

// Event keyup for enable the input.
searchInpt.addEventListener("keyup", enableInput);
loaderResult.style.display = "none";
resetBtn.style.display = "none";

// By default the search input is disabled.
disableInputSearch();

// Create the home message.
searchResults.innerHTML = createResetMsg();

// Time Out for delete the splash screen.
setTimeout(function() {
    splash.parentElement.removeChild(splash);
}, 4000);