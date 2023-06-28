function login(email, password) {

    if(password === "admin") {
        console.log("Login Succesfully")
        console.log(`User: ${email}`)
    } else {
        console.log("Email or Password is wrong")
    }
}

login("admin@mail.com", "admin")
