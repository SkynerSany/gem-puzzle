import './settings.scss';
import CreateDomElement from '../DOMelements/createDOMelements';
import * as settingsData from '../data/settings.data';

export default class Settings {
  changeActiveBtn(btn) {
    if (!btn.classList.contains('btnAnimated')) return;

    if (btn.classList.contains('settings__size')) {
      document.querySelector(`.settings__size.btnAnimated-active`).classList.toggle('btnAnimated-active');
    } else {
      document.querySelector(`.${btn.classList[0]}.btnAnimated-active`).classList.toggle('btnAnimated-active');
    }

    btn.classList.toggle('btnAnimated-active');
  }

  closeSettings() {
    document.querySelector('.settings').style.display = 'none';
  }

  openSettings() {
    document.querySelector('.settings').style.display = 'flex';
  }

  saveSettings() {
    this.storage.name = document.querySelector('.settings__name').textContent;
    this.storage.sound = document.querySelector('.settings__soundCheckBox').checked;
    this.storage.chipType = document.querySelector('.settings__chipType.btnAnimated-active').dataset.type;
    this.storage.size = document.querySelector('.settings__size.btnAnimated-active').dataset.defaultsize;
    localStorage.settings = JSON.stringify(this.storage);

    this.closeSettings();
  }

  changeName(name) {
    name.textContent = '';
  }

  setName(name) {
    if (name.textContent === '') name.textContent = this.storage.name;
  }

  setSettings() {
    document.querySelector('.settings__name').textContent = this.storage.name;
    document.querySelector('.settings__soundCheckBox').checked = this.storage.sound;
    document.querySelector(`[data-type=${this.storage.chipType}]`).classList.toggle('btnAnimated-active');
    document.querySelector(`[data-defaultSize="${this.storage.size}"]`).classList.toggle('btnAnimated-active');
  }

  setEvents() {
    document.querySelector('.settings__types').addEventListener('click', (e) => this.changeActiveBtn(e.target));
    document.querySelector('.settings__sizes').addEventListener('click', (e) => this.changeActiveBtn(e.target));
    document.querySelector('.settings__name').addEventListener('click', (e) => this.changeName(e.target));
    document.querySelector('.settings__name').addEventListener('blur', (e) => this.setName(e.target));
    document.querySelector('.settings__btnSave').addEventListener('click', () => this.saveSettings());
  }

  setWindow() {
    new CreateDomElement().addToDOM(settingsData, '.container');
    this.setEvents();
    this.storage = JSON.parse(localStorage.settings);
    this.setSettings();
  }
};

