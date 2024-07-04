const form = document.querySelector('form');

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
const phone = document.getElementById("phone");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> 
    Email: ${email.value}<br>
    Phone Number: ${phone.value}<br>
    Message: ${mess.value}<br>`;

    Email.send({
        SecureToken: "f3960adc-5490-43d5-a2ae-61b960395cfe",
        To: 'mwangangioscar2016@gmail.com', // Ensure this is your correct email
        From: "mwangangioscar2016@gmail.com", // Use a professional email address linked to your domain
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Message failed to send. Please try again.",
                    icon: "error"
                });
            }
        }
    ).catch(error => {
        Swal.fire({
            title: "Error",
            text: `Message failed to send: ${error}`,
            icon: "error"
        });
    });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    });

    if (email.value.trim() !== "") {
        checkEmail();
    }

    email.addEventListener("keyup", checkEmail);

    items.forEach(item => {
        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    });
}

function checkEmail() {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = email.parentElement.querySelector('.error-txt');

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if (email.value !== "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        } else {
            errorTxtEmail.innerText = "Email Address cannot be blank";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
        errorTxtEmail.innerText = "";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    sendEmail();
});
