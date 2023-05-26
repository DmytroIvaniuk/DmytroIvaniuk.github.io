function showFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
}

function moveHeader() {
    let header = document.getElementById("header");
    if (header.style.left === "0px") {
        header.style.left = "-300px";
        header.style.transition = "all 0.5s";
    } else {
        header.style.left = "0";
        header.style.transition = "all 0.5s";
    }

}