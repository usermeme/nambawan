export default class Slider {
  constructor(element) {
    this.number = element.querySelector('.achievement__slider-counter');
    this.prevButton = element.querySelector('.prev');
    this.nextButton = element.querySelector('.next');
    this.slidesImg = element.querySelectorAll('img');
    this.index = 0;
  }

  next() {
    if (this.index === this.slidesImg.length - 1) {
      return false;
    }

    this.index += 1;
    this.changeSlide();

    return true;
  }

  prev() {
    if (this.index === 0) {
      return false;
    }

    this.index -= 1;
    this.changeSlide();

    return true;
  }


  changeSlide() {
    for (let i = 0; i < this.slidesImg.length; i += 1) {
      this.slidesImg[i].style.right = `${(this.index) * 100}%`;
    }
    this.number.innerHTML = `<span class="bold">${this.index + 1}</span> / ${this.slidesImg.length}`;
  }
}
