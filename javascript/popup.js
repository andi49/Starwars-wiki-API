const popup = document.getElementById("popup");
const sendBtn = document.querySelector(".send-btn");
const emailInput = document.querySelector(".input-field[type='email']");
const subjectInput = document.querySelector(".input-field[type='text']");
const messageInput = document.querySelector(".text-area");

// Handle send button click
sendBtn.addEventListener("click", () => {
    // Validate form
    if (!subjectInput.value.trim() || !messageInput.value.trim()) {
        showPopup("Please fill in all fields", "error");
        return;
    }

    // Show loading state
    sendBtn.disabled = true;
    sendBtn.textContent = "Transmitting...";
    showPopup("Transmitting message to the Galactic Archives...", "loading");

    // Simulate sending (2 second delay)
    setTimeout(() => {
        // Show success message
        showPopup("Message received! Our archivists will review your knowledge.", "success");
        
        // Reset form after success
        setTimeout(() => {
            subjectInput.value = "";
            messageInput.value = "";
            sendBtn.disabled = false;
            sendBtn.textContent = "Send";
            popup.style.display = "none";
        }, 3000);
    }, 2000);
});

// Show popup with different states
function showPopup(message, type = "default") {
    const closeBtn = type === "error" ? '<button class="popup-close">&times;</button>' : '';
    popup.innerHTML = `
        <div class="popup-content ${type}">
            ${closeBtn}
            <div class="popup-message">
                ${type === "loading" ? '<div class="loading-spinner"></div>' : ''}
                <p>${message}</p>
            </div>
        </div>
    `;
    popup.style.display = "flex";
    
    // Add close button functionality only for error
    if (type === "error") {
        const closeBtnEl = popup.querySelector(".popup-close");
        closeBtnEl.addEventListener("click", () => {
            popup.style.display = "none";
        });
        
        // Auto-close after 4 seconds
        setTimeout(() => {
            popup.style.display = "none";
        }, 4000);
    }
}

// Image Popup Functions for Galaxy Map
function openPopup() {
  const imagePopup = document.getElementById('imagePopup');
  imagePopup.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closePopup() {
  const imagePopup = document.getElementById('imagePopup');
  imagePopup.classList.remove('show');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close image popup when clicking outside the image
if (document.getElementById('imagePopup')) {
  window.addEventListener('click', (e) => {
    const imagePopup = document.getElementById('imagePopup');
    if (e.target === imagePopup) {
      closePopup();
    }
  });

  // Close image popup with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
}