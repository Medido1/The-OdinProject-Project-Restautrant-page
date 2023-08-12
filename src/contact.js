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

export default function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";

  main.appendChild(createContact());
}
