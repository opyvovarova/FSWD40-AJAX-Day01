function loadit() {
var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200){
	document.getElementById("content").innerHTML = this.responseText;
	}
};
xhttp.open("GET", "text.txt", true);
xhttp.send();
}