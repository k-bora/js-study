// 폼4 전체 체크를 누르면 체크상자 모두 활성화 시키기 , 전체 체크를 다시 누르면 모두 비활성화 시키기
// const checkboxs = document.querySelectorAll("input[type='checkbox']");

// checkboxs.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     // console.log(checkbox.hasAttribute("class", "all"));
//     const allCheckboxs = checkbox.closest(".check-list").querySelectorAll("input[type='checkbox']");
//     if (checkbox.hasAttribute("class", "all") && checkbox.checked) {
//       //   console.log("전체 선택");
//       allCheckboxs.forEach((allCheckbox) => {
//         allCheckbox.setAttribute("checked", "ture");
//       });
//     }
//     if (checkbox.hasAttribute("class", "all") && !checkbox.checked) {
//       //   console.log("전체 해제");
//       allCheckboxs.forEach((allCheckbox) => {
//         allCheckbox.removeAttribute("checked");
//       });
//     }
//   });
// });

// 좀더 짧게 도전?
const allCheckboxs = document.querySelectorAll(".all");

allCheckboxs.forEach((allCheckbox) => {
  // 1. 전체 체크박스의 값(체크 여부)이 바뀔 때
  allCheckbox.addEventListener("change", () => {
    const checkboxs = allCheckbox.closest(".check-list").querySelectorAll('input[type="checkbox"]');
    checkboxs.forEach((checkbox) => {
      //   if (allCheckbox.checked) {
      //     checkbox.setAttribute("checked", "ture");
      //   }
      //   if (!allCheckbox.checked) {
      //     checkbox.removeAttribute("checked");
      //   }
      // 근데 체크박스 전체 누르기전에 다른 체크박스를 먼저 누르면 그체크박스는 적용이안됨..
      // 즉 위코드는 초기 상태만 바꿀 뿐, 이후 사용자 조작엔 영향 없음
      // checkbox.checked = true;      // 체크하기
      // checkbox.checked = false;     // 체크 해제하기

      //2. 만약 체크박스들이 전체 체크박스랑 값이 다르면
      if (checkbox !== allCheckbox) {
        checkbox.checked = allCheckbox.checked;
        //3. 체크박스들 값을 전체박스 값과 같게 바꿔라~
      }
    });
  });
});
//***질문: 체크박스가 전체  다 선택된 후 개별 체크박스 하나를 해지했을 때 전체내용을 가진 체크박스가 해지되는거는 어떻게 하나요?
