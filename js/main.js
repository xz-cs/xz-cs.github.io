let index = 1;
let keyword = String(window.location).split("?")[1];

$(document).ready(function () {     // Do not go gentle into that good night
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

query_to_hash = function (queryString) {      // Old age should burn and rave at close of day
    let j, q;
    q = queryString.replace(/\?/, "").split("&");
    j = {};
    $.each(q, function (i, arr) {
        arr = arr.split('=');
        return j[arr[0]] = arr[1];
    });
    return j;
}

function init() {      // Rage, rage against the dying of the light.
    if (keyword) {
        let paramData = query_to_hash(keyword);
        if (paramData.target !== undefined) {
            document.querySelector("iframe").src = "html/" + paramData.target + ".html";
        }
    }
}

// chr(128518) in python3