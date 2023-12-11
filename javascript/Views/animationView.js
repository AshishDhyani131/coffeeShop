class AnimationView {
  constructor() {
    this._section = document.querySelectorAll(".invisible");
    this._handleScroll = this._handleScroll.bind(this);
    this._isInViewport = this._isInViewport.bind(this);
  }
  // Function to check if an element is in the viewport
  _isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  // Function to handle scroll events
  _handleScroll() {
    this._section.forEach((ele) => {
      //   if (ele.classList.contains("animation")) return;

      if (this._isInViewport(ele)) {
        // Add the 'animate' class when the section is in the viewport
        console.log(ele);
        ele.classList.add("animation");
      }
    });
  }

  renderPage() {
    document.addEventListener("DOMContentLoaded", () => {
      // Add scroll event listener
      window.addEventListener("scroll", this._handleScroll);
      // Initial check in case the element is already in the viewport
      this._handleScroll();
    });
  }
}
export default new AnimationView();
