 var palindrometestarray = ["b","b","a","b","a","b","a","g"];

 function findLongestPalindrome(array){
     var start = Number(0);
     var end = Number(0);
    for(let i =0;i <array.length;i++){
        let len1 = expandFromMiddle(array,i,i);
        let len2 = expandFromMiddle(array,i,i+1);
        let len = Math.max(len1,len2);
        if( len > end - start){
            start = i - ((len -1)/2)-1;
            end = Math.floor(i + (len/2));
        }
     }
     console.log(start+","+end);
     return start + end;

 }
function expandFromMiddle(array,left,right){

     while(left>0 && right < array.length && array[left].value == array[right].value) {
         right++;
         left--;

     }
    
    return  right - left -1;
     console.log(left+","+right);
 }
 
 findLongestPalindrome(palindrometestarray);
