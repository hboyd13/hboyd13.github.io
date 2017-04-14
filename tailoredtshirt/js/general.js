// document.getElementById( 'sizes' ).style.display = 'none';

// document.getElementById('up').onmouseover = function(){
//    document.getElementById('sizes').style.display = 'block';
// }
// document.getElementById('up').onmouseout = function(){
//    document.getElementById('sizes').style.display = 'none';
// }

document.getElementById("tshirts").style.display = "none";

document.getElementById("dropUp").onmouseover = function(){
	document.getElementById("tshirts").style.display = "block";
}
document.getElementById("dropUp").onmouseout = function() {
	document.getElementById("tshirts").style.display = "none";
}

document.getElementById("colors").style.display = "none";

document.getElementById("color-box").onmouseover = function() {
	document.getElementById("colors").style.display = "block";
}
document.getElementById("color-box").onmouseout = function() {
	document.getElementById("colors").style.display = "none";
}