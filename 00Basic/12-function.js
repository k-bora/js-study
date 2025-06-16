/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때 (함수 밖에 값을 반환할때)
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");

  //기능용
  const result = () => {
    const number1 = document.querySelector(".sum .number1");
    const number2 = document.querySelector(".sum .number2");
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    return value1 + value2;
  };

  // 출력용
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const sumNumber = result(); // 함수로 리턴된 값을 담아서 써야 됨 (받을때 변수로 받아야 함)

    resultValue.textContent = sumNumber;
  });
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    //trim() 문자열의 앞과 뒤의 공백 삭제
    if (input.value.trim() === "") {
      console.log("입력해주세요.");
      return; // 유효성 검사할때 ~ 값이 없게 보내지고, 다음게 실행안됨, 아예 다른 함수에서
    }

    output.textContent = input.value;
    console.log("메세지가 발송되었었습니다.");
  });
};
message();

// 절차적인 작업을 수행할 때
// const handleValid = () => {
//   const private = document.querySelector(".private");
//   const inputs = private.querySelectorAll("input");
//   const privateText = private.querySelector("p");
//   const privateBtn = private.querySelector("button");

//   privateBtn.addEventListener("click", (e) => {
//     // 전송클릭 후 기능
//     e.preventDefault();
//     if (inputs[0].value.trim() === "") {
//       console.log("이름을 입력해주세요");
//     }
//     if (inputs[1].value.trim() === "") {
//       console.log("이메일을 입력해주세요");
//     }
//     if (inputs[2].value.trim() === "") {
//       console.log("나이을 입력해주세요");
//     }
//   });
// };

const handleValid = () => {
  const private = document.querySelector(".private");
  const inputs = private.querySelectorAll("input");

  private.addEventListener("submit", (e) => {
    // 전송클릭 후 기능

    let data = {};
    let text = "";

    e.preventDefault();
    inputs.forEach((input) => {
      const value = input.value.trim();
      const name = input.name;
      // console.log(name);
      // text = "123";
      // data[키] = 값; : 빈객체에 객체를 넣을때는 대괄호!
      data[name] = value;
    });
    // console.log(text);
    // console.log(data);

    if (data.name === "") {
      console.log("이름을 입력하세요.");
      return;
    }
    if (data.email === "") {
      console.log("이메일을 입력하세요.");
      return;
    }
    if (data.age === "") {
      console.log("나이을 입력하세요.");
      return;
    }

    console.log("회원가입이 완료되었습니다");
  });
};

handleValid();

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 헨들러 함수를 사용할 때z
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                                    호이스팅                                 */
/* -------------------------------------------------------------------------- */

hellow();

function hellow() {
  // console.log("hello");
}

// 변수로 실행하면 호이스팅이 안남, 오류가 안생김
// const hellow = hellow2();

// function hellow2() {
//   console.log("hello2");
// }

/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification(text) {
  const dialog = document.querySelector("dialog");
  dialog.textContent = text;
  dialog.show();

  const timeout = setTimeout(() => {
    dialog.close();
  }, 2000);

  return timeout;
}

// 알림 호출
const toast = showNotification("쪽지가 도착했습니다.");
let seconds = 0;
/* ------------------------------- setInterval ------------------------------ */
function updateTimer() {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
}

// 1초마다 타이머 업데이트
const interval = setInterval(updateTimer, 1000);

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {
  clearTimeout(toast);
});

/* ------------------------------ clearInterval ----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(interval);
  // showNotification("쪽지가 도착했습니다."); 함수 자체를 넣을수 없어서 변수로 넣어서 사용해야함
});

/* -------------------------------------------------------------------------- */
/*                                    This                                    */
/* -------------------------------------------------------------------------- */

// const user = {
//   nickName: "Rebehayan",
//   firstName: "Ha",
//   lastName: "SungPil",
//   age: 30,
//   // 펑션은 현재 조회
//   getFullName: function () {
//     // console.log("메서드");
//     console.log(this);
//   },
//   getFull() {
//     console.log(this);
//   },
//   // 화살표는 부모의 갱체를 조회
//   getName: () => {
//     console.log(this);
//   },
// };

// user.getFullName();
// user.getFull();
// user.getName();

/* -------------------------------------------------------------------------- */
/*                                  CallBack                                  */
/* -------------------------------------------------------------------------- */

const hi = (callback) => {
  console.log("함수가 실행되었습니다.");
  callback("김보라");
};

cosnt = isCallback = (name) => {
  console.log(`${name} callback 함수가 실행되었습니다.`);
};

// hi(() => {
//   console.log("callback 함수가 실행되었습니다.");
// });

hi(isCallback);
