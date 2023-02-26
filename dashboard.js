const user_name_dashboard = document.getElementById("user_name_dashboard")
const stored_user = JSON.parse(localStorage.getItem('users'));
get_user_name=stored_user[stored_user.length-1].user_name
user_name_dashboard.innerHTML=get_user_name