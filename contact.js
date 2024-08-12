<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="logo.png" alt="French Classroom Logo">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="lessons.html">Lessons</a></li>
                <li><a href="quiz.html">Quiz</a></li>
                <li><a href="profile.html">Profile</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="contact">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        <div id="contactResult"></div>
    </section>

    <footer>
        <p>&copy; 2024 French Classroom. All rights reserved.</p>
    </footer>

    <script src="contact.js"></script>
</body>
</html>
