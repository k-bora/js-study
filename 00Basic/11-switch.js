const body = document.body;
const themeSelect = document.querySelector("#theme");
const content = document.querySelector("#content");

/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */

// themeSelect.addEventListener("change", (e) => {
//   const value = e.target.value;
//   //   console.log(value);
//   if (value === "light") {
//     body.style.backgroundColor = "lightgray";
//   } else if (value === "dark") {
//     body.style.backgroundColor = "darkgray";
//   } else if (value === "blue") {
//     body.style.backgroundColor = "lightblue";
//   } else if (value === "silver") {
//     body.style.backgroundColor = "silver";
//   }
// });

/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */
// 무조건 일치 연산자만 가능! (연산(>=<) 이런거 없음)
themeSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  //   console.log(value);
  switch (value) {
    case "light":
      body.style.backgroundColor = "lightgray";
      break;

    case "dark":
      body.style.backgroundColor = "darkgray";
      break;

    case "blue":
      body.style.backgroundColor = "lightblue";
      break;

    case "silver":
      body.style.backgroundColor = "silver";
      break;
  }
});
