/* -------------------------------------------------------------------------- */
/*                                 Async Await                                */
/* -------------------------------------------------------------------------- */
const first = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("첫번째");
      resolve();
    }, 1000);
  });
};
const second = () => {
  console.log("두번째");
};

// first().then(() => {
//   second();
// });

//패치함수 : 비동기함수
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     console.log("첫번째 출력");
//     console.log("두번째 출력");
//     console.log("세번째 출력");
//   });

const result = async () => {
  await first(); // await 무조건 함수안에 있어야함
  second();
};

// result();

// 설명!
// async 붙은 함수 안에서만 await 사용 가능!
// await은 Promise가 끝날 때까지 기다린 다음에 결과를 받아서 실행함

// 화살표 함수를 쓰는게 좋음
// 자바스크립트에서 function으로 만든 일반 함수는
// 자기만의 this를 다시 가지게 돼.
// 그런데 화살표 함수는 부모의 this를 그대로 씀!

// const func1 = async function () {
//   console.log(this); // this 바뀔 수 있음
// };

// const func2 = async () => {
//   console.log(this); // this는 바깥과 같음
// };

// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`⏰ ${ms}ms 지남`);
//     }, ms);
//   });
// }

// async function run() {
//   const res1 = await wait(1000);
//   console.log("res1", res1); // 1초 뒤 출력

//   const res2 = await wait(1000);
//   console.log("res2", res2); // 또 1초 뒤 출력

//   console.log("✅ 끝!");
// }

// run();

//✅ fetch 예제 (실전형!)
async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
      throw new Error(`❌ 서버 응답 실패 (입력 ID: ${id})`);
    }

    const data = await res.json();
    console.log("✅ 받아온 데이터:", data);
  } catch (err) {
    console.log("🚨 에러:", err.message);
  }
}

getPost(1); // 정상 호출
getPost(999999); // 실패 처리

const getUser = (id) => {
  return new Promise((resolve) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        resolve();
      });
  });
};

const userInfo = async () => {
  await getUser(1);
  await getUser(2);
  await getUser(3);
  await getUser(4);
  await getUser(5);
};
