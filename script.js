//slider, creating and changing grid
let grid = document.getElementById("container");
grid.style.height = "576px";
grid.style.width = "576px";
let cells=[]; let rows=[];

const gridsize = document.getElementById('pixelrange');
let pixelnum = -1 * gridsize.value;
changegrid();
gridsize.addEventListener("change", changegrid);

function changegrid(){
    deletegrid();
    pixelnum = -1 * gridsize.value;
    let num = pixelnum;
    let height = 576/num;
    let width = 576/num;

    for(let j=0; j<num; j++){
        let row = document.createElement('div');
        rows.push(row);
        row.setAttribute("class", "row");
        row.style.width = "576px";
        row.style.height = "auto";
        grid.appendChild(row);
    
        for(let i=0; i<num; i++){
            let cell = document.createElement('div');
            cells.push(cell);
            cell.setAttribute("class", "cell");
            cell.style.height = `${height}px`;
            cell.style.width = `${width}px`;
            row.appendChild(cell);
            
        }
        //fill();
        
        
        
        
    }
    
}

function deletegrid(){
    for(let i=0; i<cells.length; i++){
        var c= cells[i];
        c.remove();
    }
    for(let i=0; i<rows.length; i++){
        var c= rows[i];
        c.remove();
    }

}




//tools section except grid
const colorpicker = document.getElementById('favcolor');
const rainbowbtn = document.getElementById('rainbowbtn');
const eraser = document.getElementById('eraser');
const reset = document.getElementById('resetbtn');


colorpicker.addEventListener('click', fill);
function fill(){
    cells.forEach(cell => cell.addEventListener('mouseenter', function(){
        this.style.backgroundColor = colorpicker.value;
    }));
}

rainbowbtn.addEventListener('click', rbow);
function rbow(){
    
    //alert("hii");
    cells.forEach(cell => cell.addEventListener('mouseenter', function(){
        var colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
        var color = colors[Math.floor(Math.random()*7)];
        this.style.backgroundColor = color;
    }));
    

}

eraser.addEventListener('click', erase);
function erase(){
    cells.forEach(cell => cell.addEventListener('mouseenter', function(){
        this.style.backgroundColor = "transparent";
    }));
}

reset.addEventListener('click', resetarea);
function resetarea(){
    for(let i=0; i<cells.length; i++){
        var c= cells[i];
        c.style.backgroundColor = "transparent";
    }
}










