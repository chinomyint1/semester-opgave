


document.addEventListener('DOMContentLoaded', () => {
    // Add logo
    const logo = document.querySelector('.logo');
    const logoImg = document.createElement('img');
    logoImg.src = 'assets%20 (1)/assets/logo/logo.png';
    logoImg.alt = 'Gittes Glamping Logo';
    logoImg.onload = () => console.log('Logo loaded successfully');
    logoImg.onerror = () => console.error('Failed to load logo image');
    logo.appendChild(logoImg);

    // Add hero image
    const hero = document.querySelector('.hero');
    const heroImg = document.createElement('img');
    heroImg.src = 'assets (1)/assets/heros/forside.jpg';
    heroImg.alt = 'Gittes Glamping Hero';
    heroImg.onload = () => console.log('Hero image loaded successfully');
    heroImg.onerror = () => console.error('Failed to load hero image');
    hero.appendChild(heroImg);

    const title = document.querySelector('.title');
    title.textContent = 'Gittes Glamping';

    const bookBtn = document.querySelector('.book-btn');
    bookBtn.textContent = 'BOOK NU';
    bookBtn.addEventListener('click', () => {
        alert('Booking er ikke implementeret endnu. Kontakt os for mere info!');
    });

    const welcome = document.querySelector('.welcome');
    welcome.innerHTML = `
        Kom og prøv glamping hos Gitte!<br>
        Vi er stolte af at byde dig velkommen til Gittes Glamping, hvor hjertvarme og omsorg mader naturens skønne og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse weekendoplevelse. Vi stræber efter at give dig en besøg os som par, familie eller soleventyr. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved ballet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.
    `;

    const guestReviews = document.querySelector('.guest-reviews');
    guestReviews.innerHTML = '<h3>Vores gæster udtaler</h3>';
    const reviews = [
        'Lise, 34 år: Har været på Romantisk Getaway. Min kæreste og jeg fejrede vores årsdag med et ophold ved Gittes Glamping. Det vil vi helt sikkert gøre igen. Personalet var virkelig sødt og servicindænnet, og maden og stemningen var i top.',
        'Johanne, 22 år: Har været på Weekendtur. Jeg blev inviteret med af min veninde. Det var først gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overrasket. Sengen var god, og det var slemt ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt.',
        'Benjamin, 42 år: Har været på Familiepakken. Top karakter til Gittes Glamping herfal perfektte blanding af primitiv og luksuriøst. Og ungerne elskede det!',
        'Peter, 61 år: Har været på Weekendtur. Jeg havde en rigtig hyggelig weekend, og maden er i særdeleshed en oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk. Jeg er dog ikke så vild med at sejle.'
    ];
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.textContent = review;
        guestReviews.appendChild(reviewDiv);
    });

    const footer = document.querySelector('.footer');
    footer.innerHTML = '<a href="#">f</a><a href="#">@</a>';

    let reviewIndex = 0;
    const reviewElements = document.querySelectorAll('.review');
    reviewElements.forEach((el, i) => i === 0 ? el.style.display = 'block' : el.style.display = 'none');
    setInterval(() => {
        reviewElements[reviewIndex].style.display = 'none';
        reviewIndex = (reviewIndex + 1) % reviewElements.length;
        reviewElements[reviewIndex].style.display = 'block';
    }, 5000);
});