const cardArray = [
  {
    name: 'fries',
    img:  'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  }
];

// Advanced way to sort an array randomly
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard() {
  for (let index = 0; index < cardArray.length; index++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', index)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}

createBoard();

function flipCard() {
  const cardId = this.getAttribute('data-id');
  console.log('clicked', cardId)
}
