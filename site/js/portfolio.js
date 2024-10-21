const imageAvatar = document.querySelector('#banner img')

imageAvatar.addEventListener('click', function() {
    imageAvatar.src = imageAvatar.src.endsWith('png') ? 'image/avatar.svg' : 'image/avatar-bis.png';
});

const editFirstnameButton = document.querySelector('#edit-firstname')

editFirstnameButton.addEventListener('click', function() {
    let color = prompt('Couleur : ')

    const backgrounds = document.querySelectorAll('.description.pink-bg')

    for (let background of backgrounds) {
        background.style.backgroundColor = color;
    }

    let firstname = prompt('Ton prénom :');
    let actualFirstname = document.querySelector('#firstname')

    actualFirstname.textContent = firstname;
    actualFirstname.style.color = 'white';
});


// Etape 7 : Remplacer + couleur