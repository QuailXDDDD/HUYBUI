// Navigation logic
const sections = {
  home: document.getElementById('home-section'),
  university: document.getElementById('university-section'),
  about: document.getElementById('about-section'),
  login: document.getElementById('login-section'),
  premium: document.getElementById('premium-section')
};

function showSection(section) {
  for (let key in sections) {
    sections[key].style.display = (key === section) ? 'block' : 'none';
  }
  // Set active nav
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  if (section === 'premium') document.getElementById('nav-premium').classList.add('active');
  if (section === 'about') document.getElementById('nav-about').classList.add('active');
  if (section === 'login') document.getElementById('nav-login').classList.add('active');
}

document.getElementById('nav-premium').onclick = () => showSection('premium');
document.getElementById('nav-about').onclick = () => showSection('about');
document.getElementById('nav-login').onclick = () => showSection('login');

document.querySelector('.logo-title').onclick = () => showSection('home');

function showUniversity(name) {
  showSection('university');
}

showSection('home'); 