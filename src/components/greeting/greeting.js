import './greeting.scss';
import CreateDomElement from '../DOMelements/createDOMelements';
import * as greetingData from '../data/greeting.data';

export default class Greeting {
  setWindow() {
    new CreateDomElement().addToDOM(greetingData, '.container');
  }
};

