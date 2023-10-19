const d = document,
    lS = localStorage,
    $menuNav = d.querySelector('#menu-nav'),
    $scrollUp = d.getElementById('scroll-up'),
    $darkLight = d.getElementById('dark-light'),
    $nameDinamic = d.getElementById('nameDinamic');
    let Myname = ' Julio Serafim';
    Myname = Myname.split('');

const nameDinamic = ()=>{
    let stopTime = 0;
    let time = setInterval(()=>{
        stopTime++;
        $nameDinamic.textContent += Myname[stopTime]
        if(stopTime === Myname.length){
            $nameDinamic.textContent = '';
            clearInterval(time)
        }
    },300);
};
if(innerWidth > 600){
    $menuNav.classList.add('active-menu');
};

    //scroll-up Displays
 d.addEventListener('scroll',()=>{
    if(scrollY >= 600){
        $scrollUp.style.display = 'block';
        d.getElementById('img-Home').style.cssText = 'left:-100% !important';

    }else{
        $scrollUp.style.display = 'none';
        d.getElementById('img-Home').style.cssText = 'left:10% !important';
    }; 
    
});
const themaDark = ()=>{
    d.body.classList.remove('bodyLight');
    $darkLight.classList.remove('isLight');

};
const themaLight = ()=>{
    d.body.classList.add('bodyLight');
    $darkLight.classList.add('isLight');
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
        // d.body.classList.toggle('bodyDark');
        // $darkLight.classList.toggle('isDark')
       if($darkLight.classList.contains('isLight')){
           lS.setItem('thema','dark');
           themaDark();
        }else{
            lS.setItem('thema','light');
            themaLight();
        };
    };
});

d.addEventListener('DOMContentLoaded',()=>{
    console.log('ok')
    d.getElementById('img-Home').style.cssText = 'left:10% !important';
    //Name Dinamico Home
    nameDinamic();
    setInterval(()=>{
        nameDinamic()
    },300*Myname.length)
    if(lS.getItem('thema') === null) lS.setItem('thema','light');
    if(lS.getItem("thema") === 'dark') themaDark();
    if(lS.getItem("thema") === 'light') themaDark();
});
// control de barra menu para desktop 

