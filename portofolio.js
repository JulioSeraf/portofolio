const d = document,
    $menuNav = d.querySelector('#menu-nav')
d.addEventListener("DOMContentLoaded",(e)=>{

});
d.addEventListener("click",(e)=>{
    // menu-nav
    if(e.target.matches('#icon-menu')){
        // alert('ok')
        $menuNav.classList.toggle('no-active-menu');
        d.getElementById('icon-menu').src = `imgs/icon-menu.png`
        if($menuNav.classList.contains('no-active-menu'))d.getElementById('icon-menu').src = `imgs/cerrar.png`;;
    };
    if(e.target.matches("#menu-nav *") && innerWidth < 600){
        $menuNav.classList.toggle('no-active-menu');
        d.getElementById('icon-menu').src = `imgs/icon-menu.png`
    };
});
// control de barra menu para desktop 
window.addEventListener('resize',(e)=>{
    if(innerWidth > 600) $menuNav.classList.add('no-active-menu');
    if(innerWidth < 600) $menuNav.classList.remove('no-active-menu');
});
