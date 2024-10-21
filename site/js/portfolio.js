document.addEventListener('DOMContentLoaded', function() {
    
    const avatarImage = document.querySelector('.avatar');
    avatarImage.addEventListener('click', function() {
        avatarImage.src = "image/avatar.svg";
    });

    
    const firstname = document.querySelector('.firstname'); 
    const changeNameButton = document.getElementById('nomton');

    changeNameButton.addEventListener('click', function() {
        const reponse = prompt("Enter your name:");
        if (reponse) {
            firstname.textContent = reponse; 
        }
    });
});