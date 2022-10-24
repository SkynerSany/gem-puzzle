import AutoSolve from "./autoSolve";
import Board from "./board/board";
import Finish from "../finish/finish";
import GameEvents from "./gameEvents";
import Header from "./header/header";

export default class Game {
  setNewGame(size, step, time, chipsArr, type, sound, bgImage) {
    this.storage = JSON.parse(localStorage.settings);

    this.setDefault(size, step, time, type, sound);
    
    this.board = new Board(this);
    this.header = new Header(this);
    this.autoSolve = new AutoSolve(this);
    this.gameEvents = new GameEvents(this);
    this.finish = new Finish(this);
    
    this.header.setEvents();
    this.board.createBoard(chipsArr, bgImage);
    this.gameEvents.setEvents();
  }

  setDefault(size = +this.storage.size, 
    step = 0, 
    time = { minutes: 0, seconds: 0 }, 
    type = this.storage.chipType, 
    sound = this.storage.sound, 
  ) {
    this.step = step;
    this.time = time;
    this.size = size;
    this.type = type;
    this.sound = sound;
    this.name = this.storage.name;
  }
}