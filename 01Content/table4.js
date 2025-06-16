//표4 팝업 열고 닫고
const deliveryBtn = document.querySelector("button.delivery");
const deliveryDateBtn = document.querySelector("button.delivery-date");
const deliveryPopup = document.querySelector(".popup.--delivery");
const deliveryDatePopup = document.querySelector(".popup.--delivery-date");
const deliveryPopCloseBtn = document.querySelector(".popup.--delivery .btn-close");
const deliveryDatePopCloseBtn = document.querySelector(".popup.--delivery-date .btn-close");

deliveryBtn.addEventListener("click", () => {
  deliveryPopup.setAttribute("open", "ture");
});

deliveryPopCloseBtn.addEventListener("click", () => {
  deliveryPopup.removeAttribute("open");
});

deliveryDateBtn.addEventListener("click", () => {
  deliveryDatePopup.setAttribute("open", "ture");
});

deliveryDatePopCloseBtn.addEventListener("click", () => {
  deliveryDatePopup.removeAttribute("open");
});
