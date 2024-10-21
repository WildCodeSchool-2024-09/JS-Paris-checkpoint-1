document.addEventListener('DOMContentLoaded', function() {
    
    const avatarImage = document.querySelector('.avatar');
    avatarImage.addEventListener('click', function() {
        avatarImage.src = "image/avatar.svg";
    });

    
    const firstname = document.querySelector('.firstname'); 
    const changeNameButton = document.getElementById('changeNameButton');

    changeNameButton.addEventListener('click', function() {
        const reponse = prompt("Entrez votre nom :");
        if (reponse) {
            firstname.textContent = reponse; 
            firstname.style.color = 'white';
        }
    });
});