const original = ["Dictionary", "Almanac", "Magazine", "Atlas"];
const copyOriginal = original.slice();

// display original array
document.getElementById("displayOriginalOrder").innerHTML = original;

// sort original order
function sortOriginalOrder()
{ 
    document.getElementById("buttonClicked").innerHTML = original;
    document.getElementById("sortType").innerHTML = "Original Order";
}
 
// sort alphabetically
function sortAlphabetical()
{
    var alphabetical = copyOriginal.sort();
    document.getElementById("buttonClicked").innerHTML = alphabetical;
    document.getElementById("sortType").innerHTML = "Alphabetical Order";
}

// sort reverse
function sortReverse()
{
    var reverse = copyOriginal.sort().reverse();
    document.getElementById("buttonClicked").innerHTML = reverse;
    document.getElementById("sortType").innerHTML = "Reverse Order";
}