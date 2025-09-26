export function footer() {
  const footer = document.querySelector(".footer");

  if (!footer) return; 

  footer.innerHTML = `
    <div class="footer-content">
      <div class="social-icons">
        <img class="facebook" src="assets (1)/assets/icons/square-facebook.svg" alt="Facebook">
        <img class="instagram" src="assets (1)/assets/icons/square-instagram.svg" alt="Instagram">
      </div>
      <div class="brand">
        <img class="logo" src="assets (1)/assets/logo/logo.png" alt="Gittes Glamping Logo">
        <span class="brand-name">Gittes Glamping</span>
      </div>
    </div>
  `;
}
