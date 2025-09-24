export function footer() {
    const footer = document.querySelector(".footer");

    if (!footer) {
        console.log('Footer container not found');
        return;
    }
    
    footer.innerHTML = `
        <div class="footer-content">
            <div class="social-icons">
                <a href="https://facebook.com" target="_blank" class="social-link">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <div class="footer-logo">
                <img src="assets (1)/assets/logo/logo.png" alt="Gittes Glamping Logo" class="logo-footer">
                <span class="footer-text">Gittes Glamping</span>
            </div>
        </div>
    `;
}

// Auto-kør funktionen når filen importeres
footer();