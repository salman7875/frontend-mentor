const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signinBtn = document.querySelector("#signin");

const submitBtn = async (e) => {
  e.preventDefault();

  const data = {
    email: email.value,
    password: password.value,
  };
  try {
    const response = await fetch("http://localhost:4000/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    window.location.href = "/Client/dashboard.html";
    console.log(res);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

signinBtn.addEventListener("submit", submitBtn);
