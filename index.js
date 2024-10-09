/* temp */
const logo = document.querySelectorAll("#logo path");

/* console.log(logo);
console.log('letter e is ${logo[path].getTotalLength()}'); */



/* ----- Favicon Black and White ----- */

// Detect preferred color scheme
let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to set favicon based on theme
function setFavicon(theme) {
  let favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    if (theme === 'dark') {
      favicon.href = 'Images/favicon-light.svg';
    } else {
      favicon.href = 'Images/favicon-dark.svg';
    }
  }
}

// Set favicon based on initial theme
setFavicon(isDarkTheme ? 'dark' : 'light');

// Listen for changes in color scheme
window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
  setFavicon(e.matches ? 'dark' : 'light');
});






/* ----- Video Image Swapper ----- */

function playVideo(videoSrc, containerId) {
  var videoContainer = document.getElementById(containerId);
  var videoPlayer = videoContainer.querySelector('video');
  var clickedImage = event.target;

  // Set video source
  videoPlayer.src = videoSrc;

  // Show video container and hide the clicked image
  videoContainer.style.display = 'block';
  clickedImage.style.display = 'none';

  // Play the video
  videoPlayer.play();

  // Listen for video end
  videoPlayer.onended = function () {
    // Hide video container and show the clicked image again
    videoContainer.style.display = 'none';
    clickedImage.style.display = 'block';
  };
}






/* current time */

function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  // Add leading zeros if needed
  minutes = (minutes < 10 ? '0' : '') + minutes;
  seconds = (seconds < 10 ? '0' : '') + seconds;
  
  var timeString = hours + ':' + minutes + ':' + seconds;
  
  document.getElementById('current-time').innerText = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Call initially to display the time immediately
updateTime();






/* current date */

/* function updateDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Month is zero-based
  var day = currentDate.getDate();
  
  // Add leading zeros if needed
  month = (month < 10 ? '0' : '') + month;
  day = (day < 10 ? '0' : '') + day;
  
  var dateString = day + '/' + month + '/' + year;
  
  document.getElementById('current-date').innerText = dateString;
}

// Call initially to display the date immediately
updateDate(); */






const observerOptions = {
  root: null, // Use the viewport as the container
  rootMargin: '40px', // Adjust if needed (e.g., '0px 0px -10% 0px')
  threshold: 0.1 // Trigger when at least 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.spread');
hiddenElements.forEach((el) => observer.observe(el));

// Check the initial status of each element
window.addEventListener('load', () => {
  hiddenElements.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom > 0) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
});



// cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorText = document.querySelector('.cursor-text');

// Variables to store the cursor position
let cursorX = 0;
let cursorY = 0;

// Update the position of the cursor dot when the mouse moves
document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    updateCursorPosition();
    checkHoverState();
});

// Update cursor position on scroll
document.addEventListener('scroll', () => {
    updateCursorPosition();
    checkHoverState();
});

// Function to update cursor position
function updateCursorPosition() {
    cursorDot.style.left = `${cursorX}px`;
    cursorDot.style.top = `${cursorY}px`;
}

// Handle hover over elements with the imageSelect class
const imageSelectDivs = document.querySelectorAll('.imageSelect');

imageSelectDivs.forEach((div, index) => {
    // When the mouse enters an imageSelect div
    div.addEventListener('mouseenter', () => {
        cursorDot.classList.add('show-text'); // Show the text

        // Assign a specific class based on the index or any other logic
        cursorDot.classList.add(`hover-color-${index % 7}`); // Cycle through 7 colors

        // Set the text content based on the div
        cursorText.textContent = div.dataset.text || 'Bekijk video.'; // Use data attribute or default text

        // Force reflow to ensure CSS animation is triggered
        div.style.animation = 'none';
        div.offsetHeight; // Trigger reflow
        div.style.animation = '';
    });

    // When the mouse leaves the imageSelect div
    div.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('show-text'); // Hide the text
        cursorText.textContent = ''; // Clear the text when not hovering
        div.classList.remove('hover'); // Remove hover class
        cursorDot.classList.remove(`hover-color-${index % 7}`); // Remove specific color class
    });

    // Continuously check hover state while the mouse is over the div
    div.addEventListener('mousemove', () => {
        checkHoverState();
    });
});

// Function to check hover state
function checkHoverState() {
    let isHovering = false;
    imageSelectDivs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        if (cursorX >= rect.left && cursorX <= rect.right && cursorY >= rect.top && cursorY <= rect.bottom) {
            cursorDot.classList.add('show-text'); // Show the text
            div.classList.add('hover'); // Add hover class
            isHovering = true;

            // Update cursor color based on the hovered element
            cursorDot.classList.add(`hover-color-${index % 7}`);
            cursorText.textContent = div.dataset.text || 'Bekijk video.'; // Use data attribute or default text
        } else {
            div.classList.remove('hover'); // Remove hover class if not hovering
            cursorDot.classList.remove(`hover-color-${index % 7}`); // Remove specific color class
        }
    });

    if (!isHovering) {
        cursorDot.classList.remove('show-text'); // Hide the text
        cursorText.textContent = ''; // Clear the text when not hovering
    }
}
