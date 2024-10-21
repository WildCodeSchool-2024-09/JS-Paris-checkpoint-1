const avatar = document.getElementById("avatar")

avatar.addEventListener('click', function(){
    avatar.src = 'image/avatar.svg'
})

const firstName = document.getElementById('firstname');
const button = document.getElementById('button');
const bgcolor = document.querySelectorAll('.pink-bg');
const textcolor = document.querySelectorAll('.pink-text');

button.addEventListener('click', function() {
    const newColor = prompt('Enter a color:');
    const newName = prompt('Enter your name:');
    
    if (newColor) {
        bgcolor.forEach(function(element) {
            element.style.backgroundColor = newColor;
        });
        textcolor.forEach(function(element) {
            element.style.color = newColor
        });

    }
    
    if (newName) {
        firstName.innerHTML = newName;
        firstName.style.color = 'white';
    }    
});

