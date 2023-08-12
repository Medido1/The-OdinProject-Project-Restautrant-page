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
export { foodItems, drinks };
