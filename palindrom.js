palindrom_print=document.getElementById("palindrom_print");
function getvalue() {
    let str = prompt("Enter a sring to check if it is palindrom");
    is_palindrom=checkPalindrome(str);
    palindrom_print.innerHTML=`${is_palindrom} palindrom`
}
function checkPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
    return false;
}
getvalue()