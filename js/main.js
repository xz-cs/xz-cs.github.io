/*
let menu_icon, menus;

function init() {
    menu_icon = document.getElementById("menuicon");
    menus = document.querySelector("nav");
    menus.style.display = "block";
    menu_icon.onclick = show_hide;
}

function show_hide() {
    if (menus.style.display === "block") {
        menus.style.display = "none";
    } else {
        menus.style.display = "block";
    }
}*/

let index=0;

$(document).ready(function(){
    $("#menuicon").click(function(){
        $("nav").toggle(888);
        if (index===0){
            $("#content").animate({width:"95%"},888);
        }else {
            $("#content").animate({width:"86%"},888);
        }
        index=1-index;
    });
});