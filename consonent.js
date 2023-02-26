const text = document.getElementById("text");
array_consonant = [];
function consonant_reverse() {
    let consonant = prompt("Enter a string");
    for (let i = 0; i < consonant.length; i++) {
        if (consonant[i].toLowerCase == 'a' || consonant[i].toLowerCase == 'e' || 
        consonant[i].toLowerCase == 'i' || consonant[i].toLowerCase == 'o' || consonant[i].toLowerCase == 'u'){
            consonant=consonant.slice(consonant[i]); 
            array_consonant.unshift(consonant)
            break
        }
            else{
                array_consonant.unshift(consonant[i])


            }

    }
    string_consonant=array_consonant.join("")
    text.innerHTML=`${string_consonant}ay`


}
consonant_reverse()