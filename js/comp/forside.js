// HERO
function Hero() {
  return `
    <img src="path/to/logo.png" alt="Gittes Glamping Logo" class="logo" />
    <h1>Gittes Glamping</h1>
    <a href="#" class="btn-book">BOOK NU</a>
    <img src="path/to/hero-image.jpg" alt="Hero billede" class="hero-image" />
  `;
}

// INTRO
function Intro() {
  return `
    <div class="intro-content">
      <h2>Kom og prøv glamping hos Gitte!</h2>
      <p>
        Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor
        hjertevarme og omsorg møder naturens skønhed og eventyr. Vores
        dedikerede team, anført af Gitte selv, er her for at skabe den
        perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter
        at skabe minder og fordybelse, uanset om du besøger os som par,
        familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter
        og arrangementer, der passer til alle aldre og interesser. Udforsk
        naturen, slap af ved bålet, del historier med nye venner, eller find
        indre ro med vores wellnessaktiviteter.
      </p>
      <div class="intro-extra">
        <img src="path/to/dame.jpg" alt="Gitte" class="intro-image" />
        <a href="#" class="btn-view">SE VORES OPHOLD</a>
      </div>
    </div>
  `;
}

// TESTIMONIALS
function Testimonials() {
  const guests = [
    {
      name: "Lise, 34 år Har været på Romatisk Gateaway",
      text: "Min kæreste og jeg fejrede vores årsdag med et ophold ved Gittes Glamping. Det vil vi helt sikkert gøre igen. Personalet var virkelig søde og servicemindede, og maden og stemningen var i top."
    },
    {
      name: "Johanne, 22 år Har været på Weekendtur",
      text: "Jeg blev inviteret med af min veninde. Det var første gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overrasket. Sengene var gode, og det var slet ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt."
    },
    {
      name: "Benjamin, 42 år Har været på Familiepakken",
      text: "Top karakter til Gittes Glamping herfra! perfekte blanding af primitivt og luksuriøst. Og ungerne elskede det!"
    },
    {
      name: "Peter, 61 år Har været på Weekendtur",
      text: "Jeg havde en rigtig hyggelig weekend, og maden er i særdeleshed en oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk. Jeg er dog ikke så vild med at sejle."
    }
  ];

  return `
    <div class="testimonials-header">
      <h2>Vores gæster udtaler</h2>
    </div>
    <div class="testimonials-cards">
      ${guests
        .map(
          (guest) => `
          <article class="testimonial-card">
            <h3>${guest.name}</h3>
            <p>${guest.text}</p>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

// RENDER FUNKTION
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero").innerHTML = Hero();
  document.querySelector(".intro").innerHTML = Intro();
  document.querySelector(".testimonials").innerHTML = Testimonials();
});
