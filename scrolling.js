const container = document.getElementById("container");

// Function to create a video div with a random color
function createVideo(index) {
  const video = document.createElement("div");
  video.className = "video";
  video.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
  video.textContent = `Video ${index}`;
  return video;
}

// Add initial videos
for (let i = 1; i <= 5; i++) {
  container.appendChild(createVideo(i));
}

// Infinite scrolling logic
let videoCount = 5;
container.addEventListener("scroll", () => {
  const lastVideo = container.lastElementChild;
  const lastVideoPosition = lastVideo.getBoundingClientRect().bottom;

  if (lastVideoPosition < window.innerHeight + 100) {
    // Add a new video when scrolling near the end
    videoCount++;
    container.appendChild(createVideo(videoCount));
  }
});
