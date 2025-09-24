export function menuContainer() {
    const menuContainer = document.querySelector(".menuContainer");

    if (!menuContainer) {
        console.log('Menu container not found');
        return;
    }
    
    // Simpel HTML - ingen kompleks styling
    menuContainer.innerHTML = `
        <button class="burger-menu">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </button>
        <div class="menu-links">
            <a href="#ophold">Ophold</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#aktiviteter">Aktiviteter</a>
            <a href="#min-liste">Min Liste</a>
        </div>
    `;

    // Simpel event listener
    const burgerMenu = menuContainer.querySelector('.burger-menu');
    const menuLinks = menuContainer.querySelector('.menu-links');

    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Burger menu clicked');
        this.classList.toggle('active');
        menuLinks.classList.toggle('active');
    });

    // Luk menu når der klikkes andre steder
    document.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target)) {
            burgerMenu.classList.remove('active');
            menuLinks.classList.remove('active');
        }
    });

    // Luk menu når der klikkes på links
    const links = menuLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            menuLinks.classList.remove('active');
        });
    });

    console.log('Menu loaded successfully');
}