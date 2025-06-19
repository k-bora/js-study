const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelectorAll("button");

submitBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
      if (input.hasAttribute("id", "form-name")) {
        console.log("aa");

        // if (input.value == "") {
        //   alert("성명을 입력하세요.");
        // }
      }
    });
  });
});
