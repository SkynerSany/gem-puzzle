import * as gameData from '../../data/game.data';
import CreateDomElement from '../../DOMelements/createDOMelements';
import './board.scss';

export default class Board {
  constructor(game) {
    this.game = game;
  }

  isSolvable(arr) {
    const clearChipPos = Math.floor(arr.indexOf(0) / this.game.size);
    let result = 0;
    arr.forEach((item, i) => {
      let count = 0;
      for (let j = i; j < arr.length - 1; j++) {
        if (item > arr[j] && item !== 0 && arr[j] !== 0) {
          count++;
        }
      }
      result += count + clearChipPos;
    })
    console.log(result)
    return result % 2 === 0 ? true : false;
  }

  getNumbers() {
    let numbers = [];
    for (let i = 0; i < this.game.size**2; i += 1) {
      numbers[i] = i;
    }

    numbers.sort(() => 0.5 - Math.random());
    
    return this.isSolvable(numbers) ? numbers : this.getNumbers();
  }

  setNumbers(numbers) {
    const planks = document.querySelectorAll('.game__chip')

    planks.forEach((plank, i) => {
      plank.setAttribute('data-id', numbers[i]);
      plank.textContent = numbers[i] ? numbers[i] : '';

      if (!numbers[i]) plank.classList.toggle('game__chip-clear');
    })
  }

  createBoard() {
    new CreateDomElement(gameData, '.container').addToDOM(this.game.size);
    document.querySelector('.game').style.gridTemplateColumns = `repeat(${this.game.size}, 1fr)`;

    const numbersArr = this.getNumbers();
    this.setNumbers(numbersArr);
  }
};
