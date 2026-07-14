// ===============================
// PROFILE JS
// ===============================


const user =
JSON.parse(localStorage.getItem("user"));



if(user){


document.getElementById("userName").innerText =
user.name;


document.getElementById("userEmail").innerText =
user.email;


document.getElementById("name").value =
user.name;


document.getElementById("email").value =
user.email;


}