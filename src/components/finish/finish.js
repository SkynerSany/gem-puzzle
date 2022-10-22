import './finish.scss';
import * as finishData from '../data/finish.data';
import CreateDomElement from '../DOMelements/createDOMelements';

import Menu from '../menu/menu';

export default class Finish {
  constructor(game) {
    this.game = game;
  }

  setCongratulation() {
    const minutes = `${this.game.time.minutes}`.padStart(2, '0');
    const seconds = `${this.game.time.seconds}`.padStart(2, '0');

    document.querySelector('.finish__congratulation')
      .textContent = `Hooray! You solved the puzzle in ${minutes} : ${seconds} and ${this.game.step} moves!`;
  }
  
  saveScore() {
    if (!localStorage.gameScores) localStorage.gameScores = '{}';

    const score = JSON.parse(localStorage.gameScores)

    if (!score[this.game.size]) score[this.game.size] = [];
    
    score[this.game.size].push({
      step: this.game.step,
      time: this.game.time,
    });

    score[this.game.size].sort((prev, next) => {
      if (prev.step > next.step) return 1;
      if (prev.step === next.step) {
        if (prev.time.seconds > next.time.seconds) return 1;
        if (prev.time.seconds === next.time.seconds) return 0;
        if (prev.time.seconds < next.time.seconds) return -1;
      }
      if (prev.step < next.step) return -1;
    }).splice(10);

    localStorage.gameScores = JSON.stringify(score);
  };

  clickClose() {
    this.closeFinish();
    this.menu.openMenu();
  }

  clickNewGame() {
    this.closeFinish();
    this.menu.startNewGame();
  }

  closeFinish() {
    document.querySelector('.finish').remove();
  }

  setEvents() {
    document.querySelector('.finish__newGame').addEventListener('click', () => this.clickNewGame());
    document.querySelector('.finish__close').addEventListener('click', () => this.clickClose());
  }

  setWindow() {
    new CreateDomElement().addToDOM(finishData, '.container');
    this.setCongratulation()
    this.menu = new Menu();
    this.setEvents();
    this.saveScore();
  }

};
