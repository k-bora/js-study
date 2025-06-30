/* -------------------------------------------------------------------------- */
/*                                   Promise                                  */
/* -------------------------------------------------------------------------- */
// const first = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("첫번째");
//       resolve();
//     }, 1000);
//   });
// };
// const second = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("두번째");
//       resolve();
//     }, 1000);
//   });
// };
// const third = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("세번째");
//       resolve();
//     }, 1000);
//   });
// };

// first().then(second).then(third);

// const pizzaOrder = (tiem) =>
//   new Promise((resolve, reject) => {
//     const isOvenWorking = true;

//     setTimeout(() => {
//       if (isOvenWorking) {
//         resolve(`${tiem / 1000}초 뒤 ` + "피자가 완성됐어요!");
//       } else {
//         reject(`${tiem / 1000}초 뒤 ` + "오븐이 고장났어요 😢");
//       }
//     }, tiem);
//   });

// pizzaOrder(2000)
//   .then((msg) => {
//     console.log("✅", msg);
//   })
//   .catch((err) => {
//     console.log("❌", err);
//   });

const getUser = (id) => {
  return new Promise((aa) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        aa(console.log(`아이디번호 ${id}번 있어서 작업이 성공했을때 aa()가 실행`)); // (성공시) than(함수)를 실행 // 👉resolve()를 많이 사용함
        // id 값을 자동을 넣고 싶을때는 위에 처럼 , 수동으로 넣고 싶으면 아래의 than()안에 함수로
        // resolve()는
        // 👉 "나 끝났어! 성공했어!" 라고 말해주는 버튼!
        // 👉 그래야 .then()으로 넘어갈 수 있어요 💡
      });
  });
};

// ✅ .then() 이란?
// Promise가 성공했을 때 실행되는 코드를 넣는 함수!

//결과가 랜덤으로 표현됩니다.
// getUser(1).then(() => {
//   console.log(`아이디번호 1번 있어서 작업이 성공했을때 aa()가 실행`);
// });
// getUser(2).then(() => {
//   console.log(`2번 정보입니다.`);
// });
// getUser(3).then(() => {
//   console.log(`3번 정보입니다.`);
// });

//결과가 순서대로 표현됩니다.
getUser(1)
  .then(() => {
    console.log(`1번 정보입니다.`);
    return getUser(2);
  })
  .then(() => {
    console.log(`2번 정보입니다.`);
    return getUser(3);
  })
  .then(() => {
    console.log("3번 정보입니다.");
    console.log("끝났어요");
  });

// 내가 공부

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   //.than 안에 함수를 넣어서 리턴값을 줘야 다음 .than에 값이 이어서 감
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("서버 응답 에러!"); // 강제로 실패 처리
//     }
//     return response.json(); // 응답을 JSON으로 바꿔주는 작업도 비동기임!
//   })
//   .then((data) => {
//     console.log("✅ 받아온 데이터:", data);
//   })
//   .catch((err) => {
//     console.log("❌ 에러:", err);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts/10000") // 없는 글 ID
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("서버 응답 에러!"); // 강제로 실패 처리
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("✅ 데이터:", data);
//   })
//   .catch((err) => {
//     console.log("❌ 에러:", err.message);
//   });

//🔍 "에러났을 때 입력값도 같이 보고 싶으면?"
// 함수로 등록(.then을 사용하여 리턴까지)하고 파라미터 값으로
// const getPost = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
//     if (!res.ok) {
//       throw { message: "요청 실패", input: id }; // 여기!
//     }
//     return res.json();
//   });
// };

// getPost(99999)
//   .then((data) => {
//     console.log("✅ 데이터:", data);
//   })
//   .catch((err) => {
//     console.log("❌ 에러 메시지:", err.message); // 요청 실패
//     console.log("📌 요청한 ID:", err.input); // 99999
//   });
