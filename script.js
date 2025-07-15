document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.mobile-nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  } else {
    console.warn('Toggle button or nav links not found.');
  }
})
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('#projs .content').forEach(div => {
    const link = div.querySelector('a');
    if (link) {
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        window.location.href = link.href;
      });
    }
  });
});
