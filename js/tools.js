function ce(type, parent, classs = null, id = null, html = null, src = null, href = null) {
    let res = document.createElement(type);
    res = parent.appendChild(res);
    if (classs !== null) {
        setClass(res, classs);
    }
    if (id !== null && src !== "") {
        addId(res, id);
    }
    if (html !== null && src !== "") {
        addHtml(res, html);
    }
    if (src !== null && src !== "") {
        addSrc(res, src);
    }
    if (href !== null && src !== "") {
        addHref(res, href);
    }
    return res;
}

function setClass(elem, classs) {
    if (typeof classs === "object") {
        for (let clas of classs) {
            if (elem.classList.contains(clas)) {
                elem.classList.remove(clas);
            } else {
                elem.classList.add(clas);
            }
        }
    } else {
        if (elem.classList.contains(classs)) {
            elem.classList.remove(classs);
        } else {
            elem.classList.add(classs);
        }
    }
}

function addId(elem, id) {
    elem.id = id;
}

function addHtml(elem, html) {
    elem.innerHTML = html;
}

function addSrc(elem, src) {
    elem.src = src;
}

function addHref(elem, href) {
    elem.href = href;
}

function div() {

}