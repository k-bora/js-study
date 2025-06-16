// 폼6 초기화 버튼 누르면 체크상자 모두 초기화 시키기
const checkboxs = document.querySelectorAll('input[type="checkbox"]');
const resetBtn = document.querySelector(".btn-reset");

resetBtn.addEventListener("click", () => {
  checkboxs.forEach((checkbox) => {
    checkbox.removeAttribute("checked");
  });
});
