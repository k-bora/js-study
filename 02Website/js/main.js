import { navData } from "../data/nav_data.js";

// 네비에 데이터 넣기
export const Nav = (option = {}) => {
  const config = {
    ulSelector: ".gnb ul",
    depth2ClassName: "depth2",
    ...option,
  };

  const { ulSelector, depth2ClassName } = config;

  const gnb = document.querySelector(ulSelector);
  /* ------------------------------ depth2 데이터 넣기 ----------------------------- */
  const depth2 = (arry) => {
    return arry
      .map((data2) => {
        return `<li><a href="${data2.dapth2Link}">${data2.dapth2Title}</a></li>`;
      })
      .join("");
  };

  /* ----------------------------- depth1,2 데이터 넣기 ---------------------------- */
  const nav_data = () => {
    const GNB = navData.map((data) => {
      return `
      <li>
        <a href="${data.dapth1Linlk}">${data.depth1Title}</a>
            ${
              data.dapth2
                ? `
                  <div class="${depth2ClassName}">
                      <ul>
                          ${depth2(data.dapth2)}
                      </ul>
                  </div>
                `
                : ``
            }
      </li>
      `;
    });

    gnb.innerHTML = GNB.join("");
  };
  nav_data();
};

// Nav();
