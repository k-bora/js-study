const idInput = document.querySelector("#form-id");
const pwInput = document.querySelector("#form-pw");
const popup = document.querySelector(".popup");
const popupMessage = document.querySelector("#popup-message");
const popupCloseBtn = popup.querySelector("button");
const submitBtn = document.querySelector("button.btn-type1");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (idInput.value.trim() == "" && pwInput.value.trim() == "") {
    popupMessage.textContent = "아이디/비밀번호를 입력해주세요.";
    popup.showModal();
  } else if (idInput.value.trim() == "") {
    popupMessage.textContent = "아이디를 입력해주세요.";
    popup.showModal();
  } else if (pwInput.value.trim() == "") {
    popupMessage.textContent = "비밀번호를 입력해주세요.";
    popup.showModal();
  } else {
    popupMessage.textContent = "로그인되었습니다.";
    popup.showModal();
    idInput.value = "";
    pwInput.value = "";
  }
});

popupCloseBtn.addEventListener("click", () => {
  popup.close();
  idInput.focse();
});
