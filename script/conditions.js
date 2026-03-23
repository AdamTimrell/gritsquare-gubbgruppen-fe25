document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('termsPopup');
  const acceptBtn = document.getElementById('acceptBtn');
  const declineBtn = document.getElementById('declineBtn');
  const agreeCheckbox = document.getElementById('agreeCheckbox');

  // Show popup on load
  popup.style.display = 'flex';

  // Enable accept button only if checkbox is checked
  agreeCheckbox.addEventListener('change', function() {
    acceptBtn.disabled = !this.checked;
  });

  // Accept: hide popup
  acceptBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Decline: redirect to Google
  declineBtn.addEventListener('click', function() {
    window.location.href = 'https://www.google.com';
  });
});