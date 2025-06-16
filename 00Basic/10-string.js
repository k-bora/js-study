/* -------------------------------------------------------------------------- */
/*                                  표준내장객체 문자                           */
/* -------------------------------------------------------------------------- */

//length : 공백포함의 글자수
//const string = "kim bora";
//console.log(string.length);
// const arry = [1, 2, 3, 4];
// console.log(arry.length);

// includes() : 글자가 포함되어있는지 파악, 불린값으로 반환, 대소문자 구분
// const string = "kimbora";
// console.log(string.includes("bo"));
// console.log(string.includes("ki", 2)); // 몇번째 글자(시작점 지정)부터 포함되어있는지 파악가능
// const arry = ["kimbora", "test"];
// console.log(arry.includes("test"));

//indexOf() : 글자가 몇번째 있는지 파악합니다. ,일치하는 문자가 없으면 -1이 됩니다.
// const string = "kimbora";
// console.log(string.indexOf("ra"));
// console.log(string.indexOf("xx"));

// replace : 특정 문자를 새로운 문자로 교체
// const string = "kimborarara";
// console.log(string.replace("ra", "ya"));
// console.log(string.replace(/ra/g, "ya")); // /rebe/g : 정규표현식으로 g는 Global을 나타낸다.

// slice() : 특정 범위의 문자를 추출
// const string = "kimbora";
// console.log(string.slice(0, 3));
// console.log(string.slice(3));
// console.log(string.slice(3, -1));

// split() : 특정 구분자로 나눠 배열로
// const string = "kim bo ra ha ha ha";
// console.log(string.split(" ")); // 뛰어쓰기 기준으로 짤라서 배열로 만듬
// console.log(string.split(" ").reverse()); // 배열순서를 반대로
// console.log(string.split(" ").reverse().join()); // 배열을 쉼표포함으로 합침
// console.log(string.split(" ").reverse().join().replace(/,/g, "")); // 쉼표제거
// console.log(string.split(" ").reverse().join().replaceAll(",", "")); // 쉼표제거
// console.log(string.split(" ").reverse().join("")); // 조임할때 빈칸문자열을 넣으면 쉼표안생김!

//toLowerCase() : 소문자로 반환
//toUpperCase() : 대문자로 반환
// const string = "KIMbora";
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());

//trim() : 문자 맨앞/맨뒤 공백을 제거
const string = "     kimbora    ";
console.log(string.trim());
