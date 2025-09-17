
const opholdeContainer = document.querySelector('.opholde');

const img = document.createElement('img');
img.src = 'assets (1)/assets/heros/ophold.jpg'; 
img.alt = 'Billede af ophold';


const title = document.createElement('h2');
title.textContent = 'Vi har ophold til erhver smag';


const description = document.createElement('p');
description.textContent = 'Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem til at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.';


opholdeContainer.appendChild(img);
opholdeContainer.appendChild(title);
opholdeContainer.appendChild(description);



