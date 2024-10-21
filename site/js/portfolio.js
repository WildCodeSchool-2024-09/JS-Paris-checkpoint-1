const imageAvatar = document.querySelector('#banner img')

imageAvatar.addEventListener('click', function() {
    imageAvatar.src = imageAvatar.src.endsWith('png') ? 'image/avatar.svg' : 'image/avatar-bis.png';
});

// Etape 3 : Modifier la source de l'image