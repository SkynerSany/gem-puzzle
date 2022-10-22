const itemsData = {};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'scores__score',
    },
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__scoreNumber',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__scoreName',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__scoreStep',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'scores__scoreTime',
    },
    parent: 0,
  },
]

export {itemsData, items};