const about = document.createElement("div");
about.classList.add("tab_display", "tab_display_about");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
about.appendChild(overlay);
const menutext = document.createElement("p");
menutext.classList.add("menutext");
menutext.innerText = "This is the about page. Lorem ipsum dolor sit amet, consect, lorem eget met am.";
about.appendChild(menutext);
export default about;