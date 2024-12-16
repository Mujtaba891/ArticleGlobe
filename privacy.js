document.addEventListener("DOMContentLoaded", () => {
  const acceptTermsCheckbox = document.getElementById("acceptTerms");
  const proceedToUploadButton = document.getElementById("proceedToUpload");

  // Enable button if checkbox is checked
  acceptTermsCheckbox.addEventListener("change", () => {
    proceedToUploadButton.disabled = !acceptTermsCheckbox.checked;
  });

  // Redirect to upload article page
  proceedToUploadButton.addEventListener("click", () => {
    window.location.href = "upload.html"; // Change the URL to the actual upload article page
  });

  // Top button functionality
  document.getElementById("goToUpload").addEventListener("click", () => {
    window.location.href = "upload.html"; // Change the URL to the actual upload article page
  });
});