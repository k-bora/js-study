const objData = {
  badgeName: "우동",
  price: "3000 원",
};

const { badgeName, price } = objData;

const green = document.querySelector(".badge.green");
const mart = document.querySelector(".text.mart");

green.textContent = badgeName;
mart.textContent = price;
