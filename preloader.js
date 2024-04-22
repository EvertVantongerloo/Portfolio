var loader = document.querySelector(".loaderContainer");
var flexItems = document.querySelectorAll(".flexbox-item");

function vanish() {
  // Prevent scrolling
  document.body.style.overflow = 'hidden';

  // Set a timeout to make the loader disappear after 5 seconds
  setTimeout(function() {
    loader.classList.add("disappear");
    
    // Allow scrolling after the animation finishes
    setTimeout(function() {
      document.body.style.overflow = '';
      flexItems.forEach(function(item) {
        item.classList.add("animate");
      });
    }, 100); // Adjust this timeout to match the duration of your animation
  }, 3100); // 3500 milliseconds = 3.5 seconds
}

// Call the vanish function when the window is loaded
window.addEventListener("load", vanish);
