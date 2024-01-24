function binarySearch(list, element) {

    var left = 0;
    var right = list.length - 1;
    
if (list[0] == element) 
    return 0;

 else
     while (left <= right){

         var mid = Math.floor((right + left) / 2);

            if (list[mid] == element)
                return mid;

            else if (list[mid] < element)
                left = mid + 1;

            else
                right = mid - 1;
        }
    return -1;
}
