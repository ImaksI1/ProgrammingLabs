const form = document.getElementById("form");
const regButton = document.getElementById("RegButton")
const clearButton = document.getElementById("ClearButton")

let errors = [];

const getData = () => {

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    errors = [];

    const data = new FormData(form);
    let name = data.get("nazwa");
    let email = data.get("email");
    let password = data.get("password");
    let repassword = data.get("repassword");
    let birthday = data.get("birthday");
    let plec = data.get("płec");
    let accept = data.get("accept");
    let version = data.get("choice");

    if (!name || !email || !password || !repassword || !birthday || !plec || !accept || !version) {
        errors.push("Nie wszystkie pola są wypełnione");
    }
    if (password && password.length < 8) {
        errors.push("Hasło min 8 znaków");
    }

    if (password !== repassword) {
        errors.push("Hasła są różne");
    }
    if (!email.includes("@")) {
        errors.push("Nie poprawny email")
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert("Formularz został poprawnie wysłany!");
        form.reset();
    }

});

clearButton.addEventListener("click", () => {
    form.reset();
})
