const itemsData = {
  greeting__title: 'Hello, ',
  greeting__name: '[Your Name]',
  greeting__sound: 'Sound',
  greeting__chipTypeTitle: 'Chip Type:',
  greeting__sizeTitle: 'Size:',
  greeting__size3: '3 x 3',
  greeting__size4: '4 x 4',
  greeting__size5: '5 x 5',
  greeting__size6: '6 x 6',
  greeting__size7: '7 x 7',
  greeting__size8: '8 x 8',
  greeting__btnSave: 'Save',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'greeting',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__titleContainer',
    },
    parent: 0,
  },
  {
    tag: 'span',
    attributes: {
      class: 'greeting__title',
    },
    parent: 1,
  },
  {
    tag: 'span',
    attributes: {
      class: 'greeting__name',
      contenteditable: 'true',
    },
    parent: 1,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__soundContainer',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'greeting__sound',
    },
    parent: 4,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__btnSound',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__chipTypeContainer',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'greeting__chipTypeTitle',
    },
    parent: 7,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__types',
    },
    parent: 7,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__chipType',
      'data-type': 'type1',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__chipType',
      'data-type': 'type2',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__chipType',
      'data-type': 'typeImage',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__chipType',
      'data-type': 'typeNone',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__sizeContainer',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'greeting__sizeTitle',
    },
    parent: 14,
  },
  {
    tag: 'div',
    attributes: {
      class: 'greeting__sizes',
    },
    parent: 14,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__size3',
      'data-defaultSize': 3,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__size4',
      'data-defaultSize': 4,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__size5',
      'data-defaultSize': 5,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__size6',
      'data-defaultSize': 6,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__size7',
      'data-defaultSize': 7,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__size8',
      'data-defaultSize': 8,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'greeting__btnSave',
    },
    parent: 0,
  },
]

export {itemsData, items};