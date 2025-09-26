import { renderHero } from "./aktiviteter.js"
renderHero(); 
// run it right away


//  FAVORITES 
const renderFavorites = async () => {
  try {
    const response = await fetch("data/activities.json"); 
    // load the activities data from JSON file
    const data = await response.json(); 
    // turn it into a JS object/array

    const container = document.querySelector("#favorites-container"); 
    // find the favorites container in HTML
    if (!container) { 
      console.warn("No #favorites-container found"); 
      // if not found, log warning
      return; 
    }

    // make sure activities is always an array
    const activitiesArray = Array.isArray(data) ? data : data.data || data.activities || [];

    // get saved favorites from localStorage
    const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");

    // filter activities to only keep favorites
    const favoriteActivities = activitiesArray.filter((act, index) => {
      const id = act.id ?? `activity-${index}`; 
      // use activity id, or make one if missing
      return favoriteIds.includes(id); 
      // only keep it if the id is in favorites
    });

    // if no favorites, show message and stop
    if (favoriteActivities.length === 0) {
      container.innerHTML = "<p>Ingen favoritter fundet.</p>";
      return;
    }

    // go through each favorite activity
    favoriteActivities.forEach((act, index) => {
      const id = act.id ?? `activity-${index}`; 
      const title = act.title ?? "Uden titel"; 
      const image = act.image ?? ""; 
      const description = act.description ?? ""; 

      // make a card div
      const card = document.createElement("div");
      card.className = "activity-mobile-card";

      // fill the card with activity content
      card.innerHTML = `
        <div class="activity-label">
          <p>${title}</p>
        </div>

        <div class="activity-image-wrapper">
          <img src="${image}" alt="${title}" class="activity-image" />
        </div>

        <div class="activity-details-box">
          <div class="details-top">
            <button class="remove-fav-btn" data-id="${id}">Fjern fra favoritter ✖</button>
          </div>
          <button class="read-more-btn">Læs mere ⌄</button>
        </div>

        <div class="activity-description">
          <p>${description}</p>
        </div>
      `;

      // add the card to the container
      container.appendChild(card);
    });

    // ---------------- REMOVE FAVORITE BUTTONS ----------------
    document.querySelectorAll(".remove-fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idToRemove = btn.getAttribute("data-id"); 
        // get the id of the activity we want to remove
        let currentFavs = JSON.parse(localStorage.getItem("favorites") || "[]"); 
        // get current favorites
        currentFavs = currentFavs.filter(id => id !== idToRemove); 
        // remove this one
        localStorage.setItem("favorites", JSON.stringify(currentFavs)); 
        // save the new list
        location.reload(); 
        // reload page to update the list
      });
    });

    // ---------------- READ MORE BUTTONS ----------------
    document.querySelectorAll(".read-more-btn").forEach(button => {
      button.addEventListener("click", () => {
        const desc = button.parentElement.nextElementSibling; 
        // find the description box
        const isOpen = desc.classList.toggle("active"); 
        // toggle "active" class (show/hide)
        button.innerHTML = isOpen ? "Skjul ⌃" : "Læs mere ⌄"; 
        // change button text depending on open/closed
      });
    });

  } catch (error) {
    console.error("Fejl ved hentning af favoritter:", error); 
    // if something went wrong, log it
  }
};

renderFavorites(); 
// run it right away
