const container = document.getElementById("container");
const newGridBtn = document.getElementById("newGridBtn");

// Default grid
createGrid(4); // 4x4 = 16 squares

newGridBtn.addEventListener("click", () => {
    let size = prompt("Enter number of squares per side (max 100):");
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    clearGrid();
    createGrid(size);
});

function createGrid(size) {
    const totalSize = 400; // container width/height in px
    const squareSize = totalSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.classList.add("hovered");
        });

        container.appendChild(square);
    }
}

function clearGrid() {
    container.innerHTML = "";
}