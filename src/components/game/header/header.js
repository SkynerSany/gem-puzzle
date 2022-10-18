import './header.scss';
import CreateDomElement from '../../DOMelements/createDOMelements';
import * as headerData from '../../data/header.data';


export default class Header {
  createHeader() {
    const createHeader = new CreateDomElement(headerData, '.game');

    createHeader.addToDOM();
  }
};
