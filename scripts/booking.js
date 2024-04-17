/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;

let displayWeeklyCost = document.getElementById("calculated-cost");

let buttonMonday = document.getElementById("monday");
let buttonTuesday = document.getElementById("tuesday");
let buttonWednesday = document.getElementById("wednesday");
let buttonThursday = document.getElementById("thursday");
let buttonFriday = document.getElementById("friday");

let buttonFull = document.getElementById("full");
let buttonHalf = document.getElementById("half");

let buttonClear = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const daysOfWeek = {
  0: "monday",
  1: "tuesday",
  2: "wednesday",
  3: "thursday",
  4: "friday",
};

buttonMonday.addEventListener("click", function () {
  changeDayOfWeek("monday");
});

buttonTuesday.addEventListener("click", function () {
  changeDayOfWeek("tuesday");
});

buttonWednesday.addEventListener("click", function () {
  changeDayOfWeek("wednesday");
});

buttonThursday.addEventListener("click", function () {
  changeDayOfWeek("thursday");
});

buttonFriday.addEventListener("click", function () {
  changeDayOfWeek("friday");
});

function changeDayOfWeek(day) {
  if (document.getElementById(day).classList.contains("clicked")) {
    document.getElementById(day).classList.remove("clicked");
    numberOfDays = numberOfDays - 1;
  } else {
    document.getElementById(day).classList.add("clicked");
    numberOfDays = numberOfDays + 1;
  }
  calculate();
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

buttonClear.addEventListener("click", clearDays);

function clearDays() {
  for (let i = 0; i < 5; i++) {
    document.getElementById(daysOfWeek[i]).classList.remove("clicked");
  }
  numberOfDays = 0;
  fullClicked();
  calculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

buttonHalf.addEventListener("click", function () {
  costPerDay = 20;
  buttonHalf.classList.add("clicked");
  buttonFull.classList.remove("clicked");
  calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

buttonFull.addEventListener("click", fullClicked);

function fullClicked() {
  costPerDay = 35;
  buttonFull.classList.add("clicked");
  buttonHalf.classList.remove("clicked");
  calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  displayWeeklyCost.innerHTML = numberOfDays * costPerDay;
}
