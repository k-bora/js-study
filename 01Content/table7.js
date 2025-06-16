//표7 : 게시물 갯수 반영하기
const totalNum = document.querySelector(".table-info span");
const tableQRows = document.querySelectorAll("tbody tr");

totalNum.textContent = tableQRows.length / 2;

//다음 페이징에 있는 게시물 갯수까지 포함은?
