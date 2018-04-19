var x = Error('Invalid input');

var dnaTranscriber = function(){
}

dnaTranscriber.prototype.toRna = function(str){
    var arr = str.split('');
    for(var i =0; i < arr.length; i++){
        if (arr[i] == 'G') arr[i] = 'C';
        else if (arr[i] == 'C') arr[i] = 'G';
        else if (arr[i] == 'A') arr[i] = 'U';
        else if (arr[i] == 'T') arr[i] = 'A';
        else throw x;
    }

    str = arr.join('');
    return str;
    
}

module.exports = dnaTranscriber;