import './menu.scss';
import CreateDomElement from '../DOMelements/createDOMelements';
import * as menuData from '../data/menu.data';
import Game from '../game/game';
import SavedGame from '../savedGame/savedGame';
import BestScore from '../score/score';
import Rules from '../rules/rules';

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
    menu__btnRules: () => this.rules.openRules(),
    menu__btnSettings: ()=> {
      this.settings.openSettings();
      this.btnResume.hide();
    }
  }

  btnResume = {
    hide: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume btnAnimated menu__btnResume-hidden',
    show: () => document.querySelector('.menu__btnResume').className = 'menu__btnResume btnAnimated',
  }

  closeMenu() {
    document.querySelector('.menu').style.display = 'none';
  }

  openMenu() {
    document.querySelector('.menu').style.display = 'flex';
  }

  startNewGame(size, step, time, chipsArr, type, sound) {
    this.clearBoard();
    this.game = new Game();
    this.game.setNewGame(size, step, time, chipsArr, type, sound);
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
      type: this.game.type,
      sound: this.game.sound,
      chipsArr,
    });
  
    localStorage.gameSaves = JSON.stringify(save);
  };
  
  setEvents(settings) {
    this.createMenu();
    this.btnResume.hide();
    this.settings = settings;

    document.querySelector('.menu').addEventListener("click", (e) => {
      if (this.targetEvents[e.target.classList[0]]) this.targetEvents[e.target.classList[0]]();
    })
  }

  createMenu() {
    const menu = new CreateDomElement();
    menu.addToDOM(menuData, '.container');

    this.savedGame = new SavedGame();
    this.bestScore = new BestScore();
    this.rules = new Rules();
    this.rules.setWindow();
  }
};
