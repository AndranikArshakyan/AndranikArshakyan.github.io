var menuOpen = document.querySelector(".menu-open");
var menuClose = document.querySelector(".menu-close");
var menuList = document.querySelector(".main-nav");

function menuShow (){
    menuList.style.display = "block";
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
    
}


function menuHide (){
    menuList.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
}
menuOpen.addEventListener("click", menuShow);
menuClose.addEventListener("click", menuHide);


var catBeforeButton = document.querySelector(".before-button");
var catAfterButton = document.querySelector(".after-button");
var catBefore = document.querySelector(".before");
var catAfter = document.querySelector(".after");

function showCatAfter (){
    catBefore.style.display = "none";
    catAfter.style.display = "block";
    catAfterButton.disabled = true;
    catAfterButton.style.opacity = 0.4;
    catBeforeButton.style.opacity = 1;
    catBeforeButton.disabled = false;

}
function showCatbefore (){
    catBefore.style.display = "block";
    catAfter.style.display = "none";
    catAfterButton.disabled = false;
    catBeforeButton.disabled = true;
    catAfterButton.style.opacity = 1;
    catBeforeButton.style.opacity = 0.4;
}
catAfterButton.addEventListener("click", showCatAfter);
catBeforeButton.addEventListener("click", showCatbefore);