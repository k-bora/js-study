/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 수학                           */
/* -------------------------------------------------------------------------- */

// Math.abs() : 부호 제거 > 정수로 만들어줌
// const number = -100;
// console.log(Math.abs(number));

// Math.ceil() : 무조건 올림
// const number = 2.01;
// console.log(Math.ceil(number));

// Math.floor() : 무조건 내림
// const number = 2.99;
// console.log(Math.floor(number));

// Math.max() : 최대값을 구함
// const number = [1, 2, 3, 4];
// console.log(...number);
// console.log(Math.max(...number));

// Math.min() : 최소값을 구함
// const number = [1, 2, 3, 4];
// console.log(Math.min(...number));

// Math.pow() : 제곱 (10을, 3번제곱)
// console.log(Math.pow(10, 3));

// Math.random() : 랜덤 난수발생
// console.log(Math.random());

// 랜덤숫자 뽑아내기
// const random = (min = 0, max = 10) => {
//   const result = Math.random() * (max - min) + min;
//   // 6 - 2 = 4
//   // 0.124 * 4 = 0.496
//   // 0.496 + 2 = 2.124
//   // 2
//   return Math.floor(result);
// };

// console.log(random(2, 6));
// const randomNumber = random(2, 6);
// console.log(randomNumber);

// Math.round() : 반올림
const number = 3.8;
console.log(Math.round(number));
