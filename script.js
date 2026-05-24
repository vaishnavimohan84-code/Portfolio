// ===== RESUME DOWNLOAD =====
// Place your resume file in the same folder and update the path below,
// OR keep the base64 data URI approach by pasting your base64 string here.

document.addEventListener('DOMContentLoaded', function () {

  // Option 1: Link to a local file (recommended)
  // const link = document.getElementById('resume-download');
  // link.href = 'Vaishnavi_Resume.docx';

  // Option 2: Smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Option 3: Highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--blue)';
      }
    });
  });

});
