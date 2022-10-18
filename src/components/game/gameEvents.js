export default class GameEvents {
  constructor(params) {
    
  }

  clickOnChip(e) {
    const chip = e.target;
    
    if (!chip.classList.contains('game__chip') || chip.dataset.id === '0') return;
    
    const clearChip = document.querySelector('.game__chip-clear');
    const allChips = Array.from(document.querySelectorAll('.game__chip'));
    const indexOfChip = allChips.indexOf(chip);
    const indexOfClearChip = allChips.indexOf(clearChip);
    const neighbors = [indexOfChip + 1, indexOfChip - 1, indexOfChip + 4, indexOfChip - 4]

    if (!neighbors.includes(indexOfClearChip)) return;

    this.changeChip(clearChip, chip);
  }

  changeChip(clearChip, chip) {
    clearChip.classList.toggle('game__chip-clear');
    clearChip.dataset.id = chip.dataset.id;
    clearChip.textContent = chip.textContent;

    chip.classList.toggle('game__chip-clear');
    chip.dataset.id = '0';
    chip.textContent = '';
  }

  setEvents() {
    const gameContainer = document.querySelector('.game__container');

    gameContainer.addEventListener("click", (e) => this.clickOnChip(e));
  }
};
