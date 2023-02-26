const reverse_text = document.getElementById("reverse_string");
string_reverse=""
function reverseString(){
    let array_reverse = prompt("Enter a string to reverse it");
    array_reverse=array_reverse.split("")
    array_reverse.reverse()
    string_reverse=array_reverse.join("")
    console.log(typeof string_reverse)
    reverse_text.innerHTML=`${string_reverse}`
}
reverseString()