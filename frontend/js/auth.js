// ===============================
// AUTHENTICATION JS
// ===============================



// Register

const registerForm = document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    const name =
    document.getElementById("name").value;


    const email =
    document.getElementById("email").value;


    const password =
    document.getElementById("password").value;



    const user = {

        name,
        email,
        password

    };


    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );



    alert("Registration Successful");


    window.location.href="dashboard.html";



});


}







// Login


const loginForm = document.getElementById("loginForm");


if(loginForm){


loginForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const email =
    document.getElementById("email").value;



    const password =
    document.getElementById("password").value;



    const user =
    JSON.parse(localStorage.getItem("user"));



    if(user && user.email===email 
        && user.password===password){



        alert("Login Successful");


        window.location.href="dashboard.html";



    }

    else{


        alert("Invalid Email or Password");


    }



});


}