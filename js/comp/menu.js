export function menuContainer() {

    const menuContainer = document.querySelector(".menuContainer");

    if (!menuContainer) return;
    
    menuContainer.innerHTML = 
    `
    <div class="mobile-container">
    <div class="topnav">
    <a href="#Ophold">Ophold</a>
    <a href="#Kontakt">Kontakt</a>
    <a href="#Aktiviteter">Aktiviteter</a>
    <a href="#Minliste">Minliste</a>
    </div>
    </div>
    `;
}