const name = document.getElementById("name");
const last_name = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const error_paragraph = document.getElementById("error_message")
const confirm_password=document.getElementById("password_confirmation")

let users_info=[]

button.addEventListener("click", validation);
function validation(e) {
    let error_message = [];
    let mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!email.value.match(mailformat)) {
        error_message.push("* Invalid email address <br>")
    }
    let password_format=/^(?=.*[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/
    if(!password.value.match(password_format)){
        error_message.push("* Password should contain 8 characters minimum, one special character minimum, at least one upper case letter<br>")
    }
    if(password.value!=confirm_password.value){
        error_message.push("* Password not match <br>")
    }
    if (error_message.length > 0) {
        e.preventDefault()
        error_paragraph.innerHTML=error_message.join(" ")
    }
    if(error_message.length==0){
        users_info_object={
            user_name : name.value,
            users_last_name:last_name.value,
            users_email:email.value,
            users_password:password.value,
        }
        users_info.push(users_info_object);
        console.log(users_info)

    }

}
