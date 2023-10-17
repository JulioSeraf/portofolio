const d = document,
    $menuNav = d.querySelector('#menu-nav'),
    $scrollUp = d.getElementById('scroll-up'),
    $darkLight = d.getElementById('dark-light');

if(innerWidth > 600){
    $menuNav.classList.add('active-menu');
};

    //scroll-up Displays
 d.addEventListener('scroll',()=>{
    if(scrollY >= 600){
        $scrollUp.style.display = 'block'
    }else{
        $scrollUp.style.display = 'none';
    };  
});
const themaDark = ()=>{

}
const themaLigth = ()=>{

}
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
    //scroll para inicio
    if(e.target.matches("#scroll-up *")){
        scroll({
            top:0,
            behavior: "smooth"
        });
    };
    if(e.target === $darkLight){
        d.querySelector('body').classList.toggle('bodyDark');
       
    };
});

// control de barra menu para desktop 

