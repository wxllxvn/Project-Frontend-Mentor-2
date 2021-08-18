window.onload=function(){
    
const btnMenu = document.getElementById('btn');
function clickMenu(){
    const nav = document.getElementById('menu-list');
    const body = document.getElementById('bby');
    nav.classList.toggle('active');
    body.classList.toggle('scrol')
}

btnMenu.addEventListener('click', clickMenu);

}