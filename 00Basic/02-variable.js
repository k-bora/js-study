/* -------------------------------------------------------------------------- */
/*                                    변수정의                                  */
/* -------------------------------------------------------------------------- */
const nameValue = "CodingPing";
// let nameValue = "CodingPing"; //재할당 가능
const levelValue = "LEVEL UP";
const staminaValue = 12555;
const attackValue = 88766;
const shieldValue = 28745;

// nameValue = "코딩핑";
// 재할당 (재정의)
// Uncaught TypeError: Assignment to constant variable.
// 잡을 수 없는 타입에러: 변수가 상수에 할당되었습니다.

// const nameValue = "코딩핑";
// 이거 재할당이 아니라 두번 정의됬다고 인식함

const staminaIcon = "🦾";
const attackIcon = "🔪";
const shieldIcon = "📫";

const image = "./images/character.webp";

/* -------------------------------------------------------------------------- */
/*                                    UI 정의                                   */
/* -------------------------------------------------------------------------- */
const nickname = document.querySelector(".name");
const stamina = document.querySelector(".stamina");
const attack = document.querySelector(".attack");
const shield = document.querySelector(".shield");
const character = document.querySelector(".character img");
const levelup = document.querySelector(".levelup");

// 변수값 적용
nickname.innerText = nameValue;
stamina.innerText = staminaValue;
attack.innerText = attackValue;
shield.innerText = shieldValue;
levelup.innerText = levelValue;

stamina.dataset.icon = staminaIcon;
attack.dataset.icon = attackIcon;
shield.dataset.icon = shieldIcon;

character.setAttribute("src", image);

const show = () => {
  document.body.insertAdjacentHTML("afterbegin", `<span class="show">Level Up</span>`);
  const lvup = document.querySelector(".show");
  lvup.addEventListener("animationend", (e) => {
    e.target.remove();
  });
};

/* -------------------------------------------------------------------------- */
/*                                    이벤트실행                                */
/* -------------------------------------------------------------------------- */
levelup.addEventListener("click", show);
