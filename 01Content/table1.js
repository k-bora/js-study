// 표1 : 게시물 갯수 반영하기
const countTotalNum = document.querySelector(".count span");
const tableRows = document.querySelectorAll("tbody tr");

// countTotalNum.textContent = tableRows.length;

// 표내용을 데이터로 넣기
const boardData = [
  {
    no: 1,
    category: "보상",
    group: "수도권 건설단",
    title: "1제목제목제목제목제목~",
    file: true,
    writer: "홍길동",
    date: "2025-05-05",
    hit: "10",
  },
  {
    no: 2,
    category: "보상",
    group: "수도권 건설단",
    title: "2제목제목제목제목제목~",
    file: false,
    writer: "홍길동",
    date: "2025-05-06",
    hit: "20",
  },
  {
    no: 3,
    category: "보상",
    group: "수도권 건설단",
    title: "3제목제목제목제목제목~",
    file: true,
    writer: "홍길동",
    date: "2025-05-07",
    hit: "30",
  },
  {
    no: 4,
    category: "보상",
    group: "수도권 건설단",
    title: "4제목제목제목제목제목~",
    file: true,
    writer: "홍길동",
    date: "2025-05-08",
    hit: "40000",
  },
  {
    no: 5,
    category: "보상",
    group: "수도권 건설단",
    title: "4제목제목제목제목제목~",
    file: false,
    writer: "홍길동",
    date: "2025-05-09",
    hit: "50000",
  },
];

const tbody = document.querySelector("tbody");

const innerData = boardData.map((item) => {
  // const innerData = boardData.map((no, category, group, title, file, writer, date, hit) => {
  // 이러게 인수로 구조할당 할수있음
  // console.log(item.title);

  const { no, category, group, title, file, writer, date, hit } = item;

  return /* html */ `
        <tr>
            <td>${no}</td>
            <td>${category}</td>
            <td>${group}</td>
            <td>
                <a href="">${title}<img src="" alt="" /> </a>
            </td>
            <td>
                <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>
            </td>
            <td>${writer}</td>
            <td>${date}</td>
            <td>${Number(hit).toLocaleString()}</td>
        </tr>
    `;
});
tbody.innerHTML = innerData.join("");
countTotalNum.textContent = innerData.length;

if (innerData.length == 0) {
  //   console.log("00");

  tbody.innerHTML = `
          <tr>
              <td colspan="8">현재 게시물이 존재하지 않습니다.</td>
          </tr>
      `;
}

// 선생님 코드
// const boardData = [
//   {
//     no: 0,
//     category: "보상",
//     group: "수도권수도건설단",
//     title: "한강하류권(3차)급수체계조정사업(우선시행구간) 수도권수도건설단 사업 최초 시행구간",
//     file: true,
//     writer: "박종환",
//     date: "2025-05-05",
//     hit: 1234,
//   },
//   {
//     no: 1,
//     category: "기타",
//     group: "광주전남지역본부",
//     title: "[장흥수도관리단]관로시설 긴급 복구 협력업체 지원 사업",
//     file: true,
//     writer: "박종환",
//     date: "2025-05-05",
//     hit: 5,
//   },
//   {
//     no: 2,
//     category: "기타",
//     group: "경남부산지역본부",
//     title: "[장흥수도관리단]관로시설 긴급 복구",
//     file: false,
//     writer: "관리자",
//     date: "2025-05-05",
//     hit: 12,
//   },
// ];

// const table = document.querySelector(".table-type1");
// const tbody = table.querySelector("tbody");
// const count = document.querySelector(".count");
// count.textContent = `현재게시물 ${boardData.length}개`;

// if (boardData.length === 0) {
//   tbody.innerHTML = `
//     <tr>
//         <td colspan="8">현재 게시물이 존재하지 않습니다.</td>
//     </tr>
//     `;
// } else {
//   tbody.innerHTML = boardData
//     .map((item) => {
//       const { category, date, file, group, hit, no, title, writer } = item;
//       return /*html */ `
//         <tr>
//             <td>${no}</td>
//             <td>${category}</td>
//             <td>${group}</td>
//             <td class="text-left">
//                 <a href="">
//                 ${title}
//                 </a>
//             </td>
//             <td>
//                 <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>
//             </td>
//             <td>${writer}</td>
//             <td>${date}</td>
//             <td>${hit.toLocaleString()}</td>
//         </tr>
//       `;
//     })
//     .join("");
// }
