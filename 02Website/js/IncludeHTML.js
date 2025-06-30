export const IncludeHTML = async (location, target) => {
  try {
    const response = await fetch(location);
    const result = await response.text(); //.text(); html 을 코드화 시킬때 // json(): API로 가져온 데이터 적용시
    document.querySelector(target).innerHTML = result;
  } catch (error) {
    console.log(error);
  }
};
