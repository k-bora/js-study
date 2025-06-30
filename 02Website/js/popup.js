export const Popup = (id, modal = true) => {
  const popupBox = document.querySelector(`[data-popup="${id}"]`);
  const popupOpen = document.querySelector(`[data-popup-open="${id}"]`);
  const popupClose = document.querySelector(`[data-popup-close="${id}"]`);

  if (!popupBox || !popupOpen || !popupClose) {
    return;
  }

  const eventBind = () => {
    popupOpen.addEventListener("click", popupOpenEvent);
    popupClose.addEventListener("click", popupCloseEvent);
  };

  const popupOpenEvent = () => {
    if (modal) {
      popupBox.showModal();
    } else {
      popupBox.show();
    }
  };

  const popupCloseEvent = () => {
    popupBox.close();
  };

  eventBind();
};

// 콜백함수 쓰기
// export const Popup = (id, callback, modal = true) => {
//   const popupBox = document.querySelector(`[data-popup="${id}"]`);
//   const popupOpen = document.querySelector(`[data-popup-open="${id}"]`);
//   const popupClose = document.querySelector(`[data-popup-close="${id}"]`);

//   if (!popupBox || !popupOpen || !popupClose) {
//     return;
//   }

//   const eventBind = () => {
//     popupOpen.addEventListener("click", popupOpenEvent);
//     popupClose.addEventListener("click", popupCloseEvent);
//   };

//   const popupOpenEvent = () => {
//     console.log(popupOpen.classList.contains("error"));

//     if (modal) {
//       popupBox.showModal();
//     } else {
//       popupBox.show();
//       callback(popupBox);
//     }
//   };

//   const popupCloseEvent = () => {
//     popupBox.close();
//   };

//   eventBind();
// };
