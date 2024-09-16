let i = 1;

function Add(){
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    
    console.log("Hodnota v inputu je: ", input);
    console.log("Hodnota v outputu je: ", output);
   
    output.innerHTML += "<br>" + i + ". " + input.value;
    i++;
}

function D(){
    let output = document.getElementById("output");
    
    console.log("Hodnota v inputu je: ", input);
    console.log("Hodnota v outputu je: ", output);
   
    output.innerHTML += " :D";
}

function P(){
    let output = document.getElementById("output");
    
    console.log("Hodnota v inputu je: ", input);
    console.log("Hodnota v outputu je: ", output);
   
    output.innerHTML += " :P";
}

function xD(){
    let output = document.getElementById("output");
    
    console.log("Hodnota v inputu je: ", input);
    console.log("Hodnota v outputu je: ", output);
   
    output.innerHTML += " xD";
}

function Remove(){
    let output = document.getElementById("output");
   
    output.innerHTML = "";
    i = 1
}


