// 폼13 : 내용의 실시간 글자수를 넣어주세요.
// const nickname = document.querySelector("#nickname");
// const intro = document.querySelector("#intro");
const boxs = document.querySelectorAll(".box");

// nickname.addEventListener("input", () => {
//   const countLength = nickname.nextElementSibling.querySelector("span");
//   countLength.textContent = nickname.value.length;
// });
// intro.addEventListener("input", () => {
//   const countLength = intro.nextElementSibling.querySelector("span");
//   countLength.textContent = intro.value.length;
// });

// 한번에 적용
boxs.forEach((box) => {
  const input = box.querySelector("label").nextElementSibling;
  input.addEventListener("input", () => {
    const countLength = input.nextElementSibling.querySelector("span");
    countLength.textContent = input.value.length;
  });
});
