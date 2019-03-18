export default class Menu {
  constructor() {
    this.aside = document.querySelector('aside');
    this.menuButton = document.querySelector('.menu-logo');
  }


  change(target) {
    if (this.aside.classList.contains('open')) {
      this.hide();
    } else {
      let tar = target;
      while (tar !== this.aside) {
        if (tar === this.menuButton) {
          this.show();
        }

        tar = tar.parentNode;
      }
    }
  }

  show() {
    this.aside.style.left = '0';
    this.aside.classList.add('open');
  }

  hide() {
    const widthMenu = (document.documentElement.clientWidth >= 850)
      ? 78
      : 50;
    this.aside.style.left = `calc(${widthMenu}px - 100vw)`;
    this.aside.classList.remove('open');
  }
}
