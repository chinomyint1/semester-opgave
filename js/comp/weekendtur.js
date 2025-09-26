const app = document.getElementById("app");


const header = document.createElement("header");
header.innerHTML = `
  <div class="logo">
   <img src="assets (1)/assets/logo/logo.png" alt="Logo" /></div>
  <button class="menu-button">☰</button>
`;
app.appendChild(header);

const hero = document.createElement("section");
hero.className = "hero";
hero.innerHTML = `
  <div class="hero-text">
    <h1>weekendtur</h1>
  </div>
`;
app.appendChild(hero);


const content = document.createElement("section");
content.className = "content";

const title = document.createElement("h2");
title.textContent = "Tag væk en weekend, med én du holder af";

const paragraph = document.createElement("p");
paragraph.textContent = `Trænger du og én du holder af til en velfortjent pause fra hverdagens travlhed? Vores weekendglampingophold er den perfekte måde at forny krop og sind på, mens I nyder det bedste fra både naturen og luksuriøs indkvartering. Vi tilbyder den perfekte kombination af udendørs eventyr og bekvemmeligheder. Du vil bo i rummelige og smukt indrettede telte, udstyret med komfortable senge og alle nødvendige faciliteter. Omgivet af den storslåede natur vil du føle dig i ét med omgivelserne, samtidig med at du nyder komforten ved hjemmet.`;

const subtitle = document.createElement("h3");
subtitle.textContent = "Med i pakken, er der inkluderet:";

const listItems = [
  "Morgenmad",
  "Frokost",
  "Aftensmad",
  "Adgang til cykler",
  "1 Kanotur",
  "Optændingsbriketter til bål",
  "Snobrødsdej"
];

const ul = document.createElement("ul");
listItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

const priceBox = document.createElement("div");
priceBox.className = "price-box";
priceBox.innerHTML = `
  <p>Pris 4200,-</p>
  <button id="bookBtn">BOOK NU</button>
`;

content.appendChild(title);
content.appendChild(paragraph);
content.appendChild(subtitle);
content.appendChild(ul);
content.appendChild(priceBox);

app.appendChild(content);


document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "bookBtn") {
    alert("Tak for din interesse! Bookingfunktionen er under udvikling.");
  }
});
