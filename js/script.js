// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

// Festival Slider
const slides = document.querySelectorAll('.festival-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Button events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide change
setInterval(nextSlide, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Create particle background
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random size
                const size = Math.random() * 4 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Random animation duration
                const duration = Math.random() * 20 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                // Random animation delay
                const delay = Math.random() * 5;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize when page loads
        window.addEventListener('load', () => {
            createParticles();
            showSlide(0);
        });


document.addEventListener("DOMContentLoaded", () => {
    const yearDisplay = document.querySelector(".current-year");
    const prevBtn = document.querySelector(".prev-year");
    const nextBtn = document.querySelector(".next-year");
    const events = document.querySelectorAll(".festival-event");

    let currentYear = parseInt(yearDisplay.textContent);

    function updateCalendarYear(newYear) {
        currentYear = newYear;
        yearDisplay.textContent = currentYear;

        events.forEach(event => {
            const originalDate = event.getAttribute("data-date");
            const [, month, day] = originalDate.split("-");
            const newDate = `${currentYear}-${month}-${day}`;
            event.setAttribute("data-date", newDate);
        });
    }

    prevBtn.addEventListener("click", () => {
        updateCalendarYear(currentYear - 1);
    });

    nextBtn.addEventListener("click", () => {
        updateCalendarYear(currentYear + 1);
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const sendBtn = document.getElementById('sendMessageBtn');
  const successModal = document.getElementById('successModal');
  const closeBtn = document.getElementById('closeModalBtn');
  
  sendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show loading state
    this.classList.add('loading');
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
      this.classList.remove('loading');
      successModal.classList.add('active');
      
      // Reset form if needed
      // document.getElementById('yourFormId').reset();
    }, 1500);
  });
  
  closeBtn.addEventListener('click', function() {
    successModal.classList.remove('active');
  });
  
  // Close when clicking outside modal
  successModal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletterForm');
  const modal = document.getElementById('newsletterModal');
  
  form.addEventListener('submit', function(e) {
    // 1. PREVENT DEFAULT FORM SUBMISSION
    e.preventDefault();
    
    // 2. Get the submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // 3. Add loading state
    submitBtn.classList.add('loading');
    
    // 4. Create a small delay for UX (remove in production)
    setTimeout(() => {
      // 5. Remove loading state
      submitBtn.classList.remove('loading');
      
      // 6. Show success message
      modal.classList.add('active');
      
      // 7. Reset form fields
      form.reset();
      
   
    }, 800); // Simulated delay
  });
  
  // Close modal handler
  document.getElementById('closeNewsletterModal').addEventListener('click', function() {
    modal.classList.remove('active');
  });
});