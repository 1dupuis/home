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

    Object.keys(answers).forEach(function(key) {
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
