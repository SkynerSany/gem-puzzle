import './index.scss';
import * as containerData from './data/container.data';
import CreateDomElement from './DOMelements/createDOMelements';
import Game from './game/game';
import Menu from './menu/menu';
import Settings from './settings/settings';

const settings = new Settings();
const createContainer = new CreateDomElement();
const newGame = new Game();
const menu = new Menu(newGame);

window.onload = () => {
  createContainer.addToDOM(containerData, 'body');

  settings.setWindow();
  
  newGame.setNewGame();
  menu.setEvents(settings);
}

