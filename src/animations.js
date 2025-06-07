// Simple animation utility functions for Family Healing Center website

// Function to initialize animation observers when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSimpleRevealAnimations();
  initBasicScrollEffects();
});

// Simple reveal animation for elements when they come into view
function initSimpleRevealAnimations() {
  // Use a simple class to identify elements to animate
  const elementsToReveal = document.querySelectorAll('.reveal, .reveal-element');
  
  if (!elementsToReveal.length) return;
  
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, no need to keep observing
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // Reveal when 10% of element is visible
  );
  
  elementsToReveal.forEach(element => {
    revealObserver.observe(element);
  });
}
  
// Simple scroll effects like sticky header
function initBasicScrollEffects() {
  // Subtle header effect on scroll
  const header = document.querySelector('.landing-header');
  if (!header) return;
  
  // Simple smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Simple header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
