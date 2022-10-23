const itemsData = {
  saved__title: 'Saved Games',
  saved__tableSize: 'Size',
  saved__tableStep: 'Step',
  saved__tableTime: 'Time',
  saved__tableLoad: 'Load',
  saved__btnClose: 'Close',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'saved',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__title',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'saved__tableHeader',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'saved__table',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__tableSize',
    },
    parent: 2,
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__tableStep',
    },
    parent: 2,
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__tableTime',
    },
    parent: 2,
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__tableLoad',
    },
    parent: 2,
  },
  {
    tag: 'button',
    attributes: {
      class: 'saved__btnClose btnAnimated',
    },
    parent: 0,
  },
]

export {itemsData, items};