function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
  


const thumbnails = document.querySelectorAll(".image-thumbnails img");
const testimonials = document.querySelectorAll(".testimonial-slider");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
let currentIndex = 0;

function showTestimonial(index) {
  // Remove active class from all thumbnails and testimonials
  thumbnails.forEach((img) => img.classList.remove("active"));
  testimonials.forEach((testimonial) => testimonial.classList.remove("active"));

  // Add active class to clicked thumbnail and corresponding testimonial
  thumbnails[index].classList.add("active");
  testimonials[index].classList.add("active");
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    currentIndex = index;
    showTestimonial(index);
  });
});

prevArrow.addEventListener("click", function () {
  currentIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  showTestimonial(currentIndex);
});

nextArrow.addEventListener("click", function () {
  currentIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  showTestimonial(currentIndex);
});


// Scroll
const slider = document.querySelector(".slider");
let start = null;
const duration =
  parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--duration"),
    10
  ) * 1000; // convert to milliseconds
const imgWidth = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--img-width"),
  10
);
const imgCount = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--img-count"),
  10
);

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = (timestamp - start) % duration;
  const percentage = progress / duration;
  const translateX = -percentage * imgWidth * imgCount;

  slider.style.transform = `translateX(${translateX}px)`;

  // Continue the animation
  window.requestAnimationFrame(step);
}

// Start the animation
window.requestAnimationFrame(step);

// ===========Book Now Page
        document.addEventListener("DOMContentLoaded", () => {
          const form = document.querySelector(".booking-form");

          form.addEventListener("submit", (event) => {
            event.preventDe
        document.addEventListener("DOMContentLoaded", () => {
          const form = document.querySelector(".booking-form");

          form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form from submitting immediately

            // Form validation logic
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (name === "" || email === "" || phone === "") {
              alert("Please fill in all required fields.");
              return;
            }

            // Submit the form (could add AJAX here for a real-world app)
            alert("Thank you for booking! We will contact you soon.");
            form.submit(); // Uncomment this when ready to submit the form
          });
        });fault(); // Prevent form from submitting immediately

            // Form validation logic
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            if (name === "" || email === "" || phone === "") {
              alert("Please fill in all required fields.");
              return;
            }

            // Submit the form (could add AJAX here for a real-world app)
            alert("Thank you for booking! We will contact you soon.");
            form.submit(); // Uncomment this when ready to submit the form
          });
        });