// ===============================
// CREATE TASK JS
// ===============================


const createTaskForm =
document.getElementById("createTaskForm");



if(createTaskForm){


createTaskForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const task = {


        id:Date.now(),


        title:
        document.getElementById("title").value,


        description:
        document.getElementById("description").value,


        priority:
        document.getElementById("priority").value,


        status:
        document.getElementById("status").value,


        dueDate:
        document.getElementById("dueDate").value


    };



    let tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];



    tasks.push(task);



    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );



    alert("Task Created");


    window.location.href="dashboard.html";


});


}