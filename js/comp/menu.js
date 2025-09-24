export function menuContainer() {
    const menuContainer = document.querySelector(".menuContainer");

    if (!menuContainer) {
        console.error('Menu container not found!');
        return;
    }
    
    menuContainer.innerHTML = `
    <div class="mobile-container">
        <div class="topnav">
            <button class="burger-menu" aria-label="Menu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </button>
            <div class="menu-links">
                <a href="/ophold.html">Ophold</a>
                <a href="/kontakt.html">Kontakt</a>
                <a href="/aktiviteter.html">Aktiviteter</a>
                <a href="/min-liste.html">Min Liste</a>
            </div>
        </div>
    </div>
    `;

    // Tilføj event listener til burger menu
    const burgerMenu = menuContainer.querySelector('.burger-menu');
    const menuLinks = menuContainer.querySelector('.menu-links');

    if (burgerMenu && menuLinks) {
        burgerMenu.addEventListener('click', function(event) {
            event.stopPropagation();
            this.classList.toggle('active');
            menuLinks.classList.toggle('active');
        });

        // Luk menu når der klikkes udenfor
        document.addEventListener('click', function(event) {
            if (!menuContainer.contains(event.target)) {
                burgerMenu.classList.remove('active');
                menuLinks.classList.remove('active');
            }
        });

        // Luk menu når der klikkes på et link
        const links = menuLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                menuLinks.classList.remove('active');
            });
        });
    } else {
        console.error('Burger menu or menu links not found!');
    }
    
    console.log('Menu loaded successfully!');
}