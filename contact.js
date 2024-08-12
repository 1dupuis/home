document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            document.getElementById('contactResult').innerHTML = `<h3>Thank you, ${name}. Your message has been sent!</h3>`;
            document.getElementById('contactResult').style.color = 'green';
        } else {
            document.getElementById('contactResult').innerHTML = `<h3>Please fill out all fields.</h3>`;
            document.getElementById('contactResult').style.color = 'red';
        }
    });
});
