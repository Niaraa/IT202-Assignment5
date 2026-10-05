function changePassword(event) {

    var password = document.getElementById("passwordBox");

    if (event.key == "Enter") {

        if (password.type == "password") {
            password.type = "text";
            password.style.backgroundColor = "purple";
        }
        else {
            password.type = "password";
            password.style.backgroundColor = "pink";
        }

    }
}