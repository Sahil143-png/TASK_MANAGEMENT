// ===============================
// DASHBOARD JS
// ===============================


const taskContainer =
document.getElementById("taskContainer");



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];




function displayTasks(){


    if(!taskContainer)
        return;



    taskContainer.innerHTML="";



    tasks.forEach(task=>{


        taskContainer.innerHTML += `


        <div class="task-card">


            <h3>${task.title}</h3>


            <p>${task.description}</p>


            <span class="priority high">
                ${task.priority}
            </span>


            <p>
                Status: ${task.status}
            </p>



            <button onclick="deleteTask(${task.id})">

                Delete

            </button>


            <a href="edit-task.html?id=${task.id}">

                Edit

            </a>


        </div>


        `;


    });


}



function deleteTask(id){


    tasks =
    tasks.filter(task=>task.id!==id);


    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );


    displayTasks();


}



displayTasks();