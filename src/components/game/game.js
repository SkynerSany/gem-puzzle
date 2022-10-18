import * as gameData from '../data/game.data';
import CreateDomElement from '../DOMelements/createDOMelements';

export default class Game {
  constructor() {

  }

  getNumbers() {
    let numbers = [];
    for (let i = 0; i < this.size; i += 1) {
      numbers[i] = i;
    }

    return numbers.sort(() => 0.5 - Math.random());
  }

  setNumbers(numbers) {
    const planks = document.querySelectorAll('.game__chip')

    planks.forEach((plank, i) => {
      plank.setAttribute('data-id', numbers[i]);
      plank.textContent = numbers[i] ? numbers[i] : '';

      if (!numbers[i]) plank.classList.toggle('game__chip-clear');
    })
  }

  createBoard(size = 16) {
    this.size = size;
    new CreateDomElement(gameData, '.game').addToDOM(size);

    const numbersArr = this.getNumbers();
    this.setNumbers(numbersArr);
  }
};
