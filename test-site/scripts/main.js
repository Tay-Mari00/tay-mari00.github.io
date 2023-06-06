const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/VashTheStampede.png") {
    myImage.setAttribute("src", "images/Stampeed.webp");
  } else {
    myImage.setAttribute("src", "images/VashTheStampede.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Have you seen this man, ${myName}?`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Have you seen this man, ${storedName}?`;
  }

myButton.onclick = () => {
    setUserName();
  };
  