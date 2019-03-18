import Menu from './menu/Menu';
import Slider from './slider/Slider';

export default class App {
  constructor() {
    this.menu = new Menu();
    this.firstSlider = new Slider(document.querySelector('.achievement-slider-item:first-child'));
    this.secondSlider = new Slider(document.querySelector('.achievement-slider-item:last-child'));
  }

  start() {
    this.firstSlider.changeSlide();
    this.secondSlider.changeSlide();

    document.addEventListener('click', (e) => {
      let tar = e.target;

      while (tar !== document) {
        if (tar === this.menu.aside) {
          this.menu.change(e.target);
        }

        if (tar === this.firstSlider.prevButton) {
          this.firstSlider.prev();
        }

        if (tar === this.secondSlider.prevButton) {
          this.secondSlider.prev();
        }

        if (tar === this.firstSlider.nextButton) {
          this.firstSlider.next();
        }

        if (tar === this.secondSlider.nextButton) {
          this.secondSlider.next();
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
