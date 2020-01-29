function createHTML(json, parent) {
    //console.log(json? json : "Can't get data")

    for (let element in json) {
        document[element] = document.createElement(json[element].type);
        for (let attributes in json[element]) {
            if (attributes !== 'type') {
                switch (typeof json[element][attributes]) {
                    case "object":
                        switch (attributes) {
                            case "data":
                                for (let data in json[element][attributes]) {
                                    document[element].dataset[data] = json[element][attributes][data];
                                }
                                break;

                            case "children":
                                createHTML(json[element][attributes], document[element]);
                                break;

                            case "setAttribute":
                                for (let attribute in json[element][attributes]) {
                                    document[element].setAttribute(attribute, json[element][attributes][attribute]);
                                }
                                break;

                            default:
                                console.log("--oui--")
                                console.log(json[element][attributes]);
                                break;
                        }
                        break;

                    default:
                        switch (attributes) {
                            case "content":
                                document[element].innerHTML = json[element][attributes];
                                break;

                            case "link":
                                switch (json[element].type) {
                                    case "a":
                                        document[element].href = json[element][attributes];
                                        break;

                                    case "img":
                                        document[element].src = json[element][attributes];
                                        break;

                                    default:
                                        console.log("le type " + json[element].type + " n'est pas gérer");
                                        break;
                                }
                                break;

                            default:
                                document[element][attributes] = json[element][attributes];
                                break;
                        }
                        break;
                }
            }
        }

        parent.appendChild(document[element]);
    }
}


// tools

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

