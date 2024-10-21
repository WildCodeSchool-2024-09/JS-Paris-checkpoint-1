// changer l'image de l'avatar

const imgAvatar = document.querySelector("#avatar");

imgAvatar.addEventListener("click", () => {
	imgAvatar.src = "image/avatar.svg";
	imgAvatar.alt = "Avatar 2";
});

//   changer le nom et la couleur
const firstName = document.querySelector("#firstname");
const button = document.querySelector("#replaceName");
const paragraphs = document.querySelectorAll(".description.pink-bg")
const textColor = document.querySelectorAll(".pink-text")

button.addEventListener("click", () => {
	const userInput = prompt("Please enter some text:");
	console.log(userInput);
	firstName.textContent = userInput;
	firstName.style.color = "white";
    paragraphs.forEach((element) => {
		element.style.backgroundColor = "#750ff7";
	});
    textColors.forEach((element) => {
		element.style.color = "#750ff7";
	});
})
