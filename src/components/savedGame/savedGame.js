import CreateDomElement from "../DOMelements/createDOMelements";
import * as savedGameData from '../data/saved/savedGame.data';
import * as saveData from '../data/saved/save.data';
import './savedGame.scss';

export default class SavedGame {
  clickClose() {
    document.querySelector('.saved').remove();
  }

  setEvents() {
    document.querySelector('.saved__btnClose').addEventListener('click', () => this.clickClose());
  }

  loadSaves() {
    if (!localStorage.gameSaves) return;

    this.saves = JSON.parse(localStorage.gameSaves);
    this.setSaves();
  }

  setSaves() {
    this.saves.forEach(item => {
      const save = this.createDOM.addToDOM(saveData, '.saved__table').childNodes;
      save[0].textContent = item.size;
      save[1].textContent = item.step;
      save[2].textContent = `${item.time.minutes}`.padStart(2, '0') + ' : ' + `${item.time.seconds}`.padStart(2, '0');
      save[3].addEventListener('click', () => {
        this.menu.startNewGame(item.size, item.step, item.time, item.chipsArr);
        this.clickClose();
      })
    });
  }

  setWindow(menu) {
    this.createDOM = new CreateDomElement();
    this.menu = menu;
    this.createDOM.addToDOM(savedGameData, '.container');
    this.setEvents();
    this.loadSaves();
  }
};
