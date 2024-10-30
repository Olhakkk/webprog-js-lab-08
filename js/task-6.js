function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {

    boxesContainer.innerHTML = '';

    let size = 30;

    const elements = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        elements.push(box);
        size += 10; 
    }

    boxesContainer.append(...elements);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value.trim(), 10);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
    } else {
        alert('Please enter a number between 1 and 100');
    }

    input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
