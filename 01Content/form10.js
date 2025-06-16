// 폼10 제목, 내용의 실시간 글자수를 넣어주세요.
// 각각 용도에 맞게 넣으세요.
// <span class="title-count">0/30</span>
// <span class="content-count">0/1000</span>

// text.addEventListener("input", () => {
//     console.log(text.value.length);
// });
const titInput = document.querySelector("#txt2_1");
const titLength = document.querySelector(".title-count");
const txtInput = document.querySelector("#txt2_2");
const txtLength = document.querySelector(".content-count");

titInput.addEventListener("input", () => {
  // console.log(titInput.value.length);
  titLength.textContent = `${titInput.value.length}/30`;
});

txtInput.addEventListener("input", () => {
  txtLength.textContent = `${txtInput.value.length}/1000`;
});

const submitBtn = document.querySelector(".btn-submit");
const radios = document.querySelectorAll('input[type="radio"]');
submitBtn.addEventListener("click", () => {
  radios.forEach((radio) => {
    // console.log(radio.checked);
    if (radio.checked) {
      // console.log();
      alert(radio.nextElementSibling.textContent);
    }
  });
});
