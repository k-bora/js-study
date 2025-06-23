export const Tab = () => {
  const tabTitle = document.querySelectorAll(".tab-title li");
  const tabContents = document.querySelectorAll(".tab-contents > ul");

  tabTitle.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // 모든탭 비활성화
      const buttons = document.querySelectorAll(".tab-title li button");
      buttons.forEach((button) => {
        button.classList.remove("--active");
      });

      // 클릭한 탭 활성화
      const button = tab.querySelector("button");
      button.classList.add("--active");

      tabContents.forEach((tabcontent) => {
        // 탭내용 비활성화
        // console.log(tabcontent);
        tabcontent.classList.remove("active");
      });

      // 클릭한 탭 버튼 내용 활성화
      // console.log(tabContents);
      // console.log(tabContents[index]);
      tabContents[index].classList.add("active");
    }); //tab click
  });
};
