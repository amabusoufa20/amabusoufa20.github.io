// Contact form validation
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
  // Stop the page from reloading
  event.preventDefault();

  // Read the values and remove extra spaces
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value;
  const comments = document.getElementById("comments").value.trim();

  // 1. Check that every field is filled in
  if (fullName === "" || email === "" || country === "" || comments === "") {
    errorMsg.textContent = "Please fill in all fields before submitting.";
    return;
  }

  // 2. Extra check: the email must look like a real email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  // 3. Everything is valid: confirm and clear the form
  errorMsg.textContent = "";
  alert("Thank you, " + fullName + "! Your form was submitted successfully.");
  form.reset();
});
