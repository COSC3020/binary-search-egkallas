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

//I got some help from this youtube video: https://www.youtube.com/watch?v=fDKIpRe8GW4&t=167s
//Also chat gpt helped me analyze what the unit tests were doing so I could figure out 
//how to pass the test that passed the function an array with the same 3 elements. 
