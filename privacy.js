/*document.addEventListener("DOMContentLoaded", () => {
  const acceptTermsCheckbox = document.getElementById("acceptTerms");
  const proceedToUploadButton = document.getElementById("proceedToUpload");

  // Enable button if checkbox is checked
  acceptTermsCheckbox.addEventListener("change", () => {
    proceedToUploadButton.disabled = !acceptTermsCheckbox.checked;
  });

  // Redirect to upload article page
  proceedToUploadButton.addEventListener("click", () => {
    window.location.href = "./upload.html"; // Change the URL to the actual upload article page
  });

  // Top button functionality
  document.getElementById("goToUpload").addEventListener("click", () => {
    window.location.href = "./upload.html"; // Change the URL to the actual upload article page
  });
});*/
// Select elements
const uploadHereButton = document.getElementById('uploadHere');
const uploadMessage = document.getElementById('uploadMessage');
const acceptTermsDiv = document.getElementById('acceptTermsDiv');
const acceptTermsCheckbox = document.getElementById('acceptTerms');
const uploadButton = document.getElementById('uploadButton');

// Add click event to the "here" button
uploadHereButton.addEventListener('click', () => {
  // Make the paragraph vibrate
  uploadMessage.classList.add('vibrate');
  
  // Show the message
  uploadMessage.textContent = 'Read the terms and conditions to upload your article!';
  
  // Show the checkbox for terms
  acceptTermsDiv.style.display = 'block';

  // Stop the vibration after 0.5 seconds
  setTimeout(() => {
    uploadMessage.classList.remove('vibrate');
  }, 500);
});

// Add change event to the checkbox
acceptTermsCheckbox.addEventListener('change', () => {
  // Show the upload button if the checkbox is checked
  if (acceptTermsCheckbox.checked) {
    uploadButton.style.display = 'block';
  } else {
    uploadButton.style.display = 'none';
  }
});

// Redirect function for the upload button
function redirectToUpload() {
  window.location.href = 'upload.html';
}