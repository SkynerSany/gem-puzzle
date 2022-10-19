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
      class: 'menu__btnSave',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnResume',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnStart',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnSavedGames',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnScore',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnRules',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'menu__btnSettings',
    },
    parent: 0,
  },
]

export {itemsData, items};