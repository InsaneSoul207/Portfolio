// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    // Callback function to execute when intersection occurs
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      });
    };
  
    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Target elements for the observer
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });
  