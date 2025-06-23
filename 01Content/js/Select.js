export const Select = (onSelect, option) => {
  const config = {
    parent: ".select",
    activeClassName: "active",
    topVaeiableName: "--top",
    ...option,
  };

  const selects = document.querySelectorAll(config.parent);

  if (selects == 0) {
    return;
  }

  /* --------------------------------- 토글버튼 ---------------------------------- */
  const toggleList = (select) => {
    const button = select.querySelector("button"); //첫번쨰만 선택

    // 버튼을 누르면 접힘펼침 - .select.active
    button.addEventListener("click", () => {
      select.classList.toggle(config.activeClassName);
    });
  };

  /* --------------------------------- 리스트제어 --------------------------------- */
  const handleList = (select) => {
    const button = select.querySelector("button"); //첫번쨰만 선택
    const list = select.querySelectorAll("li");
    const div = select.querySelector("div");

    const buttonHeight = button.offsetHeight;
    // console.log(buttonHeight);
    // selector.style.setProperty("--wrap", 20);
    div.style.setProperty(`${config.topVaeiableName}`, `${buttonHeight}px`);

    // 리스트를 누르면 해당 텍스트가 버튼으로 복제
    list.forEach((li) => {
      li.addEventListener("click", (e) => {
        const text = li.textContent;
        const value = e.target.value;
        button.textContent = text;

        // 함수일떄만 실행
        if (typeof onSelect == "function") {
          onSelect(value);
        } else {
          console.error("인수값이 함수가 아닙니다.");
        }
        // 리스트를 누르면 리스트가 접힘 .select removeClass active
        select.classList.remove("active");
      });
    });
  };

  selects.forEach((select) => {
    toggleList(select);
    handleList(select);
  });
};
