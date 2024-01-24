import icon_search from './images/icon_search.png';
import icon_list from './images/icon_list.png';
import icon_tiles from './images/icon_tiles.png';
import {createImg, createDiv} from './domGenerateHTMLElement';

function generateHeader() {
    const header = document.createElement('div');
        header.classList = "header";

        const searchBar = createDiv("searchBar", "", "");
            searchBar.appendChild(createImg(icon_search, "iconSearch"));
            const inputSearch = document.createElement('input');
                inputSearch.id = "searchField";
                inputSearch.setAttribute("type", "text");
            searchBar.appendChild(inputSearch);
        header.appendChild(searchBar);

        const userBar = createDiv("userBar", "", "");
            userBar.appendChild(createImg(icon_tiles, "iconTiles"));
            const userAvatar = document.createElement('div');
                userAvatar.id = "userAvatar";
                userAvatar.classList = "userAvatar";
                userAvatar.innerHTML = "E";
            userBar.appendChild(userAvatar);
        header.appendChild(userBar);
    return header;
}

export {
    generateHeader
};
