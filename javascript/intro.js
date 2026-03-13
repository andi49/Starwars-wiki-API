const video = document.querySelector("#intro");
const pageContent = document.querySelector(".page");
const lightsaber = document.querySelector("#saberdiv");
let skipBtn = null;
let skipTimeout = null;

// When page loads, play the intro video
function startIntro() {
    if (video) {

        video.classList.remove("hideIntro");
        video.classList.add("showIntro");
        
        pageContent.classList.add("hideContent");
        
        // Hide lightsaber during video
        if (lightsaber) {
            lightsaber.style.display = "none";
        }
        
        // Create skip button
        createSkipButton();
        
        // Try to play video and handle permission errors
        video.play().catch((error) => {
            console.log('Video autoplay blocked:', error);
            showPermissionMessage();
        });
    }
}

// Create skip button
function createSkipButton() {
    skipBtn = document.createElement("button");
    skipBtn.className = "skip-btn";
    skipBtn.innerHTML = "SKIP";
    document.body.appendChild(skipBtn);
    
    skipBtn.addEventListener("click", endVideo);
}

// Show message if user needs to enable audio/video
function showPermissionMessage() {
    const message = document.createElement("div");
    message.className = "permission-message";
    message.innerHTML = `
        <p>Enable audio to play intro</p>
        <button class="permission-play-btn">PLAY</button>
    `;
    document.body.appendChild(message);
    
    const playBtn = message.querySelector(".permission-play-btn");
    playBtn.addEventListener("click", () => {
        message.remove();
        video.play();
    }, { once: true });
}

// Function to end video and show content
function endVideo() {
    console.log('Ending video, showing about page');
    
    // Play slide out animation
    video.classList.add("slideOut");
    
    // Remove skip button immediately
    if (skipBtn) {
        skipBtn.remove();
        skipBtn = null;
    }
    
    // Remove permission message if it exists
    const permissionMsg = document.querySelector(".permission-message");
    if (permissionMsg) {
        permissionMsg.remove();
    }
    
    // After animation completes, hide video and show content
    setTimeout(() => {
        video.classList.remove("showIntro");
        video.classList.add("hideIntro");
        video.classList.remove("slideOut");
        
        pageContent.classList.remove("hideContent");
        pageContent.classList.add("showContent");
        
        // Show lightsaber again after video
        if (lightsaber) {
            lightsaber.style.display = "";
        }
        
        // Stop video
        video.pause();
        video.currentTime = 0;
    }, 800); // Match animation duration
}

// When video ends, show the about page content
video.addEventListener("ended", endVideo);

// Start the intro when the page loads
document.addEventListener("DOMContentLoaded", startIntro);