


const avatar2 = document.querySelector('#avatar');
avatar2.addEventListener('click', function () {
    avatar2.src="/site/image/avatar.svg";
  });

   const button = document.getElementById('modifynameandcolor');
  button.addEventListener('click', function () {
    const mot = prompt("saisis ton nom", "");
    const phrase = document.getElementById('sentence');
    const oldname = document.getElementById('firstname');
    // oldname.innerText.style.color="white";
    phrase.innerHTML = phrase.innerHTML.replace(oldname.innerText,mot);
    const block=document.getElementById("section2");
    block.style.backgroundColor = '#750ff7';
    const changeColor1=document.getElementsByClassName("pink-bg");
    for (let i = 0; i < changeColor1.length; i++) {
        changeColor1[i].style.backgroundColor = '#750ff7';

    }
    const changeColor2=document.getElementsByClassName("pink-text");
    for (let i = 0; i < changeColor2.length; i++) {
        changeColor2[i].style.color = '#750ff7';

    }
    const changeColor3=document.getElementsByTagName("a");
    for (let i = 0; i < changeColor3.length; i++) {
        changeColor3[i].style.color = '#750ff7';

    }
    });

    const modify = document.querySelector('#modify');
modify.addEventListener('click', function () {
    const oldUl = document.getElementById("front-dev-tools");
    console.log(oldUl);
    oldUl.innerHTML="";

    const newli = document.createElement('li');
    newli.textContent = 'VsCode';
    oldUl.appendChild(newli);

    const newli2 = document.createElement('li');
    newli2.textContent = 'github';
    oldUl.appendChild(newli2);

    const newli3 = document.createElement('li');
    newli3.textContent = 'Terminal';
    oldUl.appendChild(newli3);
    
});

const input = document.getElementById("inputs");
const addbutton = document.getElementById("addbutton");

addbutton.addEventListener('click', function () {

    console.log(input.innerText);
    const ulbackend = document.getElementById("ulbackend");
  
    const li = document.createElement('li');
    li.textContent = input.value;
    ulbackend.appendChild(li);

});
