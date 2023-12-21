document.addEventListener('DOMContentLoaded', function () {
    // Validation function for the contact form
    function validateForm() {
      const form = document.getElementById('contactForm');
      const errorList = document.getElementById('errorList');
      
      // Clear previous errors
      errorList.innerHTML = '';
  
      // Validate first name
      const firstName = form.elements['firstName'].value.trim();
      if (firstName === '') {
        showError('First Name is required.');
      }
  
      // Validate email
      const email = form.elements['email'].value.trim();
      if (email === '') {
        showError('Email is required.');
      } else if (!isValidEmail(email)) {
        showError('Invalid email format.');
      }
  
      // Validate phone
      const phone = form.elements['phone'].value.trim();
      if (phone === '') {
        showError('Phone is required.');
      } else if (!isValidPhone(phone)) {
        showError('Invalid phone number format.');
      }
  
      // Validate state
      const state = form.elements['state'].value;
      if (state === '') {
        showError('Please select a state.');
      }
  
      // Validate gender (at least one must be selected)
      const gender = form.elements['gender'];
      if (!gender[0].checked && !gender[1].checked) {
        showError('Gender is required.');
      }
  
      // Validate interests (at least one must be selected)
      const interests = form.elements['interests[]'];
      let interestSelected = false;
      for (let i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
          interestSelected = true;
          break;
        }
      }
      if (!interestSelected) {
        showError('Select at least one interest.');
      }
  
      // Return true if there are no errors, false otherwise
      return errorList.children.length === 0;
    }
  
    // Function to display an error message
    function showError(message) {
      const errorItem = document.createElement('div');
      errorItem.textContent = message;
      errorItem.classList.add('text-danger');
      errorList.appendChild(errorItem);
    }
  
    // Function to check if an email is in a valid format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to check if a phone number is in a valid format
    function isValidPhone(phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
    }
  
    // Function to clear the form
    function clearForm() {
      const form = document.getElementById('contactForm');
      form.reset();
      const errorList = document.getElementById('errorList');
      errorList.innerHTML = '';
      form.elements['firstName'].focus();
    }
  
    // Attach functions to the form
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
      if (!validateForm()) {
        // Prevent form submission if there are errors
        event.preventDefault();
      }
    });
  });
  