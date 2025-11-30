const menuButton = document.getElementById('menu-button'); 
const navLinks = document.querySelector('.nav-links'); 
 
function toggleMenu() { 
    // 1. Toggle the CSS class (controls visibility via CSS) 
    navLinks.classList.toggle('open');  
     
    // 2. Update the button text/icon for accessibility 
    const isExpanded = navLinks.classList.contains('open'); 
    menuButton.setAttribute('aria-expanded', isExpanded); 
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger 
} 
 
// Add the event handler 
menuButton.addEventListener('click', toggleMenu); 
 
// OPTIONAL: Close the menu when a link inside is clicked (for mobile UX) 
navLinks.querySelectorAll('a').forEach(link => { 
    link.addEventListener('click', () => { 
        if (navLinks.classList.contains('open')) { 
            toggleMenu(); // Closes the menu
        } 
    }); 
}); 
 
const contactForm = document.getElementById('form');  

const messageDiv = document.getElementById('form-message'); 
 
if (contactForm && messageDiv) { 
    contactForm.addEventListener('submit', function(event) { 
        // Stop the browser from submitting the form and refreshing the page 
        event.preventDefault();  
 
        const nameInput = document.getElementById('name').value; 
        const emailInput = document.getElementById('email').value; 
 
        if (nameInput === '' || emailInput === '') { 
            messageDiv.textContent = 'Please fill out all required fields.'; 
            messageDiv.style.color = 'red'; 
        } else { 
            // Successful mock submission 
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.'; 
            messageDiv.style.color = 'green'; 
            contactForm.reset(); // Clear the form fields 
        } 
    }); 
}