module.exports = function(arr) {
  result = []
   for(let i = 0; i < arr.length; i++){
     if(arr[i] > 85) {
       result.push('A')
     } else if(arr[i] > 70) {
       result.push('B')
     } else if(arr[i] > 55) {
       result.push('C')
     } else if(arr[i] <= 55 && arr[i] > 0) {
       result.push('E')
     } else {
       result.push('no description')
     }
   }
   return result
}
