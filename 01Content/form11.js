// 폼11 : 뉴스레터 구독버튼 누르면 경고창 띄우기
// >>> xxx@xxx.com으로 뉴스레터가 신청되었습니다.

const emailBtn = document.querySelector(".email-box button");
const emailInput = document.querySelector(".email-box input");
emailBtn.addEventListener("click", () => {
  // console.log("emailTxt");
  const emailTxt = emailInput.value;
  if (emailInput.value.length == 0) {
    alert("이메일을 입력해주세요.");
  } else {
    alert(`${emailTxt}으로 뉴스레터가 신청되었습니다.`);
  }
});
