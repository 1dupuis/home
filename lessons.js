document.addEventListener('DOMContentLoaded', () => {
    const lessons = [
        {
            title: "Introduction to Passé Composé",
            description: "Learn the basics of the Passé Composé tense in French.",
            content: "The Passé Composé is a French past tense used to express actions completed in the past. It is formed using the auxiliary verbs 'avoir' or 'être' followed by the past participle."
        },
        {
            title: "Using 'Avoir' in Passé Composé",
            description: "Explore how to use the auxiliary verb 'avoir' to form the Passé Composé.",
            content: "Most verbs use 'avoir' as the auxiliary verb in Passé Composé. For example: 'j'ai mangé' (I ate), 'tu as parlé' (you spoke)."
        },
        // Add more lessons as needed
    ];

    const lessonsContainer = document.getElementById('lessonsContainer');
    
    lessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';
        lessonCard.innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <p>${lesson.content}</p>
        `;
        lessonsContainer.appendChild(lessonCard);
    });
});
