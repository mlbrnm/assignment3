// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let buttonSubmit = document.getElementById("submit-button");
let contactPage = document.getElementById("contact-page");

buttonSubmit.addEventListener("click", function () {
  let thankYouMessage = document.createElement("p");
  thankYouMessage.innerHTML = "Thank you for your message";
  thankYouMessage.style.fontSize = "24px";

  contactPage.innerHTML = "";

  contactPage.appendChild(thankYouMessage);
});
