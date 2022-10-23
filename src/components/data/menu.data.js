const itemsData = {
  menu__btnResume: 'Resume game',
  menu__btnStart: 'New game',
  menu__btnSavedGames: 'Saved games',
  menu__btnScore: 'Best scores',
  menu__btnRules: 'Rules',
  menu__btnSettings: 'Settings',
};

const items = [
  {
    tag: 'aside',
    attributes: {
      class: 'menu',
    },
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnSave btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnResume btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnStart btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnSavedGames btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnScore btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnRules btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnSettings btnAnimated',
    },
    parent: 0,
  },
]

export {itemsData, items};