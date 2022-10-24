function openclosed(){
var currentdate = new Date();
var currentday = currentdate.getDay();
var currenthour = currentdate.getHours();
//var currentminute = currentdate.getMinutes();

if(currentday >=1 && currentday <=5 && currenthour >= 10 && currenthour <= 18){
    document.getElementById("openclosed").style.color = "rgb(87, 155, 81)";
return("OTEVRENO");
}
else if(currentday == 6 && currenthour >= 9 && currenthour <=14){
    document.getElementById("openclosed").style.color = "rgb(87, 155, 81)";
    return("OTEVRENO");
}
else{
    document.getElementById("openclosed").style.color = "rgb(255, 73, 73)";
    return("ZAVRENO");
}
}

function bigpic(img) {
    viewwin = window.open(img.src,'viewwin', 'width=600,height=300');    
 }