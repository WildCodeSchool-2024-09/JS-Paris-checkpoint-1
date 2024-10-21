const modifyButton = document.querySelector('#ModifyButton');
let userName = document.querySelector('#firstname')

modifyButton.addEventListener ('click', function() {
    prompt("What's your name"); 

})


    
const imgAvatar = document.querySelector("#avatar");

imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "image\avatar.svg";
    console.log("Bien joué");
  });