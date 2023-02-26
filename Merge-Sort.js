let numbers = [];
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
    let merge=mergeSort(numbers)
    console.log(merge)

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