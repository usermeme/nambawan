import Menu from './menu/Menu';

export default class App {
  constructor() {
    this.menu = new Menu();
    this.scroller = document.documentElement.scrollTop;
  }

  start() {
    document.addEventListener('scroll', () => {
      const newScroll = document.documentElement.scrollTop;
      const isScrollRange = (this.scroller >= 0 && this.scroller < document.querySelector('#card').offsetTop);

      if (isScrollRange) {
        if (newScroll > this.scroller) {
          App.jumpTo('#card');
        } else {
          App.jumpTo('#about');
        }
      }

      this.scroller = document.documentElement.scrollTop;
    });

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

  static jumpTo(anchor) {
    const scrollElement = document.querySelector(anchor);
    scrollElement.scrollIntoView({ behavior: 'smooth' });
  }
}
