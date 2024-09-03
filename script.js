document.addEventListener('keydown', function(event) {
    var output = document.getElementById('output');
    output.innerHTML = `
      <p>Event Type: ${event.type}</p>
      <p>Key pressed: ${event.key}</p>
      <p>Key code: ${event.keyCode}</p>
      <p>Key location: ${event.location}</p>
      <p>Shift key pressed: ${event.shiftKey}</p>
      <p>Ctrl key pressed: ${event.ctrlKey}</p>
      <p>Alt key pressed: ${event.altKey}</p>
      <p>Meta key pressed: ${event.metaKey}</p>
    `;
  });
  