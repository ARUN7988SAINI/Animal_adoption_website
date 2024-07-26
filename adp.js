document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const animalTiles = document.querySelectorAll(".animal-tile");

    function searchAnimals() {
        const query = searchInput.value.toLowerCase();

        animalTiles.forEach((tile) => {
            const location = tile.querySelector("p").textContent.toLowerCase();
            if (location.includes(query)) {
                tile.style.display = "block";
            } else {
                tile.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", searchAnimals);
});

