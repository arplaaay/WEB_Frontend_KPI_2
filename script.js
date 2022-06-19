const downloadBtnEl = document.querySelector(".dowload-btn");
const cardListEl = document.querySelector(".card-list");

downloadBtnEl.addEventListener("click", onButtonDownloadClick);

function onButtonDownloadClick(evt) {
  evt.preventDefault();

  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((person) => createCard(person));
}

function createCard(data) {
  cardListEl.insertAdjacentHTML(
    "afterbegin",
    data.results.map((elem) => {
      return `
    <div class="card-container">
        <div class="card-img-top">
            <img src="${elem.picture.large}" alt="" width="300px"/>
        </div>
        <div class="card-body">
            <p class="location">Location: ${elem.location.city}</p>
            <p class="country">Country: ${elem.location.country}</p>
            <p class="email">Email: ${elem.email}</p>
            <p class="coordinates">Coordinates: ${elem.location.coordinates.latitude}, ${elem.location.coordinates.longitude}</p>
        </div>
    </div>
      `;
    })
  );
}
