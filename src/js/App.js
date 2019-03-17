import Menu from './menu/Menu';

export default class App {
  constructor() {
    this.menu = new Menu();
  }

  start() {
    document.addEventListener('click', (e) => {
      let tar = e.target;

      while (tar !== document) {
        if (tar === this.menu.aside) {
          this.menu.change(e.target);
        }

        tar = tar.parentNode;
      }
    });
  }
}
