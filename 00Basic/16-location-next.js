// console.log(window.location);

const params = new URLSearchParams(window.location.search);
let obj = {};
// URLSearchParams 객체화로 변경

// console.log(params);
// console.log(typeof params);

params.forEach((value, key) => {
  // console.log(value, key);
  obj[key] = value; //객체에 key를 추가하고 그에 대한 value을 설정한다. // 동적으로생성된 객체값을 넣을때(추가할때)
  // obj.key // 처음부터 값이 있었다면 이러게 조회
});

// for (const [key, value] of params) {
//   obj[key] = value;
// }

console.log(obj);

const h2 = document.querySelector("h2");
h2.style.cssText = `
color:${obj.color};
font-size :${obj.size}px;
`;
