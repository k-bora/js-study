// export default function first() {
//   console.log("export default");
// }

export const first = (second) => {
  console.log("first");
};

const arrowDefault = () => {
  console.log("export default");
};

export default arrowDefault; // 디폴트는 파일에 하나만 설정가능
