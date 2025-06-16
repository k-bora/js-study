// 폼7
// - 추천아이디 확인 : `#message`에 비어있을경우 경고메시지 넣기, 추천아이디값이 있을경우 메세지 출력
// - 이메일의 select박스의 상태에 따라서 이메일 주소가 반영되게 하세요.
// - 초기 selected의 값을 input에 반영
// - change될때마다 input에 반영
// - 직접입력시 input은 readonly해제
// - readonly해제시 select변경되면 readonly true가 되고 해당 select value값이 input value에 적용되어야 함

const suggestionIdInput = document.querySelector("#txt7_2_1");
const suggestionIdBtn = document.querySelector("#txt7_2_1 + button");
const suggestionId = document.querySelector("#message");
suggestionIdBtn.addEventListener("click", () => {
  if (suggestionIdInput.value.length > 0) {
    suggestionId.textContent = `"${suggestionIdInput.value}"님을 추천하셨습니다.`;
    alert(`${suggestionIdInput.value}님을 추천하셨습니다.`);
  } else {
    alert("추천인이 없습니다.");
    suggestionId.textContent = "";
  }
});

const domain = document.querySelector(".domain");
const domianOption = document.querySelector(".domain + select");
const domianOptionDefault = document.querySelector(".domain + select").value;

domain.value = domianOptionDefault;
// console.log(domianOption.value);
domianOption.addEventListener("change", () => {
  //이벤트 input으로 넣어도 적용됨
  domain.value = domianOption.value;
  if (domianOption.value.length <= 0) {
    domain.removeAttribute("readonly");
  } else {
    domain.setAttribute("readonly", "ture");
  }
});
