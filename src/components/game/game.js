import AutoSolve from "./autoSolve";
import Board from "./board/board";
import Finish from "../finish/finish";
import GameEvents from "./gameEvents";
import Header from "./header/header";

export default class Game {
  setNewGame(size, step, time, chipsArr) {
    this.setDefault(size, step, time);
    
    this.board = new Board(this);
    this.header = new Header(this);
    this.autoSolve = new AutoSolve(this);
    this.gameEvents = new GameEvents(this);
    this.finish = new Finish(this);
    
    this.header.setEvents();
    this.board.createBoard(chipsArr);
    this.gameEvents.setEvents();
  }

  setDefault(size = 3, step = 0, time = { minutes: 0, seconds: 0 }) {
    this.step = step;
    this.time = time;
    this.size = size;
    this.type = 'number';
    this.sound = '';
  }
}