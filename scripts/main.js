function showFormData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phonenum").value;
    let message = document.getElementById("message").value;

    alert(`Firs Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`);
}