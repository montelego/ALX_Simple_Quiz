function checkAnswer() {
    // Identify the Correct Answer
    var correctAnswer = "4";

    // Retrieve the User’s Answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');
    var userAnswer = selectedOption ? selectedOption.value : null;

    // Compare the User’s Answer with the Correct Answer
    var feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
