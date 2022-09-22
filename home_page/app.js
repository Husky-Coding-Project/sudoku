let numSelected = null;
let tileSelected = null;
let errors = null;
//Premade grid layout//
let grid = [
    "53--7----",
    "6--195---",
    "-98----6-",
    "8---6---3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "----8--79"
]
//Premade Solution//
let solution = [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
]
 
window.onLoad = function(){
    setGame();
}
function setGame(){
    //Creates Numpad//
    //Essentially does what bellow does in html but with less code//
    //<div id = "1" class = "number> 1 </div>//
    for (let i = 1; i <= 9; i++){
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    //Creates the Grid numbers//
    // "r" Means represents rows, "c" represents columns//
    for (let r = 0 ; r<9; r++){
        for (let c= 0; c<9 ; c++){
            let tile = document.createElement("div");
            tile.id =  r.toString() + "-" + c.toString();
            if (grid[r][c] != "-"){
                tile.innerText= grid[r][c];
                tile.classList.add("tile-start");
            }
            if (r === 2 || r === 5){
                tile.classList.add("hrz-line");
            }
            if (c === 2 || c === 5){
                tile.classList.add("vert-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("grid").append(tile);
        }
    }
}
    //Makes the Numpad numbers Gray when clicked on and allows will only make the one you clicked on gray, then when you click on another its changes the color back to normal and changes the other tiles color//
function selectNumber(){
    if (numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected= this;
    numSelected.classList.add("number-selected");
}
// Will change the number to the tile, and compares to solution (The else portion is supposed to not place a tile if its not correct) //
function selectTile(){
    if (numSelected){
        if (this.innerText != "" ){
            return;
        }
        this.innerText = numSelected.id;
        let cords = this.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseIntcords[1];
        if (solution[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }
        // Looking to have Tile Background change to red when its not the solution//
        //needs to be worked on//
        else {
           
        }
    }
}
//Button Eraser//
//Button Hint//
