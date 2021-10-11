var option = document.getElementById('option');
var btn = document.querySelectorAll('i');
var li = document.querySelectorAll('#option li')

function openMenu(){
    option.style.left = "0";
    btn[0].style.display = "none";
    btn[1].style.display = "block";
}
function closeMenu(){
    option.style.left = "-100%";
    btn[0].style.display = "block";
    btn[1].style.display = "none";
}
for(i = 0; i < li.length; i++){
    li[i].addEventListener('click', ()=>{
        if (btn[1].style.display == "block"){
            option.style.left = "-100%";
            btn[0].style.display = "block";
        }
    })
}
