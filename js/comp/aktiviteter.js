import { fetchProducts } from "../fetch.js"; 
// bring in fetchProducts 

//  HERO SECTION 
export function renderHero() {
  const hero = document.querySelector(".hero"); 
  // find the hero container in the HTML
  if (!hero) return; 
  // if it's not there, stop

  hero.innerHTML = `
    <div class="hero-content">
      <img src="assets (1)/assets/heros/aktiviteter.jpg" alt="Aktiviteter">
      <h1>Aktiviteter</h1>
    </div>
  `;
  // put the hero image + title inside the hero box
}
renderHero(); 
// run it right away

//  DESCRIPTION SECTION 
export function renderDescription() {
  const desc = document.querySelector(".desc"); 
  // find the description container
  if (!desc) return; 
  // if it's not there, stop

  desc.innerHTML = `
    <div class="desc-content">
      <h2>Ingen skal kede sig hos Gitte</h2>
      <p>
        Glamping er mere end blot en indkvartering – det er en mulighed for at fordybe dig i naturen og
        skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende
        naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller
        morgenyoga – vi vil hos Gittes Glamping imødekomme dine ønsker.
      </p>
    </div>
  `;
  // add the title and text about activities
}
renderDescription(); 
// run it right away

// ================= ACTIVITIES SECTION =================
export async function renderActivities() {
  const container = document.querySelector("#activities-container"); 
  // find the activities box
  if (!container) return; 
  // if not found, stop

  try {
    const res = await fetch("data/activities.json"); 
    // get the activities from a JSON file
    const data = await res.json(); 
    // turn the response into a real JS object/array

    // make sure we always end up with an array
    const activities =
      data?.data || data?.activities || data || []; 
    // JSON might look different, so we try a few places

    if (!Array.isArray(activities) || activities.length === 0) {
      container.innerHTML = "<p>Ingen aktiviteter fundet.</p>"; 
      // if no activities exist, show a message
      return;
    }

    container.innerHTML = ""; 
    // clear the container before adding new activities

    // load favorites from localStorage (saved hearts)
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    // loop through each activity
    activities.forEach((act, i) => {
      const id = act.id || `activity-${i}`; 
      // each activity gets an id
      const title = act.title || act.name || "Uden titel"; 
      // use title or fallback
      const date = act.date || act.day || ""; 
      // maybe it has a date
      const time = act.time || act.hour || ""; 
      // maybe it has a time
      const image = act.image || "assets (1)/assets/aktiviteter/kano.jpg"; 
      // use image or fallback
      const descText = act.description || "Ingen beskrivelse."; 
      // description fallback

      // make a card for this activity
      const card = document.createElement("div");
      card.className = "activity-mobile-card"; 
      card.dataset.id = id; 

      // put HTML inside the card
      card.innerHTML = `
        <div class="activity-label"><p>${title}</p></div>

        <div class="activity-image-wrapper">
          <img src="${image}" alt="${title}" class="activity-image">
        </div>

        <div class="activity-details-box">
          <div class="details-top">
            <p class="activity-time">${date}${date && time ? " kl. " : ""}${time}</p>
            <button class="favorite-btn" aria-label="Favorite" data-fav="false">🤍</button>
          </div>
          <button class="read-more-btn">Læs mere ⇳</button>
        </div>

        <div class="activity-description"><p>${descText}</p></div>
      `;

      //  READ MORE BUTTON 
      const readMoreBtn = card.querySelector(".read-more-btn");
      const descBox = card.querySelector(".activity-description");

      readMoreBtn.addEventListener("click", () => {
        const open = descBox.classList.toggle("active"); 
        // show/hide the text
        readMoreBtn.textContent = open ? "Skjul ⇳" : "Læs mere ⌄"; 
        // change button text depending on state
      });

      // ---------------- FAVORITE BUTTON ----------------
      const favBtn = card.querySelector(".favorite-btn");

      // if already saved as favorite, update the heart
      if (favorites.includes(id)) {
        favBtn.textContent = "❤️"; 
        favBtn.dataset.fav = "true";
      }

      favBtn.addEventListener("click", () => {
        const isFav = favBtn.dataset.fav === "true"; 
        // check if this card is already favorited

        if (isFav) {
          favorites = favorites.filter(f => f !== id); 
          // remove from favorites
          favBtn.textContent = "🤍"; 
          favBtn.dataset.fav = "false"; 
          // switch back to empty heart
        } else {
          favorites.push(id); 
          // add to favorites
          favBtn.textContent = "❤️"; 
          favBtn.dataset.fav = "true"; 
          // switch to full heart
        }

        // save updated favorites back to localStorage
        localStorage.setItem("favorites", JSON.stringify(favorites));
      });

      container.appendChild(card); 
      // finally, put the card on the page
    });
  } catch (err) {
    console.error("Failed to load activities:", err); 
    // show error in console for debugging
    container.innerHTML = "<p>Kunne ikke hente aktiviteter lige nu.</p>"; 
    // show message on screen
  }
}
renderActivities(); 
// run activities

//  FOOTER 
import { footer } from "./footer.js";
 
footer(); 

