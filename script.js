//to get form and task list
const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

//add task event
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Get Form Value
    const date = document.getElementById('task-date').value;
    const time = document.getElementById("task-time").value;
    const details = document.getElementById("task-details").value;

    //create task element
    const task = document.createElement("div");
    task.className = "task";

    //create task content
    const taskContent = document.createElement("span");
    taskContent.innerHTML = `Date : ${date}<br>Time : ${time}<br>Details : ${details}`;

    //create Delete Button
    const deletBtn = document.createElement("span");
    deletBtn.className = "delete";
    deletBtn.innerHTML = "Delete";
    deletBtn.addEventListener("click", () => {
        task.remove()
    })

   // Append task content on delete button to task element
   task.appendChild(taskContent);
   task.appendChild(deletBtn);
   
   //Append task element to task list
   taskList.appendChild(task);

   //Append task element to task list
   document.getElementById("task-date").value = "";
   document.getElementById("task-time").value = "";
   document.getElementById("task-details").value = "";
})