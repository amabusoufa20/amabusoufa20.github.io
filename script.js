const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value;
  const comments = document.getElementById("comments").value.trim();

  if (fullName === "" || email === "" || country === "" || comments === "") {
    errorMsg.textContent = "Please fill in all fields before submitting.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = "";
  alert("Thank you, " + fullName + "! Your form was submitted successfully.");
  form.reset();
});
