// let container=document.querySelector('.main-container')

// window.onload=async()=>{
//     const data=await fetch('http://localhost:3000/getTask')
//     const res= await data.json()
//     // console.log(res);
//     container="";
//     res.map((val)=>{
//         console.log(val.taskAssign);
//         container=`
//         <p class="text-uppercase fs-4 fw-medium">${val.taskAssign}</p>
//             <button class="btn btn-outline-secondary" type="button">Done</button>
//             <button class="btn btn-outline-secondary" type="button">Extend</button>
//             <button class="btn btn-outline-secondary" type="button">Not eligible</button>
//         `
//     })
// }
let container = document.querySelector(".main-container");

window.onload = async () => {
  const data = await fetch("http://localhost:3000/getTask");
  const res = await data.json();

  // Initialize container content
  container.innerHTML = "";

  res.forEach((val) => {
    console.log(val.taskAssign);

    // Create a new element to hold the task content
    const taskElement = document.createElement("div");

    // Set the content for the task element
    taskElement.innerHTML = `
            <p class="text-uppercase fs-4 fw-medium">${val.taskAssign}</p>
            <button class="btn btn-outline-secondary" type="button">Done</button>
            <button class="btn btn-outline-secondary" type="button">Extend</button>
            <button class="btn btn-outline-secondary" type="button">Not eligible</button>
        `;

    // Append the task element to the container
    container.appendChild(taskElement);
  });
};

// FETCHING ALL TASK
window.onload = async () => {
  const res = await fetch("http://localhost:4000/tasks");
  const data = await res.json();
  const html = data.tasks.map((task) => {
    return `
      <tr>
        <td>${task.idtasks}</td>
        <td>${task.task}</td>
        <td>${task.fname}</td>
        <td>${
          !task.completed && !task.rejected
            ? "Pending"
            : task.completed
            ? "Completed"
            : task.rejected
            ? "Rejected"
            : "Pending"
        }</td>
      </tr>
    `;
  });

  document.querySelector("tbody").insertAdjacentHTML("afterend", html);
};
