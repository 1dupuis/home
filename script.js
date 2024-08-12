document.addEventListener('DOMContentLoaded', () => {
    const hintButtons = document.querySelectorAll('.hint-button');
    
    hintButtons.forEach(button => {
        button.addEventListener('click', () => {
            const hintId = button.getAttribute('data-target');
            const hint = document.getElementById(hintId);
            hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
        });
    });

    document.getElementById('quizForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const answers = {
            question1: "j'ai mangé",
            question2: "tu as parlé",
            question3: "il a fini"
        };

        let score = 0;
        let userAnswers = {
            question1: document.getElementById('question1').value.trim().toLowerCase(),
            question2: document.getElementById('question2').value.trim().toLowerCase(),
            question3: document.getElementById('question3').value.trim().toLowerCase(),
        };

        Object.keys(answers).forEach(key => {
            if (userAnswers[key] === answers[key]) {
                score++;
            }
        });

        let resultDiv = document.getElementById('result');
        if (score === 3) {
            resultDiv.innerHTML = `<h3>Excellent! You scored 3/3!</h3>`;
            resultDiv.style.color = "green";
        } else {
            resultDiv.innerHTML = `<h3>You scored ${score}/3. Review your answers and try again!</h3>`;
            resultDiv.style.color = "orange";
        }
    });
});
