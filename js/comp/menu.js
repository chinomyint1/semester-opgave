export function menuContainer() {

    const menuContainer = document.querySelector(".menuContainer");

    if (!menuContainer) return;
    
    menuContainer.innerHTML = 
    `
    <div class="mobile-container">
    <div class="topnav">
    <a href="#ophold">ophold</a>
    <a href="#kontakt">kontakt</a>
    <a href="#aktiviteter">aktiviteter</a>
    <a href="#minliste">minliste</a>
    </div>
    </div>
    `;
}