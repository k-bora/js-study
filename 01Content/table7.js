//표7 : 데이터 바인딩하기 (페이징 하지마세요)
import { innerText } from "./table7-data.js";
const tbody = document.querySelector("tbody");
// const tableQRows = document.querySelectorAll("tbody tr");
const totalNum = document.querySelector(".table-info span");

// const dataIn =
tbody.innerHTML = innerText
  .map(({ no, category, title, text }, index) => {
    return /*html*/ `
          <tr ${index === 0 ? 'class="active"' : ""}>
            <td>${no}</td>
            <td>${category}</td>
            <td><button>${title}</button></td>
          </tr>
          <tr ${index === 0 ? 'style="display: table-row""' : ""}>
            <td colspan="3">
              <div class="answer">
                <div>
                    ${text}
                </div>
              </div>
            </td>
          </tr>`;
  })
  .join("");

// tbody.innerHTML = dataIn.join("");

// 버튼 클릭시 토글
const buttons = document.querySelectorAll("td button"); // 새로 생성된 버튼들 선택
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("클릭");

    const trs = document.querySelectorAll("tbody tr");
    trs.forEach((tr, index) => {
      tr.classList.remove("active");
      if (index % 2 !== 0) {
        tr.style.display = "none";
      }
    });

    const activeTr = button.closest("tr");
    activeTr.classList.add("active");
    if (activeTr.classList.contains("active")) {
      activeTr.nextElementSibling.style.display = "table-row";
    } else {
      //   console.log("닫힘");
      activeTr.nextElementSibling.style.display = "none";
    }
  });
});

//표7 : 게시물 갯수 반영하기
totalNum.textContent = innerText.length;
