console.log("Dope");

let parsedObject = JSON.parse(localStorage.getItem("kayla"))

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

console.log(loadDatabase("kayla"));



let body = document.querySelector("body");
let script = document.querySelector("script")
const div = document.createElement("div");
div.setAttribute("class", "main-content");
body.insertBefore(div, script);
let placeContent = document.querySelector(".main-content");

function writeToDom() {

    for (let i = 0; i < kayla.general.agree.length; i++) {
        
        placeContent.innerHTML += `<p>${kayla.general.agree[i]}</p>`
    }
}

writeToDom();
