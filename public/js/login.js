const signUpForm = document.querySelector(".signup");

const signUpLogic = async (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value.trim();

  const password = document.querySelector("#password").value.trim();

  const email = document.querySelector("#email").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
  }
};

signUpForm.addEventListener("submit", signUpLogic);
