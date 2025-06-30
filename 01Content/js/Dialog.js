export const Dialog = (id, modal = false) => {
  const dialog = document.querySelector(`[data-dialog=${id}]`);
  const openBtn = document.querySelector(`[data-dialog-open=${id}]`);
  const closeBtn = document.querySelector(`[data-dialog-close=${id}]`);

  if (!dialog || !openBtn || !closeBtn) {
    return;
  }

  // 초기 설정(정의)
  const init = () => {
    // 이벤트가 아닌 함수들
    eventBind();
  };

  // 이벤트 실행 모음
  const eventBind = () => {
    // 1. 팝업열기버튼을 누르면 팝업이 열린다.
    openBtn.addEventListener("click", openDialog);

    // 2. 팝업닫기버튼을 누르면 팝업이 닫힌다.
    closeBtn.addEventListener("click", closeDialog);
  };

  const openDialog = () => {
    // //팝업이 backdrop이 없을경우
    // if (modal) {
    //   dialog.showModal();
    // } else {
    // //팝업이 backdrop이 없을경우
    //   dialog.show();
    // }

    modal ? dialog.showModal() : dialog.show();
  };

  const closeDialog = () => {
    dialog.close();
  };

  // 초기 설정
  init();
};

// MPA 멀티 페이지 애플리케이션
// SPA 싱글 페이지 애플리케이션
// : AJAX
// : React, VUE, Angular
