function greetUser() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerHTML = "Please enter your name.";
    } else {
        message.innerHTML = "Hello, " + name + "! Welcome to my page.";
    }
}
