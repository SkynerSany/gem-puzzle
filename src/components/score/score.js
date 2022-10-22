import './score.scss';
import CreateDomElement from "../DOMelements/createDOMelements";
import * as bestScoresData from '../data/scores/bestScores.data';
import * as scoreData from '../data/scores/score.data';

export default class BestScore {
  clickClose() {
    document.querySelector('.scores').remove();
  }

  changeScoreSize(e) {
    if (e.target.tagName !== 'BUTTON') return;

    this.scoreSize = e.target.dataset.size;
    this.removeScore();
    this.setScores();
  }

  setEvents() {
    document.querySelector('.scores__btnClose').addEventListener('click', () => this.clickClose());
    document.querySelector('.scores__btnContainer').addEventListener('click', (e) => this.changeScoreSize(e));
  }

  loadScores() {
    if (!localStorage.gameScores) return;

    this.scores = JSON.parse(localStorage.gameScores);
    this.setScores();
  }

  removeScore() {
    document.querySelectorAll('.scores__score').forEach(item => item.remove());
  }

  setScores() {
    this.scores[this.scoreSize]?.forEach((item, i) => {
      const score = this.createDOM.addToDOM(scoreData, '.scores__table').childNodes;
      score[0].textContent = i + 1;
      score[1].textContent = item.size;
      score[2].textContent = item.step;
      score[3].textContent = `${item.time.minutes}`.padStart(2, '0') + ' : ' + `${item.time.seconds}`.padStart(2, '0');
    });
  }

  setWindow(menu) {
    this.scoreSize = 3;
    this.createDOM = new CreateDomElement();
    this.menu = menu;
    this.createDOM.addToDOM(bestScoresData, '.container');
    this.setEvents();
    this.loadScores();
  }
};
