"use strict";
(self["webpackChunkkanplytodo"] = self["webpackChunkkanplytodo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! resource/FiraSans-ExtraBold.ttf */ "./src/resource/FiraSans-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! resource/FiraSans-Medium.ttf */ "./src/resource/FiraSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! resource/InstrumentSans-Regular.ttf */ "./src/resource/InstrumentSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! resource/fontawesome-webfont.ttf */ "./src/resource/fontawesome-webfont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**************************************/
/*****            Global          *****/
/**************************************/

@font-face {
    font-family: Titles;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: Subtitles;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: Text;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: FontAwesome;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

* {
    margin: 0;
    padding: 0;
}

body {
    background: #1f0f2c;
}

a {
    text-decoration: none;
}

.expandedPageLayout {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: 68px auto / 250px auto;
}

.shrinkedPageLayout {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: 68px auto / 50px auto;
}


/**************************************/
/*****           Header           *****/
/**************************************/

.header {
    grid-area: 1 / 2 / 2 / 3;
    display: grid;
    grid-template: auto / auto 80px;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    gap: 20px;
    background: #1b1f28;
    color: #f9faf8;
    font-family: Titles;
    font-size: 20px;
}

.header img {
    height: 20px;
}

.searchBar {
    display: flex;
    align-items: center;
}

#searchField {
    flex: 1;
    border-radius: 12px;
    border: none;
    background-color: #f9faf8;
    margin: 0px 15px 0px 15px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    font-size: 16px;
}

.userBar {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 24px;
}

.userAvatar {
    display: flex;
    border: solid;
    border-width: 2px;
    border-color: #666699;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    justify-content:center;
    align-items: center;
    background-color: #666699;
    font-family: Roboto;
}

/**************************************/
/****           Side bar           ****/
/**************************************/

.sidebar {
    grid-area: 1 / 1 / 3 / 2;
    align-items: flex-start;
    color: #f9faf8;
}

.sidebarTitle {
    display: flex;
    align-items: center;
    background: #1b1f28;
    height: 68px;
}

.sidebarTitle img {
    margin: 20px;
    height: 32px;
}

.sidebarNewButton button {
    font-size: 16px;
    font-weight: bold;
    color: #f9faf8;
    background-color: slateblue;
    border-color: slateblue;
    border-radius: 15px;
    margin: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 16px;
    cursor: pointer;
    height: 55px;
}

.sidebarNewButton img {
    height: 16px;
}

.sidebarNewButton img,
.sidebarNewButton span {
    vertical-align: middle;
}

.sidebarNewButton span {
    padding-left: 20px;
}

.sidebarItem,
.sidebarSubmenuItem {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 26px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer; 
    display: grid;
    grid-template-columns: 1fr 5fr;
}

.sidebarItem {
    font-family: Titles;
}

.sidebarSubmenuItem {
    font-family: Subtitles;
    font-size: 12px;
    color: lightgrey;
}

.sidebarItem img {
    height: 20px;
}

.sidebarSubmenuItem img {
    height: 14px;
    margin-left: 3px;
}

.sidebarSubmenuItemSelected {
    border-left: none;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: darkorchid;
}

.sidebarItem:Hover,
.sidebarSubmenuItem:Hover {
    border-left: none;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: midnightblue;
}

.sidebarSubmenuItemSelected:Hover {
    background-color: darkorchid;
}

.sidebarSubmenu {
    display: none;
}

#shrinkedSidebar {
    display: none;
}

/*
.sidebarSubmenuItemProjectExpanded:after {
    padding-right: 15px;
    float: right;
    font-family: FontAwesome;
    font-size: 14px;
    content: "\\f00d";
}
*/

/**************************************/
/**         Content section          **/
/**************************************/

.content {
    grid-area: 2 / 2 / 3 / 3;
    margin: 10px;
    padding-left: 20px;
}

.contextBar {
    color: #f9faf8;
    font-size: 20px;
    font-family: titles;
    height: 60px;
}

.title {
    display: flex;
    height: 100%;
}

.context {
    display: flex;
    width: 100%;
    align-items: center;
}

.context img {
    height: 20px;
    padding-right: 10px;
}

.cardsContainer {
}

.card {
    background-color: midnightblue;
    border-radius: 10px;
    box-shadow: 0px 5px 5px grey;
    padding: 7px;
    padding-left: 12px;
    padding-right: 15px;
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
    margin-right: 15px;
}

.cardHighPriority {
    border-left: red;
    border-left-style: solid;
    border-left-width: 10px;
}

.cardMedPriority {
    border-left: orange;
    border-left-style: solid;
    border-left-width: 10px;
}

.cardLowPriority {
    border-left: yellow;
    border-left-style: solid;
    border-left-width: 10px;
}

.cardTitle {
    font-size: 18px;
    color: #f9faf8;
    font-family: Titles;
    width: 100%;
}

.cardContent {
    font-size: 16px;
    color: #f9faf8;
    font-family: text;
    width: 8rem;
}

.cardIcon, .cardIconDeactivated, .cardProjectTrashIcon, .cardProjectTrashIconDeactivated, .cardTodoTrashIcon {
    height: 18px;
}

.cardTodoCheckbox:hover, .cardTodoTitle:hover, .cardProjectTitle:hover, .cardProjectTrashIcon:hover, .cardTodoTrashIcon:hover {
    cursor: pointer;
}

.cardCompleted {
    text-decoration: line-through;
    color: deepskyblue;
}

/*
.cardButtons {
    grid-row: 3;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    gap: 28px;
    align-self: flex-end;
    margin-top: auto;
}
*/

/*
.cardButtons button {
    padding: 5px 40px;
    border-radius: 20px;
    background-color: slateblue;
    text-transform: uppercase;
    color: white;
}
*/

/*
.cardButtons img {
    height: 20px; 
}
*/

/* ********************************************************** */
/* *********************      MODAL      ******************** */
/* ********************************************************** */

.modal {
    display: none;
    position: fixed;
/*    z-index: 2;*/
/*    left: 0;
    top: 0;*/
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
}

.modalContainer {
    background-color: white;
    margin: 3% auto;
    padding: 30px;
    width: 90%;
    border-radius: 10px;
}

.modalHeader {
    display: flex;
    justify-content: space-between;
}

.modalTitle{
    font-size: 20px;
    font-family: Titles;
}

.closeModalButton {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    background: linear-gradient(135deg, red 0%, red 100%);
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    transition: transform 0.25s, opacity 0.25s;
}

.closeModalButton:hover {
    cursor: pointer;
    background: red;
    transform: rotate(90deg) scale(1.2);
}
 
/* ********************************************************** */
/* ******************      MODAL FORMS     ****************** */
/* ********************************************************** */
  
.modalForm-fieldset {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-family: Text;
}
  
.modalForm-input {
    flex-basis: 100%; 
}
  
.modal label {
    font-size: 14px;
    color: grey;
}
  
.modalForm-input input, textarea {
    width: 100%;
    border-radius: 5px;
    border-width: 1px;
    border-color: black;
    padding: 10px;
    font-size: 16px;
    font-family: Text;
}

.modalForm-inputSelection {
    flex-basis: 100%;
}

.modalForm-inputSelection {
    input[type="radio"] {
        display: none;
        &:checked {
            + .box {
                background-color: midnightblue;
                span {
                    color: white;
                    transform: translateY(20px);
                    &:before {
                        opacity: 1;
                    }
                }
            }
            + .low {
                background-color: yellow;
                span {
                    color: black;
                }
            }
            + .med {
                background-color: orange;
                span {
                    color: black;
                }
            }
            + .high {
                background-color: red;
                span {
                    color: white;
                }
            }
        }
    }

    .box {
        width: 100px;
        height: 75px;
        background-color: white;
        transition: all 250ms ease;
        will-change: transition;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        position: relative;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        span {
            position: absolute;
            transform: translate(0, 0px);
            left: 0;
            right: 0;
            transition: all 300ms ease;
            user-select: none;
            color: lightgrey;
            &:before {
                display: block;
                opacity: 0;
                transition: all 300ms ease-in-out;
                color: white;
            }
        }
    }
    
    .project {
        span {
          &:before {
            font-family: FontAwesome;
            content: "\\f07c";
          }
        }
      }

      .todo {
        span {
          &:before {
            font-family: FontAwesome;
            content: "\\f14a";
          }
        }
      }

    .priority {
        margin: 8px;
        width: 100px;
        background-color: white;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        border-style: solid;
        border-width: 2px;
        border-color: black;
        border-radius: 10px;
        span {
        }
    }

    .high {

    }

    .med {

    }

    .low{

    }
}

.modalDropdown {
    background-color: midnightblue;
    padding: 15px;
    border-radius: 5px;
    color: white;
    margin-top: 10px;
}

.modalDropdown:hover li {
    padding: 10px;
    height: auto;
    overflow: auto;
    opacity: 1;
}

ul {
    list-style-type: none;
}

.modalDropdown:hover ul {
    padding: 10px;
    padding-bottom: 0px;
}

.modalDropdown li {
    height: 0px;
    cursor: pointer;
    opacity: 0;
    transition-duration: 0.2s;
    font-size: 12px;
}

.dropdownTitle {
    padding: 10px;
}

.dropdownTitle:after {
    float: right;
    font-family: FontAwesome;
    font-size: 18px;
    content: "\\f107";
  }


.selection {
    display: inline;
}

.saveButton {
    text-align: center;
}
  
.saveButtonContainer button {
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: darkgreen;
    border-radius: 7px;
    padding: 10px 40px;
}
  
.saveButton button:active {
    background-color: green;
}

.modalButtons {
    display: flex;
    justify-content: end; 
    width: 100%;
    margin-top: 20px;
}




/*
select {
    width: 100%;
    background-color: white;
    border-width: 2px;
    border-radius: 5px;
    padding: 15px;
    font-size: 18px;
}
  
  

.modalForm-checkbox {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
}
*/

/*
.modalControl {
    z-index: 1;
    border: none;
}

/*
.modalCheckbox {
    justify-self: center;
}
*/

/* ************************** */
/* ***      Checkbox      *** */
/* ************************** */

/*
.customCheckbox {
    position: relative;
    padding-left: 40px;
    padding-right: 4px;
    margin-bottom: 12px;
    padding-top: 8px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .customCheckbox input {
    height: 0;
    width: 0;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 28px;
    width: 28px;
    background-color: white;
    border-color: black;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
  }
  
  .customCheckbox:hover input ~ .checkmark {
    background-color: lightgray;
  }
  
  .customCheckbox input:checked ~ .checkmark {
    background-color: green;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .customCheckbox input:checked ~ .checkmark:after {
    display: block;
  }
  
  .customCheckbox .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
*/

.userAvatar {
    cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/**************************************/\n/*****            Global          *****/\n/**************************************/\n\n@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);\n\n@font-face {\n    font-family: Titles;\n    src: url(resource/FiraSans-ExtraBold.ttf);\n}\n\n@font-face {\n    font-family: Subtitles;\n    src: url(resource/FiraSans-Medium.ttf);\n}\n\n@font-face {\n    font-family: Text;\n    src: url(resource/InstrumentSans-Regular.ttf);\n}\n\n@font-face {\n    font-family: FontAwesome;\n    src: url(resource/fontawesome-webfont.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background: #1f0f2c;\n}\n\na {\n    text-decoration: none;\n}\n\n.expandedPageLayout {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template: 68px auto / 250px auto;\n}\n\n.shrinkedPageLayout {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template: 68px auto / 50px auto;\n}\n\n\n/**************************************/\n/*****           Header           *****/\n/**************************************/\n\n.header {\n    grid-area: 1 / 2 / 2 / 3;\n    display: grid;\n    grid-template: auto / auto 80px;\n    align-items: center;\n    padding-left: 30px;\n    padding-right: 30px;\n    gap: 20px;\n    background: #1b1f28;\n    color: #f9faf8;\n    font-family: Titles;\n    font-size: 20px;\n}\n\n.header img {\n    height: 20px;\n}\n\n.searchBar {\n    display: flex;\n    align-items: center;\n}\n\n#searchField {\n    flex: 1;\n    border-radius: 12px;\n    border: none;\n    background-color: #f9faf8;\n    margin: 0px 15px 0px 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 30px;\n    font-size: 16px;\n}\n\n.userBar {\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    gap: 24px;\n}\n\n.userAvatar {\n    display: flex;\n    border: solid;\n    border-width: 2px;\n    border-color: #666699;\n    border-radius: 50%;\n    width: 32px;\n    height: 32px;\n    justify-content:center;\n    align-items: center;\n    background-color: #666699;\n    font-family: Roboto;\n}\n\n/**************************************/\n/****           Side bar           ****/\n/**************************************/\n\n.sidebar {\n    grid-area: 1 / 1 / 3 / 2;\n    align-items: flex-start;\n    color: #f9faf8;\n}\n\n.sidebarTitle {\n    display: flex;\n    align-items: center;\n    background: #1b1f28;\n    height: 68px;\n}\n\n.sidebarTitle img {\n    margin: 20px;\n    height: 32px;\n}\n\n.sidebarNewButton button {\n    font-size: 16px;\n    font-weight: bold;\n    color: #f9faf8;\n    background-color: slateblue;\n    border-color: slateblue;\n    border-radius: 15px;\n    margin: 20px;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    padding: 16px;\n    cursor: pointer;\n    height: 55px;\n}\n\n.sidebarNewButton img {\n    height: 16px;\n}\n\n.sidebarNewButton img,\n.sidebarNewButton span {\n    vertical-align: middle;\n}\n\n.sidebarNewButton span {\n    padding-left: 20px;\n}\n\n.sidebarItem,\n.sidebarSubmenuItem {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding-left: 26px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    cursor: pointer; \n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebarItem {\n    font-family: Titles;\n}\n\n.sidebarSubmenuItem {\n    font-family: Subtitles;\n    font-size: 12px;\n    color: lightgrey;\n}\n\n.sidebarItem img {\n    height: 20px;\n}\n\n.sidebarSubmenuItem img {\n    height: 14px;\n    margin-left: 3px;\n}\n\n.sidebarSubmenuItemSelected {\n    border-left: none;\n    border-top-right-radius: 25px;\n    border-bottom-right-radius: 25px;\n    background-color: darkorchid;\n}\n\n.sidebarItem:Hover,\n.sidebarSubmenuItem:Hover {\n    border-left: none;\n    border-top-right-radius: 25px;\n    border-bottom-right-radius: 25px;\n    background-color: midnightblue;\n}\n\n.sidebarSubmenuItemSelected:Hover {\n    background-color: darkorchid;\n}\n\n.sidebarSubmenu {\n    display: none;\n}\n\n#shrinkedSidebar {\n    display: none;\n}\n\n/*\n.sidebarSubmenuItemProjectExpanded:after {\n    padding-right: 15px;\n    float: right;\n    font-family: FontAwesome;\n    font-size: 14px;\n    content: \"\\f00d\";\n}\n*/\n\n/**************************************/\n/**         Content section          **/\n/**************************************/\n\n.content {\n    grid-area: 2 / 2 / 3 / 3;\n    margin: 10px;\n    padding-left: 20px;\n}\n\n.contextBar {\n    color: #f9faf8;\n    font-size: 20px;\n    font-family: titles;\n    height: 60px;\n}\n\n.title {\n    display: flex;\n    height: 100%;\n}\n\n.context {\n    display: flex;\n    width: 100%;\n    align-items: center;\n}\n\n.context img {\n    height: 20px;\n    padding-right: 10px;\n}\n\n.cardsContainer {\n}\n\n.card {\n    background-color: midnightblue;\n    border-radius: 10px;\n    box-shadow: 0px 5px 5px grey;\n    padding: 7px;\n    padding-left: 12px;\n    padding-right: 15px;\n    display: flex;\n    gap: 12px;\n    margin-bottom: 15px;\n    margin-right: 15px;\n}\n\n.cardHighPriority {\n    border-left: red;\n    border-left-style: solid;\n    border-left-width: 10px;\n}\n\n.cardMedPriority {\n    border-left: orange;\n    border-left-style: solid;\n    border-left-width: 10px;\n}\n\n.cardLowPriority {\n    border-left: yellow;\n    border-left-style: solid;\n    border-left-width: 10px;\n}\n\n.cardTitle {\n    font-size: 18px;\n    color: #f9faf8;\n    font-family: Titles;\n    width: 100%;\n}\n\n.cardContent {\n    font-size: 16px;\n    color: #f9faf8;\n    font-family: text;\n    width: 8rem;\n}\n\n.cardIcon, .cardIconDeactivated, .cardProjectTrashIcon, .cardProjectTrashIconDeactivated, .cardTodoTrashIcon {\n    height: 18px;\n}\n\n.cardTodoCheckbox:hover, .cardTodoTitle:hover, .cardProjectTitle:hover, .cardProjectTrashIcon:hover, .cardTodoTrashIcon:hover {\n    cursor: pointer;\n}\n\n.cardCompleted {\n    text-decoration: line-through;\n    color: deepskyblue;\n}\n\n/*\n.cardButtons {\n    grid-row: 3;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 20px;\n    gap: 28px;\n    align-self: flex-end;\n    margin-top: auto;\n}\n*/\n\n/*\n.cardButtons button {\n    padding: 5px 40px;\n    border-radius: 20px;\n    background-color: slateblue;\n    text-transform: uppercase;\n    color: white;\n}\n*/\n\n/*\n.cardButtons img {\n    height: 20px; \n}\n*/\n\n/* ********************************************************** */\n/* *********************      MODAL      ******************** */\n/* ********************************************************** */\n\n.modal {\n    display: none;\n    position: fixed;\n/*    z-index: 2;*/\n/*    left: 0;\n    top: 0;*/\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.7);\n}\n\n.modalContainer {\n    background-color: white;\n    margin: 3% auto;\n    padding: 30px;\n    width: 90%;\n    border-radius: 10px;\n}\n\n.modalHeader {\n    display: flex;\n    justify-content: space-between;\n}\n\n.modalTitle{\n    font-size: 20px;\n    font-family: Titles;\n}\n\n.closeModalButton {\n    border: none;\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    color: white;\n    font-size: 20px;\n    background: linear-gradient(135deg, red 0%, red 100%);\n    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n    transition: transform 0.25s, opacity 0.25s;\n}\n\n.closeModalButton:hover {\n    cursor: pointer;\n    background: red;\n    transform: rotate(90deg) scale(1.2);\n}\n \n/* ********************************************************** */\n/* ******************      MODAL FORMS     ****************** */\n/* ********************************************************** */\n  \n.modalForm-fieldset {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    font-family: Text;\n}\n  \n.modalForm-input {\n    flex-basis: 100%; \n}\n  \n.modal label {\n    font-size: 14px;\n    color: grey;\n}\n  \n.modalForm-input input, textarea {\n    width: 100%;\n    border-radius: 5px;\n    border-width: 1px;\n    border-color: black;\n    padding: 10px;\n    font-size: 16px;\n    font-family: Text;\n}\n\n.modalForm-inputSelection {\n    flex-basis: 100%;\n}\n\n.modalForm-inputSelection {\n    input[type=\"radio\"] {\n        display: none;\n        &:checked {\n            + .box {\n                background-color: midnightblue;\n                span {\n                    color: white;\n                    transform: translateY(20px);\n                    &:before {\n                        opacity: 1;\n                    }\n                }\n            }\n            + .low {\n                background-color: yellow;\n                span {\n                    color: black;\n                }\n            }\n            + .med {\n                background-color: orange;\n                span {\n                    color: black;\n                }\n            }\n            + .high {\n                background-color: red;\n                span {\n                    color: white;\n                }\n            }\n        }\n    }\n\n    .box {\n        width: 100px;\n        height: 75px;\n        background-color: white;\n        transition: all 250ms ease;\n        will-change: transition;\n        display: inline-block;\n        text-align: center;\n        cursor: pointer;\n        position: relative;\n        border-style: solid;\n        border-width: 2px;\n        border-color: black;\n        span {\n            position: absolute;\n            transform: translate(0, 0px);\n            left: 0;\n            right: 0;\n            transition: all 300ms ease;\n            user-select: none;\n            color: lightgrey;\n            &:before {\n                display: block;\n                opacity: 0;\n                transition: all 300ms ease-in-out;\n                color: white;\n            }\n        }\n    }\n    \n    .project {\n        span {\n          &:before {\n            font-family: FontAwesome;\n            content: \"\\f07c\";\n          }\n        }\n      }\n\n      .todo {\n        span {\n          &:before {\n            font-family: FontAwesome;\n            content: \"\\f14a\";\n          }\n        }\n      }\n\n    .priority {\n        margin: 8px;\n        width: 100px;\n        background-color: white;\n        display: inline-block;\n        text-align: center;\n        cursor: pointer;\n        border-style: solid;\n        border-width: 2px;\n        border-color: black;\n        border-radius: 10px;\n        span {\n        }\n    }\n\n    .high {\n\n    }\n\n    .med {\n\n    }\n\n    .low{\n\n    }\n}\n\n.modalDropdown {\n    background-color: midnightblue;\n    padding: 15px;\n    border-radius: 5px;\n    color: white;\n    margin-top: 10px;\n}\n\n.modalDropdown:hover li {\n    padding: 10px;\n    height: auto;\n    overflow: auto;\n    opacity: 1;\n}\n\nul {\n    list-style-type: none;\n}\n\n.modalDropdown:hover ul {\n    padding: 10px;\n    padding-bottom: 0px;\n}\n\n.modalDropdown li {\n    height: 0px;\n    cursor: pointer;\n    opacity: 0;\n    transition-duration: 0.2s;\n    font-size: 12px;\n}\n\n.dropdownTitle {\n    padding: 10px;\n}\n\n.dropdownTitle:after {\n    float: right;\n    font-family: FontAwesome;\n    font-size: 18px;\n    content: \"\\f107\";\n  }\n\n\n.selection {\n    display: inline;\n}\n\n.saveButton {\n    text-align: center;\n}\n  \n.saveButtonContainer button {\n    font-size: 16px;\n    font-weight: bold;\n    color: white;\n    background-color: darkgreen;\n    border-radius: 7px;\n    padding: 10px 40px;\n}\n  \n.saveButton button:active {\n    background-color: green;\n}\n\n.modalButtons {\n    display: flex;\n    justify-content: end; \n    width: 100%;\n    margin-top: 20px;\n}\n\n\n\n\n/*\nselect {\n    width: 100%;\n    background-color: white;\n    border-width: 2px;\n    border-radius: 5px;\n    padding: 15px;\n    font-size: 18px;\n}\n  \n  \n\n.modalForm-checkbox {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    \n}\n*/\n\n/*\n.modalControl {\n    z-index: 1;\n    border: none;\n}\n\n/*\n.modalCheckbox {\n    justify-self: center;\n}\n*/\n\n/* ************************** */\n/* ***      Checkbox      *** */\n/* ************************** */\n\n/*\n.customCheckbox {\n    position: relative;\n    padding-left: 40px;\n    padding-right: 4px;\n    margin-bottom: 12px;\n    padding-top: 8px;\n    font-size: 14px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n  \n  .customCheckbox input {\n    height: 0;\n    width: 0;\n  }\n  \n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 28px;\n    width: 28px;\n    background-color: white;\n    border-color: black;\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 5px;\n  }\n  \n  .customCheckbox:hover input ~ .checkmark {\n    background-color: lightgray;\n  }\n  \n  .customCheckbox input:checked ~ .checkmark {\n    background-color: green;\n  }\n  \n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n  .customCheckbox input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  .customCheckbox .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n  }\n*/\n\n.userAvatar {\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domActivateContent.js":
/*!***********************************!*\
  !*** ./src/domActivateContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateContent: () => (/* binding */ activateContent)
/* harmony export */ });
/* harmony import */ var _domActivateProjectCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domActivateProjectCard.js */ "./src/domActivateProjectCard.js");
/* harmony import */ var _domActivateTodoCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domActivateTodoCard.js */ "./src/domActivateTodoCard.js");



function activateCards () {
    (0,_domActivateProjectCard_js__WEBPACK_IMPORTED_MODULE_0__.activateProjectCards)();
    (0,_domActivateTodoCard_js__WEBPACK_IMPORTED_MODULE_1__.activateTodoCards)();
}

function activateContent () {
    activateCards();
}



/***/ }),

/***/ "./src/domActivateHeader.js":
/*!**********************************!*\
  !*** ./src/domActivateHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateHeader: () => (/* binding */ activateHeader)
/* harmony export */ });
function activateHeader() {
    document.getElementById("userAvatar").addEventListener(
        "click", (e) => {
            localStorage.clear();
        }
    );
}



/***/ }),

/***/ "./src/domActivateModal.js":
/*!*********************************!*\
  !*** ./src/domActivateModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateModal: () => (/* binding */ activateModal),
/* harmony export */   activateModalEdit: () => (/* binding */ activateModalEdit)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _domGenerateContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domGenerateContent.js */ "./src/domGenerateContent.js");
/* harmony import */ var _domGenerateModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domGenerateModal.js */ "./src/domGenerateModal.js");
/* harmony import */ var _domGenerateSidemenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domGenerateSidemenu.js */ "./src/domGenerateSidemenu.js");






function activateProjectDropdown(title) {
    document.getElementById("modalProjectDropdownContent").innerHTML = "";

    // fill dropdown
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)().forEach(project => {
        const aProject = document.createElement('li');
            aProject.id = project.name;
            aProject.innerHTML = project.name;
            aProject.classList = "optionProject";
        document.getElementById("modalProjectDropdownContent").appendChild(aProject);
    })

    // select default
    if (title) {
        document.getElementById("titleTodoPartOfProject").innerHTML = title;
    } else {
        document.getElementById("titleTodoPartOfProject").innerHTML = "Défaut";
    };

    // activate the dropdown to select to which project the todo should be a part of
    document.querySelectorAll(".optionProject").forEach(element => {
        element.addEventListener(
            "click", function() {
                document.querySelectorAll('.optionProject').forEach(e => {e.classList.remove('selected');});
                element.classList.add('selected');
                document.getElementById("titleTodoPartOfProject").innerHTML = element.innerHTML;
            }
        );
    });
}

function activateTodoButton() {
    // activate the todo button (show the project selection dropdown)  
    document.getElementById("typeTodo").addEventListener(
        "change", function() {
            document.getElementById("modalFormInputTodoPartOfProject").style.display = "block";
        }
    );
}

function activateProjectButton() {
    // activate the project button (hide the project selection dropdown)  
    document.getElementById("typeProject").addEventListener(
        "change", function() {
            document.getElementById("modalFormInputTodoPartOfProject").style.display = "none";
        }
    );
}

function activateSaveButton(objectName, typeOfObject) {
    // activate the save button depending on the context (new or edit an object)
    document.getElementById("saveButton").addEventListener(
        "click", (e) => {

            // Get priority form modal form
            var priority;
            if (document.getElementById("priorityHigh").checked) {
                priority = "High";
            } else if (document.getElementById("priorityMed").checked) {
                priority = "Med";
            } else {
                priority = "Low";
            };

            // New project OR todo changed in project
            if ((document.getElementById("typeProject").checked) && ((!objectName) || (typeOfObject === "todo"))) {
                if ((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProject)(document.getElementById("objectTitle").value)) {
                    alert("Un projet possède le même titre et il ne peut pas y avoir deux projets portant le même titre.");
                } else {
                    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.newProject)(
                        document.getElementById("objectTitle").value, 
                        document.getElementById("objectDes").value, 
                        document.getElementById("objectDueDate").value,
                        priority
                    );
                    (0,_domGenerateSidemenu_js__WEBPACK_IMPORTED_MODULE_4__.addProjectToSidebar)(document.getElementById("objectTitle").value); 
                    if (typeOfObject === "todo") {
                        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(objectName);
                    }
                }

            // New todo OR project changed in todo
            } else if ((document.getElementById("typeTodo").checked) && ((!objectName) || (typeOfObject === "project"))) {
                if ((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getTodo)(document.getElementById("objectTitle").value)) {
                    alert("Une tâche possède le même titre et il ne peut pas y avoir deux tâches portant le même titre.");
                } else if (objectName === "Défaut") {
                    alert('Le projet "Défaut" ne peut être modifié.');
                } else {
                    (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.newTodo)(
                        document.getElementById("objectTitle").value,
                        document.getElementById("objectDes").value,
                        document.getElementById("titleTodoPartOfProject").innerText,
                        document.getElementById("objectDueDate").value,
                        priority
                    );
                    const newTodosProjectName = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getTodosProject)(document.getElementById("objectTitle").value);
                    if ((0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjectStatus)(newTodosProjectName) === "completed") {
                        (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.editProject)(newTodosProjectName, "uncompleted");
                    }
                    if (typeOfObject === "project") {
                        document.getElementById("sidebarSubmenuItemProject"+objectName).parentNode.removeChild(document.getElementById("sidebarSubmenuItemProject"+objectName));   
                        (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(objectName);
                        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.editTodosOfAProject)(objectName, "Défaut");
                    }
                }

            // Edit an object without changing its type
            } else {
                var currentStatus;
                if (document.getElementById(objectName+"Checkbox").checked) 
                {
                    currentStatus = "completed"; 
                } else {
                    currentStatus = "uncompleted";
                }

                // Edit project
                if ((document.getElementById("typeProject").checked) && (typeOfObject === "project")) {
                    if (objectName === "Défaut") {
                        alert('Le projet "Défaut" ne peut être modifié.');
                    } else {
                        (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.editProject)(
                            objectName,
                            currentStatus,
                            document.getElementById("objectTitle").value, 
                            document.getElementById("objectDes").value, 
                            document.getElementById("objectDueDate").value,
                            priority
                        );
                        if (objectName != document.getElementById("objectTitle").value) {
                            (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.editTodosOfAProject)(objectName, document.getElementById("objectTitle").value);
                            (0,_domGenerateSidemenu_js__WEBPACK_IMPORTED_MODULE_4__.editProjectInSidebar)(objectName, document.getElementById("objectTitle").value);
                        }
                    }

                // Edit todo
                } else if ((document.getElementById("typeTodo").checked) && (typeOfObject === "todo")) {
                    (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.editTodo)(
                        objectName,
                        currentStatus,
                        document.getElementById("objectTitle").value,
                        document.getElementById("objectDes").value,
                        document.getElementById("titleTodoPartOfProject").innerText,
                        document.getElementById("objectDueDate").value,
                        priority
                    );
                }
            }

            (0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_2__.refreshContent)();
            (0,_domGenerateModal_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)();
            modal.style.display = "none";
            e.preventDefault();
        }
    );
}

function activateCloseButton() {
    // activate "Close" ("x")
    document.getElementById("closeModalButton").addEventListener(
        "click", (e) => {
            (0,_domGenerateModal_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)();
            modal.style.display = "none";
        }
    );
}

function activateModal(objectName, typeOfObject, projectName) {
    activateProjectDropdown(projectName);
    activateTodoButton();
    activateProjectButton();
    activateSaveButton(objectName, typeOfObject); 
    activateCloseButton();   
}

function activateModalEdit(objectName, typeOfObject) {
    (0,_domGenerateModal_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(objectName, typeOfObject);
    modal.style.display = "block";
}



/***/ }),

/***/ "./src/domActivateProjectCard.js":
/*!***************************************!*\
  !*** ./src/domActivateProjectCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateProjectCards: () => (/* binding */ activateProjectCards)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _domGenerateContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domGenerateContent.js */ "./src/domGenerateContent.js");
/* harmony import */ var _domActivateModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domActivateModal.js */ "./src/domActivateModal.js");





function activateTrashIcons() {
    document.querySelectorAll('.cardProjectTrashIcon').forEach(e => {
        e.addEventListener(
            "click", function() {
                (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.editTodosOfAProject)(e.id.slice(11), "Défaut");
                document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)).parentNode.removeChild(document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)));  
                document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)+"Shrinked").parentNode.removeChild(document.getElementById("sidebarSubmenuItemProject"+e.id.slice(11)+"Shrinked"));                 
                (0,_project__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(e.id.slice(11));
                (0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_2__.refreshContent)();
            }
        );
    });
}

function activateProjectCard() {
    document.querySelectorAll('.cardProjectTitle').forEach(e => {
        e.addEventListener(
            "click", function() {
                if (e.id.slice(9) != "Défaut") { (0,_domActivateModal_js__WEBPACK_IMPORTED_MODULE_3__.activateModalEdit)(e.id.slice(9), "project"); }
            }
        );
    });
}

function activateProjectCards () {
    activateProjectCard();
    activateTrashIcons();
}



/***/ }),

/***/ "./src/domActivateSidemenu.js":
/*!************************************!*\
  !*** ./src/domActivateSidemenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateSidebar: () => (/* binding */ activateSidebar),
/* harmony export */   activateSidebarProject: () => (/* binding */ activateSidebarProject),
/* harmony export */   initialSidebarSelection: () => (/* binding */ initialSidebarSelection),
/* harmony export */   shrinkSidemenu: () => (/* binding */ shrinkSidemenu)
/* harmony export */ });
/* harmony import */ var _domGenerateContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domGenerateContent.js */ "./src/domGenerateContent.js");


function shrinkSidemenu() {
    document.getElementById("pageLayout").className = "shrinkedPageLayout";
    document.getElementById("expandedSidebar").style.display = "none";
    document.getElementById("shrinkedSidebar").style.display = "block";
}

function expandSidemenu() {
    document.getElementById("pageLayout").className = "expandedPageLayout";
    document.getElementById("shrinkedSidebar").style.display = "none";
    document.getElementById("expandedSidebar").style.display = "block";
}

function activateMenuButton() {
    document.querySelectorAll(".menuButton").forEach(element => {
        element.addEventListener(
            "click", function() {
                if (document.getElementById("pageLayout").className === "expandedPageLayout") {
                    shrinkSidemenu();
                } else {
                    expandSidemenu();
                }
            } 
        )
    });
}

function unselectMenuItems() {
    document.querySelectorAll('.sidebarItemSelected').forEach(e => {e.classList.remove('sidebarItemSelected');});
}

function unselectSubmenuItems() {
    document.querySelectorAll('.sidebarSubmenuItemSelected').forEach(e => {e.classList.remove('sidebarSubmenuItemSelected');});
}

function selectSubmenuItems(submenuId) {
    document.querySelectorAll("#" + submenuId).forEach(e => {e.classList.add('sidebarSubmenuItemSelected');});
}

function hideSubmenus() {
    document.querySelectorAll('.sidebarSubmenu').forEach(e => {e.style.display = "none";});
}

function selectMenuItem(itemToSelect) { 
    const x = document.getElementById("sidebarSubmenu" + itemToSelect);
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    const y = document.getElementById("sidebarSubmenu" + itemToSelect + "Shrinked");
    if (y.style.display !== "block") {
        y.style.display = "block"; 
    } else {
        y.style.display = "none"; 
    }
}

function activateMenuItems() {
    document.querySelectorAll('.sidebarItem').forEach(element => { 
        element.addEventListener(
            "click", function() {
                selectMenuItem(element.id.substring(11));
            } 
        )
    });
}

function activateSubmenuItems() {
    document.querySelectorAll('.sidebarSubmenuItem').forEach(element => { 
        element.addEventListener(
            "click", function() {
                unselectSubmenuItems();
                element.classList.add("sidebarSubmenuItemSelected");
                if (element.id.includes("Shrinked")) {
                    document.getElementById(element.id.slice(0,-8)).classList.add("sidebarSubmenuItemSelected");
                } else {
                    document.getElementById(element.id + "Shrinked").classList.add("sidebarSubmenuItemSelected");
                }
                (0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_0__.refreshContent)();
            } 
        )
    });
}

function activateNew() {
    document.getElementById("newButton").addEventListener(
        "click", function () {
            modal.style.display = "block";
            modal.scrollTo(0, 0);
        }
    );

    document.getElementById("newButtonShrinked").addEventListener(
        "click", function () {
            modal.style.display = "block";
            modal.scrollTo(0, 0);
        }
    );
}

function activateSidebar() {
    activateMenuButton();   
    activateNew(); 
    activateMenuItems();
    activateSubmenuItems();
}

function activateSidebarProject(project) {
    console.log(project);
    document.querySelectorAll("[id^='sidebarSubmenuItemProject"+project+"']").forEach(element => { 
        element.addEventListener(
            "click", function() {
                unselectSubmenuItems();
                element.classList.add("sidebarSubmenuItemSelected");
                if (element.id.includes("Shrinked")) {
                    document.getElementById(element.id.slice(0,-8)).classList.add("sidebarSubmenuItemSelected");
                } else {
                    document.getElementById(element.id + "Shrinked").classList.add("sidebarSubmenuItemSelected");
                }
                (0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_0__.refreshContent)();
            } 
        )
    });
}

function initialSidebarSelection() {
    document.getElementById("sidebarSubmenuItemInboxAll").classList.add("sidebarSubmenuItemSelected");
    document.getElementById("sidebarSubmenuItemInboxAllShrinked").classList.add("sidebarSubmenuItemSelected");
}



/***/ }),

/***/ "./src/domActivateTodoCard.js":
/*!************************************!*\
  !*** ./src/domActivateTodoCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateTodoCards: () => (/* binding */ activateTodoCards)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _domGenerateContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domGenerateContent.js */ "./src/domGenerateContent.js");
/* harmony import */ var _domActivateModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domActivateModal.js */ "./src/domActivateModal.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





function activateCheckbox() {
    document.querySelectorAll('.cardTodoCheckbox').forEach(e => {
        e.addEventListener(
            "change", function() {
                const todosName = e.id.slice(0, -8);
                const todosProjectName = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.getTodosProject)(todosName);
                if (e.checked) {
                    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(todosName, "completed");
                    document.getElementById("cardTitle"+todosName).classList.add("cardCompleted");
                    if ((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.getTodosOfAProject)(todosProjectName).filter((e) => e.status == "uncompleted").length == 0) { 
                        (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.editProject)(todosProjectName, "completed"); 
                    }
                } else {
                    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(todosName, "uncompleted");
                    document.getElementById("cardTitle"+todosName).classList.remove("cardCompleted");
                    (0,_project_js__WEBPACK_IMPORTED_MODULE_3__.editProject)(todosProjectName, "uncompleted");
                }
                (0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_1__.refreshContent)();
            }
        );
    });
}

function activateTodoTrashIcons() {
    document.querySelectorAll('.cardTodoTrashIcon').forEach(e => {
        e.addEventListener(
            "click", function() {
                (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(e.id.slice(11));
                (0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_1__.refreshContent)();
            }
        );
    });
}

function activateTodoCard() {
    document.querySelectorAll('.cardTodoTitle').forEach(e => {
        e.addEventListener(
            "click", function() {
                (0,_domActivateModal_js__WEBPACK_IMPORTED_MODULE_2__.activateModalEdit)(e.id.slice(9), "todo");
            }
        );
    });
}

function activateTodoCards () {
    activateTodoCard();
    activateCheckbox();
    activateTodoTrashIcons();
}



/***/ }),

/***/ "./src/domGenerateCards.js":
/*!*********************************!*\
  !*** ./src/domGenerateCards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateProjectCards: () => (/* binding */ generateProjectCards),
/* harmony export */   generateTodoCards: () => (/* binding */ generateTodoCards)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domGenerateHTMLElement.js */ "./src/domGenerateHTMLElement.js");
/* harmony import */ var _images_icon_clock_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon_clock.png */ "./src/images/icon_clock.png");
/* harmony import */ var _images_icon_clock_grey_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icon_clock-grey.png */ "./src/images/icon_clock-grey.png");
/* harmony import */ var _images_icon_clock_completed_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon_clock-completed.png */ "./src/images/icon_clock-completed.png");
/* harmony import */ var _images_icon_bin_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon_bin.png */ "./src/images/icon_bin.png");
/* harmony import */ var _images_icon_bin_grey_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icon_bin-grey.png */ "./src/images/icon_bin-grey.png");









function generateProjectCard(project) {
    const card = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("card projectCard card" + project.priority + "Priority", "ProjectCard_"+project.name, "");
        const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = project.name + "Checkbox";
            checkbox.setAttribute("onchange", "this.checked = !this.checked");
            checkbox.classList = "cardProjectCheckbox";
            if (project.status == "completed") { checkbox.checked = true; }
    card.appendChild(checkbox);
    if (project.status == "completed") { 
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardTitle cardProjectTitle cardCompleted", "cardTitle"+project.name, project.name));
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_clock_completed_png__WEBPACK_IMPORTED_MODULE_5__, "iconClockCompleted", "clockButton"+project.name, "cardIcon"));
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardContent cardCompleted", "cardDueDate"+project.name, project.dueDate));
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_bin_png__WEBPACK_IMPORTED_MODULE_6__, "iconBin", "trashButton"+project.name, "cardProjectTrashIcon"));
    } else {
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardTitle cardProjectTitle", "cardTitle"+project.name, project.name));
        if (project.name != "Défaut") {
            card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_clock_png__WEBPACK_IMPORTED_MODULE_3__, "iconClock", "clockButton"+project.name, "cardIcon"));
            card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardContent", "cardDueDate"+project.name, project.dueDate));
            card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_bin_png__WEBPACK_IMPORTED_MODULE_6__, "iconBin", "trashButton"+project.name, "cardProjectTrashIcon"));
        }
    }
    return card;
}

function generateTodoCard(todo) {
    const card = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("card todoCard card" + todo.priority + "Priority", "TodoCard_"+todo.name, "");
        const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = todo.name + "Checkbox";
            checkbox.classList = "cardTodoCheckbox";
            if (todo.status == "completed") { checkbox.checked = true; }
    card.appendChild(checkbox);
    if (todo.status == "completed") { 
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardTitle cardTodoTitle cardCompleted", "cardTitle"+todo.name, todo.name)); 
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_clock_completed_png__WEBPACK_IMPORTED_MODULE_5__, "iconClockCompleted", "clockButton"+todo.name, "cardIcon"));
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardContent cardCompleted", "cardDueDate"+todo.name, todo.dueDate));
    } else { 
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardTitle cardTodoTitle", "cardTitle"+todo.name, todo.name)); 
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_clock_png__WEBPACK_IMPORTED_MODULE_3__, "iconClock", "clockButton"+todo.name, "cardIcon"));
        card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardContent", "cardDueDate"+todo.name, todo.dueDate));
    }
    card.appendChild((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_bin_png__WEBPACK_IMPORTED_MODULE_6__, "iconBin", "trashButton"+todo.name, "cardTodoTrashIcon"));
    return card;
}

function generateProjectCards() {
    const cardContainer = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardsContainer", "", "");
    const projects = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
        projects.forEach(element => {
            cardContainer.appendChild(generateProjectCard(element));
        });   
    return cardContainer;
}

function generateTodoCards(status, priority, deadline, project) {
    const cardContainer = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("cardsContainer", "", "");
    const todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getAllTodos)();
        todos.forEach(element => {
            if (!(status) && !(priority) && !(deadline) && !(project)) {
                cardContainer.appendChild(generateTodoCard(element));
            } else if ((status) && (status === element.status)) {
                cardContainer.appendChild(generateTodoCard(element));
            } else if ((priority) && (priority === element.priority)) {
                cardContainer.appendChild(generateTodoCard(element));
            } else if (deadline) {
                var dueDate = new Date(element.dueDate);
                dueDate.setTime(dueDate.getTime() + dueDate.getTimezoneOffset()*60*1000);
                const today = new Date();
                var in7Days = new Date();
                in7Days.setDate(in7Days.getDate()+7);
                var in30Days = new Date();
                in30Days.setDate(in30Days.getDate()+30);
                if ((deadline == 1) && ((!element.dueDate) || (dueDate < today))) {
                    cardContainer.appendChild(generateTodoCard(element));
                } else if ((deadline == 7) && ((!element.dueDate) || (dueDate < in7Days))) {
                    cardContainer.appendChild(generateTodoCard(element));
                } else if ((deadline == 30) && ((!element.dueDate) || (dueDate < in30Days))) {
                    cardContainer.appendChild(generateTodoCard(element));
                }
            } else if ((project) && (project === element.project)) {
                cardContainer.appendChild(generateTodoCard(element));
            }
        });   
    return cardContainer;
}



/***/ }),

/***/ "./src/domGenerateContent.js":
/*!***********************************!*\
  !*** ./src/domGenerateContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateContent: () => (/* binding */ generateContent),
/* harmony export */   refreshContent: () => (/* binding */ refreshContent)
/* harmony export */ });
/* harmony import */ var _images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon_task.png */ "./src/images/icon_task.png");
/* harmony import */ var _images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon_project-arrow.png */ "./src/images/icon_project-arrow.png");
/* harmony import */ var _domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domGenerateHTMLElement.js */ "./src/domGenerateHTMLElement.js");
/* harmony import */ var _domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domGenerateCards.js */ "./src/domGenerateCards.js");
/* harmony import */ var _domActivateContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domActivateContent.js */ "./src/domActivateContent.js");






function generateContentTitle(type, status, priority, deadline, project) {
    const title = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("title", "", "");
        var context;
        if (type === "project") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Projets : ");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_1__, "iconProject"));
        } else if (status === "completed") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Complétées");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (status === "uncompleted") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Non-complétées");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (priority === "High") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Priorité élevée");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (priority === "Med") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Priorité moyenne");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (priority === "Low") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Priorité basse");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (deadline === "today") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : À compléter aujourd'hui !");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (deadline === "week") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : À compléter d'ici une semaine !");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (deadline === "month") {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : À compléter d'ici un mois !");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else if (project) {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Du projet " + project);
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));
        } else {
            context = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("context", "context", "Tâches : Toutes");
            context.prepend((0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createImg)(_images_icon_task_png__WEBPACK_IMPORTED_MODULE_0__, "iconTask"));                        
        }
    title.appendChild(context); 
    return title;
}


function generateContent(type, status, priority, deadline, project) {
    const content = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("content", "content", "");    
        const contentContext = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("contentContext", "", "");
            const contextBar = document.createElement('nav');
                contextBar.classList = "contextBar";
            if (type === "project") {
                contextBar.appendChild(generateContentTitle(type));
            } else if (status) {
                contextBar.appendChild(generateContentTitle(type, status));
            } else if (priority) {
                contextBar.appendChild(generateContentTitle(type, undefined, priority));
            } else if (deadline) {
                contextBar.appendChild(generateContentTitle(type, undefined, undefined, deadline));
            } else if (project) {
                contextBar.appendChild(generateContentTitle(type, undefined, undefined, undefined, project));
            } else {
                contextBar.appendChild(generateContentTitle());
            }
        contentContext.appendChild(contextBar);       
        if (type === "project") {
            contentContext.appendChild((0,_domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__.generateProjectCards)());
        } else if (status) {
            contentContext.appendChild((0,_domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__.generateTodoCards)(status));
        } else if (priority) {
            contentContext.appendChild((0,_domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__.generateTodoCards)(undefined, priority));
        } else if (deadline) {
            contentContext.appendChild((0,_domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__.generateTodoCards)(undefined, undefined, deadline));
        } else if (project) {
            contentContext.appendChild((0,_domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__.generateTodoCards)(undefined, undefined, undefined, project));
        } else {
            contentContext.appendChild((0,_domGenerateCards_js__WEBPACK_IMPORTED_MODULE_3__.generateTodoCards)());
        }
    content.appendChild(contentContext);
    return content;
}

function refreshContent() {
    document.getElementById("content").remove();
    // find selected submenu
    var filter;
        document.querySelectorAll('.sidebarSubmenuItemSelected').forEach(e => {if (!e.id.includes("Shrinked")) { filter = e.id.slice(18);}});
    
    // call generateContent accordingly to the filter (from the selected submenu item)
    if (filter === "InboxAll") {
        document.getElementById("pageLayout").appendChild(generateContent());
    } else if(filter === "InboxTodo") {
        document.getElementById("pageLayout").appendChild(generateContent("todo", "uncompleted"));
    } else if(filter === "InboxDone") {
        document.getElementById("pageLayout").appendChild(generateContent("todo", "completed"));
    } else if(filter.includes("Priority")) {
        document.getElementById("pageLayout").appendChild(generateContent("todo", undefined, filter.slice(8)));
    } else if(filter.includes("Calendar")) {
        document.getElementById("pageLayout").appendChild(generateContent("todo", undefined, undefined, filter.slice(8)));
    } else if(filter === "EditProjects") {
        document.getElementById("pageLayout").appendChild(generateContent("project"));
    } else if(filter.includes("Project")) {
        document.getElementById("pageLayout").appendChild(generateContent("todo", undefined, undefined, undefined, filter.slice(7)));
    }
    (0,_domActivateContent_js__WEBPACK_IMPORTED_MODULE_4__.activateContent)();
}



/***/ }),

/***/ "./src/domGenerateHTMLElement.js":
/*!***************************************!*\
  !*** ./src/domGenerateHTMLElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createImg: () => (/* binding */ createImg)
/* harmony export */ });
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



/***/ }),

/***/ "./src/domGenerateHeader.js":
/*!**********************************!*\
  !*** ./src/domGenerateHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHeader: () => (/* binding */ generateHeader)
/* harmony export */ });
/* harmony import */ var _images_icon_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon_search.png */ "./src/images/icon_search.png");
/* harmony import */ var _images_icon_list_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon_list.png */ "./src/images/icon_list.png");
/* harmony import */ var _images_icon_tiles_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icon_tiles.png */ "./src/images/icon_tiles.png");
/* harmony import */ var _domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domGenerateHTMLElement */ "./src/domGenerateHTMLElement.js");





function generateHeader() {
    const header = document.createElement('div');
        header.classList = "header";

        const searchBar = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_3__.createDiv)("searchBar", "", "");
            searchBar.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_3__.createImg)(_images_icon_search_png__WEBPACK_IMPORTED_MODULE_0__, "iconSearch"));
            const inputSearch = document.createElement('input');
                inputSearch.id = "searchField";
                inputSearch.setAttribute("type", "text");
            searchBar.appendChild(inputSearch);
        header.appendChild(searchBar);

        const userBar = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_3__.createDiv)("userBar", "", "");
            userBar.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_3__.createImg)(_images_icon_tiles_png__WEBPACK_IMPORTED_MODULE_2__, "iconTiles"));
            const userAvatar = document.createElement('div');
                userAvatar.id = "userAvatar";
                userAvatar.classList = "userAvatar";
                userAvatar.innerHTML = "E";
            userBar.appendChild(userAvatar);
        header.appendChild(userBar);
    return header;
}




/***/ }),

/***/ "./src/domGenerateModal.js":
/*!*********************************!*\
  !*** ./src/domGenerateModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateModal: () => (/* binding */ generateModal),
/* harmony export */   resetModal: () => (/* binding */ resetModal)
/* harmony export */ });
/* harmony import */ var _domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domGenerateHTMLElement */ "./src/domGenerateHTMLElement.js");
/* harmony import */ var _domActivateModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domActivateModal */ "./src/domActivateModal.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");





function generateModal () {
    const modal = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modal", "modal", "");
        const modalContainer = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalContainer", "modalContainer", "");
            const modalHeader = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalHeader", "", "");
                const modalTitle = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalTitle", "", " ");
            modalHeader.appendChild(modalTitle);
                const closeModal = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("closeModal", "", "");
                    const closeModalButton = document.createElement('button');
                        closeModalButton.classList = "closeModalButton";
                        closeModalButton.id = "closeModalButton";           
                        closeModalButton.innerHTML = "&times;";
                closeModal.appendChild(closeModalButton);
            modalHeader.appendChild(closeModal);
        modalContainer.appendChild(modalHeader);

            const modalForm = document.createElement('form');
                modalForm.id = "modalForm";
                modalForm.setAttribute("action", " ");
                modalForm.setAttribute("method", "get");
                modalForm.classList = "modalForm";
                modalForm.setAttribute("onkeydown", "return event.key != 'Enter';");

                const modalFormFieldset = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-fieldset", "", "");      
                    const modalFormInputTypeOf = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-inputSelection", "", "");
                        const labelTypeOfProject = document.createElement('label');            
                            const inputTypeOfProject = document.createElement('input');
                                inputTypeOfProject.id = "typeProject";
                                inputTypeOfProject.setAttribute("type", "radio");
                                inputTypeOfProject.setAttribute("name", "typeOf");
                        labelTypeOfProject.appendChild(inputTypeOfProject);
                            const projectBox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("project box", "", "");
                                const inputTypeOfProjectSpan = document.createElement('span');
                                    inputTypeOfProjectSpan.innerHTML = "Projet";
                            projectBox.appendChild(inputTypeOfProjectSpan);
                        labelTypeOfProject.appendChild(projectBox);
                    modalFormInputTypeOf.appendChild(labelTypeOfProject);
                        const labelTypeOfTodo = document.createElement('label');
                            const inputTypeOfTodo = document.createElement('input');
                                inputTypeOfTodo.id = "typeTodo";
                                inputTypeOfTodo.setAttribute("type", "radio");
                                inputTypeOfTodo.setAttribute("name", "typeOf");
                                inputTypeOfTodo.setAttribute("checked", "checked");
                            labelTypeOfTodo.appendChild(inputTypeOfTodo);
                            const todoBox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("todo box", "", "");
                                const inputTypeOfTodoSpan = document.createElement('span');
                                    inputTypeOfTodoSpan.innerHTML = "Tâche";
                            todoBox.appendChild(inputTypeOfTodoSpan);
                        labelTypeOfTodo.appendChild(todoBox);
                    modalFormInputTypeOf.appendChild(labelTypeOfTodo);
                modalFormFieldset.appendChild(modalFormInputTypeOf);

                    const modalFormInputTodoPartOfProject = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-inputSelection", "modalFormInputTodoPartOfProject", "");
                        const labelTodoPartOfProject = document.createElement('label');
                            labelTodoPartOfProject.setAttribute("for", "modalProjectDropdown");
                            labelTodoPartOfProject.innerHTML = "Projet auquel appartient cette tâche :";
                    modalFormInputTodoPartOfProject.appendChild(labelTodoPartOfProject);
                        const todoPartOfProject = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalDropdown", "modalProjectDropdown", "");
                            const titleTodoPartOfProject = document.createElement('span');
                                titleTodoPartOfProject.id = "titleTodoPartOfProject";
                                titleTodoPartOfProject.classList = "dropdownTitle";
//                                titleTodoPartOfProject.innerHTML = "Défaut";
                        todoPartOfProject.appendChild(titleTodoPartOfProject);
                            const contentTodoPartOfProject = document.createElement('ul');
                                contentTodoPartOfProject.id = "modalProjectDropdownContent";
                                contentTodoPartOfProject.classList = "dropdownContent";                              
                        todoPartOfProject.appendChild(contentTodoPartOfProject);
                    modalFormInputTodoPartOfProject.appendChild(todoPartOfProject);
                modalFormFieldset.appendChild(modalFormInputTodoPartOfProject);

                    const modalFormInputPriority = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-inputSelection", "modalForm-inputPriority", "");
                        const labelPriority = document.createElement('label');
                            labelPriority.setAttribute("for", "modalForm-inputPriority");
                            labelPriority.innerHTML = "Priorité : ";
                    modalFormInputPriority.appendChild(labelPriority);
                        const labelPriorityHigh = document.createElement('label');
                            const inputPriorityHigh = document.createElement('input');
                                inputPriorityHigh.id = "priorityHigh";
                                inputPriorityHigh.setAttribute("type", "radio");
                                inputPriorityHigh.setAttribute("checked", "checked");
                                inputPriorityHigh.setAttribute("name", "priority");
                        labelPriorityHigh.appendChild(inputPriorityHigh);
                            const priorityHighBox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("priority high", "", "");
                                const inputPriorityHighSpan = document.createElement('span');
                                    inputPriorityHighSpan.innerHTML = "Haute";
                            priorityHighBox.appendChild(inputPriorityHighSpan);
                        labelPriorityHigh.appendChild(priorityHighBox);
                    modalFormInputPriority.appendChild(labelPriorityHigh);
                        const labelPriorityMed = document.createElement('label');
                            const inputPriorityMed = document.createElement('input');
                                inputPriorityMed.id = "priorityMed";
                                inputPriorityMed.setAttribute("type", "radio");
                                inputPriorityMed.setAttribute("name", "priority");
                        labelPriorityMed.appendChild(inputPriorityMed);
                            const priorityMedBox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("priority med", "", "");
                                const inputPriorityMedSpan = document.createElement('span');
                                    inputPriorityMedSpan.innerHTML = "Moyenne";
                            priorityMedBox.appendChild(inputPriorityMedSpan);
                        labelPriorityMed.appendChild(priorityMedBox);
                    modalFormInputPriority.appendChild(labelPriorityMed);
                        const labelPriorityLow = document.createElement('label');
                            const inputPriorityLow = document.createElement('input');
                                inputPriorityLow.id = "priorityLow";
                                inputPriorityLow.setAttribute("type", "radio");
                                inputPriorityLow.setAttribute("name", "priority");
                        labelPriorityLow.appendChild(inputPriorityLow);
                            const priorityLowBox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("priority low", "", "");
                                const inputPriorityLowSpan = document.createElement('span');
                                    inputPriorityLowSpan.innerHTML = "Basse";
                            priorityLowBox.appendChild(inputPriorityLowSpan);
                        labelPriorityLow.appendChild(priorityLowBox);
                    modalFormInputPriority.appendChild(labelPriorityLow);
                modalFormFieldset.appendChild(modalFormInputPriority);

                    const modalFormInputTitle = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-input", "", "");
                        const labelTitle = document.createElement('label');
                            labelTitle.setAttribute("for", "objectTitle");
                            labelTitle.innerHTML = "Titre du projet ou de la tâche";
                    modalFormInputTitle.appendChild(labelTitle);
                        const inputTitle = document.createElement('input');
                            inputTitle.id = "objectTitle";
                            inputTitle.setAttribute("name", "objectTitle");
                            inputTitle.setAttribute("type", "text");
                    modalFormInputTitle.appendChild(inputTitle);    
                modalFormFieldset.appendChild(modalFormInputTitle);

                    const modalFormInputReqDes = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-input", "", "");
                        const labelReqDes = document.createElement('label');
                            labelReqDes.setAttribute("for", "objectDes");
                            labelReqDes.innerHTML = "Description du projet ou de la tâche";
                    modalFormInputReqDes.appendChild(labelReqDes);
                        const inputReqDes = document.createElement('textarea');
                            inputReqDes.id = "objectDes";
                            inputReqDes.setAttribute("name", "objectDes");
                            inputReqDes.setAttribute("rows", "4");
                            inputReqDes.setAttribute("cols", "85");
                            inputReqDes.setAttribute("maxlength", "200");
                    modalFormInputReqDes.appendChild(inputReqDes);    
                modalFormFieldset.appendChild(modalFormInputReqDes);

                    const modalFormInputDueDate = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalForm-input", "", "");
                        const labelDueDate = document.createElement('label');
                            labelDueDate.setAttribute("for", "objectDueDate");
                            labelDueDate.innerHTML = "Date limite compléter le projet ou la tâche";
                    modalFormInputDueDate.appendChild(labelDueDate);
                        const inputDueDate = document.createElement('input');
                            inputDueDate.id = "objectDueDate";
                            inputDueDate.setAttribute("type", "date");
                            inputDueDate.setAttribute("name", "objectDueDate");
                    modalFormInputDueDate.appendChild(inputDueDate);    
                modalFormFieldset.appendChild(modalFormInputDueDate);
            modalForm.appendChild(modalFormFieldset);
        modalContainer.appendChild(modalForm);

                const modalButtons = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("modalButtons", "", "");
                    const saveButtonContainer = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_0__.createDiv)("saveButtonContainer", "", "")
                        const saveButton = document.createElement('button');
                            saveButton.id = "saveButton";
                            saveButton.classList = "saveButton"
                            saveButton.innerHTML = "Enregistrer";
                saveButtonContainer.appendChild(saveButton);
            modalButtons.appendChild(saveButtonContainer);                   
        modalContainer.appendChild(modalButtons);

    modal.appendChild(modalContainer);

    return modal;    
};

function resetModal (objectName, typeOfObject) {
    document.getElementById("modal").remove();
    document.getElementById("pageLayout").appendChild(generateModal());
    if (typeOfObject === "todo") {
        const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_2__.getTodo)(objectName);
        fillModal(todo, "todo");
        (0,_domActivateModal__WEBPACK_IMPORTED_MODULE_1__.activateModal)(objectName, typeOfObject, todo.project);
    } else if (typeOfObject === "project") {
        fillModal((0,_project_js__WEBPACK_IMPORTED_MODULE_3__.getProject)(objectName), "project");
        (0,_domActivateModal__WEBPACK_IMPORTED_MODULE_1__.activateModal)(objectName, typeOfObject);
    } else {
        (0,_domActivateModal__WEBPACK_IMPORTED_MODULE_1__.activateModal)();
    }
}

function fillModal(object, typeOfObject) {
    if (typeOfObject === "todo") {
        document.getElementById("typeProject").checked = false;
        document.getElementById("typeTodo").checked = true;
        document.getElementById("titleTodoPartOfProject").innerHTML = object.project;
    } else {
        document.getElementById("typeTodo").checked = false;
        document.getElementById("typeProject").checked = true;
        document.getElementById("modalFormInputTodoPartOfProject").style.display = "none";
    }
    document.getElementById("priorityHigh").checked = false;
    document.getElementById("priorityMed").checked = false;
    document.getElementById("priorityLow").checked = false;
    document.getElementById("priority"+object.priority).checked = true;
    document.getElementById("objectTitle").value = object.name;
    document.getElementById("objectDes").value = object.description;
    document.getElementById("objectDueDate").value = object.dueDate;
}





/***/ }),

/***/ "./src/domGenerateSidemenu.js":
/*!************************************!*\
  !*** ./src/domGenerateSidemenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectToSidebar: () => (/* binding */ addProjectToSidebar),
/* harmony export */   editProjectInSidebar: () => (/* binding */ editProjectInSidebar),
/* harmony export */   generateExpandedSidebar: () => (/* binding */ generateExpandedSidebar),
/* harmony export */   generateShrinkedSidebar: () => (/* binding */ generateShrinkedSidebar)
/* harmony export */ });
/* harmony import */ var _images_icon_hamburger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon_hamburger.png */ "./src/images/icon_hamburger.png");
/* harmony import */ var _images_logo_kanply_long_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo-kanply-long.png */ "./src/images/logo-kanply-long.png");
/* harmony import */ var _images_icon_new_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icon_new.png */ "./src/images/icon_new.png");
/* harmony import */ var _images_icon_inbox_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon_inbox.png */ "./src/images/icon_inbox.png");
/* harmony import */ var _images_icon_mail_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icon_mail.png */ "./src/images/icon_mail.png");
/* harmony import */ var _images_icon_mail_todo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon_mail-todo.png */ "./src/images/icon_mail-todo.png");
/* harmony import */ var _images_icon_mail_check_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon_mail-check.png */ "./src/images/icon_mail-check.png");
/* harmony import */ var _images_icon_priority_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icon_priority.png */ "./src/images/icon_priority.png");
/* harmony import */ var _images_icon_priority_red_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icon_priority-red.png */ "./src/images/icon_priority-red.png");
/* harmony import */ var _images_icon_priority_yellow_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/icon_priority-yellow.png */ "./src/images/icon_priority-yellow.png");
/* harmony import */ var _images_icon_priority_orange_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/icon_priority-orange.png */ "./src/images/icon_priority-orange.png");
/* harmony import */ var _images_icon_priority_green_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/icon_priority-green.png */ "./src/images/icon_priority-green.png");
/* harmony import */ var _images_icon_calendar_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/icon_calendar.png */ "./src/images/icon_calendar.png");
/* harmony import */ var _images_icon_calendar_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/icon_calendar-1.png */ "./src/images/icon_calendar-1.png");
/* harmony import */ var _images_icon_calendar_7_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/icon_calendar-7.png */ "./src/images/icon_calendar-7.png");
/* harmony import */ var _images_icon_calendar_30_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/icon_calendar-30.png */ "./src/images/icon_calendar-30.png");
/* harmony import */ var _images_icon_project_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/icon_project.png */ "./src/images/icon_project.png");
/* harmony import */ var _images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/icon_project-arrow.png */ "./src/images/icon_project-arrow.png");
/* harmony import */ var _images_icon_edit_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/icon_edit.png */ "./src/images/icon_edit.png");
/* harmony import */ var _domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./domGenerateHTMLElement */ "./src/domGenerateHTMLElement.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./domActivateSidemenu.js */ "./src/domActivateSidemenu.js");























function createMenuItem(itemIcon, itemIconAlt, itemClass, itemId, itemContent) {
    const div = document.createElement('div');
    div.classList = itemClass;
    div.id = itemId;
    if (itemContent == null) {
        div.innerHTML = "";
    } else {
        div.innerHTML = itemContent;
    }
    div.prepend((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(itemIcon, itemIconAlt));
    return div;
}

function addProjectToSidebar(project) {
    document.getElementById("sidebarSubmenuProject").appendChild(createMenuItem(_images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_17__, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+project, '<div class="sidebarSubmenuItemProjectExpanded">'+project+'</div>'));
    document.getElementById("sidebarSubmenuProjectShrinked").appendChild(createMenuItem(_images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_17__, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+project+"Shrinked"));
    (0,_domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_21__.activateSidebarProject)(project);
}

function editProjectInSidebar(oldName, newName) {
    document.getElementById("sidebarSubmenuItemProject"+oldName).id = "sidebarSubmenuItemProject"+newName;   
    document.getElementById("sidebarSubmenuItemProject"+newName).innerHTML = '<div class="sidebarSubmenuItemProjectExpanded">'+newName+'</div>';
    document.getElementById("sidebarSubmenuItemProject"+newName).prepend((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(_images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_17__, "iconProjectArrow"));
    document.getElementById("sidebarSubmenuItemProject"+oldName+"Shrinked").id = "sidebarSubmenuItemProject"+newName+"Shrinked";  
    (0,_domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_21__.activateSidebarProject)(newName);
}

function generateExpandedSidebar() {
    const sidebar = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebar", "expandedSidebar", "");
        const sidebarTitle = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarTitle", "", "");
            sidebarTitle.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(_images_icon_hamburger_png__WEBPACK_IMPORTED_MODULE_0__, "iconHamburger", "iconHamburger", "menuButton"));
            sidebarTitle.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(_images_logo_kanply_long_png__WEBPACK_IMPORTED_MODULE_1__, "logo_kanply"));
        sidebar.appendChild(sidebarTitle);

        const sidebarNewButton = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarNewButton", "", "");
            const newButton = document.createElement('button');
                newButton.classList = "newButton";
                newButton.id = "newButton";
                newButton.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(_images_icon_new_png__WEBPACK_IMPORTED_MODULE_2__, "iconNew"));            
                newButton.innerHTML += "<span>Nouveau</span>";
            sidebarNewButton.append(newButton);
        sidebar.appendChild(sidebarNewButton);

        const sidebarMenu = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarMenu", "", "");
            sidebarMenu.appendChild(createMenuItem(_images_icon_inbox_png__WEBPACK_IMPORTED_MODULE_3__, "iconInbox", "sidebarItem", "sidebarItemInbox", "Boîte de réception"));
            const sidebarSubmenuInbox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuInbox", "");
                sidebarSubmenuInbox.appendChild(createMenuItem(_images_icon_mail_png__WEBPACK_IMPORTED_MODULE_4__, "iconInboxAll", "sidebarSubmenuItem", "sidebarSubmenuItemInboxAll", "Tous"));
                sidebarSubmenuInbox.appendChild(createMenuItem(_images_icon_mail_todo_png__WEBPACK_IMPORTED_MODULE_5__, "iconInboxTodo", "sidebarSubmenuItem", "sidebarSubmenuItemInboxTodo", "À faire"));
                sidebarSubmenuInbox.appendChild(createMenuItem(_images_icon_mail_check_png__WEBPACK_IMPORTED_MODULE_6__, "iconInboxDone", "sidebarSubmenuItem", "sidebarSubmenuItemInboxDone", "Terminé"));
            sidebarMenu.appendChild(sidebarSubmenuInbox);

            sidebarMenu.appendChild(createMenuItem(_images_icon_priority_png__WEBPACK_IMPORTED_MODULE_7__, "iconPriority", "sidebarItem", "sidebarItemPriority", "Priorité"));
            const sidebarSubmenuPriority = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuPriority", "");
                sidebarSubmenuPriority.appendChild(createMenuItem(_images_icon_priority_red_png__WEBPACK_IMPORTED_MODULE_8__, "iconPriorityRed", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityHigh", "Élevée"));
                sidebarSubmenuPriority.appendChild(createMenuItem(_images_icon_priority_orange_png__WEBPACK_IMPORTED_MODULE_10__, "iconPriorityOrange", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityMed", "Moyenne"));
                sidebarSubmenuPriority.appendChild(createMenuItem(_images_icon_priority_yellow_png__WEBPACK_IMPORTED_MODULE_9__, "iconPriorityYellow", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityLow", "Basse"));
            sidebarMenu.appendChild(sidebarSubmenuPriority);

            sidebarMenu.appendChild(createMenuItem(_images_icon_calendar_png__WEBPACK_IMPORTED_MODULE_12__, "iconCalendar", "sidebarItem", "sidebarItemCalendar", "Calendrier"));
            const sidebarSubmenuCalendar = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuCalendar", "");
                sidebarSubmenuCalendar.appendChild(createMenuItem(_images_icon_calendar_1_png__WEBPACK_IMPORTED_MODULE_13__, "iconCalendar1", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar1", "Aujourd'hui"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(_images_icon_calendar_7_png__WEBPACK_IMPORTED_MODULE_14__, "iconCalendar7", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar7", "Prochains 7 jours"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(_images_icon_calendar_30_png__WEBPACK_IMPORTED_MODULE_15__, "iconCalendar30", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar30", "Prochains 30 jours"));
            sidebarMenu.appendChild(sidebarSubmenuCalendar);

            sidebarMenu.appendChild(createMenuItem(_images_icon_project_png__WEBPACK_IMPORTED_MODULE_16__, "iconProject", "sidebarItem", "sidebarItemProject", "Projets"));        
            const sidebarSubmenuProject = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuProject", "");
                sidebarSubmenuProject.appendChild(createMenuItem(_images_icon_edit_png__WEBPACK_IMPORTED_MODULE_18__, "iconEdit", "sidebarSubmenuItem", "sidebarSubmenuItemEditProjects", "Éditer les projets"));
                (0,_project__WEBPACK_IMPORTED_MODULE_20__.getAllProjects)().forEach(e => {sidebarSubmenuProject.appendChild(createMenuItem(_images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_17__, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+e.name, '<div class="sidebarSubmenuItemProjectExpanded">'+e.name+'</div>'));});
            sidebarMenu.appendChild(sidebarSubmenuProject);
        sidebar.appendChild(sidebarMenu);
    return sidebar;
}

function generateShrinkedSidebar() {
    const sidebar = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebar", "shrinkedSidebar", "");
        const sidebarTitle = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarTitle", "", "");
            sidebarTitle.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(_images_icon_hamburger_png__WEBPACK_IMPORTED_MODULE_0__, "iconHamburger", "iconHamburger", "menuButton"));
        sidebar.appendChild(sidebarTitle);

        const sidebarNewButton = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarNewButton", "", "");
            const newButton = document.createElement('button');
                newButton.classList = "newButton";
                newButton.id = "newButtonShrinked";
                newButton.appendChild((0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createImg)(_images_icon_new_png__WEBPACK_IMPORTED_MODULE_2__, "iconNew")); 
            sidebarNewButton.append(newButton);
        sidebar.appendChild(sidebarNewButton);

        const sidebarMenu = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarMenu", "", "");
            sidebarMenu.appendChild(createMenuItem(_images_icon_inbox_png__WEBPACK_IMPORTED_MODULE_3__, "iconInbox", "sidebarItem", "sidebarItemInbox"));
            const sidebarSubmenuInbox = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuInboxShrinked", "");
                sidebarSubmenuInbox.appendChild(createMenuItem(_images_icon_mail_png__WEBPACK_IMPORTED_MODULE_4__, "iconInboxAll", "sidebarSubmenuItem", "sidebarSubmenuItemInboxAllShrinked"));
                sidebarSubmenuInbox.appendChild(createMenuItem(_images_icon_mail_todo_png__WEBPACK_IMPORTED_MODULE_5__, "iconInboxTodo", "sidebarSubmenuItem", "sidebarSubmenuItemInboxTodoShrinked"));
                sidebarSubmenuInbox.appendChild(createMenuItem(_images_icon_mail_check_png__WEBPACK_IMPORTED_MODULE_6__, "iconInboxDone", "sidebarSubmenuItem", "sidebarSubmenuItemInboxDoneShrinked"));
            sidebarMenu.appendChild(sidebarSubmenuInbox);

            sidebarMenu.appendChild(createMenuItem(_images_icon_priority_png__WEBPACK_IMPORTED_MODULE_7__, "iconPriority", "sidebarItem", "sidebarItemPriority"));
            const sidebarSubmenuPriority = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuPriorityShrinked", "");
                sidebarSubmenuPriority.appendChild(createMenuItem(_images_icon_priority_red_png__WEBPACK_IMPORTED_MODULE_8__, "iconPriorityRed", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityHighShrinked"));
                sidebarSubmenuPriority.appendChild(createMenuItem(_images_icon_priority_orange_png__WEBPACK_IMPORTED_MODULE_10__, "iconPriorityOrange", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityMedShrinked"));
                sidebarSubmenuPriority.appendChild(createMenuItem(_images_icon_priority_yellow_png__WEBPACK_IMPORTED_MODULE_9__, "iconPriorityYellow", "sidebarSubmenuItem", "sidebarSubmenuItemPriorityLowShrinked"));
            sidebarMenu.appendChild(sidebarSubmenuPriority);

            sidebarMenu.appendChild(createMenuItem(_images_icon_calendar_png__WEBPACK_IMPORTED_MODULE_12__, "iconCalendar", "sidebarItem", "sidebarItemCalendar"));
            const sidebarSubmenuCalendar = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuCalendarShrinked", "");
                sidebarSubmenuCalendar.appendChild(createMenuItem(_images_icon_calendar_1_png__WEBPACK_IMPORTED_MODULE_13__, "iconCalendar1", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar1Shrinked"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(_images_icon_calendar_7_png__WEBPACK_IMPORTED_MODULE_14__, "iconCalendar7", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar7Shrinked"));
                sidebarSubmenuCalendar.appendChild(createMenuItem(_images_icon_calendar_30_png__WEBPACK_IMPORTED_MODULE_15__, "iconCalendar30", "sidebarSubmenuItem", "sidebarSubmenuItemCalendar30Shrinked"));
            sidebarMenu.appendChild(sidebarSubmenuCalendar);

            sidebarMenu.appendChild(createMenuItem(_images_icon_project_png__WEBPACK_IMPORTED_MODULE_16__, "iconProject", "sidebarItem", "sidebarItemProject"));        
            const sidebarSubmenuProject = (0,_domGenerateHTMLElement__WEBPACK_IMPORTED_MODULE_19__.createDiv)("sidebarSubmenu", "sidebarSubmenuProjectShrinked", "");
                sidebarSubmenuProject.appendChild(createMenuItem(_images_icon_edit_png__WEBPACK_IMPORTED_MODULE_18__, "iconEdit", "sidebarSubmenuItem", "sidebarSubmenuItemEditProjectsShrinked"));
                (0,_project__WEBPACK_IMPORTED_MODULE_20__.getAllProjects)().forEach(e => {sidebarSubmenuProject.appendChild(createMenuItem(_images_icon_project_arrow_png__WEBPACK_IMPORTED_MODULE_17__, "iconProjectArrow", "sidebarSubmenuItem", "sidebarSubmenuItemProject"+e.name+"Shrinked"));});
            sidebarMenu.appendChild(sidebarSubmenuProject);
        sidebar.appendChild(sidebarMenu);
    return sidebar;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domGenerateHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domGenerateHeader.js */ "./src/domGenerateHeader.js");
/* harmony import */ var _domGenerateSidemenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domGenerateSidemenu.js */ "./src/domGenerateSidemenu.js");
/* harmony import */ var _domGenerateContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domGenerateContent.js */ "./src/domGenerateContent.js");
/* harmony import */ var _domGenerateModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domGenerateModal.js */ "./src/domGenerateModal.js");
/* harmony import */ var _domActivateHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domActivateHeader.js */ "./src/domActivateHeader.js");
/* harmony import */ var _domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domActivateSidemenu.js */ "./src/domActivateSidemenu.js");
/* harmony import */ var _domActivateContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domActivateContent */ "./src/domActivateContent.js");
/* harmony import */ var _domActivateModal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domActivateModal.js */ "./src/domActivateModal.js");
/* harmony import */ var _domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./domGenerateHTMLElement.js */ "./src/domGenerateHTMLElement.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");













// load local storage content in session
(0,_project_js__WEBPACK_IMPORTED_MODULE_10__.loadAllProjects)();
(0,_todo_js__WEBPACK_IMPORTED_MODULE_11__.loadAllTodos)();

// build page layout
const pageLayout = (0,_domGenerateHTMLElement_js__WEBPACK_IMPORTED_MODULE_9__.createDiv)("expandedPageLayout", "pageLayout", "");
    pageLayout.appendChild((0,_domGenerateHeader_js__WEBPACK_IMPORTED_MODULE_1__.generateHeader)());
    pageLayout.appendChild((0,_domGenerateSidemenu_js__WEBPACK_IMPORTED_MODULE_2__.generateExpandedSidebar)());
    pageLayout.appendChild((0,_domGenerateSidemenu_js__WEBPACK_IMPORTED_MODULE_2__.generateShrinkedSidebar)());
    pageLayout.appendChild((0,_domGenerateContent_js__WEBPACK_IMPORTED_MODULE_3__.generateContent)());
    pageLayout.appendChild((0,_domGenerateModal_js__WEBPACK_IMPORTED_MODULE_4__.generateModal)());
document.body.appendChild(pageLayout);

// activate buttons
(0,_domActivateHeader_js__WEBPACK_IMPORTED_MODULE_5__.activateHeader)();
(0,_domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_6__.activateSidebar)();
(0,_domActivateContent__WEBPACK_IMPORTED_MODULE_7__.activateContent)();
(0,_domActivateModal_js__WEBPACK_IMPORTED_MODULE_8__.activateModal)();

// initial display selection
(0,_domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_6__.initialSidebarSelection)();

// shrink when windows width < 640px 
window.addEventListener('resize', () => {
    if (window.matchMedia("(max-width: 640px)").matches) { (0,_domActivateSidemenu_js__WEBPACK_IMPORTED_MODULE_6__.shrinkSidemenu)(); }
});


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   getProjectStatus: () => (/* binding */ getProjectStatus),
/* harmony export */   loadAllProjects: () => (/* binding */ loadAllProjects),
/* harmony export */   newProject: () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _projectStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStorage.js */ "./src/projectStorage.js");


var projects = (function() {
    'use strict';

    const projectFactory = (name, description, dueDate, priority, status) => {
        return { name, description, dueDate, priority, status };
    };    

    var _projectList = [];

    function _addProject(name, description, dueDate, priority) {
        const newProject = projectFactory(name, description, dueDate, priority, "uncompleted");
        (0,_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeProject)(newProject);
        _projectList.push(newProject);
    }

    function addProject(name, description, dueDate, priority) {
        _addProject(name, description, dueDate, priority);
    }

    function _retrieveProjectId(name) {
        return _projectList.map(e => e.name).indexOf(name);
    }

    function _getProject(name) {
        return _projectList[_retrieveProjectId(name)];
    }

    function getProject(name) {
        return _getProject(name);
    }
    
    function _getProjectStatus(name) {
        return _projectList[_retrieveProjectId(name)].status;
    }

    function getProjectStatus(name) {
        return _getProjectStatus(name);
    }

    function _editProject(name, newStatus, newName, newDescription, newDueDate, newPriority) {
        const index = _retrieveProjectId(name);
        if (_projectList[index].status != newStatus) {
            _projectList[index].status = newStatus;
        } else if (arguments.length > 2) {
            _projectList[index] = projectFactory(newName, newDescription, newDueDate, newPriority, newStatus);
        }
        (0,_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__.editProjectInStorage) (name, _projectList[index]);
    }
    
    function editProject(name, newStatus, newName, newDescription, newDueDate, newPriority) {
        _editProject(name, newStatus, newName, newDescription, newDueDate, newPriority);
    }

    function _removeProject(name) {
        (0,_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeProjectFromStorage)(name);
        _projectList.splice(_retrieveProjectId(name), 1);
    }

    function removeProject(name) {
        _removeProject(name);
    }

    function getProjectList() {
        return _projectList;
    }

    function loadProjects() {
        _projectList.push(...(0,_projectStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveAllProjectsFromStorage)());
    }
  
    return {
        addProject: addProject,
        getProject: getProject,
        getProjectStatus: getProjectStatus,
        editProject: editProject,
        removeProject: removeProject,
        getProjectList: getProjectList,
        loadProjects: loadProjects
    };
})();

function newProject (name, description, dueDate, priority) {
    projects.addProject(name, description, dueDate, priority);
}

function editProject(name, newStatus, newName, newDescription, newDueDate, newPriority) {
    projects.editProject(name, newStatus, newName, newDescription, newDueDate, newPriority);
}

function getProject(name) {
    return projects.getProject(name);
}

function getProjectStatus(name) {
    return projects.getProjectStatus(name);
}

function deleteProject(name) {
    projects.removeProject(name);
}

function getAllProjects() {
    return projects.getProjectList();
}

function loadAllProjects() {   
    projects.loadProjects();

    //create default project if it doesn't already exists
    if (getAllProjects().length == 0) {
        newProject("Défaut", "Projet par défaut (ne peut pas être modifié).", "", "Low");
    }
}



/***/ }),

/***/ "./src/projectStorage.js":
/*!*******************************!*\
  !*** ./src/projectStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectInStorage: () => (/* binding */ editProjectInStorage),
/* harmony export */   removeProjectFromStorage: () => (/* binding */ removeProjectFromStorage),
/* harmony export */   retrieveAllProjectsFromStorage: () => (/* binding */ retrieveAllProjectsFromStorage),
/* harmony export */   storeProject: () => (/* binding */ storeProject)
/* harmony export */ });
function storeProject (project) {   
    var newProjectIndex = retrieveNextProjectIndexFromStorage();
        if (newProjectIndex) {
            storeNextProjectIndex(newProjectIndex+1);             
        } else {
            storeNextProjectIndex(1);
            newProjectIndex = 0;
        }
    localStorage.setItem('Project_'+newProjectIndex, JSON.stringify(project));
}

function storeNextProjectIndex (index) {
    localStorage.setItem('Next_Project_Index', JSON.stringify(index));
}

function retrieveProjectFromStorage (projectId) {
    return JSON.parse(localStorage.getItem('Project_'+projectId));
}

function retrieveNextProjectIndexFromStorage () {
    return JSON.parse(localStorage.getItem('Next_Project_Index'));
}

function findProjectInStorage (name) {
    const lastProjectIndex = retrieveNextProjectIndexFromStorage();
    var projectToFind;
    for (let i = 0; i < lastProjectIndex; i++) {
        const project = retrieveProjectFromStorage(i);
        if (project) {
            if (project.name == name) {
                projectToFind = i;
            }
        }
    };
    return projectToFind;
}

function editProjectInStorage (name, projectToEdit) {
    localStorage.setItem('Project_'+findProjectInStorage(name), JSON.stringify(projectToEdit));
}

function removeProjectFromStorage (name) {
    const lastProjectIndex = retrieveNextProjectIndexFromStorage();
    var projectToRemoveFromStorage = 0;
    for (let i = 1; i < lastProjectIndex; i++) {
        const project = retrieveProjectFromStorage(i);
        if (project) {
            if (project.name == name) {
                projectToRemoveFromStorage = i;
            }
        }
    };
    if (projectToRemoveFromStorage != 0) {
        localStorage.removeItem('Project_'+projectToRemoveFromStorage);
    };
}

function retrieveAllProjectsFromStorage () {
    const projects = [];
    const lastProjectIndex = retrieveNextProjectIndexFromStorage();
    var projectsIndex = 0;
    for (let i = 0; i < lastProjectIndex; i++) {
        const project = retrieveProjectFromStorage(i);
        if (project) {
            projects[projectsIndex++] = project;
        }
    };
    return projects;
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   editTodosOfAProject: () => (/* binding */ editTodosOfAProject),
/* harmony export */   getAllTodos: () => (/* binding */ getAllTodos),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   getTodosOfAProject: () => (/* binding */ getTodosOfAProject),
/* harmony export */   getTodosProject: () => (/* binding */ getTodosProject),
/* harmony export */   loadAllTodos: () => (/* binding */ loadAllTodos),
/* harmony export */   newTodo: () => (/* binding */ newTodo)
/* harmony export */ });
/* harmony import */ var _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage.js */ "./src/todoStorage.js");


var todos = (function() {
    'use strict';

    const todoFactory = (name, description, project, dueDate, priority, status) => {
        return { name, description, project, dueDate, priority, status };
    };    

    var _todoList = [];

    function _addTodo(name, description, project, dueDate, priority) {
        const newTodo = todoFactory(name, description, project, dueDate, priority, "uncompleted");
        (0,_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeTodo)(newTodo);
        _todoList.push(newTodo);
    }

    function addTodo(name, description, project, dueDate, priority) {
        _addTodo(name, description, project, dueDate, priority);
    }

    function _retrieveTodoId(name) {
        return _todoList.map(e => e.name).indexOf(name);
    }

    function _getTodo(name) {
        return _todoList[_retrieveTodoId(name)];
    }

    function getTodo(name) {
        return _getTodo(name);
    }

    function _editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority) {
        const index = _retrieveTodoId(name);
        if (_todoList[index].status != newStatus) { 
            _todoList[index].status = newStatus;
        } else {
            _todoList[index] = todoFactory(newName, newDescription, newProject, newDueDate, newPriority, newStatus);
        }
        (0,_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.editTodoInStorage)(name, _todoList[index]);
    }

    function editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority) {
        _editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority);
    }

    function _removeTodo(name) {
        (0,_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeTodoFromStorage)(name);
        _todoList.splice(_retrieveTodoId(name), 1);
    }

    function removeTodo(name) {
        _removeTodo(name);
    }

    function _getTodosProject(todoName) {
        return getTodo(todoName).project;
    }

    function getTodosProject(todoName) {
        return _getTodosProject(todoName);
    }

    function _getTodosOfAProject(projectName) {
        return _todoList.filter((e) => e.project == projectName);
    }

    function getTodosOfAProject(projectName) {
        return _getTodosOfAProject(projectName);
    }

    function _editTodosOfAProject(oldProjectName, newProjectName) {
        _todoList.filter((e) => e.project == oldProjectName).forEach((todo) => {todo.project = newProjectName; (0,_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.editTodoInStorage)(oldProjectName, todo);});
    }

    function editTodosOfAProject(oldProjectName, newProjectName) {
        _editTodosOfAProject(oldProjectName, newProjectName);
    }

    function getTodoList() {
        return _todoList;
    }

    function loadTodos() {
        _todoList.push(...(0,_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveAllTodosFromStorage)());
    }
   
    return {
        addTodo: addTodo,
        getTodo: getTodo,
        editTodo: editTodo,
        removeTodo: removeTodo,
        getTodosProject: getTodosProject,
        getTodosOfAProject: getTodosOfAProject,
        editTodosOfAProject: editTodosOfAProject,
        getTodoList: getTodoList,
        loadTodos: loadTodos
    };
})();

function newTodo (name, description, project, dueDate, priority) {
    todos.addTodo(name, description, project, dueDate, priority);
}

function editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority) {
    todos.editTodo(name, newStatus, newName, newDescription, newProject, newDueDate, newPriority);
}

function getTodo(name) {
    return todos.getTodo(name);
}

function deleteTodo(name) {
    todos.removeTodo(name);
}

function getTodosProject(todoName) {
    return todos.getTodosProject(todoName);
}

function getTodosOfAProject(projectName) {
    return todos.getTodosOfAProject(projectName);
}

function editTodosOfAProject(oldProjectName, newProjectName) {
    todos.editTodosOfAProject(oldProjectName, newProjectName);
}

function getAllTodos() {
    return todos.getTodoList();
}

function loadAllTodos() {   
    todos.loadTodos();
}



/***/ }),

/***/ "./src/todoStorage.js":
/*!****************************!*\
  !*** ./src/todoStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoInStorage: () => (/* binding */ editTodoInStorage),
/* harmony export */   removeTodoFromStorage: () => (/* binding */ removeTodoFromStorage),
/* harmony export */   retrieveAllTodosFromStorage: () => (/* binding */ retrieveAllTodosFromStorage),
/* harmony export */   storeTodo: () => (/* binding */ storeTodo)
/* harmony export */ });
function storeTodo (todo) {   
    var newTodoIndex = retrieveNextTodoIndexFromStorage();
        if (newTodoIndex) {
            storeNextTodoIndex(newTodoIndex+1);             
        } else {
            storeNextTodoIndex(1);
            newTodoIndex = 0;
        }
    localStorage.setItem('Todo_'+newTodoIndex, JSON.stringify(todo));
}

function storeNextTodoIndex (index) {
    localStorage.setItem('Next_Todo_Index', JSON.stringify(index));
}

function findTodoInStorage (name) {
    const lastTodoIndex = retrieveNextTodoIndexFromStorage();
    var todoToFind;
    for (let i = 0; i < lastTodoIndex; i++) {
        const todo = retrieveTodoFromStorage(i);
        if (todo) {
            if (todo.name == name) {
                todoToFind = i;
            }
        }
    };
    return todoToFind;
}

function editTodoInStorage (name, todoToEdit) {
    localStorage.setItem('Todo_'+findTodoInStorage(name), JSON.stringify(todoToEdit));
}

function retrieveTodoFromStorage (todoId) {
    return JSON.parse(localStorage.getItem('Todo_'+todoId));
}

function retrieveNextTodoIndexFromStorage () {
    return JSON.parse(localStorage.getItem('Next_Todo_Index'));
}

function removeTodoFromStorage (name) {
    const todoToRemoveFromStorage = findTodoInStorage(name);    
    if (todoToRemoveFromStorage) {
        localStorage.removeItem('Todo_'+todoToRemoveFromStorage);
    }
}

function retrieveAllTodosFromStorage () {
    const todos = [];
    const lastTodoIndex = retrieveNextTodoIndexFromStorage();
    var todosIndex = 0;
    for (let i = 0; i < lastTodoIndex; i++) {
        const todo = retrieveTodoFromStorage(i);
        if (todo) {
            todos[todosIndex++] = todo;
        }
    };
    return todos;
}



/***/ }),

/***/ "./src/images/icon_bin-grey.png":
/*!**************************************!*\
  !*** ./src/images/icon_bin-grey.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea19d5b0e33b08624345.png";

/***/ }),

/***/ "./src/images/icon_bin.png":
/*!*********************************!*\
  !*** ./src/images/icon_bin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9daaa36e9a72cf396e1f.png";

/***/ }),

/***/ "./src/images/icon_calendar-1.png":
/*!****************************************!*\
  !*** ./src/images/icon_calendar-1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6abed820c10e8c0f6756.png";

/***/ }),

/***/ "./src/images/icon_calendar-30.png":
/*!*****************************************!*\
  !*** ./src/images/icon_calendar-30.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "425b10b92fc087c01312.png";

/***/ }),

/***/ "./src/images/icon_calendar-7.png":
/*!****************************************!*\
  !*** ./src/images/icon_calendar-7.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92543e570f76f457d9eb.png";

/***/ }),

/***/ "./src/images/icon_calendar.png":
/*!**************************************!*\
  !*** ./src/images/icon_calendar.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "135330f6d662535cdf46.png";

/***/ }),

/***/ "./src/images/icon_clock-completed.png":
/*!*********************************************!*\
  !*** ./src/images/icon_clock-completed.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aef0a32a66c9105a641.png";

/***/ }),

/***/ "./src/images/icon_clock-grey.png":
/*!****************************************!*\
  !*** ./src/images/icon_clock-grey.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ebdaf8175b4a6b71d65.png";

/***/ }),

/***/ "./src/images/icon_clock.png":
/*!***********************************!*\
  !*** ./src/images/icon_clock.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bf9c5dce518612c0f8d.png";

/***/ }),

/***/ "./src/images/icon_edit.png":
/*!**********************************!*\
  !*** ./src/images/icon_edit.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c0fd9a30be68eea7823.png";

/***/ }),

/***/ "./src/images/icon_hamburger.png":
/*!***************************************!*\
  !*** ./src/images/icon_hamburger.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b433828046cb0b0c5e5.png";

/***/ }),

/***/ "./src/images/icon_inbox.png":
/*!***********************************!*\
  !*** ./src/images/icon_inbox.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b28491b558ceb5deb40a.png";

/***/ }),

/***/ "./src/images/icon_list.png":
/*!**********************************!*\
  !*** ./src/images/icon_list.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "560cff25d5a5c97e2b32.png";

/***/ }),

/***/ "./src/images/icon_mail-check.png":
/*!****************************************!*\
  !*** ./src/images/icon_mail-check.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c66978befc872fcfa524.png";

/***/ }),

/***/ "./src/images/icon_mail-todo.png":
/*!***************************************!*\
  !*** ./src/images/icon_mail-todo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aef1ebd711a1ade9b40d.png";

/***/ }),

/***/ "./src/images/icon_mail.png":
/*!**********************************!*\
  !*** ./src/images/icon_mail.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41cdaefb6fdfbf1054ac.png";

/***/ }),

/***/ "./src/images/icon_new.png":
/*!*********************************!*\
  !*** ./src/images/icon_new.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03644c1c13a6ec3f7f0d.png";

/***/ }),

/***/ "./src/images/icon_priority-green.png":
/*!********************************************!*\
  !*** ./src/images/icon_priority-green.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43d5999664b92e8fc6ad.png";

/***/ }),

/***/ "./src/images/icon_priority-orange.png":
/*!*********************************************!*\
  !*** ./src/images/icon_priority-orange.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13a8433611818f388cac.png";

/***/ }),

/***/ "./src/images/icon_priority-red.png":
/*!******************************************!*\
  !*** ./src/images/icon_priority-red.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30484993dc8f266cf7a4.png";

/***/ }),

/***/ "./src/images/icon_priority-yellow.png":
/*!*********************************************!*\
  !*** ./src/images/icon_priority-yellow.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87fd7bd776ef0a24b6a2.png";

/***/ }),

/***/ "./src/images/icon_priority.png":
/*!**************************************!*\
  !*** ./src/images/icon_priority.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a43813093cf8ddab9430.png";

/***/ }),

/***/ "./src/images/icon_project-arrow.png":
/*!*******************************************!*\
  !*** ./src/images/icon_project-arrow.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "242ce33829295998b6de.png";

/***/ }),

/***/ "./src/images/icon_project.png":
/*!*************************************!*\
  !*** ./src/images/icon_project.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc7e58fdf293e1337eb6.png";

/***/ }),

/***/ "./src/images/icon_search.png":
/*!************************************!*\
  !*** ./src/images/icon_search.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0911f7ba041eb1fd6181.png";

/***/ }),

/***/ "./src/images/icon_task.png":
/*!**********************************!*\
  !*** ./src/images/icon_task.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b943580a172306e19912.png";

/***/ }),

/***/ "./src/images/icon_tiles.png":
/*!***********************************!*\
  !*** ./src/images/icon_tiles.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b0f55d02d59f87d05d3.png";

/***/ }),

/***/ "./src/images/logo-kanply-long.png":
/*!*****************************************!*\
  !*** ./src/images/logo-kanply-long.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "037f63742ea40d1849b0.png";

/***/ }),

/***/ "./src/resource/FiraSans-ExtraBold.ttf":
/*!*********************************************!*\
  !*** ./src/resource/FiraSans-ExtraBold.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c83d921b2e5bdab326ae.ttf";

/***/ }),

/***/ "./src/resource/FiraSans-Medium.ttf":
/*!******************************************!*\
  !*** ./src/resource/FiraSans-Medium.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d11d9e14e00fc1a96751.ttf";

/***/ }),

/***/ "./src/resource/InstrumentSans-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/resource/InstrumentSans-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87bb0aa2e579491cdec5.ttf";

/***/ }),

/***/ "./src/resource/fontawesome-webfont.ttf":
/*!**********************************************!*\
  !*** ./src/resource/fontawesome-webfont.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b048c7e641eda9ad4a69.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SUFBa0Q7QUFDOUYsNENBQTRDLHVJQUErQztBQUMzRiw0Q0FBNEMscUpBQXNEO0FBQ2xHLDRDQUE0QywrSUFBbUQ7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwyTEFBMkw7QUFDM0wseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxRQUFRLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sZUFBZSxNQUFNLFlBQVksTUFBTSxRQUFRLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssYUFBYSxPQUFPLFdBQVcsYUFBYSxPQUFPLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxhQUFhLE9B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LGtFQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrRUFBUztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0VBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RCxrRUFBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrRUFBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRCxrRUFBUztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtFQUFTO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0VBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxrRUFBUztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELGtFQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxrRUFBUztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELGtFQUFTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsa0VBQVM7QUFDOUMsZ0RBQWdELGtFQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxx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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiw0RUFBMkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvZG9tQWN0aXZhdGVDb250ZW50LmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvZG9tQWN0aXZhdGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy9kb21BY3RpdmF0ZU1vZGFsLmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvZG9tQWN0aXZhdGVQcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vc3JjL2RvbUFjdGl2YXRlU2lkZW1lbnUuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy9kb21BY3RpdmF0ZVRvZG9DYXJkLmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvZG9tR2VuZXJhdGVDYXJkcy5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vc3JjL2RvbUdlbmVyYXRlQ29udGVudC5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vc3JjL2RvbUdlbmVyYXRlSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy9kb21HZW5lcmF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9rYW5wbHl0b2RvLy4vc3JjL2RvbUdlbmVyYXRlTW9kYWwuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy9kb21HZW5lcmF0ZVNpZGVtZW51LmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvcHJvamVjdFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8va2FucGx5dG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL2thbnBseXRvZG8vLi9zcmMvdG9kb1N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcInJlc291cmNlL0ZpcmFTYW5zLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJyZXNvdXJjZS9GaXJhU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwicmVzb3VyY2UvSW5zdHJ1bWVudFNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJyZXNvdXJjZS9mb250YXdlc29tZS13ZWJmb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDEwMGl0YWxpYywzMDAsMzAwaXRh4oCM4oCLbGljLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwaXRhbGljLDkwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiAgICAgICAgICAgIEdsb2JhbCAgICAgICAgICAqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFRpdGxlcztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFN1YnRpdGxlcztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFRleHQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6ICMxZjBmMmM7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmV4cGFuZGVkUGFnZUxheW91dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogNjhweCBhdXRvIC8gMjUwcHggYXV0bztcbn1cblxuLnNocmlua2VkUGFnZUxheW91dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogNjhweCBhdXRvIC8gNTBweCBhdXRvO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiAgICAgICAgICAgSGVhZGVyICAgICAgICAgICAqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvIGF1dG8gODBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWIxZjI4O1xuICAgIGNvbG9yOiAjZjlmYWY4O1xuICAgIGZvbnQtZmFtaWx5OiBUaXRsZXM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVhZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzZWFyY2hGaWVsZCB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWY4O1xuICAgIG1hcmdpbjogMHB4IDE1cHggMHB4IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnVzZXJCYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcbn1cblxuLnVzZXJBdmF0YXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6ICM2NjY2OTk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY5OTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKiAgICAgICAgICAgU2lkZSBiYXIgICAgICAgICAgICoqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5zaWRlYmFyIHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgY29sb3I6ICNmOWZhZjg7XG59XG5cbi5zaWRlYmFyVGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMWIxZjI4O1xuICAgIGhlaWdodDogNjhweDtcbn1cblxuLnNpZGViYXJUaXRsZSBpbWcge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBoZWlnaHQ6IDMycHg7XG59XG5cbi5zaWRlYmFyTmV3QnV0dG9uIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZjlmYWY4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItY29sb3I6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogNTVweDtcbn1cblxuLnNpZGViYXJOZXdCdXR0b24gaW1nIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5zaWRlYmFyTmV3QnV0dG9uIGltZyxcbi5zaWRlYmFyTmV3QnV0dG9uIHNwYW4ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaWRlYmFyTmV3QnV0dG9uIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNpZGViYXJJdGVtLFxuLnNpZGViYXJTdWJtZW51SXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjZweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLnNpZGViYXJJdGVtIHtcbiAgICBmb250LWZhbWlseTogVGl0bGVzO1xufVxuXG4uc2lkZWJhclN1Ym1lbnVJdGVtIHtcbiAgICBmb250LWZhbWlseTogU3VidGl0bGVzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4uc2lkZWJhckl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zaWRlYmFyU3VibWVudUl0ZW0gaW1nIHtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNpZGViYXJTdWJtZW51SXRlbVNlbGVjdGVkIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xufVxuXG4uc2lkZWJhckl0ZW06SG92ZXIsXG4uc2lkZWJhclN1Ym1lbnVJdGVtOkhvdmVyIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XG59XG5cbi5zaWRlYmFyU3VibWVudUl0ZW1TZWxlY3RlZDpIb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcbn1cblxuLnNpZGViYXJTdWJtZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2hyaW5rZWRTaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKlxuLnNpZGViYXJTdWJtZW51SXRlbVByb2plY3RFeHBhbmRlZDphZnRlciB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb250ZW50OiBcIlxcXFxmMDBkXCI7XG59XG4qL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiogICAgICAgICBDb250ZW50IHNlY3Rpb24gICAgICAgICAgKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5jb250ZW50IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNvbnRleHRCYXIge1xuICAgIGNvbG9yOiAjZjlmYWY4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogdGl0bGVzO1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRleHQgaW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNhcmRzQ29udGFpbmVyIHtcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IGdyZXk7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY2FyZEhpZ2hQcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IHJlZDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwcHg7XG59XG5cbi5jYXJkTWVkUHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiBvcmFuZ2U7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxMHB4O1xufVxuXG4uY2FyZExvd1ByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogeWVsbG93O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMTBweDtcbn1cblxuLmNhcmRUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZjlmYWY4O1xuICAgIGZvbnQtZmFtaWx5OiBUaXRsZXM7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZjlmYWY4O1xuICAgIGZvbnQtZmFtaWx5OiB0ZXh0O1xuICAgIHdpZHRoOiA4cmVtO1xufVxuXG4uY2FyZEljb24sIC5jYXJkSWNvbkRlYWN0aXZhdGVkLCAuY2FyZFByb2plY3RUcmFzaEljb24sIC5jYXJkUHJvamVjdFRyYXNoSWNvbkRlYWN0aXZhdGVkLCAuY2FyZFRvZG9UcmFzaEljb24ge1xuICAgIGhlaWdodDogMThweDtcbn1cblxuLmNhcmRUb2RvQ2hlY2tib3g6aG92ZXIsIC5jYXJkVG9kb1RpdGxlOmhvdmVyLCAuY2FyZFByb2plY3RUaXRsZTpob3ZlciwgLmNhcmRQcm9qZWN0VHJhc2hJY29uOmhvdmVyLCAuY2FyZFRvZG9UcmFzaEljb246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRDb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcbn1cblxuLypcbi5jYXJkQnV0dG9ucyB7XG4gICAgZ3JpZC1yb3c6IDM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZ2FwOiAyOHB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG59XG4qL1xuXG4vKlxuLmNhcmRCdXR0b25zIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogNXB4IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWJsdWU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4qL1xuXG4vKlxuLmNhcmRCdXR0b25zIGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4OyBcbn1cbiovXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKiAgICAgIE1PREFMICAgICAgKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8qICAgIHotaW5kZXg6IDI7Ki9cbi8qICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwOyovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcbn1cblxuLm1vZGFsQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDMlIGF1dG87XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tb2RhbEhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tb2RhbFRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogVGl0bGVzO1xufVxuXG4uY2xvc2VNb2RhbEJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZWQgMCUsIHJlZCAxMDAlKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xufVxuXG4uY2xvc2VNb2RhbEJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcbn1cbiBcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKiAgICAgIE1PREFMIEZPUk1TICAgICAqKioqKioqKioqKioqKioqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgXG4ubW9kYWxGb3JtLWZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFRleHQ7XG59XG4gIFxuLm1vZGFsRm9ybS1pbnB1dCB7XG4gICAgZmxleC1iYXNpczogMTAwJTsgXG59XG4gIFxuLm1vZGFsIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG4gIFxuLm1vZGFsRm9ybS1pbnB1dCBpbnB1dCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBUZXh0O1xufVxuXG4ubW9kYWxGb3JtLWlucHV0U2VsZWN0aW9uIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xufVxuXG4ubW9kYWxGb3JtLWlucHV0U2VsZWN0aW9uIHtcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAmOmNoZWNrZWQge1xuICAgICAgICAgICAgKyAuYm94IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKyAubG93IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICArIC5tZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsgLmhpZ2gge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3gge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNpdGlvbjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5wcm9qZWN0IHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgY29udGVudDogXCJcXFxcZjA3Y1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudG9kbyB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxcXGYxNGFcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIC5wcmlvcml0eSB7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGlnaCB7XG5cbiAgICB9XG5cbiAgICAubWVkIHtcblxuICAgIH1cblxuICAgIC5sb3d7XG5cbiAgICB9XG59XG5cbi5tb2RhbERyb3Bkb3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tb2RhbERyb3Bkb3duOmhvdmVyIGxpIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvcGFjaXR5OiAxO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubW9kYWxEcm9wZG93bjpob3ZlciB1bCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ubW9kYWxEcm9wZG93biBsaSB7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9wZG93blRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZHJvcGRvd25UaXRsZTphZnRlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29udGVudDogXCJcXFxcZjEwN1wiO1xuICB9XG5cblxuLnNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uc2F2ZUJ1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbi5zYXZlQnV0dG9uQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbn1cbiAgXG4uc2F2ZUJ1dHRvbiBidXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLm1vZGFsQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5cblxuLypcbnNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuICBcbiAgXG5cbi5tb2RhbEZvcm0tY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBcbn1cbiovXG5cbi8qXG4ubW9kYWxDb250cm9sIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLypcbi5tb2RhbENoZWNrYm94IHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbiovXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiAqKiogICAgICBDaGVja2JveCAgICAgICoqKiAqL1xuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLypcbi5jdXN0b21DaGVja2JveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuY3VzdG9tQ2hlY2tib3ggaW5wdXQge1xuICAgIGhlaWdodDogMDtcbiAgICB3aWR0aDogMDtcbiAgfVxuICBcbiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAuY3VzdG9tQ2hlY2tib3g6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIH1cbiAgXG4gIC5jdXN0b21DaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH1cbiAgXG4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jdXN0b21DaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5jdXN0b21DaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBsZWZ0OiA5cHg7XG4gICAgdG9wOiA1cHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuKi9cblxuLnVzZXJBdmF0YXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHVDQUF1Qzs7QUFJdkM7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXlDO0FBQzdDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7O0FBR0EsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7O0FBRXZDO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUEsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7O0FBRXZDO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7Ozs7O0NBUUM7O0FBRUQsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2Qyx1Q0FBdUM7O0FBRXZDO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7Ozs7Ozs7Q0FXQzs7QUFFRDs7Ozs7Ozs7Q0FRQzs7QUFFRDs7OztDQUlDOztBQUVELCtEQUErRDtBQUMvRCwrREFBK0Q7QUFDL0QsK0RBQStEOztBQUUvRDtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CLGtCQUFrQjtBQUNsQjtZQUNZO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YscURBQXFEO0lBQ3JELDJIQUEySDtJQUMzSCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1DQUFtQztBQUN2Qzs7QUFFQSwrREFBK0Q7QUFDL0QsK0RBQStEO0FBQy9ELCtEQUErRDs7QUFFL0Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2I7WUFDSTtnQkFDSSw4QkFBOEI7Z0JBQzlCO29CQUNJLFlBQVk7b0JBQ1osMkJBQTJCO29CQUMzQjt3QkFDSSxVQUFVO29CQUNkO2dCQUNKO1lBQ0o7WUFDQTtnQkFDSSx3QkFBd0I7Z0JBQ3hCO29CQUNJLFlBQVk7Z0JBQ2hCO1lBQ0o7WUFDQTtnQkFDSSx3QkFBd0I7Z0JBQ3hCO29CQUNJLFlBQVk7Z0JBQ2hCO1lBQ0o7WUFDQTtnQkFDSSxxQkFBcUI7Z0JBQ3JCO29CQUNJLFlBQVk7Z0JBQ2hCO1lBQ0o7UUFDSjtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkI7WUFDSSxrQkFBa0I7WUFDbEIsNEJBQTRCO1lBQzVCLE9BQU87WUFDUCxRQUFRO1lBQ1IsMEJBQTBCO1lBQzFCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEI7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO2dCQUNWLGlDQUFpQztnQkFDakMsWUFBWTtZQUNoQjtRQUNKO0lBQ0o7O0lBRUE7UUFDSTtVQUNFO1lBQ0Usd0JBQXdCO1lBQ3hCLGdCQUFnQjtVQUNsQjtRQUNGO01BQ0Y7O01BRUE7UUFDRTtVQUNFO1lBQ0Usd0JBQXdCO1lBQ3hCLGdCQUFnQjtVQUNsQjtRQUNGO01BQ0Y7O0lBRUY7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkI7UUFDQTtJQUNKOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBOztJQUVBO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7O0FBR0Y7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQzs7QUFFRDs7Ozs7Ozs7OztDQVVDOztBQUVELCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCOztBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeURDOztBQUVEO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqICAgICAgICAgICAgR2xvYmFsICAgICAgICAgICoqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5AaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDEwMCwxMDBpdGFsaWMsMzAwLDMwMGl0YeKAjOKAi2xpYyw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMGl0YWxpYyw5MDApO1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogVGl0bGVzO1xcbiAgICBzcmM6IHVybChyZXNvdXJjZS9GaXJhU2Fucy1FeHRyYUJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTdWJ0aXRsZXM7XFxuICAgIHNyYzogdXJsKHJlc291cmNlL0ZpcmFTYW5zLU1lZGl1bS50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFRleHQ7XFxuICAgIHNyYzogdXJsKHJlc291cmNlL0luc3RydW1lbnRTYW5zLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcXG4gICAgc3JjOiB1cmwocmVzb3VyY2UvZm9udGF3ZXNvbWUtd2ViZm9udC50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogIzFmMGYyYztcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmV4cGFuZGVkUGFnZUxheW91dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDY4cHggYXV0byAvIDI1MHB4IGF1dG87XFxufVxcblxcbi5zaHJpbmtlZFBhZ2VMYXlvdXQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA2OHB4IGF1dG8gLyA1MHB4IGF1dG87XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKiogICAgICAgICAgIEhlYWRlciAgICAgICAgICAgKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyBhdXRvIDgwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMWIxZjI4O1xcbiAgICBjb2xvcjogI2Y5ZmFmODtcXG4gICAgZm9udC1mYW1pbHk6IFRpdGxlcztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnNlYXJjaEJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2hGaWVsZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmODtcXG4gICAgbWFyZ2luOiAwcHggMTVweCAwcHggMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnVzZXJCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbi51c2VyQXZhdGFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogIzY2NjY5OTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2Njk5O1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKiogICAgICAgICAgIFNpZGUgYmFyICAgICAgICAgICAqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiAjZjlmYWY4O1xcbn1cXG5cXG4uc2lkZWJhclRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzFiMWYyODtcXG4gICAgaGVpZ2h0OiA2OHB4O1xcbn1cXG5cXG4uc2lkZWJhclRpdGxlIGltZyB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4uc2lkZWJhck5ld0J1dHRvbiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2Y5ZmFmODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVibHVlO1xcbiAgICBib3JkZXItY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbi5zaWRlYmFyTmV3QnV0dG9uIGltZyB7XFxuICAgIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnNpZGViYXJOZXdCdXR0b24gaW1nLFxcbi5zaWRlYmFyTmV3QnV0dG9uIHNwYW4ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uc2lkZWJhck5ld0J1dHRvbiBzcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW0sXFxuLnNpZGViYXJTdWJtZW51SXRlbSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW0ge1xcbiAgICBmb250LWZhbWlseTogVGl0bGVzO1xcbn1cXG5cXG4uc2lkZWJhclN1Ym1lbnVJdGVtIHtcXG4gICAgZm9udC1mYW1pbHk6IFN1YnRpdGxlcztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhclN1Ym1lbnVJdGVtIGltZyB7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuXFxuLnNpZGViYXJTdWJtZW51SXRlbVNlbGVjdGVkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcXG59XFxuXFxuLnNpZGViYXJJdGVtOkhvdmVyLFxcbi5zaWRlYmFyU3VibWVudUl0ZW06SG92ZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XFxufVxcblxcbi5zaWRlYmFyU3VibWVudUl0ZW1TZWxlY3RlZDpIb3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmNoaWQ7XFxufVxcblxcbi5zaWRlYmFyU3VibWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNzaHJpbmtlZFNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbi5zaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0RXhwYW5kZWQ6YWZ0ZXIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4qL1xcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiogICAgICAgICBDb250ZW50IHNlY3Rpb24gICAgICAgICAgKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLmNvbnRleHRCYXIge1xcbiAgICBjb2xvcjogI2Y5ZmFmODtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogdGl0bGVzO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRleHQgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2FyZHNDb250YWluZXIge1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggZ3JleTtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uY2FyZEhpZ2hQcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiByZWQ7XFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDEwcHg7XFxufVxcblxcbi5jYXJkTWVkUHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogb3JhbmdlO1xcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxMHB4O1xcbn1cXG5cXG4uY2FyZExvd1ByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IHllbGxvdztcXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMTBweDtcXG59XFxuXFxuLmNhcmRUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNmOWZhZjg7XFxuICAgIGZvbnQtZmFtaWx5OiBUaXRsZXM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZENvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjZjlmYWY4O1xcbiAgICBmb250LWZhbWlseTogdGV4dDtcXG4gICAgd2lkdGg6IDhyZW07XFxufVxcblxcbi5jYXJkSWNvbiwgLmNhcmRJY29uRGVhY3RpdmF0ZWQsIC5jYXJkUHJvamVjdFRyYXNoSWNvbiwgLmNhcmRQcm9qZWN0VHJhc2hJY29uRGVhY3RpdmF0ZWQsIC5jYXJkVG9kb1RyYXNoSWNvbiB7XFxuICAgIGhlaWdodDogMThweDtcXG59XFxuXFxuLmNhcmRUb2RvQ2hlY2tib3g6aG92ZXIsIC5jYXJkVG9kb1RpdGxlOmhvdmVyLCAuY2FyZFByb2plY3RUaXRsZTpob3ZlciwgLmNhcmRQcm9qZWN0VHJhc2hJY29uOmhvdmVyLCAuY2FyZFRvZG9UcmFzaEljb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkQ29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcXG59XFxuXFxuLypcXG4uY2FyZEJ1dHRvbnMge1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIGdhcDogMjhweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbiovXFxuXFxuLypcXG4uY2FyZEJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlYmx1ZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4qL1xcblxcbi8qXFxuLmNhcmRCdXR0b25zIGltZyB7XFxuICAgIGhlaWdodDogMjBweDsgXFxufVxcbiovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKiAgICAgIE1PREFMICAgICAgKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbi8qICAgIHotaW5kZXg6IDI7Ki9cXG4vKiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7Ki9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMyUgYXV0bztcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWxUaXRsZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogVGl0bGVzO1xcbn1cXG5cXG4uY2xvc2VNb2RhbEJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmVkIDAlLCByZWQgMTAwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4uY2xvc2VNb2RhbEJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuIFxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKioqKiogICAgICBNT0RBTCBGT1JNUyAgICAgKioqKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbiAgXFxuLm1vZGFsRm9ybS1maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogVGV4dDtcXG59XFxuICBcXG4ubW9kYWxGb3JtLWlucHV0IHtcXG4gICAgZmxleC1iYXNpczogMTAwJTsgXFxufVxcbiAgXFxuLm1vZGFsIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuICBcXG4ubW9kYWxGb3JtLWlucHV0IGlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBUZXh0O1xcbn1cXG5cXG4ubW9kYWxGb3JtLWlucHV0U2VsZWN0aW9uIHtcXG4gICAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLm1vZGFsRm9ybS1pbnB1dFNlbGVjdGlvbiB7XFxuICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICY6Y2hlY2tlZCB7XFxuICAgICAgICAgICAgKyAuYm94IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xcbiAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICsgLmxvdyB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgKyAubWVkIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICArIC5oaWdoIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYm94IHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogNzVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XFxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNpdGlvbjtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XFxuICAgICAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICAucHJvamVjdCB7XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgJjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXGYwN2NcXFwiO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC50b2RvIHtcXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAmOmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjE0YVxcXCI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgIC5wcmlvcml0eSB7XFxuICAgICAgICBtYXJnaW46IDhweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaGlnaCB7XFxuXFxuICAgIH1cXG5cXG4gICAgLm1lZCB7XFxuXFxuICAgIH1cXG5cXG4gICAgLmxvd3tcXG5cXG4gICAgfVxcbn1cXG5cXG4ubW9kYWxEcm9wZG93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tb2RhbERyb3Bkb3duOmhvdmVyIGxpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5tb2RhbERyb3Bkb3duOmhvdmVyIHVsIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuXFxuLm1vZGFsRHJvcGRvd24gbGkge1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5kcm9wZG93blRpdGxlIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRyb3Bkb3duVGl0bGU6YWZ0ZXIge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYxMDdcXFwiO1xcbiAgfVxcblxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5zYXZlQnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4gIFxcbi5zYXZlQnV0dG9uQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcXG59XFxuICBcXG4uc2F2ZUJ1dHRvbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5tb2RhbEJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4vKlxcbnNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4gIFxcbiAgXFxuXFxuLm1vZGFsRm9ybS1jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBcXG59XFxuKi9cXG5cXG4vKlxcbi5tb2RhbENvbnRyb2wge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qXFxuLm1vZGFsQ2hlY2tib3gge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi8qICoqKiAgICAgIENoZWNrYm94ICAgICAgKioqICovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKlxcbi5jdXN0b21DaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB9XFxuICBcXG4gIC5jdXN0b21DaGVja2JveCBpbnB1dCB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICBcXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICBcXG4gIC5jdXN0b21DaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICB9XFxuICBcXG4gIC5jdXN0b21DaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgfVxcbiAgXFxuICAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmN1c3RvbUNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC5jdXN0b21DaGVja2JveCAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogOXB4O1xcbiAgICB0b3A6IDVweDtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuKi9cXG5cXG4udXNlckF2YXRhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhY3RpdmF0ZVByb2plY3RDYXJkcyB9IGZyb20gXCIuL2RvbUFjdGl2YXRlUHJvamVjdENhcmQuanNcIjtcbmltcG9ydCB7IGFjdGl2YXRlVG9kb0NhcmRzIH0gZnJvbSBcIi4vZG9tQWN0aXZhdGVUb2RvQ2FyZC5qc1wiO1xuXG5mdW5jdGlvbiBhY3RpdmF0ZUNhcmRzICgpIHtcbiAgICBhY3RpdmF0ZVByb2plY3RDYXJkcygpO1xuICAgIGFjdGl2YXRlVG9kb0NhcmRzKCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQ29udGVudCAoKSB7XG4gICAgYWN0aXZhdGVDYXJkcygpO1xufVxuXG5leHBvcnQge1xuICAgIGFjdGl2YXRlQ29udGVudFxufTsiLCJmdW5jdGlvbiBhY3RpdmF0ZUhlYWRlcigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJBdmF0YXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQge1xuICAgIGFjdGl2YXRlSGVhZGVyXG59OyIsImltcG9ydCB7IG5ld1Byb2plY3QsIGdldFByb2plY3QsIGdldFByb2plY3RTdGF0dXMsIGdldEFsbFByb2plY3RzLCBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBuZXdUb2RvLCBnZXRUb2RvLCBnZXRUb2Rvc1Byb2plY3QsIGVkaXRUb2RvLCBkZWxldGVUb2RvLCBlZGl0VG9kb3NPZkFQcm9qZWN0IH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IHJlZnJlc2hDb250ZW50IH0gZnJvbSAnLi9kb21HZW5lcmF0ZUNvbnRlbnQuanMnO1xuaW1wb3J0IHsgcmVzZXRNb2RhbCB9IGZyb20gJy4vZG9tR2VuZXJhdGVNb2RhbC5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9TaWRlYmFyLCBlZGl0UHJvamVjdEluU2lkZWJhciB9IGZyb20gJy4vZG9tR2VuZXJhdGVTaWRlbWVudS5qcyc7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlUHJvamVjdERyb3Bkb3duKHRpdGxlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFByb2plY3REcm9wZG93bkNvbnRlbnRcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIGZpbGwgZHJvcGRvd25cbiAgICBnZXRBbGxQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGFQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGFQcm9qZWN0LmlkID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgYVByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgYVByb2plY3QuY2xhc3NMaXN0ID0gXCJvcHRpb25Qcm9qZWN0XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxQcm9qZWN0RHJvcGRvd25Db250ZW50XCIpLmFwcGVuZENoaWxkKGFQcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgLy8gc2VsZWN0IGRlZmF1bHRcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVRvZG9QYXJ0T2ZQcm9qZWN0XCIpLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVUb2RvUGFydE9mUHJvamVjdFwiKS5pbm5lckhUTUwgPSBcIkTDqWZhdXRcIjtcbiAgICB9O1xuXG4gICAgLy8gYWN0aXZhdGUgdGhlIGRyb3Bkb3duIHRvIHNlbGVjdCB0byB3aGljaCBwcm9qZWN0IHRoZSB0b2RvIHNob3VsZCBiZSBhIHBhcnQgb2ZcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblByb2plY3RcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9uUHJvamVjdCcpLmZvckVhY2goZSA9PiB7ZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO30pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlVG9kb1BhcnRPZlByb2plY3RcIikuaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVG9kb0J1dHRvbigpIHtcbiAgICAvLyBhY3RpdmF0ZSB0aGUgdG9kbyBidXR0b24gKHNob3cgdGhlIHByb2plY3Qgc2VsZWN0aW9uIGRyb3Bkb3duKSAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBlVG9kb1wiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxGb3JtSW5wdXRUb2RvUGFydE9mUHJvamVjdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVQcm9qZWN0QnV0dG9uKCkge1xuICAgIC8vIGFjdGl2YXRlIHRoZSBwcm9qZWN0IGJ1dHRvbiAoaGlkZSB0aGUgcHJvamVjdCBzZWxlY3Rpb24gZHJvcGRvd24pICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVQcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEZvcm1JbnB1dFRvZG9QYXJ0T2ZQcm9qZWN0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU2F2ZUJ1dHRvbihvYmplY3ROYW1lLCB0eXBlT2ZPYmplY3QpIHtcbiAgICAvLyBhY3RpdmF0ZSB0aGUgc2F2ZSBidXR0b24gZGVwZW5kaW5nIG9uIHRoZSBjb250ZXh0IChuZXcgb3IgZWRpdCBhbiBvYmplY3QpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIiwgKGUpID0+IHtcblxuICAgICAgICAgICAgLy8gR2V0IHByaW9yaXR5IGZvcm0gbW9kYWwgZm9ybVxuICAgICAgICAgICAgdmFyIHByaW9yaXR5O1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlIaWdoXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IFwiSGlnaFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5TWVkXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9IFwiTWVkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gXCJMb3dcIjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIE5ldyBwcm9qZWN0IE9SIHRvZG8gY2hhbmdlZCBpbiBwcm9qZWN0XG4gICAgICAgICAgICBpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVByb2plY3RcIikuY2hlY2tlZCkgJiYgKCghb2JqZWN0TmFtZSkgfHwgKHR5cGVPZk9iamVjdCA9PT0gXCJ0b2RvXCIpKSkge1xuICAgICAgICAgICAgICAgIGlmIChnZXRQcm9qZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0VGl0bGVcIikudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW4gcHJvamV0IHBvc3PDqGRlIGxlIG3Dqm1lIHRpdHJlIGV0IGlsIG5lIHBldXQgcGFzIHkgYXZvaXIgZGV1eCBwcm9qZXRzIHBvcnRhbnQgbGUgbcOqbWUgdGl0cmUuXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdFRpdGxlXCIpLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0RGVzXCIpLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0RHVlRGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RUb1NpZGViYXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RUaXRsZVwiKS52YWx1ZSk7IFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZU9mT2JqZWN0ID09PSBcInRvZG9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kbyhvYmplY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTmV3IHRvZG8gT1IgcHJvamVjdCBjaGFuZ2VkIGluIHRvZG9cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVRvZG9cIikuY2hlY2tlZCkgJiYgKCghb2JqZWN0TmFtZSkgfHwgKHR5cGVPZk9iamVjdCA9PT0gXCJwcm9qZWN0XCIpKSkge1xuICAgICAgICAgICAgICAgIGlmIChnZXRUb2RvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0VGl0bGVcIikudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5lIHTDomNoZSBwb3Nzw6hkZSBsZSBtw6ptZSB0aXRyZSBldCBpbCBuZSBwZXV0IHBhcyB5IGF2b2lyIGRldXggdMOiY2hlcyBwb3J0YW50IGxlIG3Dqm1lIHRpdHJlLlwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iamVjdE5hbWUgPT09IFwiRMOpZmF1dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdMZSBwcm9qZXQgXCJEw6lmYXV0XCIgbmUgcGV1dCDDqnRyZSBtb2RpZmnDqS4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdUb2RvKFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RUaXRsZVwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0RGVzXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVRvZG9QYXJ0T2ZQcm9qZWN0XCIpLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0RHVlRGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9zUHJvamVjdE5hbWUgPSBnZXRUb2Rvc1Byb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RUaXRsZVwiKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRQcm9qZWN0U3RhdHVzKG5ld1RvZG9zUHJvamVjdE5hbWUpID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdChuZXdUb2Rvc1Byb2plY3ROYW1lLCBcInVuY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlT2ZPYmplY3QgPT09IFwicHJvamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJTdWJtZW51SXRlbVByb2plY3RcIitvYmplY3ROYW1lKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVJdGVtUHJvamVjdFwiK29iamVjdE5hbWUpKTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3Qob2JqZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0VG9kb3NPZkFQcm9qZWN0KG9iamVjdE5hbWUsIFwiRMOpZmF1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWRpdCBhbiBvYmplY3Qgd2l0aG91dCBjaGFuZ2luZyBpdHMgdHlwZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXR1cztcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2JqZWN0TmFtZStcIkNoZWNrYm94XCIpLmNoZWNrZWQpIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YXR1cyA9IFwiY29tcGxldGVkXCI7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0dXMgPSBcInVuY29tcGxldGVkXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRWRpdCBwcm9qZWN0XG4gICAgICAgICAgICAgICAgaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVQcm9qZWN0XCIpLmNoZWNrZWQpICYmICh0eXBlT2ZPYmplY3QgPT09IFwicHJvamVjdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0TmFtZSA9PT0gXCJEw6lmYXV0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdMZSBwcm9qZXQgXCJEw6lmYXV0XCIgbmUgcGV1dCDDqnRyZSBtb2RpZmnDqS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdFRpdGxlXCIpLnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdERlc1wiKS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3REdWVEYXRlXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdE5hbWUgIT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RUaXRsZVwiKS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRUb2Rvc09mQVByb2plY3Qob2JqZWN0TmFtZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RUaXRsZVwiKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFByb2plY3RJblNpZGViYXIob2JqZWN0TmFtZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3RUaXRsZVwiKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVkaXQgdG9kb1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVRvZG9cIikuY2hlY2tlZCkgJiYgKHR5cGVPZk9iamVjdCA9PT0gXCJ0b2RvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRUb2RvKFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdFRpdGxlXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3REZXNcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlVG9kb1BhcnRPZlByb2plY3RcIikuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvYmplY3REdWVEYXRlXCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICByZXNldE1vZGFsKCk7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNsb3NlQnV0dG9uKCkge1xuICAgIC8vIGFjdGl2YXRlIFwiQ2xvc2VcIiAoXCJ4XCIpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1vZGFsQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHJlc2V0TW9kYWwoKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlTW9kYWwob2JqZWN0TmFtZSwgdHlwZU9mT2JqZWN0LCBwcm9qZWN0TmFtZSkge1xuICAgIGFjdGl2YXRlUHJvamVjdERyb3Bkb3duKHByb2plY3ROYW1lKTtcbiAgICBhY3RpdmF0ZVRvZG9CdXR0b24oKTtcbiAgICBhY3RpdmF0ZVByb2plY3RCdXR0b24oKTtcbiAgICBhY3RpdmF0ZVNhdmVCdXR0b24ob2JqZWN0TmFtZSwgdHlwZU9mT2JqZWN0KTsgXG4gICAgYWN0aXZhdGVDbG9zZUJ1dHRvbigpOyAgIFxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU1vZGFsRWRpdChvYmplY3ROYW1lLCB0eXBlT2ZPYmplY3QpIHtcbiAgICByZXNldE1vZGFsKG9iamVjdE5hbWUsIHR5cGVPZk9iamVjdCk7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZXhwb3J0IHtcbiAgICBhY3RpdmF0ZU1vZGFsLFxuICAgIGFjdGl2YXRlTW9kYWxFZGl0XG59IiwiaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGVkaXRUb2Rvc09mQVByb2plY3QgfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgeyByZWZyZXNoQ29udGVudCB9IGZyb20gJy4vZG9tR2VuZXJhdGVDb250ZW50LmpzJztcbmltcG9ydCB7IGFjdGl2YXRlTW9kYWxFZGl0IH0gZnJvbSAnLi9kb21BY3RpdmF0ZU1vZGFsLmpzJztcblxuZnVuY3Rpb24gYWN0aXZhdGVUcmFzaEljb25zKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkUHJvamVjdFRyYXNoSWNvbicpLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZWRpdFRvZG9zT2ZBUHJvamVjdChlLmlkLnNsaWNlKDExKSwgXCJEw6lmYXV0XCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVJdGVtUHJvamVjdFwiK2UuaWQuc2xpY2UoMTEpKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVJdGVtUHJvamVjdFwiK2UuaWQuc2xpY2UoMTEpKSk7ICBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJTdWJtZW51SXRlbVByb2plY3RcIitlLmlkLnNsaWNlKDExKStcIlNocmlua2VkXCIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrZS5pZC5zbGljZSgxMSkrXCJTaHJpbmtlZFwiKSk7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0KGUuaWQuc2xpY2UoMTEpKTtcbiAgICAgICAgICAgICAgICByZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVByb2plY3RDYXJkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkUHJvamVjdFRpdGxlJykuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5pZC5zbGljZSg5KSAhPSBcIkTDqWZhdXRcIikgeyBhY3RpdmF0ZU1vZGFsRWRpdChlLmlkLnNsaWNlKDkpLCBcInByb2plY3RcIik7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVQcm9qZWN0Q2FyZHMgKCkge1xuICAgIGFjdGl2YXRlUHJvamVjdENhcmQoKTtcbiAgICBhY3RpdmF0ZVRyYXNoSWNvbnMoKTtcbn1cblxuZXhwb3J0IHtcbiAgICBhY3RpdmF0ZVByb2plY3RDYXJkc1xufTsiLCJpbXBvcnQgeyByZWZyZXNoQ29udGVudCB9IGZyb20gJy4vZG9tR2VuZXJhdGVDb250ZW50LmpzJztcblxuZnVuY3Rpb24gc2hyaW5rU2lkZW1lbnUoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlTGF5b3V0XCIpLmNsYXNzTmFtZSA9IFwic2hyaW5rZWRQYWdlTGF5b3V0XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBhbmRlZFNpZGViYXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hyaW5rZWRTaWRlYmFyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFNpZGVtZW51KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZUxheW91dFwiKS5jbGFzc05hbWUgPSBcImV4cGFuZGVkUGFnZUxheW91dFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hyaW5rZWRTaWRlYmFyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGFuZGVkU2lkZWJhclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU1lbnVCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51QnV0dG9uXCIpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZUxheW91dFwiKS5jbGFzc05hbWUgPT09IFwiZXhwYW5kZWRQYWdlTGF5b3V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rU2lkZW1lbnUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRTaWRlbWVudSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIClcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RNZW51SXRlbXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJJdGVtU2VsZWN0ZWQnKS5mb3JFYWNoKGUgPT4ge2UuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhckl0ZW1TZWxlY3RlZCcpO30pO1xufVxuXG5mdW5jdGlvbiB1bnNlbGVjdFN1Ym1lbnVJdGVtcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWQnKS5mb3JFYWNoKGUgPT4ge2UuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWQnKTt9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0U3VibWVudUl0ZW1zKHN1Ym1lbnVJZCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjXCIgKyBzdWJtZW51SWQpLmZvckVhY2goZSA9PiB7ZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyU3VibWVudUl0ZW1TZWxlY3RlZCcpO30pO1xufVxuXG5mdW5jdGlvbiBoaWRlU3VibWVudXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJTdWJtZW51JykuZm9yRWFjaChlID0+IHtlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjt9KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0TWVudUl0ZW0oaXRlbVRvU2VsZWN0KSB7IFxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJTdWJtZW51XCIgKyBpdGVtVG9TZWxlY3QpO1xuICAgIGlmICh4LnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIikge1xuICAgICAgICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgY29uc3QgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVcIiArIGl0ZW1Ub1NlbGVjdCArIFwiU2hyaW5rZWRcIik7XG4gICAgaWYgKHkuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiKSB7XG4gICAgICAgIHkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgeS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVNZW51SXRlbXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJJdGVtJykuZm9yRWFjaChlbGVtZW50ID0+IHsgXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudUl0ZW0oZWxlbWVudC5pZC5zdWJzdHJpbmcoMTEpKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIClcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTdWJtZW51SXRlbXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJTdWJtZW51SXRlbScpLmZvckVhY2goZWxlbWVudCA9PiB7IFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0U3VibWVudUl0ZW1zKCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaWQuaW5jbHVkZXMoXCJTaHJpbmtlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkLnNsaWNlKDAsLTgpKS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCArIFwiU2hyaW5rZWRcIikuY2xhc3NMaXN0LmFkZChcInNpZGViYXJTdWJtZW51SXRlbVNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZU5ldygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBtb2RhbC5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0J1dHRvblNocmlua2VkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIG1vZGFsLnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTaWRlYmFyKCkge1xuICAgIGFjdGl2YXRlTWVudUJ1dHRvbigpOyAgIFxuICAgIGFjdGl2YXRlTmV3KCk7IFxuICAgIGFjdGl2YXRlTWVudUl0ZW1zKCk7XG4gICAgYWN0aXZhdGVTdWJtZW51SXRlbXMoKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTaWRlYmFyUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltpZF49J3NpZGViYXJTdWJtZW51SXRlbVByb2plY3RcIitwcm9qZWN0K1wiJ11cIikuZm9yRWFjaChlbGVtZW50ID0+IHsgXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RTdWJtZW51SXRlbXMoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyU3VibWVudUl0ZW1TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pZC5pbmNsdWRlcyhcIlNocmlua2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaWQuc2xpY2UoMCwtOCkpLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyU3VibWVudUl0ZW1TZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkICsgXCJTaHJpbmtlZFwiKS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICApXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxTaWRlYmFyU2VsZWN0aW9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVJdGVtSW5ib3hBbGxcIikuY2xhc3NMaXN0LmFkZChcInNpZGViYXJTdWJtZW51SXRlbVNlbGVjdGVkXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVJdGVtSW5ib3hBbGxTaHJpbmtlZFwiKS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWRcIik7XG59XG5cbmV4cG9ydCB7XG4gICAgc2hyaW5rU2lkZW1lbnUsXG4gICAgYWN0aXZhdGVTaWRlYmFyLFxuICAgIGFjdGl2YXRlU2lkZWJhclByb2plY3QsXG4gICAgaW5pdGlhbFNpZGViYXJTZWxlY3Rpb25cbn07IiwiaW1wb3J0IHsgZWRpdFRvZG8sIGRlbGV0ZVRvZG8sIGdldFRvZG9zUHJvamVjdCwgZ2V0VG9kb3NPZkFQcm9qZWN0IH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IHJlZnJlc2hDb250ZW50IH0gZnJvbSAnLi9kb21HZW5lcmF0ZUNvbnRlbnQuanMnO1xuaW1wb3J0IHsgYWN0aXZhdGVNb2RhbEVkaXQgfSBmcm9tICcuL2RvbUFjdGl2YXRlTW9kYWwuanMnO1xuaW1wb3J0IHsgZWRpdFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoZWNrYm94KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkVG9kb0NoZWNrYm94JykuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb3NOYW1lID0gZS5pZC5zbGljZSgwLCAtOCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb3NQcm9qZWN0TmFtZSA9IGdldFRvZG9zUHJvamVjdCh0b2Rvc05hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRvZG8odG9kb3NOYW1lLCBcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkVGl0bGVcIit0b2Rvc05hbWUpLmNsYXNzTGlzdC5hZGQoXCJjYXJkQ29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VG9kb3NPZkFQcm9qZWN0KHRvZG9zUHJvamVjdE5hbWUpLmZpbHRlcigoZSkgPT4gZS5zdGF0dXMgPT0gXCJ1bmNvbXBsZXRlZFwiKS5sZW5ndGggPT0gMCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KHRvZG9zUHJvamVjdE5hbWUsIFwiY29tcGxldGVkXCIpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRUb2RvKHRvZG9zTmFtZSwgXCJ1bmNvbXBsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkVGl0bGVcIit0b2Rvc05hbWUpLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkQ29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvamVjdCh0b2Rvc1Byb2plY3ROYW1lLCBcInVuY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRvZG9UcmFzaEljb25zKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkVG9kb1RyYXNoSWNvbicpLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlVG9kbyhlLmlkLnNsaWNlKDExKSk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUb2RvQ2FyZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZFRvZG9UaXRsZScpLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGVNb2RhbEVkaXQoZS5pZC5zbGljZSg5KSwgXCJ0b2RvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRvZG9DYXJkcyAoKSB7XG4gICAgYWN0aXZhdGVUb2RvQ2FyZCgpO1xuICAgIGFjdGl2YXRlQ2hlY2tib3goKTtcbiAgICBhY3RpdmF0ZVRvZG9UcmFzaEljb25zKCk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWN0aXZhdGVUb2RvQ2FyZHNcbn07IiwiaW1wb3J0IHsgZ2V0QWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgZ2V0QWxsVG9kb3MgfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHsgY3JlYXRlSW1nLCBjcmVhdGVEaXYgfSBmcm9tICcuL2RvbUdlbmVyYXRlSFRNTEVsZW1lbnQuanMnO1xuaW1wb3J0IGljb25fY2xvY2sgZnJvbSAnLi9pbWFnZXMvaWNvbl9jbG9jay5wbmcnO1xuaW1wb3J0IGljb25fY2xvY2tHcmV5IGZyb20gJy4vaW1hZ2VzL2ljb25fY2xvY2stZ3JleS5wbmcnO1xuaW1wb3J0IGljb25fY2xvY2tDb21wbGV0ZWQgZnJvbSAnLi9pbWFnZXMvaWNvbl9jbG9jay1jb21wbGV0ZWQucG5nJztcbmltcG9ydCBpY29uX2JpbiBmcm9tICcuL2ltYWdlcy9pY29uX2Jpbi5wbmcnO1xuaW1wb3J0IGljb25fYmluR3JleSBmcm9tICcuL2ltYWdlcy9pY29uX2Jpbi1ncmV5LnBuZyc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENhcmQocHJvamVjdCkge1xuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVEaXYoXCJjYXJkIHByb2plY3RDYXJkIGNhcmRcIiArIHByb2plY3QucHJpb3JpdHkgKyBcIlByaW9yaXR5XCIsIFwiUHJvamVjdENhcmRfXCIrcHJvamVjdC5uYW1lLCBcIlwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmlkID0gcHJvamVjdC5uYW1lICsgXCJDaGVja2JveFwiO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwib25jaGFuZ2VcIiwgXCJ0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkXCIpO1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0ID0gXCJjYXJkUHJvamVjdENoZWNrYm94XCI7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5zdGF0dXMgPT0gXCJjb21wbGV0ZWRcIikgeyBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTsgfVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGlmIChwcm9qZWN0LnN0YXR1cyA9PSBcImNvbXBsZXRlZFwiKSB7IFxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZURpdihcImNhcmRUaXRsZSBjYXJkUHJvamVjdFRpdGxlIGNhcmRDb21wbGV0ZWRcIiwgXCJjYXJkVGl0bGVcIitwcm9qZWN0Lm5hbWUsIHByb2plY3QubmFtZSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhpY29uX2Nsb2NrQ29tcGxldGVkLCBcImljb25DbG9ja0NvbXBsZXRlZFwiLCBcImNsb2NrQnV0dG9uXCIrcHJvamVjdC5uYW1lLCBcImNhcmRJY29uXCIpKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjcmVhdGVEaXYoXCJjYXJkQ29udGVudCBjYXJkQ29tcGxldGVkXCIsIFwiY2FyZER1ZURhdGVcIitwcm9qZWN0Lm5hbWUsIHByb2plY3QuZHVlRGF0ZSkpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhpY29uX2JpbiwgXCJpY29uQmluXCIsIFwidHJhc2hCdXR0b25cIitwcm9qZWN0Lm5hbWUsIFwiY2FyZFByb2plY3RUcmFzaEljb25cIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KFwiY2FyZFRpdGxlIGNhcmRQcm9qZWN0VGl0bGVcIiwgXCJjYXJkVGl0bGVcIitwcm9qZWN0Lm5hbWUsIHByb2plY3QubmFtZSkpO1xuICAgICAgICBpZiAocHJvamVjdC5uYW1lICE9IFwiRMOpZmF1dFwiKSB7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhpY29uX2Nsb2NrLCBcImljb25DbG9ja1wiLCBcImNsb2NrQnV0dG9uXCIrcHJvamVjdC5uYW1lLCBcImNhcmRJY29uXCIpKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KFwiY2FyZENvbnRlbnRcIiwgXCJjYXJkRHVlRGF0ZVwiK3Byb2plY3QubmFtZSwgcHJvamVjdC5kdWVEYXRlKSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhpY29uX2JpbiwgXCJpY29uQmluXCIsIFwidHJhc2hCdXR0b25cIitwcm9qZWN0Lm5hbWUsIFwiY2FyZFByb2plY3RUcmFzaEljb25cIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9DYXJkKHRvZG8pIHtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlRGl2KFwiY2FyZCB0b2RvQ2FyZCBjYXJkXCIgKyB0b2RvLnByaW9yaXR5ICsgXCJQcmlvcml0eVwiLCBcIlRvZG9DYXJkX1wiK3RvZG8ubmFtZSwgXCJcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICBjaGVja2JveC5pZCA9IHRvZG8ubmFtZSArIFwiQ2hlY2tib3hcIjtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdCA9IFwiY2FyZFRvZG9DaGVja2JveFwiO1xuICAgICAgICAgICAgaWYgKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVkXCIpIHsgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7IH1cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBpZiAodG9kby5zdGF0dXMgPT0gXCJjb21wbGV0ZWRcIikgeyBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjcmVhdGVEaXYoXCJjYXJkVGl0bGUgY2FyZFRvZG9UaXRsZSBjYXJkQ29tcGxldGVkXCIsIFwiY2FyZFRpdGxlXCIrdG9kby5uYW1lLCB0b2RvLm5hbWUpKTsgXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKGljb25fY2xvY2tDb21wbGV0ZWQsIFwiaWNvbkNsb2NrQ29tcGxldGVkXCIsIFwiY2xvY2tCdXR0b25cIit0b2RvLm5hbWUsIFwiY2FyZEljb25cIikpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZURpdihcImNhcmRDb250ZW50IGNhcmRDb21wbGV0ZWRcIiwgXCJjYXJkRHVlRGF0ZVwiK3RvZG8ubmFtZSwgdG9kby5kdWVEYXRlKSk7XG4gICAgfSBlbHNlIHsgXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KFwiY2FyZFRpdGxlIGNhcmRUb2RvVGl0bGVcIiwgXCJjYXJkVGl0bGVcIit0b2RvLm5hbWUsIHRvZG8ubmFtZSkpOyBcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjcmVhdGVJbWcoaWNvbl9jbG9jaywgXCJpY29uQ2xvY2tcIiwgXCJjbG9ja0J1dHRvblwiK3RvZG8ubmFtZSwgXCJjYXJkSWNvblwiKSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KFwiY2FyZENvbnRlbnRcIiwgXCJjYXJkRHVlRGF0ZVwiK3RvZG8ubmFtZSwgdG9kby5kdWVEYXRlKSk7XG4gICAgfVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKGljb25fYmluLCBcImljb25CaW5cIiwgXCJ0cmFzaEJ1dHRvblwiK3RvZG8ubmFtZSwgXCJjYXJkVG9kb1RyYXNoSWNvblwiKSk7XG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENhcmRzKCkge1xuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBjcmVhdGVEaXYoXCJjYXJkc0NvbnRhaW5lclwiLCBcIlwiLCBcIlwiKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdENhcmQoZWxlbWVudCkpO1xuICAgICAgICB9KTsgICBcbiAgICByZXR1cm4gY2FyZENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2RvQ2FyZHMoc3RhdHVzLCBwcmlvcml0eSwgZGVhZGxpbmUsIHByb2plY3QpIHtcbiAgICBjb25zdCBjYXJkQ29udGFpbmVyID0gY3JlYXRlRGl2KFwiY2FyZHNDb250YWluZXJcIiwgXCJcIiwgXCJcIik7XG4gICAgY29uc3QgdG9kb3MgPSBnZXRBbGxUb2RvcygpO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCEoc3RhdHVzKSAmJiAhKHByaW9yaXR5KSAmJiAhKGRlYWRsaW5lKSAmJiAhKHByb2plY3QpKSB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRvZG9DYXJkKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHN0YXR1cykgJiYgKHN0YXR1cyA9PT0gZWxlbWVudC5zdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRvZG9DYXJkKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHByaW9yaXR5KSAmJiAocHJpb3JpdHkgPT09IGVsZW1lbnQucHJpb3JpdHkpKSB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRvZG9DYXJkKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVhZGxpbmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHVlRGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQuZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5zZXRUaW1lKGR1ZURhdGUuZ2V0VGltZSgpICsgZHVlRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKjYwKjEwMDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgaW43RGF5cyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgaW43RGF5cy5zZXREYXRlKGluN0RheXMuZ2V0RGF0ZSgpKzcpO1xuICAgICAgICAgICAgICAgIHZhciBpbjMwRGF5cyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgaW4zMERheXMuc2V0RGF0ZShpbjMwRGF5cy5nZXREYXRlKCkrMzApO1xuICAgICAgICAgICAgICAgIGlmICgoZGVhZGxpbmUgPT0gMSkgJiYgKCghZWxlbWVudC5kdWVEYXRlKSB8fCAoZHVlRGF0ZSA8IHRvZGF5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVRvZG9DYXJkKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChkZWFkbGluZSA9PSA3KSAmJiAoKCFlbGVtZW50LmR1ZURhdGUpIHx8IChkdWVEYXRlIDwgaW43RGF5cykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUb2RvQ2FyZChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZGVhZGxpbmUgPT0gMzApICYmICgoIWVsZW1lbnQuZHVlRGF0ZSkgfHwgKGR1ZURhdGUgPCBpbjMwRGF5cykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUb2RvQ2FyZChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgocHJvamVjdCkgJiYgKHByb2plY3QgPT09IGVsZW1lbnQucHJvamVjdCkpIHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVG9kb0NhcmQoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICBcbiAgICByZXR1cm4gY2FyZENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtcbiAgICBnZW5lcmF0ZVByb2plY3RDYXJkcyxcbiAgICBnZW5lcmF0ZVRvZG9DYXJkc1xufTsiLCJpbXBvcnQgaWNvbl90YXNrIGZyb20gJy4vaW1hZ2VzL2ljb25fdGFzay5wbmcnO1xuaW1wb3J0IGljb25fcHJvamVjdCBmcm9tICcuL2ltYWdlcy9pY29uX3Byb2plY3QtYXJyb3cucG5nJztcbmltcG9ydCB7IGNyZWF0ZUltZywgY3JlYXRlRGl2IH0gZnJvbSAnLi9kb21HZW5lcmF0ZUhUTUxFbGVtZW50LmpzJztcbmltcG9ydCB7IGdlbmVyYXRlUHJvamVjdENhcmRzLCBnZW5lcmF0ZVRvZG9DYXJkcyB9IGZyb20gJy4vZG9tR2VuZXJhdGVDYXJkcy5qcyc7XG5pbXBvcnQgeyBhY3RpdmF0ZUNvbnRlbnQgfSBmcm9tICcuL2RvbUFjdGl2YXRlQ29udGVudC5qcyc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudFRpdGxlKHR5cGUsIHN0YXR1cywgcHJpb3JpdHksIGRlYWRsaW5lLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVEaXYoXCJ0aXRsZVwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgdmFyIGNvbnRleHQ7XG4gICAgICAgIGlmICh0eXBlID09PSBcInByb2plY3RcIikge1xuICAgICAgICAgICAgY29udGV4dCA9IGNyZWF0ZURpdihcImNvbnRleHRcIiwgXCJjb250ZXh0XCIsIFwiUHJvamV0cyA6IFwiKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJlcGVuZChjcmVhdGVJbWcoaWNvbl9wcm9qZWN0LCBcImljb25Qcm9qZWN0XCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjcmVhdGVEaXYoXCJjb250ZXh0XCIsIFwiY29udGV4dFwiLCBcIlTDomNoZXMgOiBDb21wbMOpdMOpZXNcIik7XG4gICAgICAgICAgICBjb250ZXh0LnByZXBlbmQoY3JlYXRlSW1nKGljb25fdGFzaywgXCJpY29uVGFza1wiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcInVuY29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjcmVhdGVEaXYoXCJjb250ZXh0XCIsIFwiY29udGV4dFwiLCBcIlTDomNoZXMgOiBOb24tY29tcGzDqXTDqWVzXCIpO1xuICAgICAgICAgICAgY29udGV4dC5wcmVwZW5kKGNyZWF0ZUltZyhpY29uX3Rhc2ssIFwiaWNvblRhc2tcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgICAgICAgY29udGV4dCA9IGNyZWF0ZURpdihcImNvbnRleHRcIiwgXCJjb250ZXh0XCIsIFwiVMOiY2hlcyA6IFByaW9yaXTDqSDDqWxldsOpZVwiKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJlcGVuZChjcmVhdGVJbWcoaWNvbl90YXNrLCBcImljb25UYXNrXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gXCJNZWRcIikge1xuICAgICAgICAgICAgY29udGV4dCA9IGNyZWF0ZURpdihcImNvbnRleHRcIiwgXCJjb250ZXh0XCIsIFwiVMOiY2hlcyA6IFByaW9yaXTDqSBtb3llbm5lXCIpO1xuICAgICAgICAgICAgY29udGV4dC5wcmVwZW5kKGNyZWF0ZUltZyhpY29uX3Rhc2ssIFwiaWNvblRhc2tcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY3JlYXRlRGl2KFwiY29udGV4dFwiLCBcImNvbnRleHRcIiwgXCJUw6JjaGVzIDogUHJpb3JpdMOpIGJhc3NlXCIpO1xuICAgICAgICAgICAgY29udGV4dC5wcmVwZW5kKGNyZWF0ZUltZyhpY29uX3Rhc2ssIFwiaWNvblRhc2tcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlYWRsaW5lID09PSBcInRvZGF5XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjcmVhdGVEaXYoXCJjb250ZXh0XCIsIFwiY29udGV4dFwiLCBcIlTDomNoZXMgOiDDgCBjb21wbMOpdGVyIGF1am91cmQnaHVpICFcIik7XG4gICAgICAgICAgICBjb250ZXh0LnByZXBlbmQoY3JlYXRlSW1nKGljb25fdGFzaywgXCJpY29uVGFza1wiKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVhZGxpbmUgPT09IFwid2Vla1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY3JlYXRlRGl2KFwiY29udGV4dFwiLCBcImNvbnRleHRcIiwgXCJUw6JjaGVzIDogw4AgY29tcGzDqXRlciBkJ2ljaSB1bmUgc2VtYWluZSAhXCIpO1xuICAgICAgICAgICAgY29udGV4dC5wcmVwZW5kKGNyZWF0ZUltZyhpY29uX3Rhc2ssIFwiaWNvblRhc2tcIikpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlYWRsaW5lID09PSBcIm1vbnRoXCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjcmVhdGVEaXYoXCJjb250ZXh0XCIsIFwiY29udGV4dFwiLCBcIlTDomNoZXMgOiDDgCBjb21wbMOpdGVyIGQnaWNpIHVuIG1vaXMgIVwiKTtcbiAgICAgICAgICAgIGNvbnRleHQucHJlcGVuZChjcmVhdGVJbWcoaWNvbl90YXNrLCBcImljb25UYXNrXCIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY3JlYXRlRGl2KFwiY29udGV4dFwiLCBcImNvbnRleHRcIiwgXCJUw6JjaGVzIDogRHUgcHJvamV0IFwiICsgcHJvamVjdCk7XG4gICAgICAgICAgICBjb250ZXh0LnByZXBlbmQoY3JlYXRlSW1nKGljb25fdGFzaywgXCJpY29uVGFza1wiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY3JlYXRlRGl2KFwiY29udGV4dFwiLCBcImNvbnRleHRcIiwgXCJUw6JjaGVzIDogVG91dGVzXCIpO1xuICAgICAgICAgICAgY29udGV4dC5wcmVwZW5kKGNyZWF0ZUltZyhpY29uX3Rhc2ssIFwiaWNvblRhc2tcIikpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQoY29udGV4dCk7IFxuICAgIHJldHVybiB0aXRsZTtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQodHlwZSwgc3RhdHVzLCBwcmlvcml0eSwgZGVhZGxpbmUsIHByb2plY3QpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRGl2KFwiY29udGVudFwiLCBcImNvbnRlbnRcIiwgXCJcIik7ICAgIFxuICAgICAgICBjb25zdCBjb250ZW50Q29udGV4dCA9IGNyZWF0ZURpdihcImNvbnRlbnRDb250ZXh0XCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRCYXIuY2xhc3NMaXN0ID0gXCJjb250ZXh0QmFyXCI7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0QmFyLmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudFRpdGxlKHR5cGUpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dEJhci5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnRUaXRsZSh0eXBlLCBzdGF0dXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0QmFyLmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudFRpdGxlKHR5cGUsIHVuZGVmaW5lZCwgcHJpb3JpdHkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVhZGxpbmUpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0QmFyLmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudFRpdGxlKHR5cGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBkZWFkbGluZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dEJhci5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnRUaXRsZSh0eXBlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwcm9qZWN0KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHRCYXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50VGl0bGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNvbnRlbnRDb250ZXh0LmFwcGVuZENoaWxkKGNvbnRleHRCYXIpOyAgICAgICBcbiAgICAgICAgaWYgKHR5cGUgPT09IFwicHJvamVjdFwiKSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGV4dC5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RDYXJkcygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250ZXh0LmFwcGVuZENoaWxkKGdlbmVyYXRlVG9kb0NhcmRzKHN0YXR1cykpO1xuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5KSB7XG4gICAgICAgICAgICBjb250ZW50Q29udGV4dC5hcHBlbmRDaGlsZChnZW5lcmF0ZVRvZG9DYXJkcyh1bmRlZmluZWQsIHByaW9yaXR5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVhZGxpbmUpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250ZXh0LmFwcGVuZENoaWxkKGdlbmVyYXRlVG9kb0NhcmRzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBkZWFkbGluZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250ZXh0LmFwcGVuZENoaWxkKGdlbmVyYXRlVG9kb0NhcmRzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHByb2plY3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250ZXh0LmFwcGVuZENoaWxkKGdlbmVyYXRlVG9kb0NhcmRzKCkpO1xuICAgICAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hDb250ZW50KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5yZW1vdmUoKTtcbiAgICAvLyBmaW5kIHNlbGVjdGVkIHN1Ym1lbnVcbiAgICB2YXIgZmlsdGVyO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhclN1Ym1lbnVJdGVtU2VsZWN0ZWQnKS5mb3JFYWNoKGUgPT4ge2lmICghZS5pZC5pbmNsdWRlcyhcIlNocmlua2VkXCIpKSB7IGZpbHRlciA9IGUuaWQuc2xpY2UoMTgpO319KTtcbiAgICBcbiAgICAvLyBjYWxsIGdlbmVyYXRlQ29udGVudCBhY2NvcmRpbmdseSB0byB0aGUgZmlsdGVyIChmcm9tIHRoZSBzZWxlY3RlZCBzdWJtZW51IGl0ZW0pXG4gICAgaWYgKGZpbHRlciA9PT0gXCJJbmJveEFsbFwiKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZUxheW91dFwiKS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQoKSk7XG4gICAgfSBlbHNlIGlmKGZpbHRlciA9PT0gXCJJbmJveFRvZG9cIikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VMYXlvdXRcIikuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250ZW50KFwidG9kb1wiLCBcInVuY29tcGxldGVkXCIpKTtcbiAgICB9IGVsc2UgaWYoZmlsdGVyID09PSBcIkluYm94RG9uZVwiKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZUxheW91dFwiKS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQoXCJ0b2RvXCIsIFwiY29tcGxldGVkXCIpKTtcbiAgICB9IGVsc2UgaWYoZmlsdGVyLmluY2x1ZGVzKFwiUHJpb3JpdHlcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlTGF5b3V0XCIpLmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChcInRvZG9cIiwgdW5kZWZpbmVkLCBmaWx0ZXIuc2xpY2UoOCkpKTtcbiAgICB9IGVsc2UgaWYoZmlsdGVyLmluY2x1ZGVzKFwiQ2FsZW5kYXJcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlTGF5b3V0XCIpLmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChcInRvZG9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZpbHRlci5zbGljZSg4KSkpO1xuICAgIH0gZWxzZSBpZihmaWx0ZXIgPT09IFwiRWRpdFByb2plY3RzXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlTGF5b3V0XCIpLmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudChcInByb2plY3RcIikpO1xuICAgIH0gZWxzZSBpZihmaWx0ZXIuaW5jbHVkZXMoXCJQcm9qZWN0XCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZUxheW91dFwiKS5hcHBlbmRDaGlsZChnZW5lcmF0ZUNvbnRlbnQoXCJ0b2RvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZpbHRlci5zbGljZSg3KSkpO1xuICAgIH1cbiAgICBhY3RpdmF0ZUNvbnRlbnQoKTtcbn1cblxuZXhwb3J0IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnQsXG4gICAgcmVmcmVzaENvbnRlbnRcbn07IiwiZnVuY3Rpb24gY3JlYXRlSW1nKHNyYywgYWx0LCBpZCwgaW1nQ2xhc3MpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hbHQgPSBhbHQ7XG4gICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgaW1nLmlkID0gaWQ7XG4gICAgfVxuICAgIGlmIChpbWdDbGFzcyAhPSBudWxsKSB7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGltZ0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2KGRpdkNsYXNzLCBpZCwgY29udGVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QgPSBkaXZDbGFzcztcbiAgICBkaXYuaWQgPSBpZDtcbiAgICBkaXYuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUltZyxcbiAgICBjcmVhdGVEaXZcbn07IiwiaW1wb3J0IGljb25fc2VhcmNoIGZyb20gJy4vaW1hZ2VzL2ljb25fc2VhcmNoLnBuZyc7XG5pbXBvcnQgaWNvbl9saXN0IGZyb20gJy4vaW1hZ2VzL2ljb25fbGlzdC5wbmcnO1xuaW1wb3J0IGljb25fdGlsZXMgZnJvbSAnLi9pbWFnZXMvaWNvbl90aWxlcy5wbmcnO1xuaW1wb3J0IHtjcmVhdGVJbWcsIGNyZWF0ZURpdn0gZnJvbSAnLi9kb21HZW5lcmF0ZUhUTUxFbGVtZW50JztcblxuZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QgPSBcImhlYWRlclwiO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGNyZWF0ZURpdihcInNlYXJjaEJhclwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgIHNlYXJjaEJhci5hcHBlbmRDaGlsZChjcmVhdGVJbWcoaWNvbl9zZWFyY2gsIFwiaWNvblNlYXJjaFwiKSk7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRTZWFyY2guaWQgPSBcInNlYXJjaEZpZWxkXCI7XG4gICAgICAgICAgICAgICAgaW5wdXRTZWFyY2guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoaW5wdXRTZWFyY2gpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcblxuICAgICAgICBjb25zdCB1c2VyQmFyID0gY3JlYXRlRGl2KFwidXNlckJhclwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgIHVzZXJCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKGljb25fdGlsZXMsIFwiaWNvblRpbGVzXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJBdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB1c2VyQXZhdGFyLmlkID0gXCJ1c2VyQXZhdGFyXCI7XG4gICAgICAgICAgICAgICAgdXNlckF2YXRhci5jbGFzc0xpc3QgPSBcInVzZXJBdmF0YXJcIjtcbiAgICAgICAgICAgICAgICB1c2VyQXZhdGFyLmlubmVySFRNTCA9IFwiRVwiO1xuICAgICAgICAgICAgdXNlckJhci5hcHBlbmRDaGlsZCh1c2VyQXZhdGFyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJCYXIpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2VuZXJhdGVIZWFkZXJcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tICcuL2RvbUdlbmVyYXRlSFRNTEVsZW1lbnQnO1xuaW1wb3J0IHsgYWN0aXZhdGVNb2RhbCB9IGZyb20gJy4vZG9tQWN0aXZhdGVNb2RhbCc7XG5pbXBvcnQgeyBnZXRUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IGdldFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZU1vZGFsICgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGNyZWF0ZURpdihcIm1vZGFsXCIsIFwibW9kYWxcIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gY3JlYXRlRGl2KFwibW9kYWxDb250YWluZXJcIiwgXCJtb2RhbENvbnRhaW5lclwiLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gY3JlYXRlRGl2KFwibW9kYWxIZWFkZXJcIiwgXCJcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxUaXRsZSA9IGNyZWF0ZURpdihcIm1vZGFsVGl0bGVcIiwgXCJcIiwgXCIgXCIpO1xuICAgICAgICAgICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VNb2RhbCA9IGNyZWF0ZURpdihcImNsb3NlTW9kYWxcIiwgXCJcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0ID0gXCJjbG9zZU1vZGFsQnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uLmlkID0gXCJjbG9zZU1vZGFsQnV0dG9uXCI7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWxCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbC5hcHBlbmRDaGlsZChjbG9zZU1vZGFsQnV0dG9uKTtcbiAgICAgICAgICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBtb2RhbEZvcm0uaWQgPSBcIm1vZGFsRm9ybVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIgXCIpO1xuICAgICAgICAgICAgICAgIG1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJnZXRcIik7XG4gICAgICAgICAgICAgICAgbW9kYWxGb3JtLmNsYXNzTGlzdCA9IFwibW9kYWxGb3JtXCI7XG4gICAgICAgICAgICAgICAgbW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcIm9ua2V5ZG93blwiLCBcInJldHVybiBldmVudC5rZXkgIT0gJ0VudGVyJztcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbEZvcm1GaWVsZHNldCA9IGNyZWF0ZURpdihcIm1vZGFsRm9ybS1maWVsZHNldFwiLCBcIlwiLCBcIlwiKTsgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWxGb3JtSW5wdXRUeXBlT2YgPSBjcmVhdGVEaXYoXCJtb2RhbEZvcm0taW5wdXRTZWxlY3Rpb25cIiwgXCJcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFR5cGVPZlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZU9mUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZU9mUHJvamVjdC5pZCA9IFwidHlwZVByb2plY3RcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlT2ZQcm9qZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlT2ZQcm9qZWN0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0eXBlT2ZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFR5cGVPZlByb2plY3QuYXBwZW5kQ2hpbGQoaW5wdXRUeXBlT2ZQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Qm94ID0gY3JlYXRlRGl2KFwicHJvamVjdCBib3hcIiwgXCJcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VHlwZU9mUHJvamVjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGVPZlByb2plY3RTcGFuLmlubmVySFRNTCA9IFwiUHJvamV0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChpbnB1dFR5cGVPZlByb2plY3RTcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVHlwZU9mUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb3JtSW5wdXRUeXBlT2YuYXBwZW5kQ2hpbGQobGFiZWxUeXBlT2ZQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVHlwZU9mVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUeXBlT2ZUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlT2ZUb2RvLmlkID0gXCJ0eXBlVG9kb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGVPZlRvZG8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGVPZlRvZG8uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInR5cGVPZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlT2ZUb2RvLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVHlwZU9mVG9kby5hcHBlbmRDaGlsZChpbnB1dFR5cGVPZlRvZG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Cb3ggPSBjcmVhdGVEaXYoXCJ0b2RvIGJveFwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRUeXBlT2ZUb2RvU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZU9mVG9kb1NwYW4uaW5uZXJIVE1MID0gXCJUw6JjaGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQm94LmFwcGVuZENoaWxkKGlucHV0VHlwZU9mVG9kb1NwYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUeXBlT2ZUb2RvLmFwcGVuZENoaWxkKHRvZG9Cb3gpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvcm1JbnB1dFR5cGVPZi5hcHBlbmRDaGlsZChsYWJlbFR5cGVPZlRvZG8pO1xuICAgICAgICAgICAgICAgIG1vZGFsRm9ybUZpZWxkc2V0LmFwcGVuZENoaWxkKG1vZGFsRm9ybUlucHV0VHlwZU9mKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RhbEZvcm1JbnB1dFRvZG9QYXJ0T2ZQcm9qZWN0ID0gY3JlYXRlRGl2KFwibW9kYWxGb3JtLWlucHV0U2VsZWN0aW9uXCIsIFwibW9kYWxGb3JtSW5wdXRUb2RvUGFydE9mUHJvamVjdFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVG9kb1BhcnRPZlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVG9kb1BhcnRPZlByb2plY3Quc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9kYWxQcm9qZWN0RHJvcGRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUb2RvUGFydE9mUHJvamVjdC5pbm5lckhUTUwgPSBcIlByb2pldCBhdXF1ZWwgYXBwYXJ0aWVudCBjZXR0ZSB0w6JjaGUgOlwiO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvcm1JbnB1dFRvZG9QYXJ0T2ZQcm9qZWN0LmFwcGVuZENoaWxkKGxhYmVsVG9kb1BhcnRPZlByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb1BhcnRPZlByb2plY3QgPSBjcmVhdGVEaXYoXCJtb2RhbERyb3Bkb3duXCIsIFwibW9kYWxQcm9qZWN0RHJvcGRvd25cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVUb2RvUGFydE9mUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVUb2RvUGFydE9mUHJvamVjdC5pZCA9IFwidGl0bGVUb2RvUGFydE9mUHJvamVjdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVRvZG9QYXJ0T2ZQcm9qZWN0LmNsYXNzTGlzdCA9IFwiZHJvcGRvd25UaXRsZVwiO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlVG9kb1BhcnRPZlByb2plY3QuaW5uZXJIVE1MID0gXCJEw6lmYXV0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvUGFydE9mUHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZVRvZG9QYXJ0T2ZQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50VG9kb1BhcnRPZlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VG9kb1BhcnRPZlByb2plY3QuaWQgPSBcIm1vZGFsUHJvamVjdERyb3Bkb3duQ29udGVudFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VG9kb1BhcnRPZlByb2plY3QuY2xhc3NMaXN0ID0gXCJkcm9wZG93bkNvbnRlbnRcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9QYXJ0T2ZQcm9qZWN0LmFwcGVuZENoaWxkKGNvbnRlbnRUb2RvUGFydE9mUHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9ybUlucHV0VG9kb1BhcnRPZlByb2plY3QuYXBwZW5kQ2hpbGQodG9kb1BhcnRPZlByb2plY3QpO1xuICAgICAgICAgICAgICAgIG1vZGFsRm9ybUZpZWxkc2V0LmFwcGVuZENoaWxkKG1vZGFsRm9ybUlucHV0VG9kb1BhcnRPZlByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsRm9ybUlucHV0UHJpb3JpdHkgPSBjcmVhdGVEaXYoXCJtb2RhbEZvcm0taW5wdXRTZWxlY3Rpb25cIiwgXCJtb2RhbEZvcm0taW5wdXRQcmlvcml0eVwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibW9kYWxGb3JtLWlucHV0UHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXTDqSA6IFwiO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvcm1JbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxQcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcmlvcml0eUhpZ2guaWQgPSBcInByaW9yaXR5SGlnaFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFByaW9yaXR5SGlnaC5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5SGlnaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoQm94ID0gY3JlYXRlRGl2KFwicHJpb3JpdHkgaGlnaFwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmlvcml0eUhpZ2hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcmlvcml0eUhpZ2hTcGFuLmlubmVySFRNTCA9IFwiSGF1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUhpZ2hCb3guYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUhpZ2hTcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUHJpb3JpdHlIaWdoLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaEJveCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9ybUlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUhpZ2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxQcmlvcml0eU1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmlvcml0eU1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJpb3JpdHlNZWQuaWQgPSBcInByaW9yaXR5TWVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJpb3JpdHlNZWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByaW9yaXR5TWVkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUHJpb3JpdHlNZWQuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eU1lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlNZWRCb3ggPSBjcmVhdGVEaXYoXCJwcmlvcml0eSBtZWRcIiwgXCJcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJpb3JpdHlNZWRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcmlvcml0eU1lZFNwYW4uaW5uZXJIVE1MID0gXCJNb3llbm5lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlNZWRCb3guYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eU1lZFNwYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eU1lZC5hcHBlbmRDaGlsZChwcmlvcml0eU1lZEJveCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9ybUlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eU1lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcmlvcml0eUxvdy5pZCA9IFwicHJpb3JpdHlMb3dcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eUxvdy5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5TG93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxvd0JveCA9IGNyZWF0ZURpdihcInByaW9yaXR5IGxvd1wiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcmlvcml0eUxvd1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByaW9yaXR5TG93U3Bhbi5pbm5lckhUTUwgPSBcIkJhc3NlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMb3dCb3guYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eUxvd1NwYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQcmlvcml0eUxvdy5hcHBlbmRDaGlsZChwcmlvcml0eUxvd0JveCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9ybUlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eUxvdyk7XG4gICAgICAgICAgICAgICAgbW9kYWxGb3JtRmllbGRzZXQuYXBwZW5kQ2hpbGQobW9kYWxGb3JtSW5wdXRQcmlvcml0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWxGb3JtSW5wdXRUaXRsZSA9IGNyZWF0ZURpdihcIm1vZGFsRm9ybS1pbnB1dFwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib2JqZWN0VGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUaXRsZS5pbm5lckhUTUwgPSBcIlRpdHJlIGR1IHByb2pldCBvdSBkZSBsYSB0w6JjaGVcIjtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb3JtSW5wdXRUaXRsZS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VGl0bGUuaWQgPSBcIm9iamVjdFRpdGxlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwib2JqZWN0VGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb3JtSW5wdXRUaXRsZS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTsgICAgXG4gICAgICAgICAgICAgICAgbW9kYWxGb3JtRmllbGRzZXQuYXBwZW5kQ2hpbGQobW9kYWxGb3JtSW5wdXRUaXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWxGb3JtSW5wdXRSZXFEZXMgPSBjcmVhdGVEaXYoXCJtb2RhbEZvcm0taW5wdXRcIiwgXCJcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbFJlcURlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxSZXFEZXMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib2JqZWN0RGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUmVxRGVzLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb24gZHUgcHJvamV0IG91IGRlIGxhIHTDomNoZVwiO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbEZvcm1JbnB1dFJlcURlcy5hcHBlbmRDaGlsZChsYWJlbFJlcURlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlcURlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRSZXFEZXMuaWQgPSBcIm9iamVjdERlc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UmVxRGVzLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJvYmplY3REZXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRSZXFEZXMuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRSZXFEZXMuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjg1XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UmVxRGVzLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjIwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb3JtSW5wdXRSZXFEZXMuYXBwZW5kQ2hpbGQoaW5wdXRSZXFEZXMpOyAgICBcbiAgICAgICAgICAgICAgICBtb2RhbEZvcm1GaWVsZHNldC5hcHBlbmRDaGlsZChtb2RhbEZvcm1JbnB1dFJlcURlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWxGb3JtSW5wdXREdWVEYXRlID0gY3JlYXRlRGl2KFwibW9kYWxGb3JtLWlucHV0XCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbER1ZURhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwib2JqZWN0RHVlRGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbER1ZURhdGUuaW5uZXJIVE1MID0gXCJEYXRlIGxpbWl0ZSBjb21wbMOpdGVyIGxlIHByb2pldCBvdSBsYSB0w6JjaGVcIjtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxGb3JtSW5wdXREdWVEYXRlLmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RHVlRGF0ZS5pZCA9IFwib2JqZWN0RHVlRGF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm9iamVjdER1ZURhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsRm9ybUlucHV0RHVlRGF0ZS5hcHBlbmRDaGlsZChpbnB1dER1ZURhdGUpOyAgICBcbiAgICAgICAgICAgICAgICBtb2RhbEZvcm1GaWVsZHNldC5hcHBlbmRDaGlsZChtb2RhbEZvcm1JbnB1dER1ZURhdGUpO1xuICAgICAgICAgICAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKG1vZGFsRm9ybUZpZWxkc2V0KTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxGb3JtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGNyZWF0ZURpdihcIm1vZGFsQnV0dG9uc1wiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2F2ZUJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZURpdihcInNhdmVCdXR0b25Db250YWluZXJcIiwgXCJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnV0dG9uLmlkID0gXCJzYXZlQnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QgPSBcInNhdmVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdXR0b24uaW5uZXJIVE1MID0gXCJFbnJlZ2lzdHJlclwiO1xuICAgICAgICAgICAgICAgIHNhdmVCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgICAgICBtb2RhbEJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbkNvbnRhaW5lcik7ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbEJ1dHRvbnMpO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1vZGFsOyAgICBcbn07XG5cbmZ1bmN0aW9uIHJlc2V0TW9kYWwgKG9iamVjdE5hbWUsIHR5cGVPZk9iamVjdCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIikucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlTGF5b3V0XCIpLmFwcGVuZENoaWxkKGdlbmVyYXRlTW9kYWwoKSk7XG4gICAgaWYgKHR5cGVPZk9iamVjdCA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGdldFRvZG8ob2JqZWN0TmFtZSk7XG4gICAgICAgIGZpbGxNb2RhbCh0b2RvLCBcInRvZG9cIik7XG4gICAgICAgIGFjdGl2YXRlTW9kYWwob2JqZWN0TmFtZSwgdHlwZU9mT2JqZWN0LCB0b2RvLnByb2plY3QpO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mT2JqZWN0ID09PSBcInByb2plY3RcIikge1xuICAgICAgICBmaWxsTW9kYWwoZ2V0UHJvamVjdChvYmplY3ROYW1lKSwgXCJwcm9qZWN0XCIpO1xuICAgICAgICBhY3RpdmF0ZU1vZGFsKG9iamVjdE5hbWUsIHR5cGVPZk9iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZhdGVNb2RhbCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbE1vZGFsKG9iamVjdCwgdHlwZU9mT2JqZWN0KSB7XG4gICAgaWYgKHR5cGVPZk9iamVjdCA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBlUHJvamVjdFwiKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVRvZG9cIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVUb2RvUGFydE9mUHJvamVjdFwiKS5pbm5lckhUTUwgPSBvYmplY3QucHJvamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVUb2RvXCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBlUHJvamVjdFwiKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEZvcm1JbnB1dFRvZG9QYXJ0T2ZQcm9qZWN0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUhpZ2hcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlNZWRcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlMb3dcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIitvYmplY3QucHJpb3JpdHkpLmNoZWNrZWQgPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2JqZWN0VGl0bGVcIikudmFsdWUgPSBvYmplY3QubmFtZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdERlc1wiKS52YWx1ZSA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9iamVjdER1ZURhdGVcIikudmFsdWUgPSBvYmplY3QuZHVlRGF0ZTtcbn1cblxuZXhwb3J0IHtcbiAgICBnZW5lcmF0ZU1vZGFsLFxuICAgIHJlc2V0TW9kYWxcbn07XG5cbiIsImltcG9ydCBpY29uX2hhbWJ1cmdlciBmcm9tICcuL2ltYWdlcy9pY29uX2hhbWJ1cmdlci5wbmcnO1xuaW1wb3J0IGxvZ29fa2FucGx5X2xvbmcgZnJvbSAnLi9pbWFnZXMvbG9nby1rYW5wbHktbG9uZy5wbmcnO1xuaW1wb3J0IGljb25fbmV3IGZyb20gJy4vaW1hZ2VzL2ljb25fbmV3LnBuZyc7XG5pbXBvcnQgaWNvbl9pbmJveCBmcm9tICcuL2ltYWdlcy9pY29uX2luYm94LnBuZyc7XG5pbXBvcnQgaWNvbl9tYWlsIGZyb20gJy4vaW1hZ2VzL2ljb25fbWFpbC5wbmcnO1xuaW1wb3J0IGljb25fbWFpbF90b2RvIGZyb20gJy4vaW1hZ2VzL2ljb25fbWFpbC10b2RvLnBuZyc7XG5pbXBvcnQgaWNvbl9tYWlsX2NoZWNrIGZyb20gJy4vaW1hZ2VzL2ljb25fbWFpbC1jaGVjay5wbmcnO1xuaW1wb3J0IGljb25fcHJpb3JpdHkgZnJvbSAnLi9pbWFnZXMvaWNvbl9wcmlvcml0eS5wbmcnO1xuaW1wb3J0IGljb25fcHJpb3JpdHlfcmVkIGZyb20gJy4vaW1hZ2VzL2ljb25fcHJpb3JpdHktcmVkLnBuZyc7XG5pbXBvcnQgaWNvbl9wcmlvcml0eV95ZWxsb3cgZnJvbSAnLi9pbWFnZXMvaWNvbl9wcmlvcml0eS15ZWxsb3cucG5nJztcbmltcG9ydCBpY29uX3ByaW9yaXR5X29yYW5nZSBmcm9tICcuL2ltYWdlcy9pY29uX3ByaW9yaXR5LW9yYW5nZS5wbmcnO1xuaW1wb3J0IGljb25fcHJpb3JpdHlfZ3JlZW4gZnJvbSAnLi9pbWFnZXMvaWNvbl9wcmlvcml0eS1ncmVlbi5wbmcnO1xuaW1wb3J0IGljb25fY2FsZW5kYXIgZnJvbSAnLi9pbWFnZXMvaWNvbl9jYWxlbmRhci5wbmcnO1xuaW1wb3J0IGljb25fY2FsZW5kYXJfMSBmcm9tICcuL2ltYWdlcy9pY29uX2NhbGVuZGFyLTEucG5nJztcbmltcG9ydCBpY29uX2NhbGVuZGFyXzcgZnJvbSAnLi9pbWFnZXMvaWNvbl9jYWxlbmRhci03LnBuZyc7XG5pbXBvcnQgaWNvbl9jYWxlbmRhcl8zMCBmcm9tICcuL2ltYWdlcy9pY29uX2NhbGVuZGFyLTMwLnBuZyc7XG5pbXBvcnQgaWNvbl9wcm9qZWN0IGZyb20gJy4vaW1hZ2VzL2ljb25fcHJvamVjdC5wbmcnO1xuaW1wb3J0IGljb25fcHJvamVjdF9hcnJvdyBmcm9tICcuL2ltYWdlcy9pY29uX3Byb2plY3QtYXJyb3cucG5nJztcbmltcG9ydCBpY29uX2VkaXQgZnJvbSAnLi9pbWFnZXMvaWNvbl9lZGl0LnBuZyc7XG5pbXBvcnQge2NyZWF0ZUltZywgY3JlYXRlRGl2fSBmcm9tICcuL2RvbUdlbmVyYXRlSFRNTEVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0QWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgYWN0aXZhdGVTaWRlYmFyUHJvamVjdCB9IGZyb20gJy4vZG9tQWN0aXZhdGVTaWRlbWVudS5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1JY29uLCBpdGVtSWNvbkFsdCwgaXRlbUNsYXNzLCBpdGVtSWQsIGl0ZW1Db250ZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdCA9IGl0ZW1DbGFzcztcbiAgICBkaXYuaWQgPSBpdGVtSWQ7XG4gICAgaWYgKGl0ZW1Db250ZW50ID09IG51bGwpIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGl0ZW1Db250ZW50O1xuICAgIH1cbiAgICBkaXYucHJlcGVuZChjcmVhdGVJbWcoaXRlbUljb24sIGl0ZW1JY29uQWx0KSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvU2lkZWJhcihwcm9qZWN0KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyU3VibWVudVByb2plY3RcIikuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9wcm9qZWN0X2Fycm93LCBcImljb25Qcm9qZWN0QXJyb3dcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrcHJvamVjdCwgJzxkaXYgY2xhc3M9XCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0RXhwYW5kZWRcIj4nK3Byb2plY3QrJzwvZGl2PicpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJTdWJtZW51UHJvamVjdFNocmlua2VkXCIpLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJvamVjdF9hcnJvdywgXCJpY29uUHJvamVjdEFycm93XCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtUHJvamVjdFwiK3Byb2plY3QrXCJTaHJpbmtlZFwiKSk7XG4gICAgYWN0aXZhdGVTaWRlYmFyUHJvamVjdChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3RJblNpZGViYXIob2xkTmFtZSwgbmV3TmFtZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclN1Ym1lbnVJdGVtUHJvamVjdFwiK29sZE5hbWUpLmlkID0gXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrbmV3TmFtZTsgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJTdWJtZW51SXRlbVByb2plY3RcIituZXdOYW1lKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInNpZGViYXJTdWJtZW51SXRlbVByb2plY3RFeHBhbmRlZFwiPicrbmV3TmFtZSsnPC9kaXY+JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJTdWJtZW51SXRlbVByb2plY3RcIituZXdOYW1lKS5wcmVwZW5kKGNyZWF0ZUltZyhpY29uX3Byb2plY3RfYXJyb3csIFwiaWNvblByb2plY3RBcnJvd1wiKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrb2xkTmFtZStcIlNocmlua2VkXCIpLmlkID0gXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrbmV3TmFtZStcIlNocmlua2VkXCI7ICBcbiAgICBhY3RpdmF0ZVNpZGViYXJQcm9qZWN0KG5ld05hbWUpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUV4cGFuZGVkU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gY3JlYXRlRGl2KFwic2lkZWJhclwiLCBcImV4cGFuZGVkU2lkZWJhclwiLCBcIlwiKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhclRpdGxlID0gY3JlYXRlRGl2KFwic2lkZWJhclRpdGxlXCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgc2lkZWJhclRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhpY29uX2hhbWJ1cmdlciwgXCJpY29uSGFtYnVyZ2VyXCIsIFwiaWNvbkhhbWJ1cmdlclwiLCBcIm1lbnVCdXR0b25cIikpO1xuICAgICAgICAgICAgc2lkZWJhclRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhsb2dvX2thbnBseV9sb25nLCBcImxvZ29fa2FucGx5XCIpKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHNpZGViYXJOZXdCdXR0b24gPSBjcmVhdGVEaXYoXCJzaWRlYmFyTmV3QnV0dG9uXCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdCA9IFwibmV3QnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uLmlkID0gXCJuZXdCdXR0b25cIjtcbiAgICAgICAgICAgICAgICBuZXdCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKGljb25fbmV3LCBcImljb25OZXdcIikpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgKz0gXCI8c3Bhbj5Ob3V2ZWF1PC9zcGFuPlwiO1xuICAgICAgICAgICAgc2lkZWJhck5ld0J1dHRvbi5hcHBlbmQobmV3QnV0dG9uKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTmV3QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBzaWRlYmFyTWVudSA9IGNyZWF0ZURpdihcInNpZGViYXJNZW51XCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9pbmJveCwgXCJpY29uSW5ib3hcIiwgXCJzaWRlYmFySXRlbVwiLCBcInNpZGViYXJJdGVtSW5ib3hcIiwgXCJCb8OudGUgZGUgcsOpY2VwdGlvblwiKSk7XG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyU3VibWVudUluYm94ID0gY3JlYXRlRGl2KFwic2lkZWJhclN1Ym1lbnVcIiwgXCJzaWRlYmFyU3VibWVudUluYm94XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51SW5ib3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9tYWlsLCBcImljb25JbmJveEFsbFwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbUluYm94QWxsXCIsIFwiVG91c1wiKSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhclN1Ym1lbnVJbmJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpY29uX21haWxfdG9kbywgXCJpY29uSW5ib3hUb2RvXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtSW5ib3hUb2RvXCIsIFwiw4AgZmFpcmVcIikpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51SW5ib3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9tYWlsX2NoZWNrLCBcImljb25JbmJveERvbmVcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1JbmJveERvbmVcIiwgXCJUZXJtaW7DqVwiKSk7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChzaWRlYmFyU3VibWVudUluYm94KTtcblxuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9wcmlvcml0eSwgXCJpY29uUHJpb3JpdHlcIiwgXCJzaWRlYmFySXRlbVwiLCBcInNpZGViYXJJdGVtUHJpb3JpdHlcIiwgXCJQcmlvcml0w6lcIikpO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclN1Ym1lbnVQcmlvcml0eSA9IGNyZWF0ZURpdihcInNpZGViYXJTdWJtZW51XCIsIFwic2lkZWJhclN1Ym1lbnVQcmlvcml0eVwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudVByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJpb3JpdHlfcmVkLCBcImljb25Qcmlvcml0eVJlZFwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbVByaW9yaXR5SGlnaFwiLCBcIsOJbGV2w6llXCIpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudVByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJpb3JpdHlfb3JhbmdlLCBcImljb25Qcmlvcml0eU9yYW5nZVwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbVByaW9yaXR5TWVkXCIsIFwiTW95ZW5uZVwiKSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhclN1Ym1lbnVQcmlvcml0eS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpY29uX3ByaW9yaXR5X3llbGxvdywgXCJpY29uUHJpb3JpdHlZZWxsb3dcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1Qcmlvcml0eUxvd1wiLCBcIkJhc3NlXCIpKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmFwcGVuZENoaWxkKHNpZGViYXJTdWJtZW51UHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpY29uX2NhbGVuZGFyLCBcImljb25DYWxlbmRhclwiLCBcInNpZGViYXJJdGVtXCIsIFwic2lkZWJhckl0ZW1DYWxlbmRhclwiLCBcIkNhbGVuZHJpZXJcIikpO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclN1Ym1lbnVDYWxlbmRhciA9IGNyZWF0ZURpdihcInNpZGViYXJTdWJtZW51XCIsIFwic2lkZWJhclN1Ym1lbnVDYWxlbmRhclwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudUNhbGVuZGFyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fY2FsZW5kYXJfMSwgXCJpY29uQ2FsZW5kYXIxXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtQ2FsZW5kYXIxXCIsIFwiQXVqb3VyZCdodWlcIikpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51Q2FsZW5kYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9jYWxlbmRhcl83LCBcImljb25DYWxlbmRhcjdcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1DYWxlbmRhcjdcIiwgXCJQcm9jaGFpbnMgNyBqb3Vyc1wiKSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhclN1Ym1lbnVDYWxlbmRhci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpY29uX2NhbGVuZGFyXzMwLCBcImljb25DYWxlbmRhcjMwXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtQ2FsZW5kYXIzMFwiLCBcIlByb2NoYWlucyAzMCBqb3Vyc1wiKSk7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChzaWRlYmFyU3VibWVudUNhbGVuZGFyKTtcblxuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9wcm9qZWN0LCBcImljb25Qcm9qZWN0XCIsIFwic2lkZWJhckl0ZW1cIiwgXCJzaWRlYmFySXRlbVByb2plY3RcIiwgXCJQcm9qZXRzXCIpKTsgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclN1Ym1lbnVQcm9qZWN0ID0gY3JlYXRlRGl2KFwic2lkZWJhclN1Ym1lbnVcIiwgXCJzaWRlYmFyU3VibWVudVByb2plY3RcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgc2lkZWJhclN1Ym1lbnVQcm9qZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fZWRpdCwgXCJpY29uRWRpdFwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbUVkaXRQcm9qZWN0c1wiLCBcIsOJZGl0ZXIgbGVzIHByb2pldHNcIikpO1xuICAgICAgICAgICAgICAgIGdldEFsbFByb2plY3RzKCkuZm9yRWFjaChlID0+IHtzaWRlYmFyU3VibWVudVByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9wcm9qZWN0X2Fycm93LCBcImljb25Qcm9qZWN0QXJyb3dcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrZS5uYW1lLCAnPGRpdiBjbGFzcz1cInNpZGViYXJTdWJtZW51SXRlbVByb2plY3RFeHBhbmRlZFwiPicrZS5uYW1lKyc8L2Rpdj4nKSk7fSk7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChzaWRlYmFyU3VibWVudVByb2plY3QpO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTaHJpbmtlZFNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGNyZWF0ZURpdihcInNpZGViYXJcIiwgXCJzaHJpbmtlZFNpZGViYXJcIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IHNpZGViYXJUaXRsZSA9IGNyZWF0ZURpdihcInNpZGViYXJUaXRsZVwiLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgICAgIHNpZGViYXJUaXRsZS5hcHBlbmRDaGlsZChjcmVhdGVJbWcoaWNvbl9oYW1idXJnZXIsIFwiaWNvbkhhbWJ1cmdlclwiLCBcImljb25IYW1idXJnZXJcIiwgXCJtZW51QnV0dG9uXCIpKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHNpZGViYXJOZXdCdXR0b24gPSBjcmVhdGVEaXYoXCJzaWRlYmFyTmV3QnV0dG9uXCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uLmNsYXNzTGlzdCA9IFwibmV3QnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uLmlkID0gXCJuZXdCdXR0b25TaHJpbmtlZFwiO1xuICAgICAgICAgICAgICAgIG5ld0J1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWcoaWNvbl9uZXcsIFwiaWNvbk5ld1wiKSk7IFxuICAgICAgICAgICAgc2lkZWJhck5ld0J1dHRvbi5hcHBlbmQobmV3QnV0dG9uKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTmV3QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBzaWRlYmFyTWVudSA9IGNyZWF0ZURpdihcInNpZGViYXJNZW51XCIsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9pbmJveCwgXCJpY29uSW5ib3hcIiwgXCJzaWRlYmFySXRlbVwiLCBcInNpZGViYXJJdGVtSW5ib3hcIikpO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclN1Ym1lbnVJbmJveCA9IGNyZWF0ZURpdihcInNpZGViYXJTdWJtZW51XCIsIFwic2lkZWJhclN1Ym1lbnVJbmJveFNocmlua2VkXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51SW5ib3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9tYWlsLCBcImljb25JbmJveEFsbFwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbUluYm94QWxsU2hyaW5rZWRcIikpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51SW5ib3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9tYWlsX3RvZG8sIFwiaWNvbkluYm94VG9kb1wiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbUluYm94VG9kb1Nocmlua2VkXCIpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudUluYm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fbWFpbF9jaGVjaywgXCJpY29uSW5ib3hEb25lXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtSW5ib3hEb25lU2hyaW5rZWRcIikpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoc2lkZWJhclN1Ym1lbnVJbmJveCk7XG5cbiAgICAgICAgICAgIHNpZGViYXJNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJpb3JpdHksIFwiaWNvblByaW9yaXR5XCIsIFwic2lkZWJhckl0ZW1cIiwgXCJzaWRlYmFySXRlbVByaW9yaXR5XCIpKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJTdWJtZW51UHJpb3JpdHkgPSBjcmVhdGVEaXYoXCJzaWRlYmFyU3VibWVudVwiLCBcInNpZGViYXJTdWJtZW51UHJpb3JpdHlTaHJpbmtlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudVByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJpb3JpdHlfcmVkLCBcImljb25Qcmlvcml0eVJlZFwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbVByaW9yaXR5SGlnaFNocmlua2VkXCIpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudVByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJpb3JpdHlfb3JhbmdlLCBcImljb25Qcmlvcml0eU9yYW5nZVwiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbVByaW9yaXR5TWVkU2hyaW5rZWRcIikpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51UHJpb3JpdHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9wcmlvcml0eV95ZWxsb3csIFwiaWNvblByaW9yaXR5WWVsbG93XCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtUHJpb3JpdHlMb3dTaHJpbmtlZFwiKSk7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChzaWRlYmFyU3VibWVudVByaW9yaXR5KTtcblxuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9jYWxlbmRhciwgXCJpY29uQ2FsZW5kYXJcIiwgXCJzaWRlYmFySXRlbVwiLCBcInNpZGViYXJJdGVtQ2FsZW5kYXJcIikpO1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclN1Ym1lbnVDYWxlbmRhciA9IGNyZWF0ZURpdihcInNpZGViYXJTdWJtZW51XCIsIFwic2lkZWJhclN1Ym1lbnVDYWxlbmRhclNocmlua2VkXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHNpZGViYXJTdWJtZW51Q2FsZW5kYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9jYWxlbmRhcl8xLCBcImljb25DYWxlbmRhcjFcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1DYWxlbmRhcjFTaHJpbmtlZFwiKSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhclN1Ym1lbnVDYWxlbmRhci5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpY29uX2NhbGVuZGFyXzcsIFwiaWNvbkNhbGVuZGFyN1wiLCBcInNpZGViYXJTdWJtZW51SXRlbVwiLCBcInNpZGViYXJTdWJtZW51SXRlbUNhbGVuZGFyN1Nocmlua2VkXCIpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudUNhbGVuZGFyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fY2FsZW5kYXJfMzAsIFwiaWNvbkNhbGVuZGFyMzBcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1DYWxlbmRhcjMwU2hyaW5rZWRcIikpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoc2lkZWJhclN1Ym1lbnVDYWxlbmRhcik7XG5cbiAgICAgICAgICAgIHNpZGViYXJNZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGljb25fcHJvamVjdCwgXCJpY29uUHJvamVjdFwiLCBcInNpZGViYXJJdGVtXCIsIFwic2lkZWJhckl0ZW1Qcm9qZWN0XCIpKTsgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhclN1Ym1lbnVQcm9qZWN0ID0gY3JlYXRlRGl2KFwic2lkZWJhclN1Ym1lbnVcIiwgXCJzaWRlYmFyU3VibWVudVByb2plY3RTaHJpbmtlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU3VibWVudVByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9lZGl0LCBcImljb25FZGl0XCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtXCIsIFwic2lkZWJhclN1Ym1lbnVJdGVtRWRpdFByb2plY3RzU2hyaW5rZWRcIikpO1xuICAgICAgICAgICAgICAgIGdldEFsbFByb2plY3RzKCkuZm9yRWFjaChlID0+IHtzaWRlYmFyU3VibWVudVByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaWNvbl9wcm9qZWN0X2Fycm93LCBcImljb25Qcm9qZWN0QXJyb3dcIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1cIiwgXCJzaWRlYmFyU3VibWVudUl0ZW1Qcm9qZWN0XCIrZS5uYW1lK1wiU2hyaW5rZWRcIikpO30pO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYXBwZW5kQ2hpbGQoc2lkZWJhclN1Ym1lbnVQcm9qZWN0KTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2VuZXJhdGVFeHBhbmRlZFNpZGViYXIsXG4gICAgZ2VuZXJhdGVTaHJpbmtlZFNpZGViYXIsXG4gICAgYWRkUHJvamVjdFRvU2lkZWJhcixcbiAgICBlZGl0UHJvamVjdEluU2lkZWJhclxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdlbmVyYXRlSGVhZGVyIH0gZnJvbSAnLi9kb21HZW5lcmF0ZUhlYWRlci5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUV4cGFuZGVkU2lkZWJhciwgZ2VuZXJhdGVTaHJpbmtlZFNpZGViYXIgfSBmcm9tICcuL2RvbUdlbmVyYXRlU2lkZW1lbnUuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250ZW50IH0gZnJvbSAnLi9kb21HZW5lcmF0ZUNvbnRlbnQuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVNb2RhbCB9IGZyb20gJy4vZG9tR2VuZXJhdGVNb2RhbC5qcyc7XG5pbXBvcnQgeyBhY3RpdmF0ZUhlYWRlciB9IGZyb20gJy4vZG9tQWN0aXZhdGVIZWFkZXIuanMnO1xuaW1wb3J0IHsgYWN0aXZhdGVTaWRlYmFyLCBpbml0aWFsU2lkZWJhclNlbGVjdGlvbiwgc2hyaW5rU2lkZW1lbnUgfSBmcm9tICcuL2RvbUFjdGl2YXRlU2lkZW1lbnUuanMnO1xuaW1wb3J0IHsgYWN0aXZhdGVDb250ZW50IH0gZnJvbSAnLi9kb21BY3RpdmF0ZUNvbnRlbnQnO1xuaW1wb3J0IHsgYWN0aXZhdGVNb2RhbCB9IGZyb20gJy4vZG9tQWN0aXZhdGVNb2RhbC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVEaXYgfSBmcm9tICcuL2RvbUdlbmVyYXRlSFRNTEVsZW1lbnQuanMnO1xuaW1wb3J0IHsgbG9hZEFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGxvYWRBbGxUb2RvcyB9IGZyb20gJy4vdG9kby5qcyc7XG5cbi8vIGxvYWQgbG9jYWwgc3RvcmFnZSBjb250ZW50IGluIHNlc3Npb25cbmxvYWRBbGxQcm9qZWN0cygpO1xubG9hZEFsbFRvZG9zKCk7XG5cbi8vIGJ1aWxkIHBhZ2UgbGF5b3V0XG5jb25zdCBwYWdlTGF5b3V0ID0gY3JlYXRlRGl2KFwiZXhwYW5kZWRQYWdlTGF5b3V0XCIsIFwicGFnZUxheW91dFwiLCBcIlwiKTtcbiAgICBwYWdlTGF5b3V0LmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKCkpO1xuICAgIHBhZ2VMYXlvdXQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVFeHBhbmRlZFNpZGViYXIoKSk7XG4gICAgcGFnZUxheW91dC5hcHBlbmRDaGlsZChnZW5lcmF0ZVNocmlua2VkU2lkZWJhcigpKTtcbiAgICBwYWdlTGF5b3V0LmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGVudCgpKTtcbiAgICBwYWdlTGF5b3V0LmFwcGVuZENoaWxkKGdlbmVyYXRlTW9kYWwoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VMYXlvdXQpO1xuXG4vLyBhY3RpdmF0ZSBidXR0b25zXG5hY3RpdmF0ZUhlYWRlcigpO1xuYWN0aXZhdGVTaWRlYmFyKCk7XG5hY3RpdmF0ZUNvbnRlbnQoKTtcbmFjdGl2YXRlTW9kYWwoKTtcblxuLy8gaW5pdGlhbCBkaXNwbGF5IHNlbGVjdGlvblxuaW5pdGlhbFNpZGViYXJTZWxlY3Rpb24oKTtcblxuLy8gc2hyaW5rIHdoZW4gd2luZG93cyB3aWR0aCA8IDY0MHB4IFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2NDBweClcIikubWF0Y2hlcykgeyBzaHJpbmtTaWRlbWVudSgpOyB9XG59KTtcbiIsImltcG9ydCB7IHN0b3JlUHJvamVjdCwgZWRpdFByb2plY3RJblN0b3JhZ2UsIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZSwgcmV0cmlldmVBbGxQcm9qZWN0c0Zyb21TdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0U3RvcmFnZS5qcyc7XG5cbnZhciBwcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cyB9O1xuICAgIH07ICAgIFxuXG4gICAgdmFyIF9wcm9qZWN0TGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gX2FkZFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIFwidW5jb21wbGV0ZWRcIik7XG4gICAgICAgIHN0b3JlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgX3Byb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgX2FkZFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmV0cmlldmVQcm9qZWN0SWQobmFtZSkge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RMaXN0Lm1hcChlID0+IGUubmFtZSkuaW5kZXhPZihuYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UHJvamVjdChuYW1lKSB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdExpc3RbX3JldHJpZXZlUHJvamVjdElkKG5hbWUpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRQcm9qZWN0KG5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBfZ2V0UHJvamVjdFN0YXR1cyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdExpc3RbX3JldHJpZXZlUHJvamVjdElkKG5hbWUpXS5zdGF0dXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdFN0YXR1cyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBfZ2V0UHJvamVjdFN0YXR1cyhuYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZWRpdFByb2plY3QobmFtZSwgbmV3U3RhdHVzLCBuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBfcmV0cmlldmVQcm9qZWN0SWQobmFtZSk7XG4gICAgICAgIGlmIChfcHJvamVjdExpc3RbaW5kZXhdLnN0YXR1cyAhPSBuZXdTdGF0dXMpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0TGlzdFtpbmRleF0uc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBfcHJvamVjdExpc3RbaW5kZXhdID0gcHJvamVjdEZhY3RvcnkobmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdTdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRQcm9qZWN0SW5TdG9yYWdlIChuYW1lLCBfcHJvamVjdExpc3RbaW5kZXhdKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZWRpdFByb2plY3QobmFtZSwgbmV3U3RhdHVzLCBuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICAgICAgX2VkaXRQcm9qZWN0KG5hbWUsIG5ld1N0YXR1cywgbmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVtb3ZlUHJvamVjdChuYW1lKSB7XG4gICAgICAgIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZShuYW1lKTtcbiAgICAgICAgX3Byb2plY3RMaXN0LnNwbGljZShfcmV0cmlldmVQcm9qZWN0SWQobmFtZSksIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QobmFtZSkge1xuICAgICAgICBfcmVtb3ZlUHJvamVjdChuYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIF9wcm9qZWN0TGlzdC5wdXNoKC4uLnJldHJpZXZlQWxsUHJvamVjdHNGcm9tU3RvcmFnZSgpKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3Q6IGFkZFByb2plY3QsXG4gICAgICAgIGdldFByb2plY3Q6IGdldFByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RTdGF0dXM6IGdldFByb2plY3RTdGF0dXMsXG4gICAgICAgIGVkaXRQcm9qZWN0OiBlZGl0UHJvamVjdCxcbiAgICAgICAgcmVtb3ZlUHJvamVjdDogcmVtb3ZlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdExpc3Q6IGdldFByb2plY3RMaXN0LFxuICAgICAgICBsb2FkUHJvamVjdHM6IGxvYWRQcm9qZWN0c1xuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KG5hbWUsIG5ld1N0YXR1cywgbmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgcHJvamVjdHMuZWRpdFByb2plY3QobmFtZSwgbmV3U3RhdHVzLCBuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZ2V0UHJvamVjdChuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdFN0YXR1cyhuYW1lKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmdldFByb2plY3RTdGF0dXMobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSkge1xuICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cy5nZXRQcm9qZWN0TGlzdCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWxsUHJvamVjdHMoKSB7ICAgXG4gICAgcHJvamVjdHMubG9hZFByb2plY3RzKCk7XG5cbiAgICAvL2NyZWF0ZSBkZWZhdWx0IHByb2plY3QgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0c1xuICAgIGlmIChnZXRBbGxQcm9qZWN0cygpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG5ld1Byb2plY3QoXCJEw6lmYXV0XCIsIFwiUHJvamV0IHBhciBkw6lmYXV0IChuZSBwZXV0IHBhcyDDqnRyZSBtb2RpZmnDqSkuXCIsIFwiXCIsIFwiTG93XCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBuZXdQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0LFxuICAgIGdldFByb2plY3QsXG4gICAgZ2V0UHJvamVjdFN0YXR1cyxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGdldEFsbFByb2plY3RzLFxuICAgIGxvYWRBbGxQcm9qZWN0cyxcbn0iLCJmdW5jdGlvbiBzdG9yZVByb2plY3QgKHByb2plY3QpIHsgICBcbiAgICB2YXIgbmV3UHJvamVjdEluZGV4ID0gcmV0cmlldmVOZXh0UHJvamVjdEluZGV4RnJvbVN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKG5ld1Byb2plY3RJbmRleCkge1xuICAgICAgICAgICAgc3RvcmVOZXh0UHJvamVjdEluZGV4KG5ld1Byb2plY3RJbmRleCsxKTsgICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9yZU5leHRQcm9qZWN0SW5kZXgoMSk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RfJytuZXdQcm9qZWN0SW5kZXgsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gc3RvcmVOZXh0UHJvamVjdEluZGV4IChpbmRleCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOZXh0X1Byb2plY3RfSW5kZXgnLCBKU09OLnN0cmluZ2lmeShpbmRleCkpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3RGcm9tU3RvcmFnZSAocHJvamVjdElkKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RfJytwcm9qZWN0SWQpKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVOZXh0UHJvamVjdEluZGV4RnJvbVN0b3JhZ2UgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOZXh0X1Byb2plY3RfSW5kZXgnKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SW5TdG9yYWdlIChuYW1lKSB7XG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IHJldHJpZXZlTmV4dFByb2plY3RJbmRleEZyb21TdG9yYWdlKCk7XG4gICAgdmFyIHByb2plY3RUb0ZpbmQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0UHJvamVjdEluZGV4OyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHJldHJpZXZlUHJvamVjdEZyb21TdG9yYWdlKGkpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRvRmluZCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBwcm9qZWN0VG9GaW5kO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdEluU3RvcmFnZSAobmFtZSwgcHJvamVjdFRvRWRpdCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0XycrZmluZFByb2plY3RJblN0b3JhZ2UobmFtZSksIEpTT04uc3RyaW5naWZ5KHByb2plY3RUb0VkaXQpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlIChuYW1lKSB7XG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IHJldHJpZXZlTmV4dFByb2plY3RJbmRleEZyb21TdG9yYWdlKCk7XG4gICAgdmFyIHByb2plY3RUb1JlbW92ZUZyb21TdG9yYWdlID0gMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxhc3RQcm9qZWN0SW5kZXg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcmV0cmlldmVQcm9qZWN0RnJvbVN0b3JhZ2UoaSk7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VG9SZW1vdmVGcm9tU3RvcmFnZSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwcm9qZWN0VG9SZW1vdmVGcm9tU3RvcmFnZSAhPSAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdQcm9qZWN0XycrcHJvamVjdFRvUmVtb3ZlRnJvbVN0b3JhZ2UpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQWxsUHJvamVjdHNGcm9tU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBjb25zdCBsYXN0UHJvamVjdEluZGV4ID0gcmV0cmlldmVOZXh0UHJvamVjdEluZGV4RnJvbVN0b3JhZ2UoKTtcbiAgICB2YXIgcHJvamVjdHNJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0UHJvamVjdEluZGV4OyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHJldHJpZXZlUHJvamVjdEZyb21TdG9yYWdlKGkpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcHJvamVjdHNbcHJvamVjdHNJbmRleCsrXSA9IHByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuZXhwb3J0IHtcbiAgICBzdG9yZVByb2plY3QsXG4gICAgZWRpdFByb2plY3RJblN0b3JhZ2UsXG4gICAgcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlLFxuICAgIHJldHJpZXZlQWxsUHJvamVjdHNGcm9tU3RvcmFnZVxufSIsImltcG9ydCB7IHN0b3JlVG9kbywgZWRpdFRvZG9JblN0b3JhZ2UsIHJlbW92ZVRvZG9Gcm9tU3RvcmFnZSwgcmV0cmlldmVBbGxUb2Rvc0Zyb21TdG9yYWdlIH0gZnJvbSAnLi90b2RvU3RvcmFnZS5qcyc7XG5cbnZhciB0b2RvcyA9IChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBjb25zdCB0b2RvRmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cyB9O1xuICAgIH07ICAgIFxuXG4gICAgdmFyIF90b2RvTGlzdCA9IFtdO1xuXG4gICAgZnVuY3Rpb24gX2FkZFRvZG8obmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIFwidW5jb21wbGV0ZWRcIik7XG4gICAgICAgIHN0b3JlVG9kbyhuZXdUb2RvKTtcbiAgICAgICAgX3RvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgX2FkZFRvZG8obmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmV0cmlldmVUb2RvSWQobmFtZSkge1xuICAgICAgICByZXR1cm4gX3RvZG9MaXN0Lm1hcChlID0+IGUubmFtZSkuaW5kZXhPZihuYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0VG9kbyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBfdG9kb0xpc3RbX3JldHJpZXZlVG9kb0lkKG5hbWUpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2RvKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRUb2RvKG5hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9lZGl0VG9kbyhuYW1lLCBuZXdTdGF0dXMsIG5ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdQcm9qZWN0LCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IF9yZXRyaWV2ZVRvZG9JZChuYW1lKTtcbiAgICAgICAgaWYgKF90b2RvTGlzdFtpbmRleF0uc3RhdHVzICE9IG5ld1N0YXR1cykgeyBcbiAgICAgICAgICAgIF90b2RvTGlzdFtpbmRleF0uc3RhdHVzID0gbmV3U3RhdHVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RvZG9MaXN0W2luZGV4XSA9IHRvZG9GYWN0b3J5KG5ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdQcm9qZWN0LCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3U3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgICBlZGl0VG9kb0luU3RvcmFnZShuYW1lLCBfdG9kb0xpc3RbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0VG9kbyhuYW1lLCBuZXdTdGF0dXMsIG5ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdQcm9qZWN0LCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICBfZWRpdFRvZG8obmFtZSwgbmV3U3RhdHVzLCBuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3UHJvamVjdCwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW1vdmVUb2RvKG5hbWUpIHtcbiAgICAgICAgcmVtb3ZlVG9kb0Zyb21TdG9yYWdlKG5hbWUpO1xuICAgICAgICBfdG9kb0xpc3Quc3BsaWNlKF9yZXRyaWV2ZVRvZG9JZChuYW1lKSwgMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9kbyhuYW1lKSB7XG4gICAgICAgIF9yZW1vdmVUb2RvKG5hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9nZXRUb2Rvc1Byb2plY3QodG9kb05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFRvZG8odG9kb05hbWUpLnByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9kb3NQcm9qZWN0KHRvZG9OYW1lKSB7XG4gICAgICAgIHJldHVybiBfZ2V0VG9kb3NQcm9qZWN0KHRvZG9OYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0VG9kb3NPZkFQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBfdG9kb0xpc3QuZmlsdGVyKChlKSA9PiBlLnByb2plY3QgPT0gcHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRvZG9zT2ZBUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gX2dldFRvZG9zT2ZBUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2VkaXRUb2Rvc09mQVByb2plY3Qob2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgIF90b2RvTGlzdC5maWx0ZXIoKGUpID0+IGUucHJvamVjdCA9PSBvbGRQcm9qZWN0TmFtZSkuZm9yRWFjaCgodG9kbykgPT4ge3RvZG8ucHJvamVjdCA9IG5ld1Byb2plY3ROYW1lOyBlZGl0VG9kb0luU3RvcmFnZShvbGRQcm9qZWN0TmFtZSwgdG9kbyk7fSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdFRvZG9zT2ZBUHJvamVjdChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpIHtcbiAgICAgICAgX2VkaXRUb2Rvc09mQVByb2plY3Qob2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2RvTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF90b2RvTGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVG9kb3MoKSB7XG4gICAgICAgIF90b2RvTGlzdC5wdXNoKC4uLnJldHJpZXZlQWxsVG9kb3NGcm9tU3RvcmFnZSgpKTtcbiAgICB9XG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb2RvOiBhZGRUb2RvLFxuICAgICAgICBnZXRUb2RvOiBnZXRUb2RvLFxuICAgICAgICBlZGl0VG9kbzogZWRpdFRvZG8sXG4gICAgICAgIHJlbW92ZVRvZG86IHJlbW92ZVRvZG8sXG4gICAgICAgIGdldFRvZG9zUHJvamVjdDogZ2V0VG9kb3NQcm9qZWN0LFxuICAgICAgICBnZXRUb2Rvc09mQVByb2plY3Q6IGdldFRvZG9zT2ZBUHJvamVjdCxcbiAgICAgICAgZWRpdFRvZG9zT2ZBUHJvamVjdDogZWRpdFRvZG9zT2ZBUHJvamVjdCxcbiAgICAgICAgZ2V0VG9kb0xpc3Q6IGdldFRvZG9MaXN0LFxuICAgICAgICBsb2FkVG9kb3M6IGxvYWRUb2Rvc1xuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiBuZXdUb2RvIChuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0b2Rvcy5hZGRUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKG5hbWUsIG5ld1N0YXR1cywgbmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld1Byb2plY3QsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgdG9kb3MuZWRpdFRvZG8obmFtZSwgbmV3U3RhdHVzLCBuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3UHJvamVjdCwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RvKG5hbWUpIHtcbiAgICByZXR1cm4gdG9kb3MuZ2V0VG9kbyhuYW1lKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhuYW1lKSB7XG4gICAgdG9kb3MucmVtb3ZlVG9kbyhuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb3NQcm9qZWN0KHRvZG9OYW1lKSB7XG4gICAgcmV0dXJuIHRvZG9zLmdldFRvZG9zUHJvamVjdCh0b2RvTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldFRvZG9zT2ZBUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0b2Rvcy5nZXRUb2Rvc09mQVByb2plY3QocHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kb3NPZkFQcm9qZWN0KG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIHRvZG9zLmVkaXRUb2Rvc09mQVByb2plY3Qob2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsVG9kb3MoKSB7XG4gICAgcmV0dXJuIHRvZG9zLmdldFRvZG9MaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGxUb2RvcygpIHsgICBcbiAgICB0b2Rvcy5sb2FkVG9kb3MoKTtcbn1cblxuZXhwb3J0IHtcbiAgICBuZXdUb2RvLFxuICAgIGVkaXRUb2RvLFxuICAgIGdldFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICBnZXRUb2Rvc1Byb2plY3QsXG4gICAgZ2V0VG9kb3NPZkFQcm9qZWN0LFxuICAgIGVkaXRUb2Rvc09mQVByb2plY3QsXG4gICAgZ2V0QWxsVG9kb3MsXG4gICAgbG9hZEFsbFRvZG9zXG59IiwiZnVuY3Rpb24gc3RvcmVUb2RvICh0b2RvKSB7ICAgXG4gICAgdmFyIG5ld1RvZG9JbmRleCA9IHJldHJpZXZlTmV4dFRvZG9JbmRleEZyb21TdG9yYWdlKCk7XG4gICAgICAgIGlmIChuZXdUb2RvSW5kZXgpIHtcbiAgICAgICAgICAgIHN0b3JlTmV4dFRvZG9JbmRleChuZXdUb2RvSW5kZXgrMSk7ICAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVOZXh0VG9kb0luZGV4KDEpO1xuICAgICAgICAgICAgbmV3VG9kb0luZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2RvXycrbmV3VG9kb0luZGV4LCBKU09OLnN0cmluZ2lmeSh0b2RvKSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JlTmV4dFRvZG9JbmRleCAoaW5kZXgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTmV4dF9Ub2RvX0luZGV4JywgSlNPTi5zdHJpbmdpZnkoaW5kZXgpKTtcbn1cblxuZnVuY3Rpb24gZmluZFRvZG9JblN0b3JhZ2UgKG5hbWUpIHtcbiAgICBjb25zdCBsYXN0VG9kb0luZGV4ID0gcmV0cmlldmVOZXh0VG9kb0luZGV4RnJvbVN0b3JhZ2UoKTtcbiAgICB2YXIgdG9kb1RvRmluZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RUb2RvSW5kZXg7IGkrKykge1xuICAgICAgICBjb25zdCB0b2RvID0gcmV0cmlldmVUb2RvRnJvbVN0b3JhZ2UoaSk7XG4gICAgICAgIGlmICh0b2RvKSB7XG4gICAgICAgICAgICBpZiAodG9kby5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0b2RvVG9GaW5kID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRvZG9Ub0ZpbmQ7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvSW5TdG9yYWdlIChuYW1lLCB0b2RvVG9FZGl0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvZG9fJytmaW5kVG9kb0luU3RvcmFnZShuYW1lKSwgSlNPTi5zdHJpbmdpZnkodG9kb1RvRWRpdCkpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVRvZG9Gcm9tU3RvcmFnZSAodG9kb0lkKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvZG9fJyt0b2RvSWQpKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVOZXh0VG9kb0luZGV4RnJvbVN0b3JhZ2UgKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdOZXh0X1RvZG9fSW5kZXgnKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG9Gcm9tU3RvcmFnZSAobmFtZSkge1xuICAgIGNvbnN0IHRvZG9Ub1JlbW92ZUZyb21TdG9yYWdlID0gZmluZFRvZG9JblN0b3JhZ2UobmFtZSk7ICAgIFxuICAgIGlmICh0b2RvVG9SZW1vdmVGcm9tU3RvcmFnZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVG9kb18nK3RvZG9Ub1JlbW92ZUZyb21TdG9yYWdlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQWxsVG9kb3NGcm9tU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdG9kb3MgPSBbXTtcbiAgICBjb25zdCBsYXN0VG9kb0luZGV4ID0gcmV0cmlldmVOZXh0VG9kb0luZGV4RnJvbVN0b3JhZ2UoKTtcbiAgICB2YXIgdG9kb3NJbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0VG9kb0luZGV4OyBpKyspIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IHJldHJpZXZlVG9kb0Zyb21TdG9yYWdlKGkpO1xuICAgICAgICBpZiAodG9kbykge1xuICAgICAgICAgICAgdG9kb3NbdG9kb3NJbmRleCsrXSA9IHRvZG87XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0b2Rvcztcbn1cblxuZXhwb3J0IHtcbiAgICBzdG9yZVRvZG8sXG4gICAgZWRpdFRvZG9JblN0b3JhZ2UsXG4gICAgcmVtb3ZlVG9kb0Zyb21TdG9yYWdlLFxuICAgIHJldHJpZXZlQWxsVG9kb3NGcm9tU3RvcmFnZVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==