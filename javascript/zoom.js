let currentScale = 1;
let initialScale = 1;
let currentX = 0;
let currentY = 0;
let isMouseDown = false;
let startX = 0;
let startY = 0;
let startScrollX = 0;
let startScrollY = 0;

const mapContainer = document.getElementById('map-container');
const mapImage = document.getElementById('map-image');

// Initialize scale to fit entire image on load
window.addEventListener('load', () => {
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;
  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;
  
  if (imageWidth > 0 && imageHeight > 0) {
    const scaleX = containerWidth / imageWidth;
    const scaleY = containerHeight / imageHeight;
    initialScale = Math.max(scaleX, scaleY);
    currentScale = initialScale;
    updateTransform();
  }
});

function updateTransform() {
  mapImage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
}

function zoom(multiplier) {
  currentScale *= multiplier;

  // Limit zoom range
  if (currentScale < initialScale) currentScale = initialScale;
  if (currentScale > 5) currentScale = 5;

  updateTransform();
}

function resetZoom() {
  currentScale = initialScale;
  currentX = 0;
  currentY = 0;
  updateTransform();
}

// Mouse wheel zoom
mapContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  
  const rect = mapContainer.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
  
  // Adjust position to zoom towards cursor
  const oldScale = currentScale;
  currentScale *= zoomFactor;
  
  if (currentScale < 1) currentScale = 1;
  if (currentScale > 5) currentScale = 5;
  
  const scaleFactor = currentScale / oldScale;
  
  currentX = mouseX - (mouseX - currentX) * scaleFactor;
  currentY = mouseY - (mouseY - currentY) * scaleFactor;
  
  updateTransform();
}, { passive: false });

// Drag functionality
mapImage.addEventListener('mousedown', (e) => {
  if (currentScale > 1) {
    isMouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    startScrollX = currentX;
    startScrollY = currentY;
    mapImage.style.cursor = 'grabbing';
  }
});

document.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    currentX = startScrollX + deltaX;
    currentY = startScrollY + deltaY;
    
    // Limit dragging to prevent showing too much empty space
    const rect = mapContainer.getBoundingClientRect();
    const maxX = 0;
    const maxY = 0;
    const minX = rect.width - (mapImage.offsetWidth * currentScale);
    const minY = rect.height - (mapImage.offsetHeight * currentScale);
    
    currentX = Math.min(maxX, Math.max(minX, currentX));
    currentY = Math.min(maxY, Math.max(minY, currentY));
    
    updateTransform();
  }
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
  mapImage.style.cursor = 'grab';
});
