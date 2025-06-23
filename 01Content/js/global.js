import { SNB } from "../list11.js";
import { Select } from "./Select.js";
import { Tab } from "./Tab.js";

// 옵션을 넣어서 제어
SNB({
  parent: ".snb",
  activeName: "active",
  depthClassName: "depth",
});

// 콜백함수: 함수를 인수로 보내고 그안에서 실행 순서 중요! onSelect, option
Select(
  (value) => {
    // 첫번재 옵션
    console.log(value);
  },
  {
    //두번째 옵션
  }
);

Tab(".tab", ".tab-contents");
Tab(".tab2", ".tab-contents2");
