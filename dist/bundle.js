/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst image = document.querySelector('.image')\nimage.addEventListener('click', (e)=>{\n    let cordX = e.offsetX;\n    let cordY = e.offsetY;\n    createCircle(cordX,cordY)\n    \n    console.log(cordX,cordY)\n})\n\n\n\n\nfunction createCircle(x,y) {\n    let removeCircle = document.querySelectorAll('.circle')\n    removeCircle.forEach(item=>{\n        item.remove()\n    })\n\n    let removeList = document.querySelectorAll('.list')\n    removeList.forEach(item=>{\n        item.remove()\n    })\n\n    const circle = document.createElement('div')\n    circle.classList = 'circle'\n    const image = document.querySelector('.containerImg')\n    let newX=x-25\n    let newY=y-25\n    circle.style.top = newY+'px'\n    circle.style.left = newX+'px'\n    image.appendChild(circle)\n\n    createSelect(x,y)\n    \n    \n    const option = document.querySelector('.list')\n    option.addEventListener('click', ()=>{\n    option.remove()\n    circle.classList.remove('circle');\n    circle.classList.add('circleVer');\n\n    })\n\n}\n\nfunction createSelect(x,y) {\n    const list = document.createElement('ul')\n    list.classList = 'list'\n\n    const listOption1 = document.createElement('li')\n    listOption1.classList = 'list__option'\n    listOption1.textContent = 'option one'\n    list.appendChild(listOption1)\n\n    const listOption2 = document.createElement('li')\n    listOption2.classList = 'list__option'\n    listOption2.textContent = 'option two'\n    list.appendChild(listOption2)\n\n    const listOption3 = document.createElement('li')\n    listOption3.classList = 'list__option'\n    listOption3.textContent = 'option two'\n    list.appendChild(listOption3)\n\n    const image = document.querySelector('.containerImg')\n    list.style.top = y+'px'\n    list.style.left = x+'px'\n    image.appendChild(list)\n}\n\n//# sourceURL=webpack://Project-Where-s-Waldo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;