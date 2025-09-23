export function footer() {
  const footer = document.querySelector(".footer");

  if (!footer) return; 

  footer.innerHTML = `
    <div class="footer-content">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-instagram"></a>
      <img src="assets/logo/logo.png" alt="logo" class="logoFooter">
    </div>
  `;
}
