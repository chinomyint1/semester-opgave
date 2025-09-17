const heroContainer = document.querySelector(".hero");
const descContainer = document.querySelector(".desc");

export function renderHero() {
  heroContainer.innerHTML = `
    <div class="hero-content" style="background-image: url('assests/hero/aktiviteter.jpg');">
      <h1>Aktiviteter</h1>
    </div>
  `;
}

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

infoContainer.innerHTML = `
        <div>
            <p>${activities.id}</p> 
            <p>${activities.title} kr</p> 
            <p>${activities.description}</p> 
            <p>${activities.date} kr</p> 
            <p>${activities.time}</p>
            <img src="${activities.image}" alt="${activities.title}"> 
            <button class="btnreadmore"><a href="">læs mere  </a></button> 
        </div>
    `


    let favoriteArray = JSON.parse(localStorage.getItem('info')) || [] 







renderHero();
renderDescription();
