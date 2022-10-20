import './index.scss';
import * as containerData from './data/container.data';
import CreateDomElement from './DOMelements/createDOMelements';
import Game from './game/game';
import Menu from './menu/menu';

const createContainer = new CreateDomElement(containerData, 'body');
const newGame = new Game();
const menu = new Menu(newGame);


createContainer.addToDOM();
newGame.setNewGame();
menu.setEvents();
