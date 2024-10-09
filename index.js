const hero_section_right = document.querySelector(".hero-section-right");
console.log(hero_section_right);

hero_section_right.addEventListener("mouseenter", () => {
  gsap.to(".book", {
    x: 10,
    y: 40,
    duration: 0.3,
  });
  gsap.to(".headphone", {
    x: -10,
    y: -40,
    duration: 0.3,
  });
});

hero_section_right.addEventListener("mouseleave", () => {
  gsap.to(".book", {
    x: 0,
    y: 0,
    duration: 0.3,
  });
  gsap.to(".headphone", {
    x: 0,
    y: 0,
    duration: 0.3,
  });
});

document.getElementById("openSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("active");
});

document.getElementById("closeSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.toggle("collapsed");

      const collapseTarget = document.querySelector(
        button.getAttribute("data-bs-target")
      );

      if (collapseTarget.classList.contains("show")) {
        collapseTarget.classList.remove("show");
      } else {
        collapseTarget.classList.add("show");
      }

      accordionButtons.forEach((btn) => {
        if (btn !== button) {
          btn.classList.add("collapsed");
          const otherCollapseTarget = document.querySelector(
            btn.getAttribute("data-bs-target")
          );
          otherCollapseTarget.classList.remove("show");
        }
      });
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector(
//     ".custom-carousal #carouselExampleIndicators"
//   );
//   const slides = carousel.querySelectorAll(".carousel-item");
//   const indicators = carousel.querySelectorAll(".carousel-indicators button");
//   let currentIndex = 0;
//   const intervalTime = 3000;
//   let slideInterval;

//   function updateCarousel(index) {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     indicators.forEach((indicator) => indicator.classList.remove("active"));

//     slides[index].classList.add("active");
//     indicators[index].classList.add("active");
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateCarousel(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateCarousel(currentIndex);
//   }

//   function startSlideShow() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   function goToSlide(index) {
//     currentIndex = index;
//     updateCarousel(currentIndex);
//   }

//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener("click", () => {
//       clearInterval(slideInterval);
//       goToSlide(index);
//       startSlideShow();
//     });
//   });

//   const prevButton = carousel.querySelector(".carousel-control-prev");
//   const nextButton = carousel.querySelector(".carousel-control-next");

//   prevButton?.addEventListener("click", () => {
//     clearInterval(slideInterval);
//     prevSlide();
//     startSlideShow();
//   });

//   nextButton?.addEventListener("click", () => {
//     clearInterval(slideInterval);
//     nextSlide();
//     startSlideShow();
//   });

//   startSlideShow();
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector(
//     ".custom-carousal #carouselExampleIndicators1"
//   );
//   const slides = carousel.querySelectorAll(".carousel-item");
//   const indicators = carousel.querySelectorAll(".carousel-indicators button");
//   let currentIndex = 0;
//   const intervalTime = 3000;
//   let slideInterval;

//   function updateCarousel(index) {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     indicators.forEach((indicator) => indicator.classList.remove("active"));

//     slides[index].classList.add("active");
//     indicators[index].classList.add("active");
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateCarousel(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateCarousel(currentIndex);
//   }

//   function startSlideShow() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   function goToSlide(index) {
//     currentIndex = index;
//     updateCarousel(currentIndex);
//   }

//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener("click", () => {
//       clearInterval(slideInterval);
//       goToSlide(index);
//       startSlideShow();
//     });
//   });

//   const prevButton = carousel.querySelector(".carousel-control-prev");
//   const nextButton = carousel.querySelector(".carousel-control-next");

//   prevButton?.addEventListener("click", () => {
//     clearInterval(slideInterval);
//     prevSlide();
//     startSlideShow();
//   });

//   nextButton?.addEventListener("click", () => {
//     clearInterval(slideInterval);
//     nextSlide();
//     startSlideShow();
//   });

//   startSlideShow();
// });
