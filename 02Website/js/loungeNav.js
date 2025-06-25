import { loungeListData } from "./loungeListData.js";

export const LoungeNav = () => {
  const loungeList = document.querySelector(".lounge-nav > ul");

  if (!loungeList) {
    return;
  }

  loungeList.innerHTML = loungeListData
    .map(({ depth1, depth2 }) => {
      return `
    <li>
        <button>${depth1}</button>
        <ul>
        ${depth2
          .map((link) => {
            return `
            <li><a href="">${link}</a></li>
            `;
          })
          .join("")}
        </ul>
    </li>
    `;
    })
    .join("");
};
