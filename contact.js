document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simulate form submission
        const resultDiv = document.getElementById('contactResult');
        if (name && email && message) {
            resultDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;
            resultDiv.style.color = "green";
        } else {
            resultDiv.innerHTML = `<p>Please fill out all fields.</p>`;
            resultDiv.style.color = "red";
        }

        // Clear the form
        document.getElementById('contactForm').reset();
    });
});
