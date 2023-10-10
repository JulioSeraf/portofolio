const d = document,
    $menuNav = d.querySelector('menu-nav')
d.addEventListener("DOMContentLoaded",(e)=>{

});
d.addEventListener("click",(e)=>{
    // menu-nav
    if(e.target.matches('#icon-menu')){
        // alert('ok')
        $menuNav.classList.toggle('no-active-menu')
    }
})