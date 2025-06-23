import { LearningData } from "./learningData.js";
export const LearningDataInner = () => {
  const tabContents = document.querySelectorAll(".tab-contents > ul");
  //   console.log(tabContents[1]);
  tabContents[1].innerHTML = LearningData.map(({ imageSrc, badges, title, hash, type, date, applyDate }) => {
    return `
      <li>
          <a href="">
              ${
                imageSrc
                  ? `<div class="thumbnail">
                      <img src="${imageSrc}" alt="" />
                  </div>
                  `
                  : `<div class="thumbnail" style="background-color:#eee"><img alt="" /></div>`
              }
              <div class="badges">
                  ${badges.orange ? `<span class="badge orange">${badges.orange}</span>` : ""}
                  ${badges.coin ? `<span class="badge coin">${badges.coin}</span>` : ""}
              </div>
              <strong class="list-type1__title">${title}</strong>
              <div class="hash">
              ${hash
                .map((tag) => {
                  return `<span>${tag}</span>`;
                })
                .join(" ")}
              </div>
              <ul class="list-type2">
                  <li>
                      <span>형 태</span>
                      <div>${type}</div>
                  </li>
                  <li>
                      <span>일 정</span>
                      <div>${date}</div>
                  </li>
              </ul>
              <div class="list-type1__date">${applyDate}</div>
          </a>
      </li>
      `;
  }).join("");
};
