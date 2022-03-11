// Imports
import { searchForm, searchInpt, searchResults, submitInpt, resetBtn } from "./utils/dom-el.js";
import { suggestUrl, lyricsUrl } from "./utils/config.js";
import { disableInputSearch } from "./control/stateControl.js";
import "./utils/dom-interaction.js";
import { inptLoaderStatus } from "./control/loaderControl.js";
import { createArtistResultList } from "./ui/songList.js";
import { createLyrics } from "./ui/lyrics.js";
import { createLyricErr } from "./ui/lyricsErr.js";
import { createResetMsg } from "./ui/resetMsj.js";

// DOM Interaction - When user submit the form.
searchForm.addEventListener("submit", getFormData);

// Get data from the search form.
function getFormData(e) {
    e.preventDefault();
    inptLoaderStatus(false);
    const inptVal = searchInpt.value.trim().replaceAll(" ", "%20");
    searchInptVal(inptVal);
}

/**
 * Async - Make the request for suggestions.
 * @constructor
 * @param {string} inptVal - The value that the user typed.
 */
async function searchInptVal(inptValue) {
    disableInputSearch();
    const res = await fetch(`${suggestUrl}/${inptValue}`);
    const jsonData = await res.json();
    showArtistList(jsonData, inptValue);
}

/**
 * Show the UI for suggestions request.
 * @constructor
 * @param {JSON} rawData - The raw json data.
 * @param {string} inptParam - The value that the user typed.
 */
function showArtistList(rawData, inptParam) {
    inptLoaderStatus(true);
    const { data } = rawData;
    searchResults.innerHTML = createArtistResultList(data, inptParam);
    artistResultListEvent();
}

// Create an event for list item.
function artistResultListEvent() {
    const artistResultList = document.getElementById("artistResultList");
    artistResultList.addEventListener("click", eventSongItem);
}

// When user choice a song of list items send it to get the lyrics.
function eventSongItem(e) {
    inptLoaderStatus(false);
    const selectedSong = e.target;
    const conditionalTagName = selectedSong.tagName === "BUTTON" || 
        selectedSong.tagName === "DIV" || selectedSong.tagName === "H5" ||
        selectedSong.tagName === "P" || selectedSong.tagName === "IMG" ||
        selectedSong.tagName === "I" || selectedSong.tagName === "SMALL";
    if (conditionalTagName) {
        const artist = selectedSong.getAttribute("data-artist");
        const songTitle = selectedSong.getAttribute("data-songtitle");
        getLyrics(artist, songTitle);
    }
}

/**
 * Async - Show the UI for the lyrics.
 * @constructor
 * @param {string} artist - The artist of the song.
 * @param {string} songTitle - The title of the song.
 */
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${lyricsUrl}/${artist}/${songTitle}`);
    const jsonData = await res.json();
    inptLoaderStatus(true);
    searchResults.innerHTML = (jsonData.error)
        ? createLyricErr(jsonData.error)
        : createLyrics(artist, songTitle, jsonData.lyrics);
}

// DOM Interaction - When user reset the form.
resetBtn.addEventListener("click", resetData);

// Reset the data of the form and show the home screen message.
function resetData() {
    searchInpt.value = null;
    resetBtn.style.display = "none";
    submitInpt.style.display = "block";
    searchResults.innerHTML = createResetMsg();
}