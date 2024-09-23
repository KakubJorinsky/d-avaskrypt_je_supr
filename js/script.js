let i = 1;
function Add(){
    let input = document.getElementById("input");
    let nazev = document.getElementById("nazev");
    let output = document.getElementById("output");
   
    output.innerHTML += "<br>" + i + ". " + nazev.value;
    i++;
    console.log("Hodnota v inputu je: ", input.value);

    document.getElementById('myImage').src= input.value;
    console.log(document.getElementById("myImage"));
}


