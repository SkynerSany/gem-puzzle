const itemsData = {
  saved__saveLoad: 'Load Game',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'saved__save',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__saveSize',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__saveStep',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'saved__saveTime',
    },
    parent: 0,
  },
  {
    tag: 'button',
    attributes: {
      class: 'saved__saveLoad',
    },
    parent: 0,
  },
]

export {itemsData, items};