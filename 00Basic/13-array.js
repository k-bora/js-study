/* -------------------------------------------------------------------------- */
/*                                     배열                                    */
/* -------------------------------------------------------------------------- */

// .at() : n번때 배열 탐색, 음수 지원
// const arr = ["A", "B", "C"];
// console.log(arr);
// console.log(arr.at(0));
// console.log(arr.length - 1); // 2
// console.log(arr.at(-1)); // c

// .concat() : 병합해서 새로운 배열생성
// const arr1 = ["A", "B", "C"];
// const arr2 = ["E", "F", "G"];
// const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1, ...arr2]; // 스프레드 문법

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// every() : 배열조건이 참인지체크 모두 참이여야 참 / 하나라도 거짓이면 거짓
// const arr = [1, 2, 3, 4];
// const isVaild = arr.every((item) => {
//   // arr배열을 각각 item인수로 받아서 비교한다.
//   return item < 5;
// });

// console.log(isVaild);

// .filter() : 참인것만 골라 새로운 배열 만듬
// const arr = [1, 2, 3, 4, 100];
// const isValid = arr.filter((item) => {
//   return item < 30;
// });
// console.log(isValid);
// 1을 제외한 나머지 반환
// const arr = [1, 2, 3, 4, 100];
// const isValid = arr.filter((item) => {
//   if (item != 1) {
//     return item;
//   }
// });
// console.log(isValid);
// 특정년도 이후를 구분
// const users = [
//   { name: "하성필", year: 1981 },
//   { name: "하하하", year: 1980 },
//   { name: "리베하얀", year: 1979 },
// ];
// const isVaild = users.filter((user) => {
//   return user.year > 1980;
// });
// console.log(isVaild);

// .find() : 조건을 만족하는 첫 번째 요소를 찾고 그요소를 반환
// const arr = [1, 2, 3, 4, 100];
// const isVaild = arr.find((item) => {
//   return item > 3;
// });
// console.log(isVaild);
// 객체 배열에서 조건에 맞는 객체찾기
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
// //이름이 Bob인 사용자를 찾음
// const user = users.find((user) => user.name === "Bob");
// console.log(user);
// 특정 이름을 검색할 때
// const users = [
//   { name: "하성필", year: 1981 },
//   { name: "아무개", year: 1980 },
//   { name: "리베하얀", year: 1979 },
// ];
// const isVaild = users.find((user) => {
//   return user.name === "리베하얀";
// });
// console.log(isVaild);
// 날짜 비교를 사용한 예제
// const events = [
//   { date: "2024-04-10", event: "Conference" },
//   { date: "2024-04-12", event: "Workshop" },
// ];
// // 날짜가 "2024-04-12"인 이벤트 찾기
// const isVaild = events.find((e) => {
//   return e.date === "2024-04-12";
// });
// console.log(isVaild);

// .findIndex : 조건을 만족하는 첫 번째 요소의 인덱스번호를 반환
// const arr = [1, 2, 3, 4, 100];
// const isVaild = arr.findIndex((item) => {
//   return item > 3;
// });
// console.log(isVaild);

// .flat() : 하위배열을 이어붙어 새로운 배열 반환,
// const arr = [1, 2, [4, 5, [5]]];
// console.log(arr.flat()); // 깊이를 인수로 넣으면 깊이로 이어붙인다. 기본값은 1
// console.log(arr.flat(2)); // 깊이를 인수로 넣으면 깊이로 이어붙인다. 기본값은 1
// console.log(arr.flat(Infinity)); // 깊이와 상관없이 모두 붙인다.

//.join() :  모든 요소를 구분자로 연결한 문자*를 반환
// const arr = ["apple", "banana", "code"];

// console.log(arr.join()); // apple,banana,code 기본은 쉼표로 구분한다.
// console.log(arr.join("")); // applebananacode 쉼표를 제거한다.
// console.log(arr.join("/")); // apple/banana/code

// map() : 콜백의 변환 값을 모아 새로운 배열 반환
// const arr = [1, 2, 4, 5];
// const numbers = arr.map((item) => {
//   return item * 2;
// });
// console.log(numbers);

// const users = [
//   { name: "하성필", year: 1981 },
//   { name: "아무개", year: 1980 },
//   { name: "리베하얀", year: 1979 },
// ];
// const newUsers = users.map((user) => ({
//   ...user,
//   isValid: true,
//   email: null,
// }));
// console.log(newUsers);

// - `() => ()`: 단일 표현식을 실행하고 그 결과를 암묵적으로 반환합니다.
// - `() => {}`: 함수 본문을 정의하며, 반환하려면 명시적으로 `return`을 사용해야 합니다.

// .pop() : 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환, 원본이 변경
// const arr = ["apple", "banana", "code"];
// console.log(arr.pop());
// console.log(arr);

//.push() : 마지막 요소에 하나이상의 요소를 추가, 원본이 변경
// const arr = ["apple", "banana", "code"];
// const newArr = arr.push("orange");
// const newArr2 = arr.push("orange", "data");

// console.log(newArr2); // 갯수가 나오네 6
// console.log(arr);

// reduce() : 마지막에 호출(누적)되는 콜백을 값을 반환함. for 같은거?
// const sum = arr.reduce( (초기시작값누적되는값, 배열요소) => {
// 	return 초기시작값 + 배열요소
// }, 0); // 초기시작값
// const arr = [1, 2, 4, 5];
// const sum = arr.reduce((init, items) => {
//   return init + items;
// }, 0);
// // const sum = arr.reduce( (acc, cur) => init + items, 0); // 축약표현
// console.log(sum);
// 총나이 계산
// const users = [
//   { name: "a", age: 20 },
//   { name: "b", age: 50 },
//   { name: "c", age: 35 },
// ];

// const totalAge = users.reduce((acc, aur) => {
//   return acc + aur.age;
// }, 0);
// // const totalAge = users.reduce( (acc, cur) =>  acc + cur.age, 0); //축약
// console.log(totalAge); // 전체나이
// console.log(totalAge / users.length); // 평균나이
// console.log(totalAge / users.length.toFixed(1)); // 소수점 1자리 자르기
//모든이름 추출
// const users = [
//   { name: "a", age: 20 },
//   { name: "b", age: 50 },
//   { name: "c", age: 35 },
// ];
// const newArr = users.reduce((acc, cur) => {
//   // acc: 누적값 (accumulator)
//   // cur: 현재 처리 중인 요소 (current)
//   acc.push(cur.name); // 배열에 끝에서 하나씩 반복해서 넣는다.
//   return acc;
// }, []); //누적값이 숫자가 아니어서 초기값 []
// console.log(newArr);
// const names = newArr.join(', /');
// console.log(names);
// 모든이름 추출 축약
// const names = users
//   .reduce((acc, cur) => {
//     acc.push(cur.name);
//     return acc;
//   }, [])
//   .join("/");
// console.log(names);
//가장 큰 수 구하기
// const users = [20, 30, 540, 1];
// const maxNumber = users.reduce((acc, cur) => {
//   // return cur > acc ? cur : acc;
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, users[0]);
// console.log(maxNumber);

//.reverse() : 대상 배열의 순서를 반전, 원본이 변경
// const arr = ["A", "B", "C"];
// const reversed = arr.reverse();
// console.log(reversed);

//.shift() :  첫번째 요소를 제거하고, 제거된 요소를 반환, 원본이 변경
// const arr = ["A", "B", "C"];
// const result = arr.shift();

// console.log(result); // A
// console.log(arr); // [b,c]

//.slice() : 대상 배열의 일부를 추출해 새로운 배열을 반환한다.
// const arr = ['A','B','C','E','F','G'];
// console.log(arr.slice(0, 3)); // a,b,c
// console.log(arr.slice(4, -1)); // 3번째부터 끝까지
// console.log(arr.slice(4)); // 3번째부터 끝까지

//.some() : 콜백 테스트를 통과하는지 확인, 1개라도 통과되면 통과
// const arr = [1, 2, 4, 5];
// const isValid = arr.some((item) => {
//   return item > 4;
// });
// console.log(isValid); // true

//.sort() : 정렬 , 문자열로 변환, 원본변경
// const arr = [1, 20, 4, 5, 100];
// arr.sort();
// console.log(arr);
// arr.sort((a, b) => {
//   const sort = a - b;
//   return sort;
// });
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr); // 100, 20, 5, 4, 1
// 나이순서로 나열
// const users = [
//   { name: "a", age: 20 },
//   { name: "b", age: 50 },
//   { name: "c", age: 35 },
// ];

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// .unshift() : 새로운 요소를 대상 배열의 맨 앞에 추가, 원본변경
// const arr = ["A", "B", "C"];
// const result = arr.unshift("X");

// console.log(arr); // [x,a,b,c]

//Array.from()
