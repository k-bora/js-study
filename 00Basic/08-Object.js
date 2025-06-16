/* -------------------------------------------------------------------------- */
/*                                    객체생성                                 */
/* -------------------------------------------------------------------------- */
const user = {
  name: "김보라",
  description: "인사말 두줄 이상 아주 길게 ~~~~~~~~~~~~~ 적어주세요 ~ 지금은 객체생성, 객체접근 수업중입니다~~~",
  infomation: {
    age: 35,
    city: "파주",
    country: "한국",
  },
  hellow: function () {
    // console.log("안녕하세요!");
    //함수는 리턴이 없으면 콘솔로보면 언디파인드뜸
  },
};

/* -------------------------------------------------------------------------- */
/*                                    객체접근                                 */
/* -------------------------------------------------------------------------- */

// console.log(user.infomation.age);
user.hellow();
user.image = "./images/002.jpg";
// console.log(user.name);

// 데이터 삽입하기
// const hello = document.querySelector(".hello");
// const shortDes = document.querySelector(".short-description");
// const infomationUl = document.querySelector(".infomation");

// hello.textContent = `안녕하세요, ${user.name}입니다!`;
// shortDes.textContent = `${user.description}`;

// infomationUl.innerHTML = `<li><span>${user.infomation.age}</span><strong>나이</strong></li>
//           <li><span>${user.infomation.city}</span><strong>도시</strong></li>
//           <li><span>${user.infomation.country}</span><strong>국가</strong></li>`;

const profile = document.querySelector(".profile");
profile.innerHTML = /* html */ `
    <img src="${user?.image || "./images/003.jpg"}" alt="사용자 아바타" class="avatar" />
    <h2 class="hello">안녕하세요, ${user?.name || "사용자"}입니다!</h2>
    <p class="short-description">
    ${user?.description || "등록된 인사말이 없습니다."}
    </p>
    <h3 class="title">기본 정보</h3>
    <ul class="infomation">
        <li><span>${user?.infomation?.age || "-"}<span><strong>나이</strong></li>
        <li><span>${user?.infomation?.city || "-"}<span><strong>도시</strong></li>
        <li><span>${user?.infomation?.country || "-"}</span><strong>국가</strong></li>
    </ul>
`;
/* -------------------------------------------------------------------------- */
/*                                   선택적 체이닝                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  배열 구조분해할당                           */
/* -------------------------------------------------------------------------- */

const arry = ["나이", "이름", "주소"];
const arry1 = arry[0];
const arry2 = arry[1];
const arry3 = arry[2];

// console.log(arry3);

const [a, b, c] = arry; // 배열 요소를 하나하나 이름으로 지정 가능, 작명가능
// console.log(a);

const objData = {
  name: "홍길동",
  age: 10,
  city: "seoul",
  image: "./images/001.jpg",
  login: true,
};

const { age, image, city, login, name } = objData; // 키이름으로만 가능, 순서 상관없음

// console.log(objData.image);
console.log(image);

/* -------------------------------------------------------------------------- */
/*                                  객체 구조분해할당                            */
/* -------------------------------------------------------------------------- */
