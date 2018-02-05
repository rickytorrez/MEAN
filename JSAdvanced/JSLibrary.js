var _ = {
    map: function(array, callback){
        for (let i=0; i<array.length; i++){
            arra[i] = callback(array[i]);
        }
        return array;
    },

    reduce: function(array, callback, num){
        for (let i=0; i<array.length; i++){
            num += array[i];
        }
        return num;
    },

    find: function(array, callback){
        for (let i=0; i<array.length; i++){
            if(callback(array[i])){
                return array[i];
            }
        }
    },

    filter: function(array, callback){
        var newArr = [];
        for (let i=0; i<array.length; i++){
            if(callback(array[i])){
                newArr.push(array[i]);
            }
        }
    },
    reject: function(array, callback) {
        var newArr = [];
        for(let i=0; i<array.length; i++){
            if(callback(array[i])){
              newArr.push(i);
            }
        }
        return newArr;
    }
}


