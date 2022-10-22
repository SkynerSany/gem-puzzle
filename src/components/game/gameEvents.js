export default class GameEvents {
  constructor(game) {
    this.game = game;
  }

  isEnd() {
    let resultArr = [];
    let result = true;

    Array.from(document.querySelectorAll('.game__chip')).forEach(chip => {
      if (!chip.classList.contains('game__chip-animated')) resultArr.push(+chip.dataset.id);
    })

    for (let i = 0; i < resultArr.length - 1; i++) {
      if (resultArr[i] !== i + 1) return false;
    }

    return result;
  }

  checkPosition(chip) {
    const clearChip = document.querySelector('.game__chip-clear');
    const allChips = Array.from(document.querySelectorAll('.game__chip'));

    const chipPos = allChips.indexOf(chip);
    const clearChipPos = allChips.indexOf(clearChip)

    return chip ? [chipPos, clearChipPos] : clearChipPos;
  }

  isNeighbors(chip, type) {
    if (!chip.classList.contains('game__chip') || chip.dataset.id === '0') return false;
    
    const [indexOfChip, indexOfClearChip] = this.checkPosition(chip);
    const neighbors = {
      left: indexOfChip % this.game.size ? indexOfChip - 1 : '',
      right: (indexOfChip + 1) % this.game.size ? indexOfChip + 1 : '',
      top: indexOfChip - this.game.size,
      bottom: indexOfChip + this.game.size,
    }

    if (!Object.values(neighbors).includes(indexOfClearChip)) return false;

    return type ? Object.values(neighbors) : true;
  }

  setAnimateChipChange(chip) {
    const newChip = chip.cloneNode(true);

    newChip.classList.toggle('game__chip-animated');
    newChip.style.top = `${chip.offsetTop}px`;
    newChip.style.left = `${chip.offsetLeft}px`;

    document.querySelector('.container').append(newChip);

    return newChip;
  }

  removeAnimateChipChange(newChip, chip) {
    const chipStyles = getComputedStyle(chip);
    newChip.style.width = chipStyles.width;
    newChip.style.height = chipStyles.height;
    newChip.style.top = `${chip.offsetTop}px`;
    newChip.style.left = `${chip.offsetLeft}px`;

    setTimeout(() => {
      chip.style.opacity = 1;
      newChip.remove();
    }, 500);
  }

  clickOnChip(e) {
    const chip = e.target;
    
    if (!this.isNeighbors(chip)) return;

    this.changeChip(chip);
  }

  changeChip(chip) {
    const newChip = this.setAnimateChipChange(chip);
    const clearChip = document.querySelector('.game__chip-clear');

    clearChip.classList.toggle('game__chip-clear');
    clearChip.dataset.id = chip.dataset.id;
    clearChip.textContent = chip.textContent;

    chip.classList.toggle('game__chip-clear');
    chip.dataset.id = '0';
    chip.textContent = '';

    clearChip.style.opacity = 0;
    
    this.removeAnimateChipChange(newChip, clearChip);

    this.game.header.addStep();

    if (this.isEnd()) {
      this.game.header.stopTimer();
      this.game.finish.setWindow();
    }
  }

  setEvents() {
    this.gameContainer = document.querySelector('.game');

    this.gameContainer.addEventListener("click", (e) => this.clickOnChip(e));
  }
};
