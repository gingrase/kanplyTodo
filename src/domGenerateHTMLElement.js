function createImg(src, alt, id, imgClass) {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    if (id != null) {
        img.id = id;
    }
    if (imgClass != null) {
        img.classList.add(imgClass);
    }
    return img;
}

function createDiv(divClass, id, content) {
    const div = document.createElement('div');
    div.classList = divClass;
    div.id = id;
    div.innerHTML = content;
    return div;
}

export {
    createImg,
    createDiv
};