const idInput = document.querySelector("#form-id");
const pwInput = document.querySelector("#form-pw");
const popup = document.querySelector(".popup");
const popupMessage = document.querySelector("#popup-message");
const popupCloseBtn = popup.querySelector("button");
const submitBtn = document.querySelector("button.btn-type1");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (idInput.value == "") {
    popupMessage.textContent = "아이디를 입력해주세요.";
    popup.showModal();
  }

  if (pwInput.value == "") {
    popupMessage.textContent = "비밀번호를 입력해주세요.";
    popup.showModal();
  }

  if (idInput.value == "" && pwInput.value == "") {
    popupMessage.textContent = "아이디/비밀번호를 입력해주세요.";
    popup.showModal();
  }
});

popupCloseBtn.addEventListener("click", () => {
  popup.close();
});
