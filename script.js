const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    // Correct height calculation
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.offsetHeight / 2;

    const imageBottom =
      sliderImage.offsetTop + sliderImage.offsetHeight;

    const isHalfShown = slideInAt >= sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY <= imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

function debounce(func, wait = 20, immediate = true) {
  let timeout;

  return function (...args) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

// IMPORTANT: run once initially
checkSlide();

// Scroll listener
window.addEventListener("scroll", debounce(checkSlide));