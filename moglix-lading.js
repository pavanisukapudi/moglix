 // Get the video element
 const videoPlayer = document.getElementById('videoPlayer');

// When the modal is shown, play the video
$('#videoModal').on('shown.bs.modal', function () {
  videoPlayer.play();
});

// When the modal is hidden, pause and reset the video
$('#videoModal').on('hidden.bs.modal', function () {
  videoPlayer.pause();
  videoPlayer.currentTime = 0; // Reset video to the start
});

// Disable the close button
$('#videoModal .close').on('click', function (e) {
  e.preventDefault(); // Prevent the button's default close behavior
  alert('Close button is disabled!');
});

// Prevent modal from closing when clicking outside
$('#videoModal').modal({
  backdrop: 'static', // Prevent closing when clicking outside the modal
  keyboard: false     // Prevent closing via the Escape key
});