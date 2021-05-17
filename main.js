list_of_pizzas = ["Veg Magherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
function getmenu()
{
var htmldata;
htmldata="<ol class='menulist'>"
list_of_pizzas.sort();
for(var i=0;i<list_of_pizzas.length;i++){
    htmldata=htmldata+'<li>' + list_of_pizzas[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item()
{
var htmldata;
var item=document.getElementById("add_item").value;
list_of_pizzas.sort();
htmldata="<section class='cards'>"
for(var i=0;i<list_of_pizzas.length;i++){
htmldata=htmldata+'<div class="card">'+'<img src="pizzaImg.png" />'+list_of_pizzas[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
function add_top()
{
var item=document.getElementById("add_item").value;
list_of_pizzas.push(item);
add_item();
} 