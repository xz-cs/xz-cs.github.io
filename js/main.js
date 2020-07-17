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
            change(paramData.target);
        } else {
            change("home")
        }
    } else {
        change("home")
    }
    let set_a = document.querySelectorAll("nav a");
    for (let el of set_a) {
        el.onclick = refresh;
    }
}

function change(selector) {

    let css = '#home, #schedule, #contact, #study, #project, #about  {' +
        '    background-color: lightblue!important;' +
        '    color: coral!important;' +
        '}' + '#home:hover, #schedule:hover, #contact:hover, #study:hover, #project:hover, #about:hover {\n' +
        '    background-color: lightcoral!important;\n' +
        '    color: blue!important;\n' +
        '}';
    let style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    let new_css = '#' + selector + ' {' +
        '    background-color: yellowgreen!important;' +
        '    color: blue!important;' +
        '}' + '#' + selector + ':hover' + '{\n' +
        '    background-color: yellowgreen!important;\n' +
        '    color: blue!important;\n' +
        '}';
    let new_style = document.createElement('style');

    if (new_style.styleSheet) {
        new_style.styleSheet.cssText = new_css;
    } else {
        new_style.appendChild(document.createTextNode(new_css));
    }
    document.getElementsByTagName('head')[0].appendChild(new_style);
}

function refresh() {
    change(this.innerHTML.toLowerCase());
}

