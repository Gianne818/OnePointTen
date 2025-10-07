let proceedButton = document.getElementById("proceed");
let startPage = document.getElementById("start-page");
let mainContent = document.getElementById("main-content");

let abelyana = document.getElementById("abelyana");
let abelyanaMusic = document.getElementById("abelyanaMusic");
abelyanaMusix.pause();

proceedButton.addEventListener("click", event =>{
    startPage.style.opacity = '0';
    setTimeout(()=>{
        startPage.style.display = 'none';
        mainContent.style.opacity = '1';
        mainContent.style.display = 'block';
        abelyanaMusic.loop = true;
        abelyanaMusic.muted = false; 
        abelyanaMusic.play();        
    }, 500);
});
