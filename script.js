<script>
  const sliderImages = document.querySelectorAll(".slide-in");

  function checkSlide() {
    sliderImages.forEach((sliderImage) => {
      const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
      const imageBottom = sliderImage.offsetTop + sliderImage.height;

      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add("active");
      } else {
        sliderImage.classList.remove("active");
      }
    });
  }

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;

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

  window.addEventListener("scroll", debounce(checkSlide));
  checkSlide();
</script>