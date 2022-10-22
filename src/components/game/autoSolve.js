export default class AutoSolve {
  constructor(game) {
    this.goalX = [];
    this.goalY = [];
    this.resultArr = [];
    this.dx = [0, -1, 1, 0];
    this.dy = [-1, 0, 0, 1];
    this.revers = [0, 2, 1, 3];
    this.game = game;
  }

  createBoardGoal() {
    this.boardGoal = [];
    let count = 1;

    for (let i = 0; i < this.game.size; i++) {
      for (let j = 0; j < this.game.size; j++) {
        if (!this.boardGoal[i]) this.boardGoal[i] = [];
        this.boardGoal[i][j] = count !== this.game.size**2 ? count : 0
        count++;
      }
    }
  }

  createBoard() {
    this.board = [];

    const arrChips = Array.from(document.querySelectorAll('[data-id]'));
    let count = 0;

    for (let i = 0; i < this.game.size; i++) {
      for (let j = 0; j < this.game.size; j++) {
        if (!this.board[i]) this.board[i] = [];

        this.board[i][j] = +arrChips[count].dataset.id;
        count++;
      }
    }
  }

  checkChipPos() {
    for (let i = 0; i < this.game.size**2 - 1; i++) {
      this.goalX[i + 1] = i % this.game.size;
      this.goalY[i + 1] = Math.floor(i / this.game.size);
    }
    this.goalX[0] = this.game.size;
    this.goalY[0] = this.game.size;
  }

  estimate() {
    let value = 0;
    let manhattan = 0;

    for (let i = 0; i < this.game.size; i++) {
      for (let j = 0; j < this.game.size; j++) {
        value = this.board[i][j];
        if (value > 0 && value !== this.boardGoal[i][j]) {
          manhattan += Math.abs(i - this.goalY[value]) + Math.abs(j - this.goalX[value]);
        }
      }
    }

    return manhattan;
  }

  swap(y1, x1, y2, x2) {
    const value = this.board[y1][x1];
    this.board[y1][x1] = this.board[y2][x2];
    this.board[y2][x2] = value;
  }

  search(g, previousMove, x0, y0) {
    const h = this.estimate();
    if (h === 0) {
      return true;
    }

    const f = g + h;
    if (f > this.deepness) {
      if (this.minPrevIteration > f) {
        this.minPrevIteration = f;
      }
      return false;
    }

    let newx = 0;
    let newy = 0;
    for (let i = 0; i < 4; i += 1) {
      if (this.revers[i] !== previousMove) {
        newx = x0 + this.dx[i];
        newy = y0 + this.dy[i];
        if (newy < this.game.size && newy >= 0 && newx < this.game.size && newx >= 0) {
          this.swap(y0, x0, newy, newx);
          const res = this.search(g + 1, i, newx, newy);
          this.swap(y0, x0, newy, newx);
          if (res) {
            this.resultArr.unshift(i);
            return true;
          }
        }
      }
    }
    return false;
  }

  idaStar() {
    let result = false;
    this.deepness = this.estimate();

    while (this.deepness <= 55) {
      this.minPrevIteration = 10000;

      for (let i = 0; i < this.game.size; i++) {
        for (let j = 0; j < this.game.size; j++) {
          if (this.board[i][j] === 0) {
            this.x0 = j;
            this.y0 = i;
          }
        }
      }
      
      result = this.search(0, -1, this.x0, this.y0);
      this.deepness = this.minPrevIteration;
      console.log(123)
      if (result) break;
    }

    return result;
  }

  checkResult() {
    if (this.idaStar()) {
      let i = 0;
      console.log(this.resultArr, 'asd');
      const inteval = setInterval(() => {
        const emptyChip = document.querySelector('[data-id="0"]');
        const neighbor = this.getNeighbor(emptyChip);
        const currentChip = Array.from(document.querySelectorAll('.game__chip'))[neighbor[this.resultArr[i]]];
        this.game.gameEvents.changeChip(currentChip);
        i += 1;
        if (i === this.resultArr.length) {
          clearInterval(inteval);
        }
      }, 700);
    }
  }

  getNeighbor(chip) {
    const indexOfChip = Array.from(document.querySelectorAll('.game__chip')).indexOf(chip);
    return [indexOfChip - this.game.size, indexOfChip - 1,
      indexOfChip + 1, indexOfChip + this.game.size]
  }

  startSolve() {
    this.createBoard();
    this.createBoardGoal();
    this.checkChipPos();
    this.checkResult();
    console.log(this);
  }
}