const img = document.getElementById("logo");
const color = document.querySelector(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");
const link = document.querySelectorAll("a");

img.addEventListener("click", () => {
	img.src = "image/avatar.svg";
});

function changeName() {
	let name = prompt("Enter your name:");

	if (name) {
		let firstname = document.getElementById("firstname");
		firstname.innerHTML = name;
		firstname.style.color = "#ffffff";
	}
}

function changeColor() {
	let newColor = prompt("Enter a color:");
	if (newColor) {
		color.style.backgroundColor = newColor;
		promptbutton.style.backgroundColor = newColor;
		textColor.forEach((element) => (element.style.color = newColor));
		link.forEach((element) => (element.style.color = newColor));
	}
}

promptbutton.addEventListener("click", function () {
	changeColor();
	changeName();
});
