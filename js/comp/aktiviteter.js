import { fetchProducts } from "../fetch.js";



const heroContainer = document.querySelector(".hero");


export function renderHero() {
  heroContainer.innerHTML = `
    <div class="hero-content">
    <img src="" alt="">
      <h1>Aktiviteter</h1>
    </div>
  `;
}

const descContainer = document.querySelector(".desc");

export function renderDescription() {
  descContainer.innerHTML = `
    <div class="desc-content">
      <h2>Ingen skal kede sig hos Gitte</h2>
      <p>
        Glamping er mere end blot en indkvartering – det er en mulighed for at fordybe dig i naturen og
        skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende
        naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller
        morgenyoga, der giver dig en chance for at finde indre ro og balance i naturens skød – vi vil hos
        Gittes Glamping imødekomme dine ønsker.
      </p>
    </div>
  `;
}

const infoContainer = document.querySelector(".info");

let minlisteArray = JSON.parse(localStorage.getItem('minliste')) || [] 


function renderCard(activity) {
  infoContainer.innerHTML = `
    <div class="activity-card">
      <div class="activity-title">
        <h2>${activity.title}</h2>
      </div>
      <img class="activity-image" src="${activity.image}" alt="${activity.title}">
      <div class="activity-info-box">
        <p>${activity.date}<br>kl. ${activity.time}</p>
        <button class="btn-read-more">
        <a href="#">Læs mere ▼</a>
      </button>
    </div>
  `;
}

renderHero();
renderDescription();
renderCard;
