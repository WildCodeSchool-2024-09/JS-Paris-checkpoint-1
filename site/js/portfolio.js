const avatarImage = document.getElementById('avatar');

avatarImage.addEventListener('click', function() {
    avatarImage.src = 'C:/Users/gaming/Documents/wild code school/checkpoint_1/JS-Paris-checkpoint-1/site/image/avatar.svg';
});



document.getElementById('buttonfirstname').addEventListener('click', function() {
    const color =prompt('la couleur :')
    const nom = prompt('Votre nom :');
    if (nom) {
        document.getElementById('firstname').innerText = `${nom}`;
        document.getElementById('firstname').style.color='#f5f5f5';
        document.getElementById('buttonfirstname').style.backgroundColor =`${color}`;
        const descriptions = document.getElementsByClassName('description pink-bg');
        for (let i = 0; i < descriptions.length; i++) {
            descriptions[i].style.backgroundColor = color;
        }
        const pinkTexts = document.getElementsByClassName('pink-text');
        for (let i = 0; i < pinkTexts.length; i++) {
            pinkTexts[i].style.color = color;
        }
    }}) 