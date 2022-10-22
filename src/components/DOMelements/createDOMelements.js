export default class CreateDomElement {
  tagTypes = {
    p: 'innerHTML',
    span: 'textContent',
    img: 'src',
    button: 'textContent',
  }

  createItem(item) {
    let tag = document.createElement(item.tag);

    for (let key in item.attributes) {
      tag.setAttribute(key, item.attributes[key]);
    }

    if(Object.keys(this.itemsData).includes(tag.className)) {
      tag[this.tagTypes[item.tag]] = this.itemsData[tag.className];
    }

    return tag;
  }

  createElements(repeat) {
    let HTMLelements = [];
    let repeatableItems = [];

    this.items.forEach((element, i) => {
      const item = this.createItem(element);

      if (element.repeat) repeatableItems.push(i);

      if (element.parent !== undefined) HTMLelements[element.parent].append(item);
    
      HTMLelements.push(item);
      
    })

    repeatableItems.forEach((itemIndex) => {
      for (let i = 0; i < repeat**2 - 1; i++) {
        const item = HTMLelements[itemIndex].cloneNode(true);
        HTMLelements[itemIndex].parentNode.append(item);
      }
    })

    return HTMLelements[0];
  }

  addToDOM(data, parent, repeat) {
    this.items = data.items;
    this.itemsData = data.itemsData;
    this.parent = document.querySelector(parent);

    const element = this.createElements(repeat);
    this.parent.append(element);
    return element;
  }
};
