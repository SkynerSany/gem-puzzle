import './menu.scss';
import CreateDomElement from '../DOMelements/createDOMelements';
import * as menuData from '../data/menu.data';
import Game from '../game/game';

export default class Menu {
  constructor(game) {
    this.game = game;
  }

  btnResume = {
    hide: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume menu__btnResume-hidden',
    show: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume'
  }

  targetEvents = {
    menu__btnResume: () => {
      this.closeMenu();
      this.game.header.setTimer();
    },
    menu__btnStart: () => this.startNewGame(),
  }

  closeMenu() {
    document.querySelector('.menu').style.display = 'none';
  }

  openMenu() {
    document.querySelector('.menu').style.display = 'flex';
  }

  startNewGame() {
    this.clearBoard();
    this.game = new Game();
    this.game.setNewGame();
    this.game.header.setTimer();
    this.closeMenu();
  }

  clearBoard() {
    document.querySelector('.game').remove();
    document.querySelector('.header').remove();
  }
  
  setEvents() {
    this.createMenu();
    this.btnResume.hide();

    document.querySelector('.menu').addEventListener("click", (e) => {
      if (this.targetEvents[e.target.className]) this.targetEvents[e.target.className]();
    })
  }

  createMenu() {
    const menu = new CreateDomElement(menuData, '.container');
    menu.addToDOM();
  }
};
