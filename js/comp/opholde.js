const opholdeContainer = document.querySelector('.opholde');


const img = document.createElement('img');
img.src = 'assets (1)/assets/heros/ophold.jpg'; 
img.alt = 'assets (1)/assets/heros/ophold.jpg';


const textBox = document.createElement('div');
textBox.classList.add('ophold-tekstboks');


const title = document.createElement('h2');
title.textContent = 'Vi har ophold til enhver smag'; 


const description = document.createElement('p');
description.textContent = 'Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem til at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.';


textBox.appendChild(title);
textBox.appendChild(description);


opholdeContainer.appendChild(img);
opholdeContainer.appendChild(textBox);
const container = document.querySelector('.weekendtur-container');


const cards = [
  {
    title: 'Weekendtur',
    persons: '2 personer',
    price: 'Fra 4200,-',
    image: 'assets (1)/assets/ophold/weekendtur.jpg'
  },
  {    title: 'Familiepakken',
    persons: '2 personer',
    price: 'Fra 3900,-',
    image: 'assets (1)/assets/ophold/familiepakken.jpg' 
    },
  {
    title: 'Romantisk Getaway',
    persons: '2 personer',
    price: 'Fra 3900,-',
    image: 'assets (1)/assets/ophold/romantisk_getaway.jpg' 
}];

cards.forEach(cardData => {
  const card = document.createElement('div');
  card.classList.add('weekendtur-card');

  const img = document.createElement('img');
  img.src = cardData.image;
  img.alt = cardData.title;
  card.appendChild(img);

  const overlay = document.createElement('div');
  overlay.classList.add('text-overlay');

  const heading = document.createElement('h2');
  heading.textContent = cardData.title;
  overlay.appendChild(heading);

  const persons = document.createElement('p');
  persons.textContent = cardData.persons;
  overlay.appendChild(persons);

  const price = document.createElement('p');
  price.textContent = cardData.price;
  overlay.appendChild(price);

  card.appendChild(overlay);

  const button = document.createElement('button');
  button.classList.add('cta-button');
  button.textContent = 'LÆS MERE';
  card.appendChild(button);

  container.appendChild(card);
});

opholdeContainer.appendChild(img);
opholdeContainer.appendChild(title);
opholdeContainer.appendChild(description);



