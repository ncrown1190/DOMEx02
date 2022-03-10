//select an element
//add a listner to it
//choose the event
//write the function
//when you click the menu
const menu = document.querySelector("ul");
const letters = document.querySelector("#letters");
const numbers = document.querySelector("#numbers");

document
  .querySelector(".fa-solid.fa-bars")
  .addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log("you clicked the menu");
    menu.classList.toggle("show");
  });

// >>>>>>>>>>>>> when you click letters
document.querySelector("#lettersLink").addEventListener("click", (e) => {
  e.preventDefault();
  //show lettrs
  letters.style.display = "block";

  //hide numbers
  numbers.style.display = "none";

  //hide menu
  menu.classList.toggle("show");
});

//>>>>>>>>>>>>>>  When you click numbers
document.querySelector("#numbersLink").addEventListener("click", (e) => {
  e.preventDefault();

  //show numbers
  numbers.style.display = "block";

  //hide letters
  letters.style.display = "none";

  //hide menu
  menu.classList.toggle("show");
});

// document
//   .querySelector(".fa-solid.fa-bars")
//   .addEventListener("click", function () {
//     console.log("you clicked the menu");
//   });

// document.querySelector("#letters").style.display = "block";
//document.querySelector("#numbers").style.display = "block";
//document.querySelector("ul").classList.toggle("show");
