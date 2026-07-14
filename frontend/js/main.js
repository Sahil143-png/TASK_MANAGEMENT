// ===============================
// TASKFLOW - MAIN JS
// ===============================


// Check current user login

const user = localStorage.getItem("user");


if(!user){

    console.log("User not logged in");

}



// Logout Function

const logoutBtn = document.getElementById("logoutBtn");


if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{


        localStorage.removeItem("user");

        window.location.href="login.html";


    });

}