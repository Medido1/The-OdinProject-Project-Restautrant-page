/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h2");
  title.textContent = "About This Project";

  const discription = document.createElement("p");
  discription.textContent =
    "This Project is part of the odin project course in web-dev";

  const author = document.createElement("a");
  author.href = "https://github.com/Medido1";
  author.target = "blank";
  const authorName = document.createTextNode("Bousalah Nadir");
  author.appendChild(authorName);

  const credit = document.createElement("a");
  credit.href = "https://www.flaticon.com/free-icons/fast-food";
  credit.target = "blank";
  const creditText = document.createTextNode(
    "Fast food icons created by Freepik - Flaticon",
  );
  credit.appendChild(creditText);

  contact.appendChild(title);
  contact.appendChild(discription);
  contact.appendChild(author);
  contact.appendChild(credit);

  return contact;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";

  main.appendChild(createContact());
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const intro = document.createElement("p");
  intro.textContent = `
  Satisfy your cravings at our brand-new fast food haven,
   where flavor meets speed. in Your new fast food, we're dishing
   out mouthwatering burgers, crispy golden fries, and delectable 
   shakes that will have your taste buds dancing with joy`;

  home.appendChild(intro);
  return home;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";

  main.appendChild(createHome());
}


/***/ }),

/***/ "./src/loadWebsite.js":
/*!****************************!*\
  !*** ./src/loadWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadWebSite)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menu = document.createElement("button");
  menu.classList.add("nav_btn");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => {
    setActiveBtn(menu);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const contact = document.createElement("button");
  contact.classList.add("nav_btn");
  contact.textContent = "Contact";
  contact.addEventListener("click", () => {
    setActiveBtn(contact);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

function loadWebSite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  return content;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");


function addItem(item) {
  const card = document.createElement("div");
  card.classList.add("menu_item");

  const img = document.createElement("img");
  img.src = item.imgSrc;

  const name = document.createElement("h3");
  name.textContent = item.name;

  const ingredients = document.createElement("p");
  ingredients.textContent = item.ingredients;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(ingredients);
  return card;
}

function createFoodMenu() {
  const foodMenu = document.createElement("div");
  foodMenu.classList.add("menu_container");

  const title = document.createElement("h3");
  title.textContent = "Meals";

  const meals = document.createElement("div");
  meals.classList.add("menu");
  _menuItems__WEBPACK_IMPORTED_MODULE_0__.foodItems.forEach((item) => {
    meals.appendChild(addItem(item));
  });

  foodMenu.appendChild(title);
  foodMenu.appendChild(meals);

  return foodMenu;
}

function createDrinksMenu() {
  const drinksMenu = document.createElement("div");
  drinksMenu.classList.add("menu_container");

  const title = document.createElement("h2");
  title.textContent = "Drinks";

  const drinkList = document.createElement("div");
  drinkList.classList.add("menu");
  _menuItems__WEBPACK_IMPORTED_MODULE_0__.drinks.forEach((drink) => {
    drinkList.appendChild(addItem(drink));
  });

  drinksMenu.appendChild(title);
  drinksMenu.appendChild(drinkList);

  return drinksMenu;
}

function createMenu() {
  const menu = document.createElement("div");

  menu.appendChild(createFoodMenu());
  menu.appendChild(createDrinksMenu());
  return menu;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}


/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drinks: () => (/* binding */ drinks),
/* harmony export */   foodItems: () => (/* binding */ foodItems)
/* harmony export */ });
/* foods */

const newItem = (name, ingredients, imgSrc) => ({ name, ingredients, imgSrc });

const bigMac = newItem(
  "bigMac",
  "Big Mac Bun, 100% Beef Patty, Shredded Lettuce",
  "./img/DC_201907_0005_BigMac_832x472_product-header-desktop.jpeg",
);

const quarterPounder = newItem(
  "Quarter Pounder",
  "Quarter Pound Bun, Ketchup, Pickle Slices",
  "./img/DC_202201_0007-005_QuarterPounderwithCheese_832x472_product-header-desktop.jpeg",
);

const doubleQuarterPounder = newItem(
  "Double Quarter Pounder",
  "Quarter Pound Bun, Pasteurized Process American Cheese, Onions",
  "./img/202201_3426-005_DoubleQuarterPounderwithCheese_832x472_product-header-desktop.jpeg",
);

const Cheeseburger = newItem(
  "Cheeseburger",
  "Regular Bun, 100% Beef Patty, Pasteurized Process American Cheese",
  "./img/DC_202006_0003_Cheeseburger_StraightBun_832x472_product-header-desktop.jpeg",
);

/* drinks */

const cocaCola = newItem(
  "Coca-Cola",
  "Coca-Cola, Ice",
  "./img/DC_202112_0521_MediumCoke_Glass_832x472_product-header-desktop.jpeg",
);

const sprite = newItem(
  "Sprite",
  "sprice, ice",
  "./img/Header_MediumSprite_Glass_832x472_product-header-desktop.jpeg",
);

const strawberryBananaSmoothie = newItem(
  "Strawberry Banana Smoothie",
  "Strawberry Banana Fruit Base, ice, Lowfat Smoothie Yogurt",
  "./img/DC_201906_2725_MediumStrawberryBananaSmoothie_Glass_A1_832x472_product-header-desktop.jpeg",
);

const mangoPineappleSmoothie = newItem(
  "Mango Pineapple Smoothie",
  "Mango Pineapple Fruit Base, ice, Lowfat Smoothie Yogurt",
  "./img/DC_201906_2790_MediumMangoPineappleSmoothie_Glass_A1_832x472_product-header-desktop.jpeg",
);

const foodItems = [bigMac, quarterPounder, doubleQuarterPounder, Cheeseburger];
const drinks = [
  cocaCola,
  sprite,
  strawberryBananaSmoothie,
  mangoPineappleSmoothie,
];



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadWebsite */ "./src/loadWebsite.js");


(0,_loadWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI4QjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5Qjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZnRDs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQVM7QUFDWDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDhDQUFNO0FBQ1I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7O0FBRUEsa0RBQWtELDJCQUEyQjs7QUFFN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7O1VDN0Q3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDOztBQUV4Qyx3REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS1vZGlucHJvamVjdC1wcm9qZWN0LXJlc3RhdXRyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90aGUtb2RpbnByb2plY3QtcHJvamVjdC1yZXN0YXV0cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS8uL3NyYy9sb2FkV2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly90aGUtb2RpbnByb2plY3QtcHJvamVjdC1yZXN0YXV0cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGUtb2RpbnByb2plY3QtcHJvamVjdC1yZXN0YXV0cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGUtb2RpbnByb2plY3QtcHJvamVjdC1yZXN0YXV0cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZS1vZGlucHJvamVjdC1wcm9qZWN0LXJlc3RhdXRyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBUaGlzIFByb2plY3RcIjtcblxuICBjb25zdCBkaXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkaXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJUaGlzIFByb2plY3QgaXMgcGFydCBvZiB0aGUgb2RpbiBwcm9qZWN0IGNvdXJzZSBpbiB3ZWItZGV2XCI7XG5cbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGF1dGhvci5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vTWVkaWRvMVwiO1xuICBhdXRob3IudGFyZ2V0ID0gXCJibGFua1wiO1xuICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCb3VzYWxhaCBOYWRpclwiKTtcbiAgYXV0aG9yLmFwcGVuZENoaWxkKGF1dGhvck5hbWUpO1xuXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjcmVkaXQuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZmFzdC1mb29kXCI7XG4gIGNyZWRpdC50YXJnZXQgPSBcImJsYW5rXCI7XG4gIGNvbnN0IGNyZWRpdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBcIkZhc3QgZm9vZCBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvblwiLFxuICApO1xuICBjcmVkaXQuYXBwZW5kQ2hpbGQoY3JlZGl0VGV4dCk7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZGlzY3JpcHRpb24pO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGF1dGhvcik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICByZXR1cm4gY29udGFjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGludHJvLnRleHRDb250ZW50ID0gYFxuICBTYXRpc2Z5IHlvdXIgY3JhdmluZ3MgYXQgb3VyIGJyYW5kLW5ldyBmYXN0IGZvb2QgaGF2ZW4sXG4gICB3aGVyZSBmbGF2b3IgbWVldHMgc3BlZWQuIGluIFlvdXIgbmV3IGZhc3QgZm9vZCwgd2UncmUgZGlzaGluZ1xuICAgb3V0IG1vdXRod2F0ZXJpbmcgYnVyZ2VycywgY3Jpc3B5IGdvbGRlbiBmcmllcywgYW5kIGRlbGVjdGFibGUgXG4gICBzaGFrZXMgdGhhdCB3aWxsIGhhdmUgeW91ciB0YXN0ZSBidWRzIGRhbmNpbmcgd2l0aCBqb3lgO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaW50cm8pO1xuICByZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gc2V0QWN0aXZlQnRuKGJ0bikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfYnRuXCIpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbiAhPT0gYnRuKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgfVxuICB9KTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2X2xpc3RcIik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdl9idG5cIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldEFjdGl2ZUJ0bihob21lKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2X2J0blwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2V0QWN0aXZlQnRuKG1lbnUpO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZfYnRuXCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzZXRBY3RpdmVCdG4oY29udGFjdCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk15IEZhc3QgRm9vZFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaGUgT2RpbiBQcm9qZWN0IFwiKTtcbiAgY29uc3QgeWVhciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCk7XG5cbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGF1dGhvci5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vTWVkaWRvMVwiO1xuICBhdXRob3IudGFyZ2V0ID0gXCJibGFua1wiO1xuICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCb3VzYWxhaCBOYWRpclwiKTtcbiAgYXV0aG9yLmFwcGVuZENoaWxkKGF1dGhvck5hbWUpO1xuXG4gIGNyZWRpdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIGNyZWRpdC5hcHBlbmRDaGlsZChhdXRob3IpO1xuICBjcmVkaXQuYXBwZW5kQ2hpbGQoeWVhcik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkV2ViU2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgeyBmb29kSXRlbXMsIGRyaW5rcyB9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xuXG5mdW5jdGlvbiBhZGRJdGVtKGl0ZW0pIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcIm1lbnVfaXRlbVwiKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gaXRlbS5pbWdTcmM7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICBjb25zdCBpbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudHM7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChpbWcpO1xuICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzKTtcbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RNZW51KCkge1xuICBjb25zdCBmb29kTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51X2NvbnRhaW5lclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1lYWxzXCI7XG5cbiAgY29uc3QgbWVhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZWFscy5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgZm9vZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBtZWFscy5hcHBlbmRDaGlsZChhZGRJdGVtKGl0ZW0pKTtcbiAgfSk7XG5cbiAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBmb29kTWVudS5hcHBlbmRDaGlsZChtZWFscyk7XG5cbiAgcmV0dXJuIGZvb2RNZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcmlua3NNZW51KCkge1xuICBjb25zdCBkcmlua3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZHJpbmtzTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudV9jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcblxuICBjb25zdCBkcmlua0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua0xpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGRyaW5rcy5mb3JFYWNoKChkcmluaykgPT4ge1xuICAgIGRyaW5rTGlzdC5hcHBlbmRDaGlsZChhZGRJdGVtKGRyaW5rKSk7XG4gIH0pO1xuXG4gIGRyaW5rc01lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBkcmlua3NNZW51LmFwcGVuZENoaWxkKGRyaW5rTGlzdCk7XG5cbiAgcmV0dXJuIGRyaW5rc01lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZE1lbnUoKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlRHJpbmtzTWVudSgpKTtcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuIiwiLyogZm9vZHMgKi9cblxuY29uc3QgbmV3SXRlbSA9IChuYW1lLCBpbmdyZWRpZW50cywgaW1nU3JjKSA9PiAoeyBuYW1lLCBpbmdyZWRpZW50cywgaW1nU3JjIH0pO1xuXG5jb25zdCBiaWdNYWMgPSBuZXdJdGVtKFxuICBcImJpZ01hY1wiLFxuICBcIkJpZyBNYWMgQnVuLCAxMDAlIEJlZWYgUGF0dHksIFNocmVkZGVkIExldHR1Y2VcIixcbiAgXCIuL2ltZy9EQ18yMDE5MDdfMDAwNV9CaWdNYWNfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIixcbik7XG5cbmNvbnN0IHF1YXJ0ZXJQb3VuZGVyID0gbmV3SXRlbShcbiAgXCJRdWFydGVyIFBvdW5kZXJcIixcbiAgXCJRdWFydGVyIFBvdW5kIEJ1biwgS2V0Y2h1cCwgUGlja2xlIFNsaWNlc1wiLFxuICBcIi4vaW1nL0RDXzIwMjIwMV8wMDA3LTAwNV9RdWFydGVyUG91bmRlcndpdGhDaGVlc2VfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIixcbik7XG5cbmNvbnN0IGRvdWJsZVF1YXJ0ZXJQb3VuZGVyID0gbmV3SXRlbShcbiAgXCJEb3VibGUgUXVhcnRlciBQb3VuZGVyXCIsXG4gIFwiUXVhcnRlciBQb3VuZCBCdW4sIFBhc3RldXJpemVkIFByb2Nlc3MgQW1lcmljYW4gQ2hlZXNlLCBPbmlvbnNcIixcbiAgXCIuL2ltZy8yMDIyMDFfMzQyNi0wMDVfRG91YmxlUXVhcnRlclBvdW5kZXJ3aXRoQ2hlZXNlXzgzMng0NzJfcHJvZHVjdC1oZWFkZXItZGVza3RvcC5qcGVnXCIsXG4pO1xuXG5jb25zdCBDaGVlc2VidXJnZXIgPSBuZXdJdGVtKFxuICBcIkNoZWVzZWJ1cmdlclwiLFxuICBcIlJlZ3VsYXIgQnVuLCAxMDAlIEJlZWYgUGF0dHksIFBhc3RldXJpemVkIFByb2Nlc3MgQW1lcmljYW4gQ2hlZXNlXCIsXG4gIFwiLi9pbWcvRENfMjAyMDA2XzAwMDNfQ2hlZXNlYnVyZ2VyX1N0cmFpZ2h0QnVuXzgzMng0NzJfcHJvZHVjdC1oZWFkZXItZGVza3RvcC5qcGVnXCIsXG4pO1xuXG4vKiBkcmlua3MgKi9cblxuY29uc3QgY29jYUNvbGEgPSBuZXdJdGVtKFxuICBcIkNvY2EtQ29sYVwiLFxuICBcIkNvY2EtQ29sYSwgSWNlXCIsXG4gIFwiLi9pbWcvRENfMjAyMTEyXzA1MjFfTWVkaXVtQ29rZV9HbGFzc184MzJ4NDcyX3Byb2R1Y3QtaGVhZGVyLWRlc2t0b3AuanBlZ1wiLFxuKTtcblxuY29uc3Qgc3ByaXRlID0gbmV3SXRlbShcbiAgXCJTcHJpdGVcIixcbiAgXCJzcHJpY2UsIGljZVwiLFxuICBcIi4vaW1nL0hlYWRlcl9NZWRpdW1TcHJpdGVfR2xhc3NfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIixcbik7XG5cbmNvbnN0IHN0cmF3YmVycnlCYW5hbmFTbW9vdGhpZSA9IG5ld0l0ZW0oXG4gIFwiU3RyYXdiZXJyeSBCYW5hbmEgU21vb3RoaWVcIixcbiAgXCJTdHJhd2JlcnJ5IEJhbmFuYSBGcnVpdCBCYXNlLCBpY2UsIExvd2ZhdCBTbW9vdGhpZSBZb2d1cnRcIixcbiAgXCIuL2ltZy9EQ18yMDE5MDZfMjcyNV9NZWRpdW1TdHJhd2JlcnJ5QmFuYW5hU21vb3RoaWVfR2xhc3NfQTFfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIixcbik7XG5cbmNvbnN0IG1hbmdvUGluZWFwcGxlU21vb3RoaWUgPSBuZXdJdGVtKFxuICBcIk1hbmdvIFBpbmVhcHBsZSBTbW9vdGhpZVwiLFxuICBcIk1hbmdvIFBpbmVhcHBsZSBGcnVpdCBCYXNlLCBpY2UsIExvd2ZhdCBTbW9vdGhpZSBZb2d1cnRcIixcbiAgXCIuL2ltZy9EQ18yMDE5MDZfMjc5MF9NZWRpdW1NYW5nb1BpbmVhcHBsZVNtb290aGllX0dsYXNzX0ExXzgzMng0NzJfcHJvZHVjdC1oZWFkZXItZGVza3RvcC5qcGVnXCIsXG4pO1xuXG5jb25zdCBmb29kSXRlbXMgPSBbYmlnTWFjLCBxdWFydGVyUG91bmRlciwgZG91YmxlUXVhcnRlclBvdW5kZXIsIENoZWVzZWJ1cmdlcl07XG5jb25zdCBkcmlua3MgPSBbXG4gIGNvY2FDb2xhLFxuICBzcHJpdGUsXG4gIHN0cmF3YmVycnlCYW5hbmFTbW9vdGhpZSxcbiAgbWFuZ29QaW5lYXBwbGVTbW9vdGhpZSxcbl07XG5leHBvcnQgeyBmb29kSXRlbXMsIGRyaW5rcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFdlYlNpdGUgZnJvbSBcIi4vbG9hZFdlYnNpdGVcIjtcblxubG9hZFdlYlNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==