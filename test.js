var a = ["a","b","c","d","e","f","g","h","i","j","k","l"];

var perPage = 5;
var currentPage = 0;
var numberOfPages = Math.ceil(a.length/perPage);

function paginate(array,perPage,currentPage){
    var startIndex = currentPage*perPage;
    var endIndex = startIndex+perPage;
    return array.slice(startIndex,endIndex);
}

