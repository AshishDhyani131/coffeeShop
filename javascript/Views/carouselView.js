class CarouselView {
  constructor() {
    this._carouselImages = document.querySelectorAll(".carousel__slide");
    this._carouselDots = document.querySelectorAll(".carousel__dot");
    this._currentIndex = 0;
    this._showImage = this._showImage.bind(this);
    this._nextImage = this._nextImage.bind(this);
  }

  _showImage(index) {
    // Select all images and dots

    // remove data-active attribute

    this._carouselImages.forEach((image) =>
      image.removeAttribute("data-active")
    );

    //add data-active attribute
    this._carouselImages[index].setAttribute("data-active", "");

    // remvove active class from dots if any
    this._carouselDots.forEach((dot) =>
      dot.classList.remove("carousel__dot-active")
    );

    //add active class
    this._carouselDots[index].classList.add("carousel__dot-active");
  }
  _nextImage() {
    this._currentIndex = (this._currentIndex + 1) % this._carouselImages.length;
    this._showImage(this._currentIndex);
  }
  renderPage() {
    document.addEventListener("DOMContentLoaded", () => {
      setInterval(this._nextImage, 4000);
    });
  }
}
export default new CarouselView();
