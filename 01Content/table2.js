// 표2 : 게시물 갯수 반영하기
//   const trs = document.querySelectorAll(".table-type1 tbody tr").length;
//   console.log(trs);
const total = document.querySelector(".total");
const totalNum = document.querySelector(".total strong");
const tableRows = document.querySelectorAll("tbody tr");

totalNum.textContent = tableRows.length;
total.style.marginBottom = "10px";
total.style.fontSize = "14px";
