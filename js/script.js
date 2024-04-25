function showThankYou() {
  document.getElementById('thankYouMessage').style.display = 'block';
  return false; // Prevent form submission
}

function submitFeedback(event) {
  event.preventDefault(); // Prevent form submission
  document.getElementById('thankYouMessage').style.display = 'block';
  document.getElementById('feedbackForm').reset(); // Reset form fields if needed
}
