export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const initial = "/js-study/00Basic/01-table1.html";

  frame.setAttribute("src", currentState || initial);
};
