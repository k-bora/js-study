/* -------------------------------------------------------------------------- */
/*                               CallBack Error                               */
/* -------------------------------------------------------------------------- */
// const sameWord = (word, callback, errorCallBack) => {
//   setTimeout(() => {
//     if (word !== "리베하얀") {
//       errorCallBack(`${word}는 같은단어가 아닙니다.`);
//       return;
//     }
//     console.log(word);
//     callback(word);
//   }, 1000);
// };

// sameWord(
//   "리베",
//   (response) => {
//     console.log(response);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

/* -------------------------------------------------------------------------- */
/*                                Promise Error                               */
/* -------------------------------------------------------------------------- */
// const sameWord = (word) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (word !== "리베하얀") {
//         reject(`${word}는 같은단어가 아닙니다.`);
//         return;
//       }
//       console.log(word);
//       resolve(word);
//     }, 1000);
//   });
// };

// sameWord("리베")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("끝냄");
//   });

/* -------------------------------------------------------------------------- */
/*                              Async Await Error                             */
/* -------------------------------------------------------------------------- */
// const sameWord = (word) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (word !== "리베하얀") {
//         reject(`${word}는 같은단어가 아닙니다.`);
//         return;
//       }
//       // console.log(word);
//       resolve(word);
//     }, 1000);
//   });
// };

// const getWord = async () => {
//   const res = await sameWord("리베");
//   console.log(res);
// };

// getWord();

/* -------------------------------------------------------------------------- */
/*                               Try Catch Error                              */
/* -------------------------------------------------------------------------- */

// const sameWord = (word) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (word !== "리베하얀") {
//         reject(`${word}는 같은단어가 아닙니다.`);
//         return;
//       }
//       // console.log(word);
//       resolve(word);
//     }, 1000);
//   });
// };

// const getSameWord = async (text) => {
//   try {
//     const res = await sameWord(text);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("모든작업 완료");
//   }
// };

// getSameWord("리베");
/* -------------------------------------------------------------------------- */
/*                                 API Promise                                */
/* -------------------------------------------------------------------------- */
// const getUser = (id) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((json) => {
//         if (!json.id) {
//           reject("아이디가 없습니다.");
//         }
//         resolve(json);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };
// let loading = true;

// getUser(10)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     loading = false;
//   });

/* -------------------------------------------------------------------------- */
/*                               API Async Await                              */
/* -------------------------------------------------------------------------- */

// const getUser = (id) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((json) => {
//         if (!json.id) {
//           reject("아이디가 없습니다.");
//         }
//         resolve(json);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };
// let loading = true;

// const userInfo = async () => {
//   try {
//     const result = await getUser(1);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("로딩이 완료 되었습니다.");
//     loading = false;
//   }
// };

// userInfo();

/* -------------------------------- 나혼자 연습 --------------------------------- */
const userInfo = async (id) => {
  let loading = true;
  try {
    if (loading) {
      console.log("로딩중~");
    }

    const urlData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userData = await urlData.json();

    if (!userData.id) {
      console.log("아이디가 없습니다.");
    }
    // !id	전달받은 숫자 매개변수가 falsy인지 확인 (ex: 0이면 true)	❌ 여기선 무의미
    // !userData.id	받아온 데이터 안에 id가 없거나 0이면 true	✅ 이게 맞는 코드!

    console.log(userData);
  } catch (error) {
    console.log(error);
  } finally {
    let loading = false;
    console.log("완료");
  }
};

userInfo(1);
