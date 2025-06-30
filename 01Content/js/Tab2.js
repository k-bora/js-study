export const Tab2 = (id) => {
  const config = {
    activeClass: "active",
    tabGroup: "data-tab",
    tabItem: "data-tab-item",
    tabContentGroup: "data-tab-contents",
    tabContentItem: "data-tab-content",
  };

  const tabs = document.querySelectorAll(`[${config.tabGroup}="${id}"] [${config.tabItem}]`);
  const contents = document.querySelectorAll(`[${config.tabContentGroup}="${id}"] [${config.tabContentItem}]`);

  if (tabs.length === 0 || contents.length === 0) {
    return;
  }

  const removeClass = (array) => {
    array.forEach((el) => {
      el.classList.remove(config.activeClass);
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      removeClass(tabs);
      tab.classList.add(config.activeClass);

      removeClass(contents);
      contents[index].classList.add(config.activeClass);
    });
  });
};
