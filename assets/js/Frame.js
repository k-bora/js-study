export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const initial = "/js-study/01Content/table1.html";

  frame.setAttribute("src", currentState || initial);
};
