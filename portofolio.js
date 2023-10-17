const d = document,
    lS = localStorage,
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
    d.body.classList.add('bodyDark');
    $darkLight.classList.add('isDark');

};
const themaLight = ()=>{
    d.body.classList.remove('bodyDark');
    $darkLight.classList.remove('isDark');
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
    //scroll para inicio
    if(e.target.matches("#scroll-up *")){
        scroll({
            top:0,
            behavior: "smooth"
        });
    };
    if(e.target === $darkLight){
        d.body.classList.toggle('bodyDark');
        $darkLight.classList.toggle('isDark')
       if($darkLight.classList.contains('isDark')){
           lS.setItem('thema','light');
        }else{
            lS.setItem('thema','dark');
        }
    };
});

d.addEventListener('DOMContentLoaded',()=>{
    console.log('ok')
    if(lS.getItem('thema') === null) lS.setItem('thema','light');
    if(lS.getItem(`thema`) === 'dark') themaDark();
    if(lS.getItem('thema') === 'light') themaLight();
});
// control de barra menu para desktop 

