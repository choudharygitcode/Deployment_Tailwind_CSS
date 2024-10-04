let open = document.getElementById("menuopen");
let menubar = document.getElementById("menumobile");
let closemenu = document.getElementById("closemobile");
open.addEventListener('click', function(){
    menubar.classList.add('openmobile');
})
closemenu.addEventListener('click', function(){
    menubar.classList.remove('openmobile');
})

