document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the Passé Composé form of 'manger' for 'je'?",
            options: [
                "j'ai mangé",
                "je mangé",
                "j'ai mange",
                "je mange"
            ],
            answer: "j'ai mangé"
        },
        {
            question: "What is the Passé Composé form of 'parler' for 'tu'?",
            options: [
                "tu as parlé",
                "tu a parlé",
                "tu parlé",
                "tu parle"
            ],
            answer: "tu as parlé"
        },
        {
            question: "What is the Passé Composé form of 'finir' for 'il'?",
            options: [
                "il a fini",
                "il finit",
                "il fini",
                "il a finie"
            ],
            answer: "il a fini"
        },
        // Add more questions as needed
    ];

    const quizForm = document.getElementById('quizForm');
    const questionsContainer = document.getElementById('questionsContainer');
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${opt}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let score = 0;
        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });

        const totalQuestions = questions.length;
        const resultText = `You scored ${score} out of ${totalQuestions}`;
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = resultText;
    });
});
