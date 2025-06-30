import { Nav } from "./main.js";
import { CostomSelect } from "./costomSelect.js";
import { Tab } from "./tab.js";
import { Alarm } from "./alarm.js";
import { LearningDataInner } from "./learningDataInner.js";
import { LoungeNav } from "./loungeNav.js";
import { NoticeList } from "./notice.js";
import { Popup } from "./popup.js";
import { IncludeHTML } from "./IncludeHTML.js";

CostomSelect(
  (value) => {
    console.log(value);
  },
  {
    selectVaeiableName: "--top",
  }
);

Tab();

LearningDataInner();
LoungeNav();
NoticeList();

Popup("popup");
Popup("popup2");

// Popup(
//   "popup",
//   (selector) => {
//     const content = selector.querySelector(".dialog-content");
//     content.innerHTML = `
//             <div class="text-type3 text-center">
//               프로그램 신청이 완료되었습니다.<br />
//               승인 여부는 마이페이지에서 확인하시기 바랍니다.<br />
//               (최대 일주일 소요)
//             </div>
// `;
//   },
//   false
// );

// IncludeHTML 비동기여서 header에 들어가는 동기 함수들을 실행할려면
// .then()을 사용하여 IncludeHTML 실행후 동기함수들 실행할수 있게 안에 넣음
IncludeHTML("/js-study/02Website/include/header.html", ".header").then(() => {
  // IncludeHTML("/02Website/include/header.html", ".header").then(() => {
  Nav({
    ulSelector: ".gnb ul",
    depth2ClassName: "depth2",
  });
  Alarm();
});

IncludeHTML("/js-study/02Website/include/footer.html", ".footer");
// IncludeHTML("/02Website/include/footer.html", ".footer");
