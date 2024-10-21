const myImage =document.getElementById("myImage")
const changeimg=["image/avatar.svg"]

myImage.addEventListener("click", function() {
    myImage.src = changeimg
  });

const name = document.getElementById("firstname")
const modify =document.getElementById("modify-name")

modify.addEventListener("click", function() {
    const test= prompt("Quel est ton Nom ?");

  });