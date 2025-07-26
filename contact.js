// Get the contact form element by its ID
const form = document.getElementById('contactForm');

// Listen for the form's submit event
form.addEventListener('submit', function (e) {
  // Prevent the form from submitting the normal way (no page reload)
  e.preventDefault();

  // Clear previous error messages
  document.getElementById('firstNameError').textContent = '';
  document.getElementById('lastNameError').textContent = '';
  document.getElementById('phoneError').textContent = '';

  // Assume form is valid unless we find a problem
  let isValid = true;

  // Get the values from input fields and remove extra spaces
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const phone = form.phone.value.trim();

  // Pattern to validate phone numbers:
  // Allows numbers with optional + sign, spaces or dashes, 7 to 15 digits total
  const phonePattern = /^\+?[0-9\s\-]{7,15}$/;

  // Validate First Name: must not be empty
  if (firstName === '') {
    document.getElementById('firstNameError').textContent = 'Enter first name.';
    isValid = false;
  }

  // Validate Last Name: must not be empty
  if (lastName === '') {
    document.getElementById('lastNameError').textContent = 'Enter last name.';
    isValid = false;
  }

  // Validate Phone Number using the regular expression
  if (!phonePattern.test(phone)) {
    document.getElementById('phoneError').textContent = 'Enter valid phone number.';
    isValid = false;
  }

  // If all inputs are valid, show success message and reset form
  if (isValid) {
    alert('Thank you! Message sent.');
    form.reset(); // Clear all input fields
  }
});
