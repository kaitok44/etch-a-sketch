const container = document.querySelector(".container");

function createGrid(gridNum){
    for (let i = 0; i < gridNum; i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");

     for (let j = 0; j < gridNum; j++){
        const widthAndHeight = 960 / gridNum;
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box")
        gridBox.style.width = `${widthAndHeight}px`;
        gridBox.style.height = `${widthAndHeight}px`;
        gridBox.addEventListener("mouseover",() => {
            gridBox.style.backgroundColor = "grey";
        })
        row.appendChild(gridBox);
     }
    container.appendChild(row);
    }
}

createGrid(16)
