const message = document.querySelector(".message");
const click = document.querySelector(".click");
const enter = document.querySelector(".enter");
const leave = document.querySelector(".leave");
const inputText = document.querySelector(".input input");
const change = document.querySelector(".change select");
const submit = document.querySelector(".submit");
const link = document.querySelector(".link");
const submitID = document.querySelector(".submit .id");
const submitNickname = document.querySelector(".submit .nickname");
const target = document.querySelector(".target .parent");

const log = function (text) {
  const div = document.createElement("div");
  div.innerHTML = text;

  message.appendChild(div);
  message.scrollTop = message.scrollHeight;
};

click.addEventListener("click", function () {
  log("click");
});

enter.addEventListener("mouseenter", function () {
  log("mouseenter");
});

leave.addEventListener("mouseleave", function () {
  log("mouseleave");
});

inputText.addEventListener("input", function (e) {
  log(e.target.value);
});

change.addEventListener("change", function (e) {
  log(e.target.value);
});

submit.addEventListener("submit", function (e) {
  console.log(e);
  e.preventDefault();
  // const id = submitID.value;
  // const nickname = submitNickname.value;
  // if (id === "" || nickname === "") {
  //   log("아이디 또는 닉네임을 입력하세요.");
  //   return;
  // }
  // log("아이디:" + id + " / 닉네임:" + nickname);
});

link.addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault();
});

target.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);

  const isTarget = e.target.id;
  //id는 html에서의 아이디를 말함
  //e.target 은 e의 자손까지(아무리 복잡해도) 정확한 타켓을 말해줌
  // parent,child1,child2
  const isCurrentTarget = e.currentTarget.id;
  //e.currentTarget 은 e의 자손말고 오로지 이벤트설정된 부분만
  //parent

  log(isTarget);
  // log(isCurrentTarget);
});
