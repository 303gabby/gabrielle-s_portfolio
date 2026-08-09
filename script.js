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
const nameEl = document.getElementById('name-letters');
if (nameEl) {
  const text = nameEl.textContent;
  nameEl.innerHTML = [...text].map(ch =>
    `<span class="letter">${ch === ' ' ? '&nbsp;' : ch}</span>`
  ).join('');

  const letters = nameEl.querySelectorAll('.letter');
  document.addEventListener('mousemove', (e) => {
    const rect = nameEl.getBoundingClientRect();
    letters.forEach(letter => {
      const lRect = letter.getBoundingClientRect();
      const dx = e.clientX - (lRect.left + lRect.width / 2);
      const dy = e.clientY - (lRect.top + lRect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;
      if (dist < maxDist) {
        const pull = (1 - dist / maxDist) * 8;
        letter.style.transform = `translate(${(dx / dist) * pull}px, ${(dy / dist) * pull}px)`;
      } else {
        letter.style.transform = 'translate(0, 0)';
      }
    });
  });
}