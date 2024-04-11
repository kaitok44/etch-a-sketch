const container = document.querySelector(".container");
const clearButton =  document.querySelector("button");

// generating random color
function setRandomColor(){
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    return color;
}

//create grid
function createGrid(gridNum){
    container.replaceChildren();
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
            gridBox.style.backgroundColor = setRandomColor();
        })
        row.appendChild(gridBox);
     }
    container.appendChild(row);
    }
}
createGrid(16);

 clearButton.addEventListener("click", () => {
    let userSize = Number(prompt("set your grid size"));
    
    while  (userSize > 100){
    userSize = Number(prompt("ERROR: pick a number 100 or less"));
    }
createGrid(userSize);
})