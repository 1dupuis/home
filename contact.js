document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Implement your form submission logic here
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        
        const resultDiv = document.getElementById('contactResult');
        resultDiv.textContent = 'Thank you for contacting us! We will get back to you shortly.';
        contactForm.reset();
    });
});
