const itemsData = {
  settings__title: 'Hello, ',
  settings__sound: 'Sound',
  settings__chipTypeTitle: 'Chip Type:',
  settings__sizeTitle: 'Size:',
  settings__size3: '3 x 3',
  settings__size4: '4 x 4',
  settings__size5: '5 x 5',
  settings__size6: '6 x 6',
  settings__size7: '7 x 7',
  settings__size8: '8 x 8',
  settings__btnSave: 'Save',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'settings',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__titleContainer',
    },
    parent: 0,
  },
  {
    tag: 'span',
    attributes: {
      class: 'settings__title',
    },
    parent: 1,
  },
  {
    tag: 'span',
    attributes: {
      class: 'settings__name',
      contenteditable: 'true',
    },
    parent: 1,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__soundContainer',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'settings__sound',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__btnSound',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__chipTypeContainer',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'settings__chipTypeTitle',
    },
    parent: 7,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__types',
    },
    parent: 7,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__chipType btnAnimated',
      'data-type': 'type1',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__chipType btnAnimated',
      'data-type': 'type2',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__chipType btnAnimated',
      'data-type': 'typeImage',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__chipType btnAnimated',
      'data-type': 'typeNone',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__sizeContainer',
    },
    parent: 0,
  },
  {
    tag: 'p',
    attributes: {
      class: 'settings__sizeTitle',
    },
    parent: 14,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__sizes',
    },
    parent: 14,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__size3 settings__size btnAnimated',
      'data-defaultSize': 3,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__size4 settings__size btnAnimated',
      'data-defaultSize': 4,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__size5 settings__size btnAnimated',
      'data-defaultSize': 5,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__size6 settings__size btnAnimated',
      'data-defaultSize': 6,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__size7 settings__size btnAnimated',
      'data-defaultSize': 7,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__size8 settings__size btnAnimated',
      'data-defaultSize': 8,
    },
    parent: 16,
  },
  {
    tag: 'button',
    attributes: {
      class: 'settings__btnSave btnAnimated',
    },
    parent: 0,
  },
  {
    tag: 'input',
    attributes: {
      class: 'settings__soundCheckBox',
      type: 'checkbox',
    },
    parent: 6,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__soundKnobs',
    },
    parent: 6,
  },
  {
    tag: 'div',
    attributes: {
      class: 'settings__soundLayer',
    },
    parent: 6,
  },
]

export {itemsData, items};