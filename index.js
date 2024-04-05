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