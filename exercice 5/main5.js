// Listens for window resizing event
window.addEventListener('resize', function () {
    // Checks the current window width
    if (window.innerWidth < 1600) {
      // Displays an alert if width is less than 500 pixels
      alert('La largeur de la fenêtre est inférieure à 1600px !');
    }
  });