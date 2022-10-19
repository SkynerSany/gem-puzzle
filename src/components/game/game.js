import Board from "./board/board";
import GameEvents from "./gameEvents";
import Header from "./header/header";

export default class Game {
  constructor() {

  }

  step = 0;
  time = {
    minutes: 0,
    seconds: 0,
  };
  size = 2;
  type = 'number';
  sound = '';

  setNewGame() {
    this.setDefault();
    
    this.gameEvents = new GameEvents(this);
    this.board = new Board(this);
    this.header = new Header(this);

    this.header.setEvents();
    this.board.createBoard();
    this.gameEvents.setEvents();
  }

  setDefault() {
    this.step = 0;
    this.time = {
      minutes: 0,
      seconds: 0,
    };
    this.size = 2;
    this.type = 'number';
    this.sound = '';
  }
}