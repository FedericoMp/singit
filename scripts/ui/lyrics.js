/**
 * Represents a lyric UI element.
 * @constructor
 * @param {string} artist - The artist of the song.
 * @param {string} songTitle - The song of the album.
 * @param {JSON} jsonLyrics - The lyric of the song.
 */
export function createLyrics(artist, songTitle, jsonLyrics) {
    const lyrics = jsonLyrics.replace(/(\r\n|\r|\n)/g, "<br>");
    return `<div class="container px-3 py-3">
                <h4><strong>${songTitle}</strong></h4>
                <p class="text-muted">${artist}</p>
                <div class="mb-4">${lyrics}</div>
            </div>`;
}