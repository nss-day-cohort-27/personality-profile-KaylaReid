console.log("Dope");

let parsedObject = JSON.parse(localStorage.getItem("kayla"))

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

console.log(loadDatabase("kayla"));


// grab body and hold it in a variable
let body = document.querySelector("body");

// grab script and hold it in a variable
let script = document.querySelector("script")

// create div and hold it in a variable
const div = document.createElement("div");

// set div class for reuse
div.setAttribute("class", "main-content");

// this is saying go inside the body and before the script tags stick in the div
body.insertBefore(div, script);

// this variable is now holding the place we put the div so we can innerHTML
let mainContent = document.querySelector(".main-content");

// these variables hold my tunnel to the part of the array I want to target and pass to my function
let agree = kayla.general.agree;
let whyIAgree = kayla.general.whyIAgree;

// creating an empty div gives you a parent container to put eveything your loop spits out in.
// Define it outside of function to prevent it from printing everytime you call you function.
mainContent.innerHTML += `<h1>Personality Traits</h1>
<div class="general">
</div>`

function writeToDom(part1, part2) {
    // creating an empty div gives you a parent container for eveything your loop spits out
    let generalDiv = document.querySelector(".general");

    for (let i = 0; i < kayla.general[part1].length; i++) {
        // target said empy div created above to give these things a parent for flexing
        generalDiv.innerHTML += `<div><h2>${kayla.general[part1][i]}</h2>
        <h3>${kayla.general[part2][i]}</h3></div>`
    }
}
writeToDom("agree", "whyIAgree");
writeToDom("disagree", "whyIDisagree");


function writeToDom2() {
    mainContent.innerHTML += `<h2>People with my personality traits</h2>
    <div class="people">
    </div>`
    let peopleDiv = document.querySelector(".people");
    for (let i = 0; i < kayla.people.length; i++) {
        peopleDiv.innerHTML += 
        `<img src="${kayla.people[i].image}" alt="${kayla.people[i].name}"> 
        <h3>${kayla.people[i].name}</h3>`
    }
}
writeToDom2();

let sib = kayla.communication.sib;
let instructors = kayla.communication.instructors;
let teammates = kayla.communication.teammates;

mainContent.innerHTML += `<h2>Communication Style</h2>
<div class="communication">

</div>`

function writeToDom3(thing) {
    let communication = document.querySelector(".communication")

    for (let i = 0; i < kayla.communication[thing].length; i++) {
        
        communication.innerHTML += `<p>${kayla.communication[thing][i]}</p>`
    }
}
writeToDom3("sib");
writeToDom3("instructors");
writeToDom3("teammates");

// function writeToDom3(arg) {
//     let communication = document.querySelector(".communication")

//     for (let i = 0; i < arg.length; i++) {
        
//         communication.innerHTML += `<p>${arg[i]}</p>`
//     }
// }
// writeToDom3("sib");
// writeToDom3("instructors");
// writeToDom3("teammates");