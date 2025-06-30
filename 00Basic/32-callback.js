/* -------------------------------------------------------------------------- */
/*                                CallBack Hell                               */
/* -------------------------------------------------------------------------- */

const first = (callback) => {
  setTimeout(() => {
    console.log("첫번째");
    callback();
  }, 1000);
};
const second = (callback) => {
  setTimeout(() => {
    console.log("두번째");
    callback();
  }, 1000);
};
const third = () => {
  console.log("세번째");
};

first(() => {
  second(() => {
    third();
  });
});

// setTimeout(() => {
//   console.log("1번 작업");

//   setTimeout(() => {
//     console.log("2번 작업");

//     setTimeout(() => {
//       console.log("3번 작업");

//       setTimeout(() => {
//         console.log("4번 작업");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
