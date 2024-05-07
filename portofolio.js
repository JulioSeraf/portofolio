

let numero = 3

for(let i = 0; i < 3)


const d = document,
    lS = localStorage,
    $menuNav = d.querySelector('#menu-nav'),
    $scrollUp = d.getElementById('scroll-up'),
    $darkLight = d.getElementById('dark-light'),
    $nameDinamic = d.getElementById('nameDinamic'),
    $projetos = d.querySelector('#projetos'),
    miProjectos = Array.from($projetos);
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

// fuction para projetos 
 const ProjectosNext = (e)=> {
    if(e.target.matches("#leftBt *")){
        console.log("left");
        let firstProj = $projetos.firstChild
        $projetos.removeChild(firstProj)
        $projetos.appendChild(firstProj)
        console.log($projetos);
        




        // let FirstProj = miProjectos.shift();
        // miProjectos.push(FirstProj);
        // console.log(miProjectos)
        // console.log(FirstProj)

    }else if(e.target.matches("#rightBt *")){
        console.log('RGITH')
        let LastProj = miProjectos.pop();
        miProjectos.unshift(LastProj);
        console.log(miProjectos)
        console.log(LastProj)
    }
 }

//scroll-up Displays
 d.addEventListener('scroll',()=>{
    if(scrollY >= 750){
        $scrollUp.style.display = 'block';
        d.getElementById('img-Home').style.cssText = 'left:-100% !important';

    }else{
        $scrollUp.style.display = 'none';
        d.getElementById('img-Home').style.cssText = 'left:50%; transform:translate(-50%);';
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
       if($darkLight.classList.contains('isLight')){
           lS.setItem('thema','dark');
           themaDark();
        }else{
            lS.setItem('thema','light');
            themaLight();
        };
    };
    ProjectosNext(e);
});

d.addEventListener('DOMContentLoaded',()=>{
    d.getElementById('img-Home').style.cssText = 'left:50%;transform:translate(-50%);';
    if(innerWidth > 600){
        $menuNav.classList.add('active-menu');
    };
    //Name Dinamico Home
    nameDinamic();
    setInterval(()=>{
        nameDinamic()
    },300*Myname.length)
    if(lS.getItem('thema') === null) lS.setItem('thema','light');
    if(lS.getItem("thema") === 'dark') themaDark();
    if(lS.getItem("thema") === 'light') themaDark();
});


