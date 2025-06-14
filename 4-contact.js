document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (name === "" || email === "" || message === "") {
    showMessage("Please fill in all fields", "red");
    return;
  }

  showMessage(
    `Thanks for contacting us, ${name}. Form submitted successfully!`,
    "green"
  );

  this.reset();
});

function showMessage(msg, color) {
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = msg;
  formMessage.style.color = color;
}
