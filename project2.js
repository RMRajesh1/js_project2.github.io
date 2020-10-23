var source = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function hex(){
	let color = "";
	for (let i=0; i<6; i++){
		let pick = Math.round(Math.random() * (source.length-1));
		color += source[pick];
	}
	document.getElementById("display").innerText = "#"+color;
	document.body.style.backgroundColor = "#"+color;
}