/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 숫자                           */
/* -------------------------------------------------------------------------- */
// toFixed() : 특정 소수점까지 표기
// const num = 0.12345;
// console.log(num.toFixed(2)); // 소수점 둘째자리까지 표기, 문자열로 바뀜*
// console.log(typeof num.toFixed(2)); // 소수점 둘째자리까지 표기, 문자열로 바뀜*
// console.log(typeof Number(num.toFixed(2))); // 숫자타입을 변경
// console.log(typeof parseFloat(num.toFixed(2))); // 숫자타입을 변경

// toLocaleString() : 숫자를 3자리 쉼표 구분으로 끓어줌
// const num = 123123123;
// console.log(num.toLocaleString());
// console.log(`${num.toLocaleString()}원`);

// Number.isInteger() : 정수인지 Boolean으로 구분
// const num = 1000000;
// const num = 1000.123;
// console.log(Number.isInteger(num));

//parselnt() : 주어진 값을 정수로 반환, 문자,숫자 모두 가능, 소주점 없어짐  >> 타입을 넘버로
// const num = 3.13215;
// const str = "3.13215";
// console.log(parseInt(num));
// console.log(parseInt(str)); // 타입 숫자로 변경됨*

//paeseFloat() : 주어진 값을 실수(숫자)로 변환, 소주점 유지 >> 타입을 넘버로
const num = 3.13215;
const str = "3.13215";
const str2 = "3.13215AAAAA";

console.log(parseFloat(num)); // 3.13215
console.log(parseFloat(str)); // 3.13215

console.log(parseFloat(str2)); // 3.13215 , 뒤에 문자있어도 가능
console.log(Number(str2)); // NaN , 뒤에 문자있으면 안됨
