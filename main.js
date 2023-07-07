const mainContainer = document.getElementById("main-container");
const inputText = document.getElementById("input-field");

inputText.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    displayPoke();
  }
});
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  displayPoke();
});
function displayPoke() {
  const id = inputText.value;
  if (validateInput(id)) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        container.insertAdjacentHTML(
          "afterbegin",
          `
                <div class="wrap-container" id="wrap-container">
                    <div class="detail-container" id="detail-container">
                        <p>Name:${data.name}</p>
                        <p>Height:${data.height}</p>
                        <p>Weight:${data.weight}</p>
                        <p>Moves:${data.moves.length}</p>
                    </div>
                    <div class="photo-container" id="photo-container">
                    <img src="${data.sprites.front_default}" alt="Italian Trulli" width="400" height="300">
                </div>
            </div>
        `
        );
      });
  }
}
function validateInput(id) {
  if (id > 1010) {
    alert("please enter numbers between 1 and 1010");
    return false;
  } else {
    return true;
  }
}
