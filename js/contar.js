let clickCount = 0;

function updateCounter(button) {
    clickCount++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = `Clics: ${clickCount}`;
  }