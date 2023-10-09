window.onload = async () => {
  const id = location.href.split("?")[1].split("=")[1];
  const res = await fetch(`http://localhost:4000/user-tasks?id=${id}`);
  const { tasks } = await res.json();
  console.log(tasks);

  const html = tasks.map((task, index) => {
    return `
                <tr>
                <td>${index + 1}</td>
                <td>${task.fname}</td>
                <td>${task.lname}</td>
                <td>${task.task}</td>
                <td>
                    <button class="btn btn-primary btn-complete" data-user='${JSON.stringify(
                      task
                    )}'>Complete</button>
                    <button class="btn btn-danger btn-reject" data-id="${
                      task.idtasks
                    }">Reject</button>
                </td>
                </tr>
            `;
  });
  document.querySelector("tbody").insertAdjacentHTML("afterend", html);

  const completeBtn = document.querySelectorAll(".btn-complete");
  const rejectBtn = document.querySelectorAll(".btn-reject");

  completeBtn.forEach((btn) => {
    btn.addEventListener("click", async function () {
      const user = JSON.parse(btn.getAttribute("data-user"));
      const reqBody = {userId: user.idusers, taskId: user.idtasks}
      const res = await fetch("http://localhost:4000/complete", {
        method: "PUT",
        body: JSON.stringify(reqBody),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      location.href = `/Client/dashboard.html`;
    });
  });

  rejectBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const userId = btn.getAttribute("data-user");
      console.log(userId);
      location.href = `/Client/assignTask.html`;
    });
  });
};
