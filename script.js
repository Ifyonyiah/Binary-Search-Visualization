let numbers =[];
for(let i=1;i<101;i++)
{
    numbers.push(i);
}
numbers.forEach((number, index) =>{

    document.getElementById('grid').innerHTML +=`<div class ='node' id='node${number}'>${number}</div>`
})
function binarySearchCall(){
    Clear();
    const targetnum = document.getElementById('target').value;
    binarySearch(numbers,targetnum);
}
function Clear(){
    document.getElementById('grid').innerHTML = "";
    document.getElementById('answer').innerHTML ="<br>Answer: ";
    numbers.forEach((number, index) =>{

        document.getElementById('grid').innerHTML +=`<div class ='node' id='node${number}'>${number}</div>`;
    
    })}
function binarySearch(array, target, min, max) {

	if (min === undefined) min = 1;
	if (max === undefined) max = array.length;

    let mid = Math.floor(((max - min) / 2) + min);
    let elem = document.getElementById("node"+mid.toString());
    elem.style.backgroundColor ="#838718";
    elem.innerHTML="<"
    if(mid == target)
    {
            elem.style.backgroundColor = "#4CAF50";
            elem.innerHTML="<h2>"+mid+"</h2>";
            document.getElementById('answer').innerHTML+= mid;
            return mid;
        }
    else if (mid < target) {
        elem.style.backgroundColor = "#590c0c";
        elem.innerHTML = ">";
        return setTimeout(function(){binarySearch(array, target, mid + 1, max)},1000);
    }
	else if(mid > target){
        return setTimeout(function(){binarySearch(array, target, min, mid - 1)},1000);
    }  
}