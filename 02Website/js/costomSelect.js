export const CostomSelect = (selectValue, option) => {
  const config = {
    select: ".select-box",
    selectClassName: "active",
    selectVaeiableName: "--height",
    ...option,
  };

  const { select, selectClassName, selectVaeiableName } = config;

  const selectBox = document.querySelectorAll(select);

  if (selectBox == 0) {
    return;
  }

  // 셀렉트 접힘 펼침, 텍스트 복제
  const SelectBtnToggle = (select) => {
    const mainBtn = select.querySelector("button");
    mainBtn.addEventListener("click", () => {
      select.classList.toggle(selectClassName);
    });
  };

  // 셀렉트 리스트 클릭시
  const selectListEvent = (select) => {
    const lis = select.querySelectorAll("li");
    const div = select.querySelector("div");

    lis.forEach((li) => {
      li.addEventListener("click", (e) => {
        const mainBtn = select.querySelector("button");
        const liText = li.textContent;
        const liValue = e.target.value;
        mainBtn.textContent = liText;

        select.classList.remove(selectClassName);

        // 콜백함수 넣기 : global에서 vlaue값 알수있게
        if (typeof selectValue == "function") {
          selectValue(liValue);
        } else {
          console.error("함수가 아닙니다.");
        }
      });
    });
  };

  // list의 top 위치  유연하게 넣게
  const selectHeight = (select) => {
    const mainBtn = select.querySelector("button");
    const div = select.querySelector("div");
    const mainBtnHeight = mainBtn.offsetHeight;
    div.style.setProperty(`${selectVaeiableName}`, `${mainBtnHeight}`);
  };

  // 함수실행만
  selectBox.forEach((select) => {
    SelectBtnToggle(select);
    selectListEvent(select);
    selectHeight(select);
  });
};
