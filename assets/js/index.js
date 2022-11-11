const mainSection = document.querySelector("#main-section");
const thankYouSection = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateValue = document.querySelectorAll(".btn-rating");
const actualRate = document.getElementById("rating");

// Desabilita botão submite para evitar abrir página de obrigado sem clicar na nota
submitButton.disabled = true;

submitButton.addEventListener("click", () => {
  mainSection.style.display = "none";
  thankYouSection.classList.remove("display-none");
})

rateValue.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRate.innerHTML = rating.innerHTML;
    submitButton.disabled = false;
    console.log(rating.innerHTML)
  })
})