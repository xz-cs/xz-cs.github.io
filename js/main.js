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

query_to_hash = function (queryString) {
    let j, q;
    q = queryString.replace(/\?/, "").split("&");
    j = {};
    $.each(q, function (i, arr) {
        arr = arr.split('=');
        return j[arr[0]] = arr[1];
    });
    return j;
}

function init() {
    if (keyword) {
        let paramData = query_to_hash(keyword);
        if (paramData.target !== undefined) {
            document.querySelector("iframe").src = "html/" + paramData.target + ".html";
        }
    }
}
