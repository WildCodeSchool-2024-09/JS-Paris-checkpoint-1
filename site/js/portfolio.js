const avatar = document.querySelector("#avatar");
const userName = document.querySelector("#firstname");
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
const modifyTheme = document.querySelector("#modify");
const links = document.querySelectorAll("a");
const modifyFront = document.querySelector("#bttn-front-skills");
const frontList = document.querySelector("#front-dev-tools");
const modifyBack = document.querySelector("#bttn-back-skills");
const backList = document.querySelector("#back-dev-tools");

avatar.addEventListener("click", () => {
	if (avatar.src.slice(-7) === "bis.png") {
		avatar.src = "./image/avatar.svg";
	} else avatar.src = "./image/avatar-bis.png";
});

modifyTheme.addEventListener("click", () => {
	const newName = prompt("What is your name ?");
	const newColor = prompt("Pick a color (hex, rgb or hsl)");
	userName.innerText = newName;
	userName.style.color = "#ffffff";
	/* Bug : for in au lieu de for of */
	for (const elementBg of pinkBg) {
		elementBg.style.backgroundColor = newColor;
	}
	for (const elementText of pinkText) {
		elementText.style.color = newColor;
	}
	for (const link of links) {
		link.style.color = newColor;
	}
});

modifyFront.addEventListener("click", () => {
	const list = frontList.querySelectorAll("li");
	const skills = ["VSCode", "GitHub", "Terminal"];
	for (const i in list) {
		list[i].innerText = skills[i];
	}
});

// Bug : added.skill au lieu de added-skill
modifyBack.addEventListener("click", () => {
	const addedSkill = document.createElement("li");
	addedSkill.innerText = document.querySelector("#added-skill").value;
	backList.appendChild(addedSkill);
});
