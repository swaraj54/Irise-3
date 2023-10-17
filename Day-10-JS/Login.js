function Login(event) {
    event.preventDefault();
    // alert("Working..")
    // console.log(document.getElementById("email").value)
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
    // console.log(userEmail, userPassword)
    if (userEmail && userPassword) {
        const userData = { email: userEmail, password: userPassword };
        localStorage.setItem("UserCreds", JSON.stringify(userData))
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        return alert("Data added successfully.")
    } else {
        return alert("All fields are mandatory.")
    }
}