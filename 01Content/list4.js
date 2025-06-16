const data1 = [
  {
    category: "뉴스토마토",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차1",
    date: "2024.05.16",
  },
  {
    category: "뉴스토마토",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차2",
    date: "2024.05.16",
  },
  {
    category: "뉴스토마토",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차3",
    date: "2024.05.16",
  },
  {
    category: "뉴스토마토",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차4",
    date: "2024.05.16",
  },
];

const data2 = [
  {
    category: "중앙일보",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차",
    date: "2024.05.16",
  },
  {
    category: "중앙일보",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차",
    date: "2024.05.16",
  },
  {
    category: "중앙일보",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차",
    date: "2024.05.16",
  },
  {
    category: "중앙일보",
    subject: "올해 반등 시작한 리츠...IPO·ETF상장 박차",
    date: "2024.05.16",
  },
];

const list = document.querySelector(".news-list");

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

list.innerHTML = spanInner.join("");
if (data1.length == 0) {
  list.innerHTML = `<li>현재 데이터가 존재하지 않습니다.</li>`;
}
