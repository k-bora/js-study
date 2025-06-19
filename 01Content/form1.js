// 폼1
// - 확인버튼을 누르면 레이어팝업 띄우기 : **xxx님이 로그인 하셧습니다.**
// - x 를 누르면 input value 삭제 , x를 누른후 x 사라지게
// - input 입력시 x 사라지게
// - input에 아무것도 없을때 x가 사라지게
const inputId = document.querySelector("#txt1_1");
const inputPw = document.querySelector("#txt1_2");
const idTxtDelBtn = document.querySelector("#txt1_1 + button");
const pwTxtDelBtn = document.querySelector("#txt1_2 + button");
const loginBtn = document.querySelector(".submit");
const popup = document.querySelector(".popup");
const popMessage = document.querySelector("#popup-message span");
const closeBtn = document.querySelector(".close");

// 확인버튼을 누르면 레이어팝업 띄우기 : **xxx님이 로그인 하셧습니다.**
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.showModal();
  const inputIdValue = inputId.value;
  // console.log(inputIdValue);

  if (inputIdValue == "") {
    popMessage.textContent = "아이디를 입력해주세요.";
  } else {
    popMessage.textContent = `${inputIdValue} 님이 로그인 하셧습니다.`;
  }
});

closeBtn.addEventListener("click", () => {
  popup.close();
});

// // id input 이벤트
// idTxtDelBtn.style.display = "none";
// idTxtDelBtn.addEventListener("click", () => {
//   inputId.value = "";
//   idTxtDelBtn.style.display = "none";
// });
// inputId.addEventListener("input", () => {
//   if (inputId.value.length > 1) {
//     idTxtDelBtn.style.display = "block";
//   } else {
//     idTxtDelBtn.style.display = "none";
//   }
// });

// // pw input 이벤트
// pwTxtDelBtn.style.display = "none";
// pwTxtDelBtn.addEventListener("click", () => {
//   inputPw.value = "";
//   pwTxtDelBtn.style.display = "none";
// });
// inputPw.addEventListener("input", () => {
//   if (inputPw.value.length > 1) {
//     pwTxtDelBtn.style.display = "block";
//   } else {
//     pwTxtDelBtn.style.display = "none";
//   }
// });

// input 이벤트 한번에 도전~ 성공~
const inputs = document.querySelectorAll("fieldset input");

inputs.forEach((input) => {
  const inputTxtDelBtn = input.nextElementSibling;
  inputTxtDelBtn.style.display = "none";

  inputTxtDelBtn.addEventListener("click", () => {
    input.value = "";
    inputTxtDelBtn.style.display = "none";
  });

  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      inputTxtDelBtn.style.display = "block";
    } else {
      inputTxtDelBtn.style.display = "none";
    }
  });
});
