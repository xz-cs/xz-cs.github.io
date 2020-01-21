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

let index = 1;
let keyword = String(window.location).split("?")[1];

$(document).ready(function () {
    $("nav").hide();
    $("#content").animate({width: "96%"}, 888);
    $(".container").click(function () {
        $("nav").toggle(888);
        if (index === 0) {
            $("#content").animate({width: "96%"}, 888);
        } else {
            $("#content").animate({width: "86%"}, 888);
        }
        index = 1 - index;
    });
});

function init() {
    if (keyword!==undefined && keyword!==""){
        document.querySelector("iframe").src = "html/" + keyword + ".html";
    }
    else{
        document.querySelector("iframe").src = "html/home.html";
    }
}
