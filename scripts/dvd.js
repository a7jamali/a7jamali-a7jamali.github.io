const dvds = document.querySelectorAll('#dvd');
const container = document.querySelector('.home__outer');

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

// Calculate the required velocity to take 10 seconds to traverse the width of the container
const velocityX = containerWidth / (20 * 60); // 10 seconds * 60 frames per second
const velocityY = containerHeight / (20 * 60); // 10 seconds * 60 frames per second

// Store the initial positions and velocities for each element
const elements = [];

for (const dvd of dvds) {
  // Generate a random starting position within the container
  const x = Math.random() * (containerWidth - dvd.offsetWidth);
  const y = Math.random() * (containerHeight - dvd.offsetHeight);

  // Generate a random value for the velocity (either positive or negative)
  const dx = Math.random() > 0.5 ? velocityX : -velocityX;
  const dy = Math.random() > 0.5 ? velocityY : -velocityY;

  elements.push({
    element: dvd,
    x,
    y,
    dx,
    dy
  });
}

function updatePosition() {
  for (const element of elements) {
    element.x += element.dx;
    element.y += element.dy;

    // Check if the element has reached the right or left edge of the container
    if (element.x + element.element.offsetWidth > containerWidth || element.x < 0) {
      element.dx = -element.dx;
    }
    // Check if the element has reached the top or bottom edge of the container
    if (element.y + element.element.offsetHeight > containerHeight || element.y < 0) {
      element.dy = -element.dy;
    }

    // Determine the angle of rotation based on the dx and dy values
    const angle = Math.atan2(element.dy, element.dx) * 180 / Math.PI;

    // Update the rotation of the arrow inside the .home__inner-arrow div
    element.element.querySelector('.home__inner-arrow').style.transform = `rotate(${angle}deg)`;

    element.element.style.transform = `translate(${element.x}px, ${element.y}px)`;
  }

  requestAnimationFrame(updatePosition);
}

updatePosition();
