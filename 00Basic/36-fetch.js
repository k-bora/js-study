/* -------------------------------------------------------------------------- */
/*                                    Fetch                                   */
/* -------------------------------------------------------------------------- */
// Promise : 인스터스로 받아야함
// console.log(fetch("https://jsonplaceholder.typicode.com/users/").then());

/* --------------------------------- then 방식 -------------------------------- */
// 비동기 코드 Promise는 then의 받을 수 있음 > 순서대로 진행하기 위해
// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//     // console.log(response);
//     //   status : 200 정상
//     //   ok : true 정보를 잘받았다
//   })
//   .then((response) => {
//     console.log(response);
//     document.querySelector(".fetch-list").innerHTML = response
//       .map((item) => {
//         return `
//         <li>
//         <div>이름 : ${item.name} </div>
//         <div>전화번호 : ${item.phone}</div>
//         <div>홈페이지 : ${item.website}</div>
//         <div>이메일 : ${item.email}</div>
//         </li>`;
//       })
//       .join("");
//   });

/* ----------------------------- async await 방식 ----------------------------- */
let loading = true;
const getUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    loading = false;
    console.log("완료 되었습니다.");
  }
};

getUser();
