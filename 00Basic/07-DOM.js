/* -------------------------------------------------------------------------- */
/*                                   DOM 선택자                                */
/* -------------------------------------------------------------------------- */

// document.querySelector('css 선택자');
document.querySelector(".select");
// console.log(document.querySelector(".select"));
const li = document.querySelector(".select li");
// querySelector는 하나만 선택됨
const lis = document.querySelectorAll(".select li");
// querySelectorAll 선택된거 모두 다 선택 (두개이상~)
// console.log(lis);
// console.log(lis.length);
// console.log(lis[1]);
// 0부터 시작

// lis.forEach(함수);
// forEach(작명, 작명) 선택자 각각을 선택
lis.forEach((item, index) => {
  //   console.log(item, index);
  //실제 dom을 값을 가짐, 순서
  item.style.border = "1px solid red";
  item.style.backgroundColor = "orange";

  //   item.classList.add("active");
  //   item.classList.add("active" + index);
  //   item.classList.add("active" + index + 1);
  //   item.classList.add("active" + (index + 1));
  //   item.classList.add(`active${index + 1}`);
  //``를 사용하면 ${}를 써서 데이터를 보호됨
});
// querySelectorAll을 안쓰고 querySelector썻을때 forEach abc 뜨면 안됨(예시문이 떠야함)

/* -------------------------------------------------------------------------- */
/*                                 DOM 클래스 제어                              */
/* -------------------------------------------------------------------------- */

const tabsButton = document.querySelectorAll(".tabs button");
// 버튼 클릭한 각각 버튼을 위해
tabsButton.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("test");
    // button.classList.add("active");
    // button.classList.remove("active");
    // button.classList.toggle("active");

    // 1. 클릭한것은 추가 그외는 삭제 : 그외를 찾기 어려워서 코드가 어려움
    // 2. 모두삭제후 클릭한것 추가 : 자주씀

    // 클릭한 각각 다시 모두를 각각 클랙스 삭제
    tabsButton.forEach((btn) => {
      btn.classList.remove("active");
    });

    // btn는 위에 button 작명을 해서 다시 button 못씀!
    button.classList.add("active");
  });
});
//forEach 각각을 button이라는 이름으로 지정
//각각을 클릭했을때 함수내용 실행

/* -------------------------------------------------------------------------- */
/*                                 DOM 텍스트 제어                              */
/* -------------------------------------------------------------------------- */

const textButton = document.querySelectorAll(".text-list button");

textButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // console.log(btn.textContent);

    const text = btn.textContent; // 변수로 텍스트 정보 저장
    const text2 = btn.closest("li").querySelector(".name").textContent;
    const text3 = btn.previousElementSibling.previousElementSibling.textContent;
    // alert(text + " 버튼을 눌러, 수강신청되었습니다.");
    // alert(`${index + 1}번째 "${text}" 버튼을 눌러, 수강신청되었습니다.`);

    // 버튼을 누르면 이름님이 수강을 신청하셨습니다. 만들기
    // alert(`"${text2}"님 수강을 신청하였습니다.`);
    alert(`"${text3}"님 수강을 신청하였습니다.`);
    btn.textContent = "✅ 신청완료";

    btn.style.border = "1px solid green";
    btn.style.backgroundColor = "lightgreen";
    btn.style.color = "green";
  });
});

// .closest() 메서드는 가장 가까운 부모를 탐색합니다.
// .previousElementSibling 는 이전 형제를 탐색합니다.
// console.log(btn.previousElementSibling.previousElementSibling);
// console.log(btn.closest("li").querySelector(".name"));

/* -------------------------------------------------------------------------- */
/*                                  DOM 속성 제어                              */
/* -------------------------------------------------------------------------- */

const rating = document.querySelector(".ratings input");

// 속성을 셋팅한다
// rating.setAttribute("속성명", "속성값");
// rating.setAttribute("disabled", "true");

const disabledButton = document.querySelector(".btn-disabled");
const radios = document.querySelectorAll(".ratings input");

disabledButton.addEventListener("click", () => {
  radios.forEach((radio) => {
    radio.setAttribute("disabled", "true");
  });
});

// 눈버튼을 클릭하면 일단 변하게
// 1. input type이 text로 변경
// 2. 눈버튼에 active 클래스 추가
// 이제는 토글되게
// 1. input type이 password, text 토글
// 2. 눈버튼에 active 클래스 토글

const passInput = document.querySelector(".password input");
const passBtn = document.querySelector(".password button");

let passToggle = true;
passBtn.addEventListener("click", () => {
  passBtn.classList.toggle("active");
  if (passToggle) {
    passInput.setAttribute("type", "text");
    // passBtn.classList.add("active");
  } else {
    passInput.setAttribute("type", "password");
    // passBtn.classList.remove("active");
  }
  passToggle = !passToggle;
});

// 노션에 있는 코드는 인수로 클래스추가 함
// const input = document.querySelector(".password input");
// const button = document.querySelector(".password button");

// button.addEventListener("click", (e) => {
//   input.setAttribute("type", "text");
//   e.target.classList.add("active");
// });

const changeinput = document.querySelector(".change-name input");
const changeButton = document.querySelector(".change-name button");

let toggle = true;
changeButton.addEventListener("click", () => {
  if (toggle) {
    changeinput.removeAttribute("readonly");
  } else {
    changeinput.setAttribute("readonly", "ture");
    // 자바스크립트에서 ture 값을 꼭 넣어야함.
  }
  toggle = !toggle;
});

const image = document.querySelector(".header img");
const imageSrc = image.getAttribute("src");
const imageAlt = image.hasAttribute("alt");
//selector.getAttribute('속성명');
// 원하는 요소의 속성값을 가지고 온다.

// selector.hasAttribute('속성명');
// 원하는 요소의 속성 유무를 판단한다.
// 결과값으로 true / false가 반환된다.

// console.log(imageSrc);
// console.log(imageAlt);

const ratingsList = document.querySelectorAll(".ratings input");
const ratingsButton = document.querySelector(".btn-check-count");

ratingsButton.addEventListener("click", () => {
  let isValid = false;
  ratingsList.forEach((input) => {
    // console.log(input.value);
    // console.log(input.checked);
    if (input.checked) {
      console.log(input.value);
      isValid = true;
    }
  });

  if (!isValid) {
    console.log("선택해주세요");
  }
});

const addFile = document.querySelector(".file");
const addFileName = document.querySelector(".file-name");
const addFileSize = document.querySelector(".file-size");

addFile.addEventListener("change", (e) => {
  //console.log(e.target.files[0].name);
  //lastModified : 올린 날짜 코드
  //console.log(new Date(e.target.files[0].lastModified));
  const fileName = e.target.files[0].name;
  const fileSize = e.target.files[0].size;
  const result = fileSize / 1024;

  addFileName.textContent = `파일명: ${fileName}`;
  // console.log(fileSize);
  // 바이크 bytes 단위로 나옴
  // console.log(fileSize / 1024);
  // KB
  addFileSize.textContent = `파일크기: ${result.toFixed(2)}KB`;
});

const openPopup = document.querySelector(".btn-avatar");
const popup = document.querySelector(".dialog");
const closePopup = document.querySelector(".dialog .close");

openPopup.addEventListener("click", () => {
  // popup.show();
  // 그래서 제이쿼이에서는 dialog태그 사용안됨!
  // dim 없음
  popup.showModal();
  // dim 있음 : css 가능
  // show(), showModal() 탭의 포커스 기능이 자동으로 줌
});

closePopup.addEventListener("click", () => {
  popup.close();
});

/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   DOM 탐색                                  */
/* -------------------------------------------------------------------------- */

const routineButton = document.querySelectorAll(".routine-list button");
routineButton.forEach((button) => {
  button.addEventListener("click", () => {
    routineButton.forEach((btn) => {
      btn.parentElement.classList.remove("active");
    });

    // button.nextElementSibling.style.display = "block";
    button.parentElement.classList.add("active");
    // parentElement 바로 위 부모 선택
  });
});

// 자식이 없는애만 골라 낼려고하는 것 (골라내서 버튼을 링크로 변경할려고)
const items = document.querySelectorAll(".routine-list > li");
items.forEach((item) => {
  const depth = item.querySelector(".detail-list");
  //   console.log(item.contains(depth));
  //contains 존재여부 조회

  if (!item.contains(depth)) {
    const button = item.querySelector("button");
    button.setAttribute("rol", "link");
    // 리더기에서 링크로 인식

    button.addEventListener("click", () => {
      window.location.href = "https://www.naver.com";
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */

const comment = document.querySelector(".comment");
const addHTML = comment.querySelector(".btn-add-html");
const commentList = comment.querySelector(".comment-list");
const commentInput = comment.querySelector("input");
const addDOM = comment.querySelector(".btn-add-dom");

// 데이터 보낼때 이런식으로 사용됨
// const form = comment.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

addHTML.addEventListener("click", (e) => {
  e.preventDefault(); //form과 submit 이 같이 있으면 새로고침 일어남 > 방지
  // 태그와 글 삽입 가능
  // commentList.innerHTML = "<div><button>클릭하시오</button></div>";
  commentList.innerHTML = `
  <li>첫 댓글 <button class="btn-del">삭제</button></li>
  <li>두 번째 댓글 <button class="btn-del">삭제</button></li>
  <li>세 번째 댓글 <button class="btn-del">삭제</button></li>
`;
});

addDOM.addEventListener("click", (e) => {
  e.preventDefault();

  const value = commentInput.value;
  // console.log(value);
  // commentList.innerHTML = `<li>${value} <button class="btn-del">삭제</button></li>`;
  // 선택자.insertAdjacentHTML(위치,html 태그)
  // commentList.insertAdjacentHTML("afterbegin", `<li>${value} <button class="btn-del">삭제</button></li>`);

  const liEl = document.createElement("li");
  const buttonEl = document.createElement("button");
  // console.log(buttonEl);
  buttonEl.classList.add("btn-del");
  buttonEl.textContent = "삭제";
  liEl.textContent = value;
  liEl.append(buttonEl);
  console.log(liEl);

  // commentList.prepend(`<li>${value} <button class="btn-del">삭제</button></li>`);
  // html 태그가 안들어감 : 그래서 createElement으로 태그를 만들어서 사용
  commentList.prepend(liEl);

  commentInput.value = "";
  commentInput.focus();

  // 클릭하면 생기기 때문에 클릭이벤트안에서 선택자 선언
  const delButtons = comment.querySelectorAll(".btn-del");
  delButtons.forEach((delButton) => {
    delButton.addEventListener("click", (e) => {
      // 클릭한 버튼의 가장 가까운 부모의 li를 선택해서 제거해라~
      e.target.closest("li").remove();
    });
  });
});
