const contactIcon = document.querySelector('.contact-icon');
const contactInfo = document.querySelector('.contact-info');

contactIcon.addEventListener('click', function() {
  if (contactInfo.style.display === 'block') {
    contactInfo.style.display = 'none';
  } else {
    contactInfo.style.display = 'block';
  }
});

contactIcon.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

contactIcon.addEventListener('mouseup', function(event) {
  event.preventDefault();
});
