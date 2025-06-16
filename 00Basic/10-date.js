/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 날짜                           */
/* -------------------------------------------------------------------------- */

const date = new Date();
// console.log(date);

// 년
// console.log(date.getFullYear());
// date.setFullYear(2024);
// console.log(date.getFullYear());

// 월 : 1월이 0
// console.log(date.getMonth());
// date.setMonth(6);
// console.log(date.getMonth());

// 일
// console.log(date.getDate());
// date.setDate(1);
// console.log(date.getDate());

// 시
// console.log(date.getHours());
// date.setHours(1);
// console.log(date.getHours());

// 분
// console.log(date.getMinutes());
// date.setMinutes(15);
// console.log(date.getMinutes());

// 초
// console.log(date.getSeconds());
// date.setSeconds(15);
// console.log(date.getSeconds());

const copyrightYear = () => {
  const date = document.querySelector(".date");
  const thisYear = new Date().getFullYear();
  console.log(thisYear);

  date.textContent = thisYear;
};

copyrightYear();
