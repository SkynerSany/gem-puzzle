const itemsData = {
  scores__title: 'Best Scores',
  scores__tableNumber: '№',
  scores__tableSize: 'Name',
  scores__tableStep: 'Step',
  scores__tableTime: 'Time',
  scores__btnClose: 'Close',
  scores__btnSize3: '3x3',
  scores__btnSize4: '4x4',
  scores__btnSize5: '5x5',
  scores__btnSize6: '6x6',
  scores__btnSize7: '7x7',
  scores__btnSize8: '8x8',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'scores',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__title',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'scores__btnContainer',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnSize3 scores__btnSize btnAnimated',
      "data-size": 3,
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnSize4 scores__btnSize btnAnimated',
      "data-size": 4,
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnSize5 scores__btnSize btnAnimated',
      "data-size": 5,
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnSize6 scores__btnSize btnAnimated',
      "data-size": 6,
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnSize7 scores__btnSize btnAnimated',
      "data-size": 7,
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnSize8 scores__btnSize btnAnimated',
      "data-size": 8,
    },
    parent: 2,
  },
  {
    tag: 'div',
    attributes: {
      class: 'scores__tableHeader',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'scores__table',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__tableNumber',
    },
    parent: 9,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__tableSize',
    },
    parent: 9,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__tableStep',
    },
    parent: 9,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__tableTime',
    },
    parent: 9,
  },
  {
    tag: 'button',
    attributes: {
      class: 'scores__btnClose btnAnimated',
    },
    parent: 0,
  },
]

export {itemsData, items};