const before_merge = document.getElementById("before_sort");
const after_merge = document.getElementById("after_sort");
const code = document.getElementById("code")
let numbers = [];
let mergedNumber=[]
function Input(){
    for(let i = 0; i < 10; i++){
        let number=parseInt(prompt("Enter a number"))
        if(!Number.isNaN(number) ){
            numbers.push(number);

        }
        else{
           i--
           alert("we did not add this because it is not a number")
        }
        
    }
     mergedNumber =mergeSort(numbers)
     before_merge.innerHTML=`${numbers.join(", ")}`
     after_merge.innerHTML=`${mergedNumber.join(", ")}`
     code.innerHTML=`function merge(arr1, arr2) {
        let i = 0;<br>
        let j = 0;<br>
        let results = [];<br>
        while(i < arr1.length && j < arr2.length) {<br>
         if (arr2[j] > arr1[i]) {<br>
          results.push(arr1[i]);<br>
          i++;  <br>
         }else {<br>
          results.push(arr2[j])<br>
          j++<br>
         }<br>
        }<br>
        while(i < arr1.length){<br>
         results.push(arr1[i]);<br>
         i++;<br>
        }<br>
        while(j < arr2.length){<br>
         results.push(arr2[j]);<br>
         j++;<br>
        }<br>
        return results<br>
       }<br>
    
       function mergeSort(arr){<br>
        if (arr.length <= 1) return arr;<br>
        
        let mid = Math.floor(arr.length/2);<br>
        let left = mergeSort(arr.slice(0, mid));<br>
        let right = mergeSort(arr.slice(mid));<br>
         return merge(left, right);<br>
       }
    `

}
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;  
     }else {
      results.push(arr2[j])
      j++
     }
    }
    while(i < arr1.length){
     results.push(arr1[i]);
     i++;
    }
    while(j < arr2.length){
     results.push(arr2[j]);
     j++;
    }
    return results
   }

   function mergeSort(arr){
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
     return merge(left, right);
   }



Input()
console.log(mergedNumber)