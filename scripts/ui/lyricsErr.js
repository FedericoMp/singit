/**
 * Represents an error UI element.
 * @constructor
 * @param {string} errMsj - The error message when the lyric is not found.
 */
export function createLyricErr(errMsj) {
    return `<div class="container">
                <div class="alert alert-warning mt-4" role="alert" 
                    data-error="${errMsj}">
                    <h4 class="alert-heading">
                        <i class="bi bi-exclamation-octagon"></i> 
                        We have a problem</h4><hr>
                    <p class="mb-0">Unfortunatelly the song that you requested does not found. Please, try with another song, artist or album.</p>
                </div>
            </div>`;
}