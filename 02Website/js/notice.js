import { noticeData } from "./noticeData.js";

export const NoticeList = () => {
  const tbody = document.querySelector("table.notice tbody");

  if (!tbody) {
    return;
  }
  // 개시물 데이터 바인딩
  const boardData = () => {
    if (noticeData.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5">등록된 게시물이 없습니다.</td></tr>`;
      return;
    }

    tbody.innerHTML = noticeData
      .map(({ no, title, writer, date, review }) => {
        return `<tr>
            <td>${no}</td>
            <td>${title}</td>
            <td>${writer}</td>
            <td>${date}</td>
            <td>${review}</td>
          </tr>`;
      })
      .join("");
  };

  // 개시물 갯수
  const boardLength = () => {
    const boardInfo = document.querySelector(".board-info span");
    boardInfo.textContent = `${noticeData.length.toLocaleString()} 개`;
  };

  //함수 실행
  boardData();
  boardLength();
};
