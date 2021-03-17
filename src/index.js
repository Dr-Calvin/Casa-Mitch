import "./style.css";

import { elements, tabs } from "./skeleton";
import contact from "./contact";
import about from "./about";
import menu from "./menu";

const contentChoices = [about, menu, contact];

// Tab Switching Logic

tabs.forEach((e) => {
  e.onclick = () => {
    elements.main.removeChild(elements.main.lastChild);
    elements.main.appendChild(contentChoices[e.value]);
    const oldActiveTab = document.querySelector(".active");
    oldActiveTab.classList.remove("active");
    e.classList.add("active");
  };
});

// Load about section by default
elements.main.appendChild(about);
elements.about.classList.add("active");
