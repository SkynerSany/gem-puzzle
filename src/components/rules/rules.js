import './rules.scss';
import CreateDomElement from '../DOMelements/createDOMelements';
import * as rulesData from '../data/rules.data';

export default class Rules {
  closeRules() {
    document.querySelector('.rules').style.display = 'none';
  }

  openRules() {
    document.querySelector('.rules').style.display = 'flex';
  }

  setEvents(){
    document.querySelector('.rules__close').addEventListener('click', () => this.closeRules());
  }

  setWindow() {
    new CreateDomElement().addToDOM(rulesData, '.container');
    this.setEvents();
  }
};
