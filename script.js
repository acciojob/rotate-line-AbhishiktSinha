//your JS code here. If required.

const line = document.querySelector("#line");
let angle = 2;

function rotate() {
	line.style.transform = `rotate(${angle}deg)`;
	angle += 2;
}

const id = setInterval(rotate, 20);
setTimeout(()=>{
	clearInterval(id)
}, 4000);