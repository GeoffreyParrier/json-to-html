function createHTML(json, parent) {
    for (let element in json) {
        let [part, id, classs, html, src, href] = dissectElement(element, json);
        const newElem = ce(part[0], parent, classs, id, html, src, href);
        if (json.hasOwnProperty(element) && typeof json[element] === "object") {
            createHTML(json[element], newElem)
        }
    }
}