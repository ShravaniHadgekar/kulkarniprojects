// document.addEventListener("DOMContentLoaded", function () {
  
//   // === Founders cards ===
//   const cards = document.querySelectorAll('.founder-card');
//   const reviewCards = document.querySelectorAll('.review-card');

//   const cardObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//       } else {
//         entry.target.classList.remove('show');
//       }
//     });
//   }, { threshold: 0.2 });

//   cards.forEach(card => cardObserver.observe(card));
//   reviewCards.forEach(card => cardObserver.observe(card));

//   // === Agency images ===
//   const images = document.querySelectorAll('.agency-images img');

//   const imgObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//       } else {
//         entry.target.classList.remove('show');
//       }
//     });
//   }, { threshold: 0.1 });

//   images.forEach((img, index) => {
//     imgObserver.observe(img);
//     img.style.transitionDelay = `${index * 0.2}s`;  // stagger
//   });

//   // === Dark mode toggle ===
//   const toggleButton = document.getElementById('dark-mode-toggle');

//   toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
    

//     // Save preference
//     if (document.body.classList.contains('dark-mode')) {
//       localStorage.setItem('theme', 'dark');
//     } else {
//       localStorage.setItem('theme', 'light');
//     }
//   });

//   // === Load saved theme ===
//   if (localStorage.getItem('theme') === 'dark') {
//     document.body.classList.add('dark-mode');
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById('dark-mode-toggle');
//   const icon = document.getElementById('mode-icon');

//   // Load saved theme
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     document.body.classList.add('dark-mode');
//     if (icon) icon.textContent = '🌞';
//   } else {
//     if (icon) icon.textContent = '🌙';
//   }

//   // Toggle theme on button click
//   toggleButton.addEventListener('click', () => {
//     const isDark = document.body.classList.toggle('dark-mode');
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');

//     if (icon) icon.textContent = isDark ? '🌞' : '🌙';
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // === Founders cards animation ===
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

  // === Agency images animation ===
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
    img.style.transitionDelay = `${index * 0.2}s`;  // stagger animation
  });

  // === Dark mode toggle with icon ===
  const toggleButton = document.getElementById('dark-mode-toggle');
  const icon = document.getElementById('mode-icon');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (icon) icon.textContent = '🌞';
  } else {
    if (icon) icon.textContent = '🌙';
  }

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (icon) icon.textContent = isDark ? '🌞' : '🌙';
  });
});

