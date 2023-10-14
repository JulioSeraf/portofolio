const d = document,
    $menuNav = d.querySelector('#menu-nav');
    if(innerWidth > 600){
        $menuNav.classList.add('active-menu');
    };
window.addEventListener('resize',()=>{
    (innerWidth > 600)?$menuNav.classList.add('active-menu'):$menuNav.classList.remove('active-menu');
    if($menuNav.classList.contains('active-menu'))d.getElementById('icon-menu').style.cssText = 'transform: rotate(0deg);'
});
d.addEventListener("click",(e)=>{
    // menu-nav
    if(e.target.matches('#icon-menu')){
        // alert('ok')
        $menuNav.style.cssText = `transition: 0.6s all ease-out;`
        $menuNav.classList.toggle('active-menu');
        d.getElementById('icon-menu').style.cssText = 'transform: rotate(0deg);';
        if($menuNav.classList.contains('active-menu')) d.getElementById('icon-menu').style.cssText = 'transform: rotate(90deg);';
    };
    if(e.target.matches("#menu-nav *") && innerWidth < 600){
        $menuNav.classList.toggle('active-menu');
        d.getElementById('icon-menu').style.cssText = 'transform: rotate(0deg);';
    };
});

// control de barra menu para desktop 

