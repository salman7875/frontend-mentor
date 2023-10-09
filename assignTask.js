const task = document.querySelector(".task");
const assignDate = document.querySelector(".assignDate");
const dueDate = document.querySelector(".dueDate");
const submitBtn = document.querySelector(".submit");

const submitData = async (e) => {
  e.preventDefault();
  const data = {
    task: task.value,
    assignDate: assignDate.value,
    dueDate: dueDate.value,
  };
  const id = location.href.split("?")[1].split("=")[1];
  console.log(data);
  try {
    const response = await fetch(`http://localhost:4000/assign?id=${id}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    location.href = `/Client/dashboard.html`
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

submitBtn.addEventListener("click", submitData);
