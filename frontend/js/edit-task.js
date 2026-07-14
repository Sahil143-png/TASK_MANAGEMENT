// ===============================
// EDIT TASK JS
// ===============================


const params =
new URLSearchParams(window.location.search);


const id =
Number(params.get("id"));



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



let task =
tasks.find(task=>task.id===id);




if(task){


document.getElementById("title").value =
task.title;


document.getElementById("description").value =
task.description;


document.getElementById("priority").value =
task.priority;


document.getElementById("status").value =
task.status;


document.getElementById("dueDate").value =
task.dueDate;


}






const editForm =
document.getElementById("editTaskForm");



if(editForm){


editForm.addEventListener("submit",(e)=>{


e.preventDefault();



task.title =
document.getElementById("title").value;


task.description =
document.getElementById("description").value;


task.priority =
document.getElementById("priority").value;


task.status =
document.getElementById("status").value;



localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);



alert("Task Updated");


window.location.href="dashboard.html";


});


}