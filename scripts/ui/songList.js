/**
 * Represents an UI element that contains info about the song, author and album requested.
 * @constructor
 * @param {object} data - The data object contains the request response.
 * @param {string} inptParam - The error message when the API does not have suggestions.
 */
export function createArtistResultList(data, inptParam) {
    return data.length > 0
    ? `<div id="artistResultList" class="container pt-3">
        <ul class="list-group border-0">
            ${data.map((song) =>
            `<button type="button" class="list-group-item list-group-item-action border-0" aria-current="true"
                ${createAriaInfo(song.artist.name, song.title)}>
                <div class="card" ${createAriaInfo(song.artist.name, song.title)}>
                    <div class="row g-0" ${createAriaInfo(song.artist.name, song.title)}>
                        <div class="col-4 d-flex justify-content-center align-items-center bg-dark text-light"
                            ${createAriaInfo(song.artist.name, song.title)}>
                            ${ checkAlbum(song.album, song.artist.name, song.title) }
                        </div>
                        <div class="col-8 d-flex align-items-center" ${createAriaInfo(song.artist.name, song.title)}>
                            <div class="card-body" ${createAriaInfo(song.artist.name, song.title)}>
                                <h5 class="card-title" ${createAriaInfo(song.artist.name, song.title)}>${song.artist.name}</h5>
                                <p class="card-text text-truncate" ${createAriaInfo(song.artist.name, song.title)}>${song.title}</p>
                                ${ song.album 
                                    ? `<p class="card-text text-truncate" ${createAriaInfo(song.artist.name, song.title)}>
                                        <small class="text-muted" ${createAriaInfo(song.artist.name, song.title)}>
                                            ${song.album.title}</small></p>` 
                                    : '' }
                            </div>
                        </div>
                    </div>
                    </div>
            </button>`).join("")}
        </ul>
    </div>`
    : `${ createSuggestionErr(inptParam) }`;
}

/**
 * Creates aditional data for the inputs.
 * @constructor
 * @param {string} artistName - The artist name.
 * @param {string} songTitle - The song title.
 */
function createAriaInfo(artistName, songTitle) {
    return `data-artist="${artistName}" data-songtitle="${songTitle}"`;   
}

/**
 * Creates UI element, if has not cover_medium image, shows an icon.
 * @constructor
 * @param {string} album - The album name.
 * @param {string} artist - The artist title.
 * @param {string} song - The song title.
 */
function checkAlbum(album, artist, song) {
    return album.cover_medium
        ? `<img src="${album.cover_medium}" class="img-fluid rounded-start" 
            alt="${album.title}" ${createAriaInfo(artist, song)}>`
        : `<i class="bi bi-vinyl"></i>`;
}

/**
 * Represents an error UI element.
 * @constructor
 * @param {string} errMsj - The error message when the API does not has suggestions.
 */
 function createSuggestionErr(errMsj) {
    return `<div class="container">
                <div class="alert alert-warning mt-4" role="alert" 
                    data-error="${errMsj}">
                    <h4 class="alert-heading">
                        <i class="bi bi-exclamation-octagon"></i> 
                        We have a problem</h4><hr>
                    <p class="mb-0">Sorry, unfortunatelly we don't have a suggestion for this search: <i>${errMsj}</i>. You should try with another song, artist or album.</p>
                </div>
            </div>`;
}