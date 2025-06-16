/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */
// if (조건) {
//   // 조건이 참일때 실행되는 코드
// }
// const Login = function (isLogin) {
//   const myname = prompt("이름을 입력하세요.");
//   if (myname) {
//     alert(myname + "님 안녕하세요.");
//   }
// };

const Login2 = (isLogin) => {
  const myname = prompt("이름을 입력하세요.");
  if (myname) {
    alert(myname + "님 안녕하세요.");
  }
};
/* -------------------------------------------------------------------------- */
/*                                   if/else                                  */
/* -------------------------------------------------------------------------- */
let isDark = false;
const theme = function () {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  isDark = !isDark;
};

let isShow = false;
const toggle = function () {
  if (isShow) {
    document.querySelector(".toggle").classList.remove("active");
  } else {
    document.querySelector(".toggle").classList.add("active");
  }
  isShow = !isShow;
};

/* -------------------------------------------------------------------------- */
/*                               if/else if/else                              */
/* -------------------------------------------------------------------------- */
const age = function () {
  const isAge = document.querySelector(".age").value;
  const text = document.querySelector(".text-age");

  if (isAge < 14) {
    text.textContent = "어린이입니다.";
  } else if (isAge < 20) {
    text.textContent = "청소년입니다.";
  } else {
    text.textContent = "성인입니다.";
  }
};

/* -------------------------------------------------------------------------- */
/*                                   물음표연산자                               */
/* -------------------------------------------------------------------------- */

// 조선 ? 참일 때 실행되는 값 : 거짓일 때 실행되는 값;
const promotion = function () {
  const code = document.querySelector(".code").value;
  const text = document.querySelector(".text-code");
  const disconst =
    code === "codevalue1234" ? (text.textContent = "프로모션 코드가 적용되었습니다.") : (text.textContent = "잘못된 프로모션 코드입니다.");
};
