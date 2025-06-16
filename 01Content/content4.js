const title = ["선물", "매장", "택배", "이벤트!"];
const description = ["편의점·마트·와인 살꺼니?", "근처 매장 오디야?", "택배 접수 조회~~", "혜택이 와르르~~~"];
const icon = ["./images/ico-content4-1.svg", "./images/ico-content4-2.svg", "./images/ico-content4-3.svg", "./images/ico-content4-4.svg"];

const serviceLists = document.querySelectorAll(".service-list li");

serviceLists.forEach((li, index) => {
  li.querySelector(".title").textContent = title[index];
  li.querySelector(".description").textContent = description[index];
  //   console.log(`url('${icon[index]}')`);
  li.style.backgroundImage = `url('${icon[index]}')`;
});
