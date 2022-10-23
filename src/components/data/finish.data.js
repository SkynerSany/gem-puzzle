const itemsData = {
  finish__newGame: 'New game',
  finish__close: 'Close',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'finish',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'finish__congratulation',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'finish__btnsContainer',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'finish__newGame btnAnimated',
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'finish__close btnAnimated',
    },
    parent: 2,
  },
]

export {itemsData, items};
