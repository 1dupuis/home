document.addEventListener('DOMContentLoaded', () => {
    const profileData = {
        progress: 75, // Example value
        completedLessons: 10, // Example value
        avgScore: {score: 85, total: 100} // Example value
    };

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const completedLessons = document.getElementById('completedLessons');
    const avgScore = document.getElementById('avgScore');

    progressBar.value = profileData.progress;
    progressText.textContent = `${profileData.progress}%`;
    completedLessons.textContent = profileData.completedLessons;
    avgScore.textContent = `${profileData.avgScore.score}/${profileData.avgScore.total}`;

    document.getElementById('resetProgress').addEventListener('click', () => {
        profileData.progress = 0;
        profileData.completedLessons = 0;
        profileData.avgScore = {score: 0, total: 100};

        progressBar.value = profileData.progress;
        progressText.textContent = `${profileData.progress}%`;
        completedLessons.textContent = profileData.completedLessons;
        avgScore.textContent = `${profileData.avgScore.score}/${profileData.avgScore.total}`;
    });
});
