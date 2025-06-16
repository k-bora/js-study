const url = window.location;
const prev = document.querySelector(".assign");
const prev2 = document.querySelector(".replace");
const reload = document.querySelector(".reload");

const links = document.querySelectorAll("a");

/* -------------------------------------------------------------------------- */
/*                                   현재페이지정보                            */
/* -------------------------------------------------------------------------- */
links[0].addEventListener("click", () => {
  // console.log(url);
  // console.log(window.location);
});

/* -------------------------------------------------------------------------- */
/*                                 히스토리추가후 이동                          */
/* -------------------------------------------------------------------------- */
prev.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(location.pathname);
  url.assign("16-location-next.html");
  // location.href = "16-location-next.html"; // 같은개념
});

/* -------------------------------------------------------------------------- */
/*                                히스토리 제거 후 이동                         */
/* -------------------------------------------------------------------------- */
prev2.addEventListener("click", (event) => {
  event.preventDefault();
  url.replace("16-location-next.html");
});

/* -------------------------------------------------------------------------- */
/*                                   강력새로고침                              */
/* -------------------------------------------------------------------------- */
reload.addEventListener("click", () => {
  // location.reload();
  location.reload(true);
});

/* -------------------------------------------------------------------------- */
/*                                   URL 파라미터                              */
/* -------------------------------------------------------------------------- */
// ?부터 시작
// & 구분자
// key = vlaue

//https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0
//?directoryNo=0
// &currentPage=1
// &groupId=0

const a = {
  directoryNo: 0,
  currentPage: 1,
  groupId: 0,
};
