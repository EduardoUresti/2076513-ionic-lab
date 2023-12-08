let registeredUser = "";
const validUsername = "usuario";
const validPassword = "contraseña";

function verifyLogin() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  if (usernameInput === validUsername && passwordInput === validPassword) {
    login();
  } else {
    document.getElementById("message").textContent = "Login incorrecto";
  }
}

function login() {
  document.getElementById("message").textContent = "Login correcto";
}

function registro() {
  const username = document.getElementById("username").value;
  registeredUser = username;
  document.getElementById("message").textContent = "Registro correcto. Usuario: " + username;
}