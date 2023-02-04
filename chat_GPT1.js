<form id="loginForm">
  <div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
  </div>
  <button type="submit">Submit</button>
</form>

<script>
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Do validation or send data to the server for authentication here.

    console.log("Username:", username);
    console.log("Password:", password);
  });
</script>
