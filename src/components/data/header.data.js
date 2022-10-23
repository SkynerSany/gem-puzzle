const itemsData = {
  header__autoSolve: 'Auto solve',
  header__time: 'Time <span class="header__timer"></span>',
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
      class: 'header__autoSolve btnAnimated',
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
      class: 'header__pause btnAnimated',
    },
    parent: 0,
  },
]

export {itemsData, items};
