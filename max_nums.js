// start coding your function here!

function find_max(arr){
    max = arr[0];
    for(i = 1; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
        }
    }
    return max;
}

exports.find_max = find_max;