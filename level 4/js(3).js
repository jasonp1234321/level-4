//searches array for a specific item
function countDuplicates(arr, item){  
    var itemCount = 0;
  
    for(var i = 0; i < arr.length; i++){
      if(item == arr[i]){
        itemCount++;
      }
    }
    return itemCount;
  }
  
  //generates an array of all the indices that the item appears in the array
  function indexesOf(arr, item){
    var idxList = [];
  
    for(var i = 0; i < arr.length; i++){
      if(item == arr[i]){
        idxList.push(i);
      }
    }
    return idxList;
  }