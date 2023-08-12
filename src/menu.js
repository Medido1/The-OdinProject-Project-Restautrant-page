import { foodItems, drinks } from "./menuItems";

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
  foodItems.forEach((item) => {
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
  drinks.forEach((drink) => {
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

export default function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}
