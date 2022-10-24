import './header.scss';
import CreateDomElement from '../../DOMelements/createDOMelements';
import * as headerData from '../../data/header.data';
import Menu from '../../menu/menu';

export default class Header {
  constructor(game) {
    this.game = game;
  }

  pauseGame() {
    this.menu.openMenu();
    this.menu.btnResume.show();
    this.stopTimer();
  }

  
  setStep() {
    document.querySelector('.header__stepsCount').textContent = this.game.step;
  }

  addStep() {
    document.querySelector('.header__stepsCount').textContent = ++this.game.step;
  }

  setMinutes() {
    if (this.game.time.seconds === 60) {
      this.game.time.minutes++;
      this.game.time.seconds = 0;
    }
  }

  setTimer() {
    this.timer = setInterval(() => {
      this.setMinutes(++this.game.time.seconds);
      this.setTime();
    }, 1000);
  }

  setTime() {
    const minutes = `${this.game.time.minutes}`.padStart(2, '0');
    const seconds = `${this.game.time.seconds}`.padStart(2, '0');

    document.querySelector('.header__timer').textContent = `${minutes} : ${seconds}`;
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  setDisabled(node) {
    document.querySelector(node).disabled = true;
  }

  startAutoSolve() {
    this.game.autoSolve.startSolve();
    this.setDisabled('.header__pause');
    this.setDisabled('.header__autoSolve');
  }

  setAuto() {
    if (this.game.size > 3) document.querySelector('.header__autoSolve').disabled = true;
  }

  setEvents() {
    this.createHeader();
    document.querySelector('.header__pause').addEventListener("click", () => this.pauseGame());
    document.querySelector('.header__autoSolve').addEventListener("click", () => this.startAutoSolve());
  }

  createHeader() {
    const createHeader = new CreateDomElement();
    this.menu = new Menu();

    createHeader.addToDOM(headerData, '.container');
    this.setAuto();
    this.setStep();
    this.setTime();
  }
};
