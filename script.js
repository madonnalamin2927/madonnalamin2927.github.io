document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comments = document.getElementById("comments").value.trim();

  if (name && email && comments) {
    document.getElementById("feedbackMsg").textContent =
      "Thank you for your feedback, " + name + "!";
    this.reset();
  } else {
    document.getElementById("feedbackMsg").textContent =
      "Please fill in all the fields.";
  }
});
