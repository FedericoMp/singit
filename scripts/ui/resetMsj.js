// Static message, UI element for the home screen.
export function createResetMsg() {
    return `<div class="container">
                <div class="alert alert-light mt-4" role="alert">
                    <div class="text-center">
                        <img class="img-fluid rounded home-splash-img mb-3" 
                            src="./img/singit_logo.jpg" alt="Sing It">
                    </div>
                    <h3 class="alert-heading text-center"><strong>Sing</strong> It</h3><hr>
                    <p class="mb-3">Welcome! Now you can search lyrics from your favourite authors.</p>
                    <p class="mb-2">Take this advices into account: </p>
                    <ul class="list-group list-group-item border-0 p-0">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">🙌 Top 15 search</div>
                                This app only shows you the 15 most popular suggestions for authors, albums and songs.
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">📳 Intuitive UI</div>
                                The app provides an intuitive user interface for  messages and controls based on usability.
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">🧑‍💻 Continuous improvements</div>
                                We are working in new features, like voice commands and toogle themes. 
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold"><img class="img-fluid rounded home-deezer-img" src="https://play-lh.googleusercontent.com/r55K1eQcji3QMHRKERq6zE1-csoh_MTOHiKyHTuTOblhFi_rIz06_8GN5-DHUGJOpn79" alt="Deezer" /> Integrated with Deezer</div>
                                <i>Sing It</i> app uses <i>Deezer</i> to search and suggest song lyrics based on authors and albums.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`;
}