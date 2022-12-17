const dvds = document.querySelectorAll('#dvd');
const container = document.querySelector('.home__outer');

// Store the initial positions and velocities for each element
const elements = [];

for (const dvd of dvds) {
  // Generate a random starting position within the container
  const x = Math.random() * (container.offsetWidth - dvd.offsetWidth);
  const y = Math.random() * (container.offsetHeight - dvd.offsetHeight);

  // Generate a random velocity
  const dx = Math.random() * 2 - 1;
  const dy = Math.random() * 2 - 1;

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
    if (element.x + element.element.offsetWidth > container.offsetWidth || element.x < 0) {
      element.dx = -element.dx;
    }
    // Check if the element has reached the top or bottom edge of the container
    if (element.y + element.element.offsetHeight > container.offsetHeight || element.y < 0) {
      element.dy = -element.dy;
    }

    element.element.style.transform = `translate(${element.x}px, ${element.y}px)`;
  }

  requestAnimationFrame(updatePosition);
}

updatePosition();





