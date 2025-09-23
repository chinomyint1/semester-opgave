const heroContainer = document.querySelector(".hero");
const descContainer = document.querySelector(".desc");

import { fetchProducts } from "../fetch.js";



//HERO//
export function renderHero() {
  heroContainer.innerHTML = `
  <div class="hero-content">
  <img src="assets (1)/assets/heros/aktiviteter.jpg" alt="aktiviteter">
  <h1>Aktiviteter</h1>
  </div>
  `;
}

renderHero();


//DESCRIPTION//

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

renderDescription();



export const renderActivities = async () => {
  try {
    const response = await fetch('data/activities.json');
    const data = await response.json();

    


    const container = document.querySelector('#activities-container');
    container.innerHTML = '';

    
    let activitiesArray = [];

    if (Array.isArray(data)) {
      activitiesArray = data;                  
    } else if (Array.isArray(data.activities)) {
      activitiesArray = data.activities;
    } else {
      activitiesArray = [data];                
    }

    activitiesArray.forEach(aktiviteter => {

      const aktiviteterCard = document.createElement('div');
      aktiviteterCard.className = 'aktiviteter-card';

      aktiviteterCard.innerHTML =  
      `
        <div>
          <p>${aktiviteter.title}</p> 
          <p>${aktiviteter.date} kl ${aktiviteter.time}</p> 
          <img src="${aktiviteter.image}" alt="${aktiviteter.title}"> 
          <button class="læs-mere"><a href="#">Læs Mere</a></button> 
        </div>

    `


      container.appendChild(aktiviteterCard);
    });

  } catch (error) {
    console.error('Failed to load activities:', error);
  }
};

renderActivities();
