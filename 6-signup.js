document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const password = this.password.value;

  if (name && email && password.length >= 4) {
    showMsg("Sign up successful 🎉", "green");
    this.reset();
  } else {
    showMsg("Please fill all fields correctly ❌", "red");
  }
});

function showMsg(msg, color) {
  const msgDiv = document.getElementById("signupMessage");
  msgDiv.textContent = msg;
  msgDiv.style.color = color;
}
