import { listData } from "./list2-data.js";

const list = document.querySelector(".list");

const listInner = listData.map((data) => {
  const projects = data.projects
    .map((project) => {
      return /* html */ `
            <div>
                ${project.link ? `<a href=''>${project.text}</a>` : `${project.text}`}
                ${project.image ? "<img src='./images/ico_img.svg'>" : ""}
            </div>
        `;
    })
    .join("");

  return /* html */ `
        <li>
            <strong>${data.year}</strong>
            ${projects}
        </li>
        `;
});

list.innerHTML = listInner.reverse().join("");
// 질문: 링크가 있는 경우 왜 ${project.text} 글자로 나오나요? 텍스트로 인식하는거 같아요..
