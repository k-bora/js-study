// string : 문자형
// const isName = "문자";
// const isString = `${isName}123`;

// console.log(isname);
// console.log(typeof isName);
// console.log(isString);

// Number : 숫자
// const isNumber = 12.3;
// const isStringOfNumber = Number("12.3");
// console.log(isNumber);
// console.log(typeof isNumber);

// Boolean : 블린 true, false

// Undefined
// let undef;
// let dbj = {
//   a: 1,
//   b: 2,
// };
// console.log(dbj.c);

//Null
// let empty = null;
// if (true) {
//   empty = "문자";
//   console.log(empty);
// }

//Object : 객체
// const obj = {
//   name: "violet",
//   age: 33,
// };
// console.log(obj);
// console.log(obj.age);

//Array : 배열
// const numbers = [1, 2, 3, "abc"];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers.length);

// Function :함수
// function funcName() {
//   console.log("함수가 실행되었습니다.");
// }
// funcName();
// funcName();

const levelup = document.querySelector(".levelup");

/* -------------------------------------------------------------------------- */
/*                                    변수정의                                  */
/* -------------------------------------------------------------------------- */
const nameValue = "CodingPing";
const levelValue = "타입 확인";
const staminaValue = 12555;
const attackValue = 88766;
const shieldValue = 28745;

const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

const image = "./images/character.webp";

/* -------------------------------------------------------------------------- */
/*                                💡  타입확인  💡                              */
/* -------------------------------------------------------------------------- */
levelup.addEventListener("click", () => {
  myTypeis(); //👈 함수에 원하는 데이터를 넣어보세요.
});

/* -------------------------------------------------------------------------- */
/*                                    초기실행                                  */
/* -------------------------------------------------------------------------- */
function init() {
  const nickname = document.querySelector(".name");
  const stamina = document.querySelector(".stamina");
  const attack = document.querySelector(".attack");
  const shield = document.querySelector(".shield");
  const character = document.querySelector(".character img");

  nickname.innerText = nameValue;
  stamina.innerText = staminaValue;
  attack.innerText = attackValue;
  shield.innerText = shieldValue;
  levelup.innerText = levelValue;

  stamina.dataset.icon = staminaIcon;
  attack.dataset.icon = attackIcon;
  shield.dataset.icon = shieldIcon;

  character.setAttribute("src", image);
}

/* -------------------------------------------------------------------------- */
/*                                  애니메이션 제어                             */
/* -------------------------------------------------------------------------- */
function myTypeis(data) {
  const lvup = document.querySelector(".show");
  const istype = checkType(data);

  document.body.insertAdjacentHTML("afterbegin", `<span class="show">${istype}</span>`);

  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
}

/* -------------------------------------------------------------------------- */
/*                                   데이터 확인                                */
/* -------------------------------------------------------------------------- */
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

init();
