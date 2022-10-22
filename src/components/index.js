import './index.scss';
import * as containerData from './data/container.data';
import CreateDomElement from './DOMelements/createDOMelements';
import Game from './game/game';
import Menu from './menu/menu';
import Greeting from './greeting/greeting';

const greeting = new Greeting();
const createContainer = new CreateDomElement();
const newGame = new Game();
const menu = new Menu(newGame);

createContainer.addToDOM(containerData, 'body');
greeting.setWindow();
// newGame.setNewGame();
// menu.setEvents();
