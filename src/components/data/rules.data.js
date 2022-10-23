const itemsData = {
  rules__title: 'Rules of Gem Puzzle',
  rules__description: 'The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space.',
  rules__description1: 'You can save your game and load it later. Or you can just use pause button. Also you can choose game field size of color in Settings',
  rules__descriptionPs: 'PS. Auto Solve working only at 3x3',
  rules__close: 'Close'
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'rules',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'rules__title',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'rules__descriptionBox',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'rules__description',
    },
    parent: 2,
  },
  {
    tag: 'p',
    attributes: {
      class: 'rules__description1',
    },
    parent: 2,
  },
  {
    tag: 'p',
    attributes: {
      class: 'rules__descriptionPs',
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'rules__close btnAnimated',
    },
    parent: 0,
  },
]

export {itemsData, items};
