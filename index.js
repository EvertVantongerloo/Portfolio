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

function updateDate() {
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
updateDate();

