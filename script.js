const anime1 = [
    {
        name: 'NARUTO UZUMAKI',
        skill: 'SHADOW CLONE',
        photo: 'image/naruto.jpeg'
    },
    {   
        name: 'ITACHI UCHCHIHA',
        skill: 'SUSANAO',
        photo: 'image/itachi.jpg'
    },
    {
        name: 'KAKASHI HATAGE',
        skill: 'COPY NINJA (chidori)',
        photo: 'image/kakashi.jpg'
    },
    {
        name: 'MINNATO NAMIKAZE',
        skill: 'YELLOW FLASH',
        photo: 'image/minnato.jpeg'
    },
    {
        name: 'JIRAIYA SENSEI',
        skill: 'SAGE MODE',
        photo: 'image/jiraiya.png'
    }
];

const anime2 = [
    {
        name: 'TANJIRO KAMADO',
        skill: 'HINOKAMI KAGURA',
        photo: 'image/tanjiro.jpeg'
    },
    {
        name: 'ZENITSU AGATSUMA',
        skill: 'FLAMING THUNDER GOD',
        photo: 'image/zenitsu.jpg'
    },
    {
        name: 'INOSUKE HASHIBIRA',
        skill: 'BEAST BREATHING',
        photo: 'image/inosuke.jpeg'
    },
    {
        name: 'MUCHIRO TOKITO',
        skill: ' MIST BREATHING',
        photo: 'image/muchiro.jpeg'
    },
    {
        name: 'GYOMEI HIMEJIMA',
        skill: 'STONE  BREATHING',
        photo: 'image/gyomei.jpeg'
    }
];

let currentIndex1 = 0;
let currentIndex2 = 0;

function updateCard(index, cardNumber, animeArray) {
    const person = animeArray[index];
    document.getElementById(`person-photo-${cardNumber}`).src = person.photo;
    document.getElementById(`person-name-${cardNumber}`).innerText = person.name;
    document.getElementById(`person-skill-${cardNumber}`).innerText = person.skill;
}

document.getElementById('prev-btn-1').addEventListener('click', () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateCard(currentIndex1, 1, anime1);
    }
    updateButtons(1, currentIndex1, anime1);
});

document.getElementById('next-btn-1').addEventListener('click', () => {
    if (currentIndex1 < anime1.length - 1) {
        currentIndex1++;
        updateCard(currentIndex1, 1, anime1);
    }
    updateButtons(1, currentIndex1, anime1);
});

document.getElementById('prev-btn-2').addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateCard(currentIndex2, 2, anime2);
    }
    updateButtons(2, currentIndex2, anime2);
});

document.getElementById('next-btn-2').addEventListener('click', () => {
    if (currentIndex2 < anime2.length - 1) {
        currentIndex2++;
        updateCard(currentIndex2, 2, anime2);
    }
    updateButtons(2, currentIndex2, anime2);
});

function updateButtons(cardNumber, currentIndex, animeArray) {
    document.getElementById(`prev-btn-${cardNumber}`).disabled = currentIndex === 0;
    document.getElementById(`next-btn-${cardNumber}`).disabled = currentIndex === animeArray.length - 1;
}

// Initialize the cards with the first person's details
updateCard(currentIndex1, 1, anime1);
updateCard(currentIndex2, 2, anime2);
updateButtons(1, currentIndex1, anime1);
updateButtons(2, currentIndex2, anime2);
