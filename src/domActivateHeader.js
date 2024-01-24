function activateHeader() {
    document.getElementById("userAvatar").addEventListener(
        "click", (e) => {
            localStorage.clear();
        }
    );
}

export {
    activateHeader
};