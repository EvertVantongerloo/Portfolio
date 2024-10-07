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
// Select the cursor dot element and the span for the text inside it
const cursorDot = document.querySelector('.cursor-dot');
const cursorText = document.querySelector('.cursor-text');

// Update the position of the cursor dot when the mouse moves
document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.pageX}px`;
    cursorDot.style.top = `${e.pageY}px`;
});

// Handle hover over elements with the imageSelect class
const imageSelectDivs = document.querySelectorAll('.imageSelect');

imageSelectDivs.forEach(div => {
    // When the mouse enters an imageSelect div
    div.addEventListener('mouseenter', () => {
        cursorDot.classList.add('show-text'); // Show the text

        // Check if this is the specific div you want to target
        if (div.id === 'videoDiv') {
            cursorText.textContent = ''; // Set the specific text
        } else {
            cursorText.textContent = 'Bekijk video.'; // Default text for other divs
        }
    });

    // When the mouse leaves the imageSelect div
    div.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('show-text'); // Hide the text
        cursorText.textContent = ''; // Clear the text when not hovering
    });
});



