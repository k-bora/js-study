export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  //과제용
  const initial = "/js-study/01Content/week-3.html";
  // const initial = "/00Basic/01-start.html";

  frame.setAttribute("src", currentState || initial);
};
