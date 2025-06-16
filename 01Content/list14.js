//리스트14 제품 리스트를 클릭하면 상단의 이미지와 제목을 바꿔주세요.
const foodName = document.querySelector(".message h2");
const foodImage = document.querySelector(".message img");
const foodBtns = document.querySelectorAll(".food-list button");

foodBtns.forEach((btn) => {
  //버튼을 각각 클릭하면
  btn.addEventListener("click", () => {
    // console.log(btn.textContent); // 클릭한 버튼 텍스트 확인
    foodName.textContent = btn.textContent; // 클릭한 버튼 텍스트를 넣기
    const img = btn.querySelector("img"); // 클릭한 버튼안에 있는 이미지 선택/선언
    // console.log(img.getAttribute("src"));
    const imgSrc = img.getAttribute("src"); // 이미지의 src속성 값 저장
    foodImage.setAttribute("src", imgSrc); //src 속성값 넣기
  });
});
