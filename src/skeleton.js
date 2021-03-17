const elements = {
  content: document.querySelector(".content"),
  header: document.createElement("header"),
  headerLogo: document.createElement("div"),
  img: document.createElement("img"),
  main: document.createElement("main"),
  about: document.createElement("button"),
  menu: document.createElement("button"),
  contact: document.createElement("button"),
  tabSelector: document.createElement("tabSelector"),
  footer: document.createElement("footer"),
  footerSpan: document.createElement("span"),
};
const tabs = [elements.menu, elements.contact, elements.about];

// Base build to run on import of skeleton module
(() => {
  // Header
  elements.header.classList.add("header");
  elements.headerLogo.classList.add("headerLogo");

  elements.header.appendChild(elements.headerLogo);
  elements.content.appendChild(elements.header);

  // Main
  elements.main.classList.add("main");
  elements.about.classList.add("tab");
  elements.about.textContent = "about";
  elements.about.value = 0;
  elements.menu.classList.add("tab");
  elements.menu.textContent = "menu";
  elements.menu.value = 1;
  elements.contact.classList.add("tab");
  elements.contact.textContent = "contact";
  elements.contact.value = 2;
  elements.tabSelector.appendChild(elements.about);
  elements.tabSelector.appendChild(elements.menu);
  elements.tabSelector.appendChild(elements.contact);
  elements.main.appendChild(elements.tabSelector);
  elements.content.appendChild(elements.main);

  // Footer
  elements.footer.classList.add("footer");
  elements.footerSpan.textContent = "/ Website created by Mitch /";
  elements.footer.appendChild(elements.footerSpan);
  elements.content.appendChild(elements.footer);
})();

export { elements, tabs };
