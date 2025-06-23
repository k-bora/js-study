import { AlramData } from "./alramData.js";

export const Alarm = () => {
  const alarmBtn = document.querySelector("button.avatar");
  const alarmBox = document.querySelector("#alram");
  const alarmList = document.querySelector("#alram ul");
  let popCurrent = true;
  const profileAlram = document.querySelector(".profile__alram");

  /* --------------------------------- 데이터 넣기 --------------------------------- */
  const alarmDataInner = () => {
    const alarmListData = AlramData.map(({ date, writer, content }) => {
      return /* html */ `              
              <li>
                  <div class="alram__date">${date}</div>
                  <div class="alram__writer">${writer}</div>
                  <button class="alram__del">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                      d="M8.22787 6.99535L13.737 1.495C13.9016 1.33033 13.9941 1.107 13.9941 0.874131C13.9941 0.641261 13.9016 0.417929 13.737 0.253265C13.5723 0.0886011 13.349 -0.00390625 13.1161 -0.00390625C12.8832 -0.00390625 12.6599 0.0886011 12.4952 0.253265L6.99489 5.76236L1.49454 0.253265C1.32987 0.0886011 1.10654 -0.00390604 0.87367 -0.00390604C0.6408 -0.00390604 0.417468 0.0886011 0.252804 0.253265C0.0881403 0.417929 -0.00436681 0.641261 -0.00436681 0.874131C-0.00436682 1.107 0.0881403 1.33033 0.252804 1.495L5.7619 6.99535L0.252804 12.4957C0.170843 12.577 0.105788 12.6737 0.0613928 12.7803C0.0169977 12.8868 -0.00585938 13.0011 -0.00585938 13.1166C-0.00585938 13.232 0.0169977 13.3463 0.0613928 13.4529C0.105788 13.5594 0.170843 13.6561 0.252804 13.7374C0.334097 13.8194 0.430813 13.8844 0.537374 13.9288C0.643935 13.9732 0.758231 13.9961 0.87367 13.9961C0.98911 13.9961 1.10341 13.9732 1.20997 13.9288C1.31653 13.8844 1.41324 13.8194 1.49454 13.7374L6.99489 8.22834L12.4952 13.7374C12.5765 13.8194 12.6732 13.8844 12.7798 13.9288C12.8864 13.9732 13.0007 13.9961 13.1161 13.9961C13.2315 13.9961 13.3458 13.9732 13.4524 13.9288C13.559 13.8844 13.6557 13.8194 13.737 13.7374C13.8189 13.6561 13.884 13.5594 13.9284 13.4529C13.9728 13.3463 13.9956 13.232 13.9956 13.1166C13.9956 13.0011 13.9728 12.8868 13.9284 12.7803C13.884 12.6737 13.8189 12.577 13.737 12.4957L8.22787 6.99535Z"
                      fill="#999999"
                      />
                  </svg>
                  </button>
                  <div class="alram__content">${content}</div>
              </li>`;
    });
    alarmList.innerHTML = alarmListData.join("");
  };

  /* -------------------------------- 알람 열고 닫기 -------------------------------- */
  const alarmClick = () => {
    alarmBtn.addEventListener("click", () => {
      if (popCurrent) {
        alarmBox.showPopover();
        popCurrent = false;
      } else {
        alarmBox.hidePopover();
        popCurrent = true;
      }
      // console.log(popCurrent);
    }); //alarmBtn click
  };

  /* -------------------- 데이터가 있으면 숫자 노출/ 없으면 노출 안함 ------------------- */
  const alarmDataIf = () => {
    if (AlramData.length == 0) {
      profileAlram.style.display = "none";
      alarmList.innerHTML = `<li><div class="alram__content" style="text-align:center">알람이 없습니다.</div></li>`;
    } else {
      profileAlram.textContent = AlramData.length;
      // 알람 리스트 표현
      alarmDataInner();
    }
  };

  /* ---------------------------- 삭제버튼 클릭시 DOM 삭제 ---------------------------- */
  const alarmDelClick = () => {
    const alramDelBtns = document.querySelectorAll(".alram__del");

    alramDelBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        li.remove();

        const alramLis = document.querySelectorAll("#alram li");
        //   console.log(alramLis.length);

        if (alramLis.length == 0) {
          profileAlram.style.display = "none";
          alarmList.innerHTML = `<li><div class="alram__content" style="text-align:center">알람이 없습니다.</div></li>`;
        } else {
          profileAlram.textContent = alramLis.length;
        }
      }); // alramDelBtns click
    });
  };

  //함수실행
  alarmClick();
  alarmDataIf();
  alarmDelClick();
};
