window.onload = async () => {
  const res = await fetch("http://localhost:4000/info");
  const { users } = await res.json();

  const html = users.map((user, index) => {
    return `
            <tr>
                <td>${index + 1}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>
                    <button class="btn btn-primary btn-task" data-id="${
                      user.idusers
                    }">Assign</button>
                </td>
            </tr>
        `;
  });
  document.querySelector("tbody").insertAdjacentHTML("afterend", html);

  const assignBtn = document.querySelectorAll(".btn-task");

  assignBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const userId = btn.getAttribute("data-id");
      console.log(userId);
      location.href = `/Client/assignTask.html?id=${userId}`;
    });
  });
};
