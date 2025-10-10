// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu on link click
    const navLinks = document.querySelector('nav ul');
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Mobile menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('mobile-menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('nav').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
});
