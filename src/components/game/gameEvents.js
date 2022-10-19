import Header from "./header/header";

export default class GameEvents {
  constructor(game) {
    this.game = game;
  }

  isEnd() {
    let resultArr = [];
    let result = true;
    this.allChips.forEach(chip => {
      resultArr.push(+chip.dataset.id);
    })

    for (let i = 1; i < resultArr.length - 1; i++) {
      if (resultArr[i - 1] !== i) return false;
    }

    return result;
  }

  checkPosition(chip) {
    this.clearChip = document.querySelector('.game__chip-clear');
    this.allChips = Array.from(document.querySelectorAll('.game__chip'));

    const chipPos = this.allChips.indexOf(chip);
    const clearChipPos = this.allChips.indexOf(this.clearChip)

    return chip ? [chipPos, clearChipPos] : clearChipPos;
  }

  isNeighbors(chip) {
    if (!chip.classList.contains('game__chip') || chip.dataset.id === '0') return false;
    
    const [indexOfChip, indexOfClearChip] = this.checkPosition(chip);
    const neighbors = {
      left: indexOfChip % this.game.size ? indexOfChip - 1 : '',
      right: (indexOfChip + 1) % this.game.size ? indexOfChip + 1 : '',
      top: indexOfChip - this.game.size,
      bottom: indexOfChip + this.game.size,
    }

    if (!Object.values(neighbors).includes(indexOfClearChip)) return false;

    return true;
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
    this.game.header.setStep();

    if (this.isEnd()) console.log('end');
  }

  changeChip(chip) {
    const newChip = this.setAnimateChipChange(chip);

    this.clearChip.classList.toggle('game__chip-clear');
    this.clearChip.dataset.id = chip.dataset.id;
    this.clearChip.textContent = chip.textContent;

    chip.classList.toggle('game__chip-clear');
    chip.dataset.id = '0';
    chip.textContent = '';

    this.clearChip.style.opacity = 0;

    this.removeAnimateChipChange(newChip, this.clearChip);
  }

  setEvents() {
    this.gameContainer = document.querySelector('.game');

    this.gameContainer.addEventListener("click", (e) => this.clickOnChip(e));
  }
};
