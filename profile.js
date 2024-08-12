document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const completedLessonsElem = document.getElementById('completedLessons');
    const avgScoreElem = document.getElementById('avgScore');
    
    // Dummy data
    let completedLessons = 5;
    let avgScore = '3/3';
    let totalLessons = 10;

    progressBar.max = totalLessons;
    progressBar.value = completedLessons;
    progressText.textContent = `${(completedLessons / totalLessons) * 100}%`;

    completedLessonsElem.textContent = completedLessons;
    avgScoreElem.textContent = avgScore;

    document.getElementById('resetProgress').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset your progress?')) {
            alert('Progress has been reset.');
            // Logic to reset progress can be added here
        }
    });
});
