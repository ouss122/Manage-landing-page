let menu=document.querySelector('.menu');
let menus=document.querySelector('.menus');

console.log(menu);


menu.addEventListener('click',()=>{
    if (menu.src.includes("icon-hamburger.svg") ){
        menu.src='./images/icon-close.svg';
    }else{
        menu.src='./images/icon-hamburger.svg';
    }
    menus.classList.toggle('display')
    
   document.body.children[0].parentElement.classList.toggle('hide')
})