const image = document.getElementById("avatar");

image.addEventListener("click", function() {
  if (image.src.includes("avatar-bis.png")) {
    image.src = "image/avatar.svg";
  } else {
    image.src = "image/avatar-bis.png"; 
  }
});

document.querySelector("#changeButton").addEventListener("click", function() {
    
    const newName = prompt("Enter your name:");
  
     if (newName) { 
      const firstnameElement = document.querySelector("#firstname");
      firstnameElement.textContent = newName; 
      firstnameElement.style.color = "white";
     }
     
     const newColor = prompt("Enter a color");

     if (newColor) { 
       document.documentElement.style.setProperty('--lightWildColor', newColor);
     }
    });