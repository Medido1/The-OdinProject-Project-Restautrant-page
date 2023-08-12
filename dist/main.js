/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ const __webpack_modules__ = {
    /***/ "./src/contact.js":
      /*! ************************!*\
  !*** ./src/contact.js ***!
  \*********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadContact,
          /* harmony export */
        });
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
        /***/
      },

    /***/ "./src/home.js":
      /*! *********************!*\
  !*** ./src/home.js ***!
  \******************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadHome,
          /* harmony export */
        });
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
        /***/
      },

    /***/ "./src/loadWebsite.js":
      /*! ****************************!*\
  !*** ./src/loadWebsite.js ***!
  \*************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadWebSite,
          /* harmony export */
        });
        /* harmony import */ const _home__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./home */ "./src/home.js");
        /* harmony import */ const _menu__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./menu */ "./src/menu.js");
        /* harmony import */ const _contact__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./contact */ "./src/contact.js");

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
            (0, _home__WEBPACK_IMPORTED_MODULE_0__.default)();
          });

          const menu = document.createElement("button");
          menu.classList.add("nav_btn");
          menu.textContent = "Menu";
          menu.addEventListener("click", () => {
            setActiveBtn(menu);
            (0, _menu__WEBPACK_IMPORTED_MODULE_1__.default)();
          });

          const contact = document.createElement("button");
          contact.classList.add("nav_btn");
          contact.textContent = "Contact";
          contact.addEventListener("click", () => {
            setActiveBtn(contact);
            (0, _contact__WEBPACK_IMPORTED_MODULE_2__.default)();
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
        /***/
      },

    /***/ "./src/menu.js":
      /*! *********************!*\
  !*** ./src/menu.js ***!
  \******************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ loadMenu,
          /* harmony export */
        });
        /* harmony import */ const _menuItems__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");

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
        /***/
      },

    /***/ "./src/menuItems.js":
      /*! **************************!*\
  !*** ./src/menuItems.js ***!
  \************************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ drinks: () => /* binding */ drinks,
          /* harmony export */ foodItems: () => /* binding */ foodItems,
          /* harmony export */
        });
        /* foods */

        const newItem = (name, ingredients, imgSrc) => ({
          name,
          ingredients,
          imgSrc,
        });

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

        let foodItems = [
          bigMac,
          quarterPounder,
          doubleQuarterPounder,
          Cheeseburger,
        ];
        let drinks = [
          cocaCola,
          sprite,
          strawberryBananaSmoothie,
          mangoPineappleSmoothie,
        ];
        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ const module = (__webpack_module_cache__[moduleId] = {
      /** *** */ // no module.id needed
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, "__esModule", { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _loadWebsite_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./loadWebsite.js */ "./src/loadWebsite.js");

    (0, _loadWebsite_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  })();
  /** *** */
})();

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI4QjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5Qjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Y4Qzs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQVM7QUFDWDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4Q0FBTTtBQUNSO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTs7QUFFQSxpREFBaUQsMEJBQTBCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQzs7QUFFM0MsMkRBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtb2RpbnByb2plY3QtcHJvamVjdC1yZXN0YXV0cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RoZS1vZGlucHJvamVjdC1wcm9qZWN0LXJlc3RhdXRyYW50LXBhZ2UvLi9zcmMvbG9hZFdlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RoZS1vZGlucHJvamVjdC1wcm9qZWN0LXJlc3RhdXRyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3RoZS1vZGlucHJvamVjdC1wcm9qZWN0LXJlc3RhdXRyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlLW9kaW5wcm9qZWN0LXByb2plY3QtcmVzdGF1dHJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZS1vZGlucHJvamVjdC1wcm9qZWN0LXJlc3RhdXRyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGUtb2RpbnByb2plY3QtcHJvamVjdC1yZXN0YXV0cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCBUaGlzIFByb2plY3QnO1xuXG4gIGNvbnN0IGRpc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUaGlzIFByb2plY3QgaXMgcGFydCBvZiB0aGUgb2RpbiBwcm9qZWN0IGNvdXJzZSBpbiB3ZWItZGV2JztcblxuICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGF1dGhvci5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9NZWRpZG8xJztcbiAgYXV0aG9yLnRhcmdldCA9ICdibGFuayc7XG4gIGNvbnN0IGF1dGhvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQm91c2FsYWggTmFkaXInKTtcbiAgYXV0aG9yLmFwcGVuZENoaWxkKGF1dGhvck5hbWUpO1xuXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY3JlZGl0LmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZmFzdC1mb29kJztcbiAgY3JlZGl0LnRhcmdldCA9ICdibGFuayc7XG4gIGNvbnN0IGNyZWRpdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRmFzdCBmb29kIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJyk7XG4gIGNyZWRpdC5hcHBlbmRDaGlsZChjcmVkaXRUZXh0KTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChkaXNjcmlwdGlvbik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbnRyby50ZXh0Q29udGVudCA9IGBcbiAgU2F0aXNmeSB5b3VyIGNyYXZpbmdzIGF0IG91ciBicmFuZC1uZXcgZmFzdCBmb29kIGhhdmVuLFxuICAgd2hlcmUgZmxhdm9yIG1lZXRzIHNwZWVkLiBpbiBZb3VyIG5ldyBmYXN0IGZvb2QsIHdlJ3JlIGRpc2hpbmdcbiAgIG91dCBtb3V0aHdhdGVyaW5nIGJ1cmdlcnMsIGNyaXNweSBnb2xkZW4gZnJpZXMsIGFuZCBkZWxlY3RhYmxlIFxuICAgc2hha2VzIHRoYXQgd2lsbCBoYXZlIHlvdXIgdGFzdGUgYnVkcyBkYW5jaW5nIHdpdGggam95YDtcblxuICBob21lLmFwcGVuZENoaWxkKGludHJvKTtcbiAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gc2V0QWN0aXZlQnRuKGJ0bikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9idG4nKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IGJ0bikge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9XG4gIH0pO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2X2xpc3QnKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2X2J0bicpO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEFjdGl2ZUJ0bihob21lKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2X2J0bicpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEFjdGl2ZUJ0bihtZW51KTtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2X2J0bicpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldEFjdGl2ZUJ0bihjb250YWN0KTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICByZXR1cm4gbmF2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNeSBGYXN0IEZvb2QnO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGhlIE9kaW4gUHJvamVjdCAnKTtcbiAgY29uc3QgeWVhciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCk7XG5cbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhdXRob3IuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vTWVkaWRvMSc7XG4gIGF1dGhvci50YXJnZXQgPSAnYmxhbmsnO1xuICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0JvdXNhbGFoIE5hZGlyJyk7XG4gIGF1dGhvci5hcHBlbmRDaGlsZChhdXRob3JOYW1lKTtcblxuICBjcmVkaXQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBjcmVkaXQuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgY3JlZGl0LmFwcGVuZENoaWxkKHllYXIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFdlYlNpdGUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCB7Zm9vZEl0ZW1zLCBkcmlua3N9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xuXG5mdW5jdGlvbiBhZGRJdGVtKGl0ZW0pe1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKFwibWVudV9pdGVtXCIpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zcmMgPSBpdGVtLmltZ1NyYztcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuXG4gIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50cztcblxuICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHMpO1xuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZE1lbnUoKXtcbiAgY29uc3QgZm9vZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudV9jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZWFsc1wiO1xuXG4gIGNvbnN0IG1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVhbHMuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGZvb2RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIG1lYWxzLmFwcGVuZENoaWxkKGFkZEl0ZW0oaXRlbSkpO1xuICB9KVxuXG4gIGZvb2RNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQobWVhbHMpO1xuICBcbiAgcmV0dXJuIGZvb2RNZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcmlua3NNZW51KCl7XG4gIGNvbnN0IGRyaW5rc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkcmlua3NNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51X2NvbnRhaW5lclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuXG4gIGNvbnN0IGRyaW5rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRyaW5rTGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgZHJpbmtzLmZvckVhY2goZHJpbmsgPT4ge1xuICAgIGRyaW5rTGlzdC5hcHBlbmRDaGlsZChhZGRJdGVtKGRyaW5rKSlcbiAgfSlcblxuICBkcmlua3NNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZHJpbmtzTWVudS5hcHBlbmRDaGlsZChkcmlua0xpc3QpO1xuXG4gIHJldHVybiBkcmlua3NNZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZE1lbnUoKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlRHJpbmtzTWVudSgpKTtcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbiIsIi8qIGZvb2RzICovXG5cbmNvbnN0IG5ld0l0ZW0gPSAobmFtZSwgaW5ncmVkaWVudHMsIGltZ1NyYykgPT4gKHtuYW1lLCBpbmdyZWRpZW50cywgaW1nU3JjfSk7XG5cbmNvbnN0IGJpZ01hYyA9IG5ld0l0ZW0oXG4gIFwiYmlnTWFjXCIsXG4gIFwiQmlnIE1hYyBCdW4sIDEwMCUgQmVlZiBQYXR0eSwgU2hyZWRkZWQgTGV0dHVjZVwiLFxuICBcIi4vaW1nL0RDXzIwMTkwN18wMDA1X0JpZ01hY184MzJ4NDcyX3Byb2R1Y3QtaGVhZGVyLWRlc2t0b3AuanBlZ1wiLFxuKVxuXG5jb25zdCBxdWFydGVyUG91bmRlciA9IG5ld0l0ZW0oXG4gIFwiUXVhcnRlciBQb3VuZGVyXCIsXG4gIFwiUXVhcnRlciBQb3VuZCBCdW4sIEtldGNodXAsIFBpY2tsZSBTbGljZXNcIixcbiAgXCIuL2ltZy9EQ18yMDIyMDFfMDAwNy0wMDVfUXVhcnRlclBvdW5kZXJ3aXRoQ2hlZXNlXzgzMng0NzJfcHJvZHVjdC1oZWFkZXItZGVza3RvcC5qcGVnXCIsXG4pXG5cbmNvbnN0IGRvdWJsZVF1YXJ0ZXJQb3VuZGVyID0gbmV3SXRlbShcbiAgXCJEb3VibGUgUXVhcnRlciBQb3VuZGVyXCIsXG4gIFwiUXVhcnRlciBQb3VuZCBCdW4sIFBhc3RldXJpemVkIFByb2Nlc3MgQW1lcmljYW4gQ2hlZXNlLCBPbmlvbnNcIixcbiAgXCIuL2ltZy8yMDIyMDFfMzQyNi0wMDVfRG91YmxlUXVhcnRlclBvdW5kZXJ3aXRoQ2hlZXNlXzgzMng0NzJfcHJvZHVjdC1oZWFkZXItZGVza3RvcC5qcGVnXCIsXG4pXG5cbmNvbnN0IENoZWVzZWJ1cmdlciA9IG5ld0l0ZW0oXG4gIFwiQ2hlZXNlYnVyZ2VyXCIsXG4gIFwiUmVndWxhciBCdW4sIDEwMCUgQmVlZiBQYXR0eSwgUGFzdGV1cml6ZWQgUHJvY2VzcyBBbWVyaWNhbiBDaGVlc2VcIixcbiAgXCIuL2ltZy9EQ18yMDIwMDZfMDAwM19DaGVlc2VidXJnZXJfU3RyYWlnaHRCdW5fODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIixcbilcblxuLyogZHJpbmtzICovXG5cbmNvbnN0IGNvY2FDb2xhID0gbmV3SXRlbShcbiAgXCJDb2NhLUNvbGFcIixcbiAgXCJDb2NhLUNvbGEsIEljZVwiLFxuICBcIi4vaW1nL0RDXzIwMjExMl8wNTIxX01lZGl1bUNva2VfR2xhc3NfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIlxuKTtcblxuY29uc3Qgc3ByaXRlID0gbmV3SXRlbShcbiAgJ1Nwcml0ZScsXG4gIFwic3ByaWNlLCBpY2VcIixcbiAgXCIuL2ltZy9IZWFkZXJfTWVkaXVtU3ByaXRlX0dsYXNzXzgzMng0NzJfcHJvZHVjdC1oZWFkZXItZGVza3RvcC5qcGVnXCIsXG4pXG5cbmNvbnN0IHN0cmF3YmVycnlCYW5hbmFTbW9vdGhpZSA9IG5ld0l0ZW0oXG4gIFwiU3RyYXdiZXJyeSBCYW5hbmEgU21vb3RoaWVcIixcbiAgXCJTdHJhd2JlcnJ5IEJhbmFuYSBGcnVpdCBCYXNlLCBpY2UsIExvd2ZhdCBTbW9vdGhpZSBZb2d1cnRcIixcbiAgXCIuL2ltZy9EQ18yMDE5MDZfMjcyNV9NZWRpdW1TdHJhd2JlcnJ5QmFuYW5hU21vb3RoaWVfR2xhc3NfQTFfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIixcbilcblxuY29uc3QgbWFuZ29QaW5lYXBwbGVTbW9vdGhpZSA9IG5ld0l0ZW0oXG4gIFwiTWFuZ28gUGluZWFwcGxlIFNtb290aGllXCIsXG4gIFwiTWFuZ28gUGluZWFwcGxlIEZydWl0IEJhc2UsIGljZSwgTG93ZmF0IFNtb290aGllIFlvZ3VydFwiLFxuICBcIi4vaW1nL0RDXzIwMTkwNl8yNzkwX01lZGl1bU1hbmdvUGluZWFwcGxlU21vb3RoaWVfR2xhc3NfQTFfODMyeDQ3Ml9wcm9kdWN0LWhlYWRlci1kZXNrdG9wLmpwZWdcIlxuKVxuIFxubGV0IGZvb2RJdGVtcyA9IFtiaWdNYWMsIHF1YXJ0ZXJQb3VuZGVyLCBkb3VibGVRdWFydGVyUG91bmRlciwgQ2hlZXNlYnVyZ2VyXTtcbmxldCBkcmlua3MgPSBbY29jYUNvbGEsIHNwcml0ZSwgc3RyYXdiZXJyeUJhbmFuYVNtb290aGllLCBtYW5nb1BpbmVhcHBsZVNtb290aGllXTtcbmV4cG9ydCAge2Zvb2RJdGVtcywgZHJpbmtzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkV2ViU2l0ZSBmcm9tIFwiLi9sb2FkV2Vic2l0ZS5qc1wiO1xuXG5sb2FkV2ViU2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
