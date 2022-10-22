import * as gameData from '../../data/game.data';
import CreateDomElement from '../../DOMelements/createDOMelements';
import './board.scss';

export default class Board {
  constructor(game) {
    this.game = game;
  }

  isSolvable(arr) {
    const filterArr = arr.filter(item => item !== 0);
    const clearChipPos = this.game.size + 1 - Math.ceil((arr.indexOf(0) + 1) / this.game.size);
    let count = 0;
    for (let i = 0; i < filterArr.length - 1; i++) {
      for (let j = i + 1; j < filterArr.length; j++) {
        if (filterArr[i] > filterArr[j]) count++;
      }
    }
    console.log(arr, count, clearChipPos);
    if (this.game.size % 2 === 0) {
      return (clearChipPos % 2 === 0 && count % 2 !== 0) || (clearChipPos % 2 !== 0 && count % 2 === 0);
    }
    
    return count % 2 === 0;
  }

  getNumbers() {
    let numbers = [];
    for (let i = 0; i < this.game.size**2; i += 1) {
      numbers[i] = i;
    }

    numbers.sort(() => 0.5 - Math.random());

    if (this.isGoal(numbers)) this.getNumbers();

    return this.isSolvable(numbers) ? numbers : this.getNumbers();
  }

  isGoal(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === i + 1) count++;
    }

    return count === arr.length - 1;
  }

  setNumbers(numbers) {
    const planks = document.querySelectorAll('.game__chip')

    planks.forEach((plank, i) => {
      plank.setAttribute('data-id', numbers[i]);
      plank.textContent = numbers[i] ? numbers[i] : '';

      if (!numbers[i]) plank.classList.toggle('game__chip-clear');
    })
  }

  createBoard(chipArr) {
    new CreateDomElement().addToDOM(gameData, '.container', this.game.size);
    document.querySelector('.game').style.gridTemplateColumns = `repeat(${this.game.size}, 1fr)`;

    const numbersArr = this.getNumbers();
    this.setNumbers(chipArr || numbersArr);
  }
};
