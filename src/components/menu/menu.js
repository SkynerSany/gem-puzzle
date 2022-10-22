import './menu.scss';
import CreateDomElement from '../DOMelements/createDOMelements';
import * as menuData from '../data/menu.data';
import Game from '../game/game';
import SavedGame from '../savedGame/savedGame';
import BestScore from '../score/score';

export default class Menu {
  constructor(game) {
    this.game = game;
  }
  
  targetEvents = {
    menu__btnResume: () => {
      this.closeMenu();
      this.game.header.setTimer();
    },
    menu__btnStart: () => this.startNewGame(),
    menu__btnSave: () => this.saveGame(),
    menu__btnSavedGames: () => this.savedGame.setWindow(this),
    menu__btnScore: () => this.bestScore.setWindow(this),
  }

  btnResume = {
    hide: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume menu__btnResume-hidden',
    show: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume'
  }


  closeMenu() {
    document.querySelector('.menu').style.display = 'none';
  }

  openMenu() {
    document.querySelector('.menu').style.display = 'flex';
  }

  startNewGame(size, step, time, chipsArr) {
    this.clearBoard();
    this.game = new Game();
    this.game.setNewGame(size, step, time, chipsArr);
    this.game.header.setTimer();
    this.closeMenu();
  }

  clearBoard() {
    document.querySelector('.game').remove();
    document.querySelector('.header').remove();
  }

  saveGame() {
    let chipsArr = Array.from( document.querySelectorAll('.game__chip'));
    chipsArr = chipsArr.map(chip => chip = +chip.dataset.id);

    if (!localStorage.gameSaves) localStorage.gameSaves = '[]';

    const save = JSON.parse(localStorage.gameSaves)
    save.push({
      size: this.game.size,
      step: this.game.step,
      time: this.game.time,
      chipsArr,
    });
  
    localStorage.gameSaves = JSON.stringify(save);
  };
  
  setEvents() {
    this.createMenu();
    this.btnResume.hide();

    document.querySelector('.menu').addEventListener("click", (e) => {
      if (this.targetEvents[e.target.className]) this.targetEvents[e.target.className]();
    })
  }

  createMenu() {
    const menu = new CreateDomElement();
    menu.addToDOM(menuData, '.container');

    this.savedGame = new SavedGame();
    this.bestScore = new BestScore();
  }
};
