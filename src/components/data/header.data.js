const itemsData = {
  header__autoSolve: 'Auto solve',
  header__time: 'Time <span class="header__timeMinutes"></span> : <span class="header__timeSeconds"></span>',
  header__steps: 'Steps <span class="header__stepsCount"></span>',
  header__pause: 'Pause game'
};

const items = [
  {
    tag: 'header',
    attributes: {
      class: 'header',
    },
  },
  {
    tag: 'button',
    attributes: {
      class: 'header__autoSolve',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'header__time',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'header__steps',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'header__pause',
    },
    parent: 0,
  },
]

export {itemsData, items};
