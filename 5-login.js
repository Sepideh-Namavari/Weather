document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = this.email.value;
  const password = this.password.value;

  if (email === "test@example.com" && password === "1234") {
    showMsg("Login successful ✅", "green");
  } else {
    showMsg("Invalid email or password ❌", "red");
  }
});

function showMsg(msg, color) {
  const msgDiv = document.getElementById("loginMessage");
  msgDiv.textContent = msg;
  msgDiv.style.color = color;
}
