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

export default function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";

  main.appendChild(createHome());
}
