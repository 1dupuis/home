document.getElementById('resetProgress').addEventListener('click', function() {
    if (confirm('Are you sure you want to reset your progress?')) {
        alert('Progress has been reset.');
        // Logic to reset progress can be added here, e.g., resetting scores or clearing localStorage
    }
});
