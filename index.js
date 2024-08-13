// const characters = ["A","B","C","D",
//     "E","F","G","H","I","J","K","L","M","N","O",
//     "P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
//     "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
//     "r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
//      "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
//      "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
//      "<",">",".","?","/"];
// let passEl= document.getElementById("password")   
// let genEl = document.getElementById("gen")
// let pass = "";

// function randomise(){
//     for(let i=0;i<15;i++){
//     let random = Math.floor(Math.random * characters.length)
//      pass+=characters[random]
//     }
//     passEl.textContent = pass;
//     console.log(pass)

// }

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
    "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
    "<",">",".","?","/"];
const passEl = document.getElementById("pass1")
const genEl = document.getElementById("gen")
const passEl2= document.getElementById("pass2")
let pass = ""
genEl.addEventListener("click", function() {
    console.log("button clicked");
    pass = "";  
    passEl.innerText = "";  // Clear the previous content in passEl

    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * characters.length);
        pass += characters[random];
    }

    passEl.textContent = pass;  // Set the generated password in the element
});
genEl.addEventListener("click", function() {
    console.log("button clicked");
    pass = "";  
    passEl2.innerText = "";  // Clear the previous content in passEl

    for(let i = 0; i < 15; i++){
        let random = Math.floor(Math.random() * characters.length);
        pass += characters[random];
    }

    passEl2.textContent = pass;  // Set the generated password in the element
});


