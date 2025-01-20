// Get the video element
const modalVideo = document.getElementById('modalVideo');

// When the modal is shown, play the video
document.getElementById('videoModal').addEventListener('shown.bs.modal', () => {
  modalVideo.play();
});

// When the modal is hidden, pause the video and reset it
document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
  modalVideo.pause();
  modalVideo.currentTime = 0;
});
