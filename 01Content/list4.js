import { data1, data2 } from "./list4-data.js";
const list = document.querySelector(".news-list");
const tabBtns = document.querySelectorAll(".tab-type1 button");

//보도자료
const spanInner = data1.map((span) => {
  return `
    <li>
        <a href="">
            <span class="category">${span.category}</span>
            <span class="subject">${span.subject}</span>
            <span class="date">${span.date}</span>
        </a>
    </li>
    `;
});

//공시정보
const spanInner2 = data2.map((span) => {
  return `
    <li>
        <a href="">
            <span class="category">${span.category}</span>
            <span class="subject">${span.subject}</span>
            <span class="date">${span.date}</span>
        </a>
    </li>
    `;
});

list.innerHTML = spanInner.join("");

tabBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    tabBtns.forEach((btns) => {
      btns.removeAttribute("aria-selected");
    });

    e.target.setAttribute("aria-selected", "true");

    // console.log(index);

    if (index === 0) {
      list.innerHTML = spanInner.join("");
      if (data1.length == 0) {
        list.innerHTML = `<li>현재 데이터가 존재하지 않습니다.</li>`;
      }
    } else {
      list.innerHTML = spanInner2.join("");
      if (data2.length == 0) {
        list.innerHTML = `<li>현재 데이터가 존재하지 않습니다.</li>`;
      }
    }
  });
});
