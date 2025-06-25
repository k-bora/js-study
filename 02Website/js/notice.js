import { noticeData } from "./noticeData.js";

export const NoticeList = () => {
  const tbody = document.querySelector("table.notice tbody");
  const boardInfo = document.querySelector(".board-info span");

  if (!tbody) {
    return;
  }

  boardInfo.textContent = `${noticeData.length.toLocaleString()} 개`;

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
