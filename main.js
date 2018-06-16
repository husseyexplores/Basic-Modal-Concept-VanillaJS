// Get the modal element
let modal = document.getElementById('simpleModal');
// Get Modal opener button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementById('closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for blose click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open Modal
function openModal() {
   fadeIn(modal);
}

// Function to close Modal with close btn
function closeModal() {
   fadeOut(modal);
}

// Function to close Modal on outside click
function outsideClick(e) {
   if(e.target === modal) {
      fadeOut(modal);
   }
}

// Fade In
function fadeIn(el) {
   let s = el.style;
   s.opacity = 0;
   s.display = "block";
   let x = 0;
   (function fadeIn() {
      // For some weired reason, s.opacity += 0.1 was not working.
      x += 0.1;
      s.opacity = x;
      s.opacity  >= 1 ? s.display = "block" : setTimeout(fadeIn, 40);
   }
   )();
}

// Fade Out
function fadeOut(el) {
   let s = el.style;
   s.opacity = 1;
   // let x = 0;
   (function fadeOut() {
      // x += 0.1;
      // s.opacity = x;
      // s.opacity < 0 ? s.display = "none" : setTimeout(fadeOut, 40);
      (s.opacity -= 0.1) < 0 ? s.display = "none" : setTimeout(fadeOut, 40);
   }
   )();
}