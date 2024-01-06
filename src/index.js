const mainContent = document.getElementById("content");
const nav = document.createElement("nav");
nav.className = "nav";
const listItems = ["Home", "About", "Contact"];
mainContent.appendChild(nav);
listItems.map((item) => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = item;
  anchor.href = `${item.toLowerCase()}.html`;
  listItem.appendChild(anchor);
  nav.appendChild(listItem);
});
