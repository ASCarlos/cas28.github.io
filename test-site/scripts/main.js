/* const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!"; 

document.querySelector("html").onclick = function() { // anonimous function
  alert("Ouch! Stop poking me!");
};

let myVariable; // declaration
myVariable = "Charly"; /* assigntment */

let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Firefox-Logo.png") {
    myImage.setAttribute("src", "images/Firefox-Logo2.svg");
  } else {
    myImage.setAttribute("src", "images/Firefox-Logo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
} */

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
};

