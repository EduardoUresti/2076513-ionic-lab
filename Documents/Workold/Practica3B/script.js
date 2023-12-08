const users = [];

function registro() {
  const userinput = document.getElementById("userinput").value;
  const password = document.getElementById("password").value;

  if (userinput && password) {
    const existingUser = users.find(user => user.userinput === userinput);
    if (existingUser) {
      document.getElementById("message").textContent = `El usuario ${userinput} ya existe`;
    } else {
      users.push({ userinput, password });
      document.getElementById("message").textContent = `Registro completo, ${userinput}!`;
    }
  } else {
    document.getElementById("message").textContent = "Llenar campos";
  }
}

function login() {
  const userinput = document.getElementById("userinput").value;
  const password = document.getElementById("password").value;

  const foundUser = users.find(user => user.userinput === userinput && user.password === password);

  if (foundUser) {
    document.getElementById("message").textContent = `Login exitoso ${userinput}`;
  } else {
    document.getElementById("message").textContent = "Usuario o password equivocado";
  }
}