const headerLinks = document.querySelectorAll('.header-links a');
   
headerLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.querySelector('.contact-main-right form');
const nameInput = contactForm.querySelector('input[type="text"]');
const emailInput = contactForm.querySelector('input[type="email"]');
const messageInput = contactForm.querySelector('textarea');
const sendButton = contactForm.querySelector('input[type="button"]');

sendButton.addEventListener('click', function() {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // testing mail link to mail app 
    // mailto link
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`);
    const mailtoLink = `mailto:pharezoyelade@gmail.com=${subject}&body=${body}`;

    // Open mail app
    window.location.href = mailtoLink;
});

// validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}