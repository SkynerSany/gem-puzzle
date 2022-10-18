import './index.scss';
import * as containerData from './data/container.data';
import CreateDomElement from './DOMelements/createDOMelements';
import Header from './game/header/header';
import Game from './game/game';
import GameEvents from './game/gameEvents';

const createContainer = new CreateDomElement(containerData, 'body');
const header = new Header();
const newGame = new Game();
const gameEvents = new GameEvents();


createContainer.addToDOM();
header.createHeader();
newGame.createBoard();
gameEvents.setEvents();
