/* ==================================================
   XYZ TEAL VARIANT
   script.js
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     MOBILE MENU
     ========================================== */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("mobile-open");
      menuToggle.classList.toggle("active");
      
      // Prevent scrolling on body when mobile menu is open
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu when clicking a nav link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
        menuToggle.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  /* ==========================================
     HERO CAROUSEL
     ========================================== */

  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.querySelector(".slider-dots");

  if (!slides.length || !dotsContainer) return;

  let currentSlide = 0;
  let autoplay;
  let startX = 0;
  let endX = 0;

  // Create dots dynamically
  slides.forEach((_, index) => {
    const dot = document.createElement("button");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

    dot.addEventListener("click", () => {
      goToSlide(index);
      restartAutoplay();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".slider-dots button");

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    let next = currentSlide + 1;

    if (next >= slides.length) {
      next = 0;
    }

    goToSlide(next);
  }

  function prevSlide() {
    let prev = currentSlide - 1;

    if (prev < 0) {
      prev = slides.length - 1;
    }

    goToSlide(prev);
  }

  function startAutoplay() {
    autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  startAutoplay();

  /* ==========================================
     SWIPE SUPPORT
     ========================================== */

  const heroSlider = document.querySelector(".hero-slider");

  if (heroSlider) {
    heroSlider.addEventListener(
      "touchstart",
      (e) => {
        startX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    heroSlider.addEventListener(
      "touchend",
      (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true },
    );

    function handleSwipe() {
      const swipeDistance = startX - endX;

      if (swipeDistance > 50) {
        nextSlide();
        restartAutoplay();
      }

      if (swipeDistance < -50) {
        prevSlide();
        restartAutoplay();
      }
    }
  }

  /* ==========================================
     PAUSE ON HOVER
     ========================================== */

  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", () => {
      stopAutoplay();
    });

    heroSlider.addEventListener("mouseleave", () => {
      startAutoplay();
    });
  }

  /* ==========================================
     KEYBOARD NAVIGATION
     ========================================== */

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
      restartAutoplay();
    }

    if (e.key === "ArrowLeft") {
      prevSlide();
      restartAutoplay();
    }
  });

  /* ==========================================
     INTERSECTION ANIMATION
     ========================================== */

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  const animatedElements = document.querySelectorAll(
    ".program-card, .value-item, .article-card, .cta-banner",
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  /* ==========================================
     SMOOTH SCROLL
     ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  /* ==========================================
     HEADER SHADOW ON SCROLL
     ========================================== */

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
