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

createContainer.addToDOM(containerData, 'body');

settings.setWindow();

if (!localStorage.settings) {
  localStorage.settings = '{"name": "[Your Name]", "sound": "true", "chipType": "type1", "size": "4"}';
  settings.openSettings();
}

newGame.setNewGame();
menu.setEvents(settings);

