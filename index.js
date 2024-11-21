let themeButton = document.getElementById("theme-button");
const darkP = document.querySelector("p");
const darkH2 = document.querySelector("h2");
const darkH3 = document.querySelector("h3");
const nav = document.querySelector("ul");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    darkP.style.color = 'white';
    darkH2.style.color = 'white';
    darkH3.style.color = 'white';
    nav.style.backgroundColor = 'purple';

}

themeButton.addEventListener("click", toggleDarkMode);
// Add your query for the sign now button here
let signNowButton = document.querySelector("#sign-now-button");
const addSignature = (person) => {
  const form = document.getElementById("sign-petition");
  let name = document.getElementById("name").value;
  let home = document.getElementById("home").value;
  let email = document.getElementById("email").value;

  const sign = document.querySelector(".signatures");
  const para = document.createElement("p");
  para.textContent += "🖊️ " + person.name + " from " + home + " supports this!";
  sign.appendChild(para);
}
let form = document.getElementById("sign-petition");
const validateForm = (event) => {
  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value // accesses and saves value of first input
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }else {
      petitionInputs[i].classList.remove('error');
    }

  }
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }

  }
  
}
signNowButton.addEventListener("click", validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration:'2s',
  transitionProperty:'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");
const reveal = (event) => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener("scroll", reveal);

let scaleFactor = 1;
let modalImg = document.getElementById("flower");

let scaleImg = () => {
  if (scaleFactor == 1){
    scaleFactor = 0.8;
  }else{
    scaleFactor = 1;
  }
}

let toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("modal-text-container");
  modal.style.display = "flex";

  modalContent.textContent += "Thank you " + person.name + "!";
  modalContent.textContent += " We appreciate you contributing to this mission!";
  
  let intervalId = setInterval(scaleImg, 2000);
  modalImg.style.transform = "scale(${scaleFactor})";

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)

}





