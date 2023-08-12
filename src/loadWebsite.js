import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function setActiveBtn(btn) {
  const buttons = document.querySelectorAll(".nav_btn");

  buttons.forEach((button) => {
    if (button !== btn) {
      button.classList.remove("clicked");
    }
  });
  btn.classList.add("clicked");
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav_list");

  const home = document.createElement("button");
  home.classList.add("nav_btn");
  home.textContent = "Home";
  home.addEventListener("click", () => {
    setActiveBtn(home);
    loadHome();
  });

  const menu = document.createElement("button");
  menu.classList.add("nav_btn");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => {
    setActiveBtn(menu);
    loadMenu();
  });

  const contact = document.createElement("button");
  contact.classList.add("nav_btn");
  contact.textContent = "Contact";
  contact.addEventListener("click", () => {
    setActiveBtn(contact);
    loadContact();
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  return nav;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "My Fast Food";

  header.appendChild(title);
  header.appendChild(createNav());
  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const credit = document.createElement("p");
  const projectName = document.createTextNode("The Odin Project ");
  const year = document.createTextNode(` ${new Date().getFullYear()}`);

  const author = document.createElement("a");
  author.href = "https://github.com/Medido1";
  author.target = "blank";
  const authorName = document.createTextNode("Bousalah Nadir");
  author.appendChild(authorName);

  credit.appendChild(projectName);
  credit.appendChild(author);
  credit.appendChild(year);
  footer.appendChild(credit);
  return footer;
}

export default function loadWebSite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  return content;
}
