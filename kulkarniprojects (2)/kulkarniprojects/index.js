document.addEventListener("DOMContentLoaded", function () {
  // === Founders cards ===
  const cards = document.querySelectorAll('.founder-card');
  const reviewCards = document.querySelectorAll('.review-card');

  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => cardObserver.observe(card));
  reviewCards.forEach(card => cardObserver.observe(card));

  // === Agency images ===
  const images = document.querySelectorAll('.agency-images img');

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  images.forEach((img, index) => {
    imgObserver.observe(img);
    img.style.transitionDelay = `${index * 0.2}s`;  // stagger
  });

  // === Dark mode toggle ===
  const toggleButton = document.getElementById('dark-mode-toggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // === Load saved theme ===
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
