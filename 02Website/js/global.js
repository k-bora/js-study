import { Nav } from "./main.js";
import { CostomSelect } from "./costomSelect.js";
import { Tab } from "./tab.js";
import { Alarm } from "./alarm.js";
import { LearningDataInner } from "./learningDataInner.js";
import { LoungeNav } from "./loungeNav.js";
import { NoticeList } from "./notice.js";

Nav({
  ulSelector: ".gnb ul",
  depth2ClassName: "depth2",
});

CostomSelect(
  (value) => {
    console.log(value);
  },
  {
    selectVaeiableName: "--top",
  }
);

Tab();
Alarm();
LearningDataInner();
LoungeNav();
NoticeList();
