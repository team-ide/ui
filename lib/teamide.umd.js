(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["teamide"] = factory();
	else
		root["teamide"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0339":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tm-frame,.tm-frame-footer,.tm-frame-header,.tm-frame-main{flex:1}.tm-frame-footer.tm-horizontal,.tm-frame-header.tm-horizontal,.tm-frame-part.tm-horizontal,.tm-frame.tm-horizontal{display:flex;flex-direction:row;flex-basis:auto}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1a8e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tm-disabled{cursor:no-drop;pointer-events:none;opacity:.65;filter:alpha(opacity = 65)}.tm-flex-right{flex:0 0 auto;margin-left:auto;text-align:right}.tm-pointer{cursor:pointer}.tm-move{cursor:move}.tm-relative{position:relative}.font-transparent,.tm-transparent{color:transparent!important}.overflow-hidden{overflow:hidden!important}.overflow-auto{overflow:auto!important}.display-none{display:none!important}.display-block{display:block!important}.display-inline-block{display:inline-block!important}.display-table{display:table!important}.display-table-cell{display:table-cell!important}.display-table-row{display:table-row!important}.float-none{float:none!important}.float-left{float:left!important}.float-right{float:right!important}.clear-none{clear:none!important}.clear-both{clear:both!important}.clear-left{clear:left!important}.clear-right{clear:right!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-justify{text-align:justify!important}.text-pre{white-space:pre!important}.text-pre-line{white-space:pre-line!important}.text-pre-wrap{white-space:pre-wrap!important}.text-nowrap{white-space:nowrap!important}.text-normal{white-space:normal!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-break-word{word-wrap:break-word!important}.text-overline{text-decoration:overline!important}.text-underline{text-decoration:underline!important}.text-line-through{text-decoration:line-through!important}.ft-100{font-weight:100!important}.ft-200{font-weight:200!important}.ft-300{font-weight:300!important}.ft-400{font-weight:400!important}.ft-500{font-weight:500!important}.ft-600{font-weight:600!important}.ft-700{font-weight:700!important}.ft-800{font-weight:800!important}.ft-900{font-weight:900!important}.bd,.bdt,.bdtb{border-top:1px solid #ddd}.bd-none,.bdt-none,.bdtb-none{border-top:none}.bd,.bdb,.bdtb{border-bottom:1px solid #ddd}.bd-none,.bdb-none,.bdtb-none{border-bottom:none}.bd,.bdl,.bdlr{border-left:1px solid #ddd}.bd-none,.bdl-none,.bdlr-none{border-left:none}.bd,.bdlr,.bdr{border-right:1px solid #ddd}.bd-none,.bdlr-none,.bdr-none{border-right:none}.bd-dashed,.bdt-dashed,.bdtb-dashed{border-top-style:dashed}.bd-dashed,.bdb-dashed,.bdtb-dashed{border-bottom-style:dashed}.bd-dashed,.bdl-dashed,.bdlr-dashed{border-left-style:dashed}.bd-dashed,.bdlr-dashed,.bdr-dashed{border-right-style:dashed}.bd-dotted,.bdt-dotted,.bdtb-dotted{border-top-style:dotted}.bd-dotted,.bdb-dotted,.bdtb-dotted{border-bottom-style:dotted}.bd-dotted,.bdl-dotted,.bdlr-dotted{border-left-style:dotted}.bd-dotted,.bdlr-dotted,.bdr-dotted{border-right-style:dotted}.bd-double,.bdt-double,.bdtb-double{border-top-style:double}.bd-double,.bdb-double,.bdtb-double{border-bottom-style:double}.bd-double,.bdl-double,.bdlr-double{border-left-style:double}.bd-double,.bdlr-double,.bdr-double{border-right-style:double}.tm-body,.tm-btn,.tm-col,.tm-frame,.tm-frame-footer,.tm-frame-header,.tm-frame-main,.tm-frame-part,.tm-header,.tm-layout,.tm-link,.tm-nav,.tm-nav-item,.tm-nav-item a,.tm-nav-sub,.tm-nav ul,.tm-nav ul li,.tm-page,.tm-panel,.tm-panel-body,.tm-panel-footer,.tm-panel-header,.tm-row{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;position:relative}.tm-body:after,.tm-col:after,.tm-frame-footer:after,.tm-frame-header:after,.tm-frame-main:after,.tm-frame-part:after,.tm-frame:after,.tm-header:after,.tm-layout:after,.tm-nav:after,.tm-nav li:after,.tm-nav ul:after,.tm-page:after,.tm-panel-body:after,.tm-panel-footer:after,.tm-panel-header:after,.tm-panel-nav:after,.tm-panel:after,.tm-row:after{content:\"\";display:table;clear:both}.tm-page{display:block;border:1px solid transparent}.tm-header{display:block;padding:10px 20px;font-size:22px;font-weight:600;border-bottom:3px solid #f3f3f3;color:#1f2f3d}.tm-body{padding:20px 20px}.tm-body,.tm-row{display:block;border:1px solid transparent}.tm-row{width:100%}.tm-col{display:block;border:1px solid transparent}.tm-panel{display:block;border:1px solid #ddd;border-radius:3px;margin-bottom:20px}.tm-panel-header{color:#545454;font-size:16px;padding:8px 15px;font-weight:600;border-bottom:1px solid #ddd}.tm-panel-body{padding:15px 15px}.tm-btn{display:inline-block;cursor:pointer;outline:0;white-space:nowrap;text-decoration:none;text-overflow:ellipsis;font-weight:400;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-action:manipulation;-moz-touch-action:manipulation;touch-action:manipulation;-webkit-tap-highlight-color:transparent;vertical-align:middle;border:1px solid transparent;border-color:#9e9e9e}.tm-btn-circle{border-radius:100px}.tm-btn+.tm-btn{margin-left:10px}.tm-btn.tm-btn-block{display:block;padding-left:0;padding-right:0}.tm-btn.tm-active,.tm-btn.tm-hover{color:#fff;border-color:#9e9e9e;background-color:#9e9e9e}@media (hover:hover){.tm-btn:hover{color:#fff;border-color:#9e9e9e;background-color:#9e9e9e}}.tm-link{display:inline-block;cursor:pointer;position:relative;outline:0;white-space:nowrap;text-decoration:none;text-overflow:ellipsis;font-weight:400;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-action:manipulation;-moz-touch-action:manipulation;touch-action:manipulation;-webkit-tap-highlight-color:transparent;color:#9e9e9e;border:1px solid transparent}.tm-link.tm-active,.tm-link.tm-hover{border-bottom-color:#9e9e9e}@media (hover:hover){.tm-link:hover{border-bottom-color:#9e9e9e}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "35d6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b6fa");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2f12870c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3953":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9e6f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0fcfa30e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5591":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d1cd");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2666d544", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8dae":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0339");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("35e214ca", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "94cf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1a8e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("39796692", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9e6f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:tm-icon-font;src:url(data:application/octet-stream;base64,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);src:url(data:application/octet-stream;base64,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) format(\"embedded-opentype\"),url(data:application/octet-stream;base64,d09GRgABAAAAAAWYAAsAAAAACYgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY980nyY21hcAAAAYAAAABwAAABuLhRx2tnbHlmAAAB8AAAAYIAAALsfFISCmhlYWQAAAN0AAAALwAAADYWhGdYaGhlYQAAA6QAAAAcAAAAJAfeA4dobXR4AAADwAAAAA4AAAAYGAAAAGxvY2EAAAPQAAAADgAAAA4CrgHcbWF4cAAAA+AAAAAfAAAAIAEVAEBuYW1lAAAEAAAAAU4AAAJ5XvAfyHBvc3QAAAVQAAAASAAAAGyMGEzQeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBye175gYG7438AQw9zA0AAUZgTJAQDnpAxjeJztkdENgzAMRJ8hqRBiFCZgBuboV1cAPjNqsgWc43aLnvWis6Mo0hnIwChWkcA+GK63ptbnI3OfJzb1k2qAetXSuG+54+e6TPeLyt2gt8l/sBd/Lf3cv1325ALPuZ5BZBv4XmoJfDeNgPwACOIbJnicldJBTsJAFAbg98+0MxQEQZGaNFKl2hqNQgDbGBM1bthyAHccgo0LJd6CyA04gQmykrWs1FO4NlKdFmXXqMnkn/cmb/HNZIgTfY75mJ/TCpVpjwhOZRme6zkVYaNUD1Z9l+cgyzBPERyCH8JThWpzYPfVfPqulc5XdY1fpe3MlGvj0UzXZ6N5DqaaNh3Eyezsa2cJhjbMZrGtp7C1mBrNPp5+xlQSRaYHZTojizxqKFNzH9JzxFrRhlRpNgKz4R81qwj8RNwwddHpXKRYr8e+q5sehkm8jVS3C8lZv8+4xKLGTjKT9MXbZcikddqiA2VN8HCnjLrfdCvCdIQslNQFgoLLKAE0qMHatdRq1SQgo+DnSRa2WYxGrVvI8C0aR17+1+ctfEEs82Ll7z7zD77xnHcZwxAjFY8QBT9lj2QTGfDdfVRkBtEmTAOidIJ6YCHafI81Ibimt6X+/KLLtvpxEOH7/OTl+fvkGseaIcIQTBhaOAknqgMLQ9URfQFCZr1ZAAB4nGNgZGBgAOIze7Z/iue3+crAzcIAAjc3TVyHoP/vZ2FgdgByORiYQKIAeRsMhQB4nGNgZGBgbvjfwBDDwgACQJKRARWwAQBHDAJveJxjYWBgYMGCAQFoABkAAAAAAAAASgCeAO4BPgF2AAB4nGNgZGBgYGMwYWBlAAEmIOYCQgaG/2A+AwAOcwFWAHicbZG9TgJBFIXP8mdYogVGS51GCw3LT2NCKQkUdhb0sMwuS5YdMjuQ8Ag+j8/gE9jb+Qy2HpYrBbKbufnuuedMbjIAmviCh/13xbNnD3V2ey7hDDfCZep3whVyIFxFA0/CNerPwj4e8SLcwCU2vMGr1Nk94E3Y4w7vwiVc4EO4TP1TuEL+Fq7iGj/CNTS9c2EfY+9WuIF7b+0PrJ44PVPTrUpCk0Umc35oTN7a0auO1+nEHvoDjLXNE5OpbtA5aCOdaft3V76Je85FKrJmqYac6jQ1amXNQocumDu36rfbkehBaJZcbQALjQkc6wwKU2xZE4QwyBAV1dG36w1ytA7aKxMx1kiZtifm/5UxE5ZKUvQKXT5T54RvRF9WeI/3yvlQMXpUHd2KxzKzJA0lq7lPSlZYFbMFlZB6gHmRWqGPNv/oyB8Ueyx/AXvKcO4AAHicY2BigAAuBuyAjZGJkZmRhZGVkY2RnYEnOSM1OVs3ObMoOSeVJzknvzgVyuHOzEvLh7L5yhOL8jLz0qFcVrA6BgYAtAUVsg==) format(\"woff\"),url(data:application/octet-stream;base64,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) format(\"truetype\"),url(data:application/octet-stream;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iY29vcy1mb250IiBob3Jpei1hZHYteD0iMTAyNCIgPgogIDxmb250LWZhY2UKICAgIGZvbnQtZmFtaWx5PSJjb29zLWZvbnQiCiAgICBmb250LXdlaWdodD0iNTAwIgogICAgZm9udC1zdHJldGNoPSJub3JtYWwiCiAgICB1bml0cy1wZXItZW09IjEwMjQiCiAgICBhc2NlbnQ9Ijg5NiIKICAgIGRlc2NlbnQ9Ii0xMjgiCiAgLz4KICAgIDxtaXNzaW5nLWdseXBoIC8+CiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJjaGVjay1jaXJjbGUiIHVuaWNvZGU9IiYjNTkyNjE7IiBkPSJNNjk5IDU0M2gtNDYuOWMtMTAuMiAwLTE5LjktNC45LTI1LjktMTMuM0w0NjkgMzExLjcwMDAwMDAwMDAwMDA1bC03MS4yIDk4LjhjLTYgOC4zLTE1LjYgMTMuMy0yNS45IDEzLjNIMzI1Yy02LjUgMC0xMC4zLTcuNC02LjUtMTIuN2wxMjQuNi0xNzIuOGMxMi43LTE3LjcgMzktMTcuNyA1MS43IDBsMjEwLjYgMjkyYzMuOSA1LjMgMC4xIDEyLjctNi40IDEyLjd6TTUxMiA4MzJDMjY0LjYgODMyIDY0IDYzMS40IDY0IDM4NHMyMDAuNi00NDggNDQ4LTQ0OCA0NDggMjAwLjYgNDQ4IDQ0OFM3NTkuNCA4MzIgNTEyIDgzMnogbTAtODIwYy0yMDUuNCAwLTM3MiAxNjYuNi0zNzIgMzcyczE2Ni42IDM3MiAzNzIgMzcyIDM3Mi0xNjYuNiAzNzItMzcyLTE2Ni42LTM3Mi0zNzItMzcyeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImNsb3NlLWNpcmNsZSIgdW5pY29kZT0iJiM1OTI2MjsiIGQ9Ik02ODUuNCA1NDEuMmMwIDQuNC0zLjYgOC04IDhsLTY2LTAuM0w1MTIgNDMwLjRsLTk5LjMgMTE4LjQtNjYuMSAwLjNjLTQuNCAwLTgtMy41LTgtOCAwLTEuOSAwLjctMy43IDEuOS01LjJsMTMwLjEtMTU1TDM0MC41IDIyNmMtMS4yLTEuNS0xLjktMy4zLTEuOS01LjIgMC00LjQgMy42LTggOC04bDY2LjEgMC4zTDUxMiAzMzEuNmw5OS4zLTExOC40IDY2LTAuM2M0LjQgMCA4IDMuNSA4IDggMCAxLjktMC43IDMuNy0xLjkgNS4yTDU1My41IDM4MWwxMzAuMSAxNTVjMS4yIDEuNCAxLjggMy4zIDEuOCA1LjJ6TTUxMiA4MzFDMjY0LjYgODMxIDY0IDYzMC40IDY0IDM4M3MyMDAuNi00NDggNDQ4LTQ0OCA0NDggMjAwLjYgNDQ4IDQ0OFM3NTkuNCA4MzEgNTEyIDgzMXogbTAtODIwYy0yMDUuNCAwLTM3MiAxNjYuNi0zNzIgMzcyczE2Ni42IDM3MiAzNzIgMzcyIDM3Mi0xNjYuNiAzNzItMzcyLTE2Ni42LTM3Mi0zNzItMzcyeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImluZm8tY2lyY2xlIiB1bmljb2RlPSImIzU5MjYzOyIgZD0iTTUxMiA4MzJDMjY0LjYgODMyIDY0IDYzMS40IDY0IDM4NHMyMDAuNi00NDggNDQ4LTQ0OCA0NDggMjAwLjYgNDQ4IDQ0OFM3NTkuNCA4MzIgNTEyIDgzMnogbTAtODIwYy0yMDUuNCAwLTM3MiAxNjYuNi0zNzIgMzcyczE2Ni42IDM3MiAzNzIgMzcyIDM3Mi0xNjYuNiAzNzItMzcyLTE2Ni42LTM3Mi0zNzItMzcyek01MTIgNTYwbS00OCAwYTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEtOTYgMFpNNTM2IDQ0OGgtNDhjLTQuNCAwLTgtMy42LTgtOHYtMjcyYzAtNC40IDMuNi04IDgtOGg0OGM0LjQgMCA4IDMuNiA4IDhWNDQwYzAgNC40LTMuNiA4LTggOHoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ3YXJuaW5nLWNpcmNsZSIgdW5pY29kZT0iJiM1OTI3MTsiIGQ9Ik01MTIgODMyQzI2NC42IDgzMiA2NCA2MzEuNCA2NCAzODRzMjAwLjYtNDQ4IDQ0OC00NDggNDQ4IDIwMC42IDQ0OCA0NDhTNzU5LjQgODMyIDUxMiA4MzJ6IG0wLTgyMGMtMjA1LjQgMC0zNzIgMTY2LjYtMzcyIDM3MnMxNjYuNiAzNzIgMzcyIDM3MiAzNzItMTY2LjYgMzcyLTM3Mi0xNjYuNi0zNzItMzcyLTM3MnpNNTEyIDIwOG0tNDggMGE0OCA0OCAwIDEgMSA5NiAwIDQ4IDQ4IDAgMSAxLTk2IDBaTTQ4OCAzMjBoNDhjNC40IDAgOCAzLjYgOCA4VjYwMGMwIDQuNC0zLjYgOC04IDhoLTQ4Yy00LjQgMC04LTMuNi04LTh2LTI3MmMwLTQuNCAzLjYtOCA4LTh6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY2xvc2UiIHVuaWNvZGU9IiYjNTkzOTI7IiBkPSJNNTYzLjggMzg0bDI2Mi41IDMxMi45YzQuNCA1LjIgMC43IDEzLjEtNi4xIDEzLjFoLTc5LjhjLTQuNyAwLTkuMi0yLjEtMTIuMy01LjdMNTExLjYgNDQ2LjIgMjk1LjEgNzA0LjNjLTMgMy42LTcuNSA1LjctMTIuMyA1LjdIMjAzYy02LjggMC0xMC41LTcuOS02LjEtMTMuMUw0NTkuNCAzODQgMTk2LjkgNzEuMWMtNC40LTUuMi0wLjctMTMuMSA2LjEtMTMuMWg3OS44YzQuNyAwIDkuMiAyLjEgMTIuMyA1LjdsMjE2LjUgMjU4LjEgMjE2LjUtMjU4LjFjMy0zLjYgNy41LTUuNyAxMi4zLTUuN2g3OS44YzYuOCAwIDEwLjUgNy45IDYuMSAxMy4xTDU2My44IDM4NHoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKCgogIDwvZm9udD4KPC9kZWZzPjwvc3ZnPgo=) format(\"svg\")}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b474":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dcae");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("12f586ec", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b6fa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tm-mask{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.3;background:#000;transform:scale(0)}.tm-mask.tm-show{transform:scale(1)}.tm-dialog-wrapper{position:fixed;left:0;right:0;top:0;bottom:0;transform:scale(0);text-align:center;overflow:auto}.tm-dialog-wrapper.tm-show{transform:scale(1)}.tm-dialog{display:inline-block;background-color:#fff;border-radius:4px;border:1px solid #ebeef5;font-size:18px;text-align:left;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:relative;top:15vh;padding:10px 0}.tm-dialog-middle .tm-dialog{top:auto}.tm-dialog-middle:after{content:\"\";display:inline-block;height:100%;width:0;vertical-align:middle}.tm-dialog-header{padding:10px 20px 10px}.tm-dialog-title{line-height:24px;font-size:18px;color:#303133}.tm-dialog-close{position:absolute;top:20px;right:20px;padding:0;background:transparent;border:none;outline:none;cursor:pointer;font-size:16px}.tm-dialog-close:after{content:\"\\e800\";font-family:tm-icon-font!important;font-size:16px;font-style:normal}.tm-dialog-footer{text-align:right;padding:0 10px}.tm-dialog-footer .tm-btn{margin-left:10px}.tm-message-box{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;text-align:center}.tm-message{pointer-events:all;width:400px;position:relative;margin:0 auto;display:block;padding:15px 20px;text-align:left;box-sizing:border-box;border-radius:4px;margin-top:-50px;transition:margin-top .3s;background-color:#cfd8dc;color:#607d8b}.tm-message.tm-show{margin-top:30px}.tm-message .tm-message-icon{margin-right:10px}.tm-message .tm-message-close{margin-left:10px;float:right;cursor:pointer}.tm-message .tm-message-close:after{content:\"\\e800\";font-family:tm-icon-font!important;font-size:16px;font-style:normal}.tm-message .tm-message-icon:after{content:\"\";font-family:tm-icon-font!important;font-size:16px;font-style:normal}.tm-message-info{background-color:#cfd8dc;color:#607d8b;background-color:#607d8b;color:#fff}.tm-message-info .tm-message-icon:after{content:\"\\e77f\"}.tm-message-warn{background-color:#ffe0b2;color:#ff9800;background-color:#ff9800;color:#fff}.tm-message-warn .tm-message-icon:after{content:\"\\e787\"}.tm-message-success{background-color:#c8e6c9;color:#4caf50;background-color:#4caf50;color:#fff}.tm-message-success .tm-message-icon:after{content:\"\\e77d\"}.tm-message-error{background-color:#ffcdd2;color:#f44336;background-color:#f44336;color:#fff}.tm-message-error .tm-message-icon:after{content:\"\\e77e\"}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d1cd":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tm-layout{display:block;padding:0;margin:0;border:0 solid transparent;overflow:auto}.tm-layout>.tm-layout{float:left}.tm-layout>.tm-layout-bar{float:left;background-color:#ebebeb;position:relative;z-index:1}.tm-layout-bar>.tm-layout-bar-part{position:absolute;background-color:#ebebeb;border-radius:3px}.tm-layout-bar-left>.tm-layout-bar-part:hover,.tm-layout-bar-right>.tm-layout-bar-part:hover{cursor:e-resize}.tm-layout-bar-bottom>.tm-layout-bar-part:hover,.tm-layout-bar-top>.tm-layout-bar-part:hover{cursor:n-resize}.tm-layout-bar-bottom>.tm-layout-bar-part,.tm-layout-bar-top>.tm-layout-bar-part{width:20px;height:6px;left:calc(50% - 10px)}.tm-layout-bar-bottom>.tm-layout-bar-part,.tm-layout-bar-top>.tm-layout-bar-part{top:-2px}.tm-layout-bar-left>.tm-layout-bar-part,.tm-layout-bar-right>.tm-layout-bar-part{width:6px;height:20px;top:calc(50% - 10px)}.tm-layout-bar-left>.tm-layout-bar-part,.tm-layout-bar-right>.tm-layout-bar-part{left:-2px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "dcae":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tm-nav,.tm-nav a,.tm-nav li,.tm-nav span,.tm-nav ul{margin:0;padding:0;list-style:none}.tm-nav{display:block;border-collapse:separate;color:#9e9e9e}.tm-nav.tm-horizontal>li{float:left}.tm-nav li{letter-spacing:1px;border-radius:0}.tm-nav li,.tm-nav li a{white-space:nowrap;display:block}.tm-nav li a{cursor:pointer;outline:0;text-decoration:none;text-overflow:ellipsis;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-action:manipulation;-moz-touch-action:manipulation;touch-action:manipulation;-webkit-tap-highlight-color:transparent;border:1px solid transparent;text-align:left}.tm-nav .tm-active>a,.tm-nav .tm-hover>a{color:#fff;border-color:#9e9e9e;background-color:#9e9e9e}@media (hover:hover){.tm-nav a:hover{color:#fff;border-color:#9e9e9e;background-color:#9e9e9e}}.tm-nav li a>*{display:inline;vertical-align:bottom}.tm-nav ul{display:block}.tm-nav ul li a{padding-left:30px}.tm-nav.tm-horizontal ul{position:absolute;background:#fff;color:#262626;padding:5px 0;top:100%;left:0;border-radius:3px;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175);z-index:3}.tm-nav.tm-horizontal ul a{min-width:160px;font-size:15px;padding:3px 10px;text-align:left;line-height:30px}.tm-nav.tm-horizontal li ul{display:none}.tm-nav.tm-horizontal li.tm-open>ul,.tm-nav.tm-horizontal li:hover>ul{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./packages/base/tool.js
var co = new Object();

co.replaceAll = function (text, arg1, arg2) {
	if (co.isEmpty(text)) {
		return text;
	}
	return text.replace(new RegExp(arg1, "gm"), arg2);
};


co.createClass = function (arg1) {
	var Class = function () { }
	if (arg1) {
		Class = function (arg) {
			arg1.call(this, arg);
		}
		var Super = function () { };
		Super.prototype = arg1.prototype;
		Class.prototype = new Super();
	}
	return Class;
};
var numberindex = 0;
co.getNumber = function () {
	numberindex++;
	return new Date().getTime() - 1200000000000 + "" + Math.floor(Math.random() * 9 + 1) + "" + Math.floor(Math.random() * 9 + 1) + "" + numberindex;
};
co.trimObject = function (obj, trims) {
	trims = trims || [undefined, null];
	if (obj == null) {
		return;
	}
	if (co.isArray(obj)) {

		obj.forEach(o => {
			co.trimObject(o, trims);
		});
	} else if (co.isObject(obj)) {
		for (var key in obj) {
			var value = obj[key];
			if (co.isArray(value)) {
				co.trimObject(value, trims);
			} else if (co.isObject(value)) {
				co.trimObject(value, trims);
			} else {
				if (trims.indexOf(value) >= 0) {
					delete obj[key];
				}
			}
		}
	}
};
co.isArray = function (arg) {
	if (!co.isObject(arg)) {
		return false;
	}
	return arg.constructor == Array;
};

co.isString = function (arg) {
	if (arg == null) {
		return false;
	}
	return typeof (arg) === "string";
};
co.isObject = function (arg) {
	if (arg == null) {
		return false;
	}
	return typeof (arg) === "object";
};
co.isFunction = function (arg) {
	if (arg == null) {
		return false;
	}
	return typeof (arg) === "function";
};
co.isNumber = function (arg) {
	if (co.isEmpty(arg)) {
		return false;
	}
	return (/^[-]?[0-9]+\.?[0-9]*$/.test(arg));
};
co.isBoolean = function (arg) {
	if (co.isEmpty(arg)) {
		return false;
	}
	return typeof (arg) === "boolean";
};
co.isInteger = function (arg) {
	if (co.isEmpty(arg)) {
		return false;
	}
	return (/^-?[0-9]*$/.test(arg));
};
co.isUndefined = function (arg) {
	return typeof (arg) == "undefined";
};
co.isEmpty = function (arg) {
	return co.isUndefined(arg) || arg == null || arg.length == 0;
};
co.isNotEmpty = function (arg) {
	return !co.isEmpty(arg);
};
co.isTrue = function (arg) {
	var flag = false;
	if (arg != null) {
		if (co.isBoolean(arg)) {
			flag = arg;
		} else {
			if (arg == 'true' || arg == '1' || arg == 1) {
				flag = true;
			}
		}
	}
	return flag;
};
co.isFalse = function (arg) {

	return !co.isTrue(arg);
};
co.getKeys = function (arg) {
	if (arg == null) {
		return [];
	}
	return Object.keys(arg);
};
co.replaceList = function (arg1, arg2) {
	co.replaceArray(arg1, arg2);
};
co.replaceArray = function (arg1, arg2) {
	if (co.isArray(arg1) && co.isArray(arg2)) {
		co.trimList(arg1);
		arg2.forEach(function (one, i, array) {
			arg1.push(one);
		})
	}
};

co.trimList = function (arg) {
	co.trimArray(arg);
};
co.trimArray = function (arg) {
	if (co.isArray(arg)) {
		arg.splice(0, arg.length);
	}
};
co.trimDate = function (arg) {
	if (arg == null) {
		return arg;
	}
	let date = arg;
	if (arg instanceof Date) {
		date = co.formatDate(arg);
	}
	date = '' + date;
	return date.replace(/\D/g, '');
};
co.formatDate = function (arg, format) {
	if (arg == null) {
		return arg;
	}
	format = format || "yyyy-MM-dd hh:mm:ss";
	let date = arg;
	if (arg instanceof Date) {

	} else {
		date = co.toDate(arg);
	}
	var o = {
		"M+": date.getMonth() + 1, // month
		"d+": date.getDate(), // day
		"h+": date.getHours(), // hour
		"H+": date.getHours(), // hour
		"m+": date.getMinutes(), // minute
		"s+": date.getSeconds(), // second
		"q+": Math.floor((date.getMonth() + 3) / 3), // quarter
		"S+": date.getMilliseconds()
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;

};
co.toDate = function (arg) {
	if (arg == null) {
		return arg;
	}
	if (arg instanceof Date) {
		return arg;
	}
	arg = co.trimDate(arg);
	if (arg.length == 4) {
		arg = arg + '01' + '01';
	}
	else if (arg.length == 6) {
		arg = arg + '01';
	}
	else if (arg.length == 10) {
		arg = arg + '00';
	}
	let date = '';
	let cs = arg.split('');
	for (let i = 0; i < cs.length; i++) {
		let c = cs[i];
		let a = '';
		if (i == 4 || i == 6) {
			a = '/';
		}
		if (i == 8) {
			a = ' ';
		}
		if (i == 10 || i == 12 || i == 14) {
			a = ':';
		}
		date += a + c;
	}
	return new Date(date);
};
co.getColorSuffix = function (color) {
	if (co.isNotEmpty(color) && co.startsWith('#')) {
		co.style.addColor(color);
		color = color.substring(1);
	}
	return color;
};
co.toURL = function (arg) {
	window.location.href = arg;
};
co.isRequired = function (input) {
	if (input == null) {
		return;
	}
	if (input.length != null) {
		if (input.length > 0) {
			input = input[0];
		} else {
			return;
		}
	}

	var required = input.getAttribute('isrequired');

	if (typeof (required) != 'undefined') {
		return co.isTrue(required);
	}
	required = input.getAttribute('required');
	if (typeof (required) == 'undefined') {
		return false;
	}
	if (required == 'required') {
		return true;
	}
	return co.isTrue(required);
};
co.addClass = function (dom, addClassName) {
	if (dom == null || co.isEmpty(addClassName)) {
		return;
	}
	let classNames = [];
	if (co.isNotEmpty(dom.className)) {
		classNames = dom.className.split(' ');
	}
	let addClassNames = addClassName.split(' ');

	addClassNames.forEach(addClassName => {
		addClassName = addClassName.trim();
		if (co.isNotEmpty(addClassName)) {
			let has = false;
			classNames.forEach(className => {
				className = className.trim();
				if (addClassName == className) {
					has = true;
				}
			});
			if (!has) {
				classNames.push(addClassName);
			}
		}
	});
	dom.className = classNames.join(' ');
};

co.removeClass = function (dom, removeClassName) {
	if (dom == null || co.isEmpty(removeClassName)) {
		return;
	}
	let classNames = [];
	if (co.isNotEmpty(dom.className)) {
		classNames = dom.className.split(' ');
	}
	let removeClassNames = removeClassName.split(' ');

	removeClassNames.forEach(removeClassName => {
		removeClassName = removeClassName.trim();
		if (co.isNotEmpty(removeClassName)) {
			classNames.forEach((className, index) => {
				className = className.trim();
				if (removeClassName == className) {
					classNames[index] = '';
				}
			});
		}
	});
	dom.className = classNames.join(' ');
};
co.startZIndex = 1000;
let index_number = 0;
co.getNextZIndex = function () {
	if (index_number > 0) {
		index_number++;
	}
	let index = co.startZIndex + index_number;
	if (index_number == 0) {
		index_number++;
	}
	return index;
};


co.getUrlParamValue = function (name) {
	if (name == null || name == 'undefined') {
		return null;
	}
	var searchStr = decodeURI(location.search);
	var infoIndex = searchStr.indexOf(name + "=");
	if (infoIndex == -1) {
		return null;
	}
	var searchInfo = searchStr.substring(infoIndex + name.length + 1);
	var tagIndex = searchInfo.indexOf("&");
	if (tagIndex != -1) {
		searchInfo = searchInfo.substring(0, tagIndex);
	}
	return searchInfo;
};


let zIndexsForMask = [];

co.showMask = function (zIndex) {
	if (zIndex == null) {
		zIndex = co.getNextZIndex();
	}
	if (window.COOS_MASK_DOM == null) {
		window.COOS_MASK_DOM = document.createElement("div");
		window.COOS_MASK_DOM.setAttribute("class", "tm-mask");
		document.body.appendChild(window.COOS_MASK_DOM);
	}
	co.addClass(window.COOS_MASK_DOM, 'tm-show');
	zIndexsForMask.push(zIndex);
	window.COOS_MASK_DOM.style['z-index'] = zIndex;
	return zIndexsForMask.length - 1;
};

co.hideMask = function (index) {
	if (index < 0 || index >= zIndexsForMask.length) {
		return;
	}
	zIndexsForMask.splice(index, 1);
	if (window.COOS_MASK_DOM != null) {
		if (zIndexsForMask.length == 0) {
			co.removeClass(window.COOS_MASK_DOM, 'tm-show');
		} else {
			var max = Math.max.apply(Math, zIndexsForMask);
			window.COOS_MASK_DOM.style['z-index'] = max;
		}
	}
};

/* harmony default export */ var tool = (co);
// CONCATENATED MODULE: ./packages/base/style/Color.js

var common = {
	black: '#00000',
	white: '#FFFFFF'
};
var Color = function (options) {
	options = options || {};
	this.options = options;
	this.initOptions();
	this.init();
};

Color.prototype.initOptions = function () {
	this.main = this.options.main;
	if (this.main == null || this.main.trim().length == 0) {
		throw new Error('main不能为空，请设置主色');
	}
	this.contrastThreshold = this.options.contrastThreshold || 3;
	this.tonalOffset = this.options.tonalOffset || 0.2;

};
Color.prototype.init = function () {
	this.initColors();
};
Color.prototype.initColors = function () {
	this.colors = [];
	this.colors.push(this.main);

	this.colors.push(lighten(this.main, .4));
	this.colors.push(lighten(this.main, .3));
	this.colors.push(lighten(this.main, .2));
	this.colors.push(lighten(this.main, .1));
	this.colors.push(this.main);
	this.colors.push(darken(this.main, .1));
	this.colors.push(darken(this.main, .2));
	this.colors.push(darken(this.main, .3));
	this.colors.push(darken(this.main, .4));
};
Color.prototype.getColors = function () {
	return this.colors;
};
Color.prototype.getContrastText = function (background) {
	return getContrastRatio(background, common.white) >= this.contrastThreshold ? common.white : common.black;
};
/**
 * 返回其值仅限于给定范围的数字。
 */
function clamp(value) {
	var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	if (value < min) {
		return min;
	}

	if (value > max) {
		return max;
	}

	return value;
}
/**
 * 将颜色从CSS十六进制格式转换为CSS rgb格式。
 */
function convertHexToRGB(color) {
	color = color.substr(1);
	var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
	var colors = color.match(re);

	if (colors && colors[0].length === 1) {
		colors = colors.map(function (n) {
			return n + n;
		});
	}

	return colors ? "rgb(".concat(colors.map(function (n) {
		return parseInt(n, 16);
	}).join(', '), ")") : '';
}
/**
 * 返回具有颜色类型和值的对象. 注意：不支持rgb％值。
 */
function decomposeColor(color) {
	if (color.charAt(0) === '#') {
		return decomposeColor(convertHexToRGB(color));
	}

	var marker = color.indexOf('(');
	var type = color.substring(0, marker);
	var values = color.substring(marker + 1, color.length - 1).split(',');
	values = values.map(function (value) {
		return parseFloat(value);
	});
	{
		if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
			throw new Error('紧持以下格式：#nnn，＃nnnnnn，rgb（），rgba（），hsl（），hsla（）');
		}
	}

	return {
		type: type,
		values: values
	};
}
/**
 * 将具有类型和值的颜色对象转换为字符串。
 */
function recomposeColor(color) {
	var type = color.type;
	var values = color.values;
	if (type.indexOf('rgb') !== -1) {
		// Only convert the first 3 values to int (i.e. not alpha)
		values = values.map(function (n, i) {
			return i < 3 ? parseInt(n, 10) : n;
		});
	}
	if (type.indexOf('hsl') !== -1) {
		values[1] = "".concat(values[1], "%");
		values[2] = "".concat(values[2], "%");
	}

	return "".concat(color.type, "(").concat(values.join(', '), ")");
}
/**
 * 计算两种颜色之间的对比度。
 */
function getContrastRatio(foreground, background) {
	var lumA = getLuminance(foreground);
	var lumB = getLuminance(background);
	return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * 颜色空间中任何点的相对亮度，对于最暗的黑色和黑色标准化为0,1为最轻的白色。
 */
function getLuminance(color) {
	var decomposedColor = decomposeColor(color);

	if (decomposedColor.type.indexOf('rgb') !== -1) {
		var rgb = decomposedColor.values.map(function (val) {
			val /= 255; // normalized

			return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
		}); // Truncate at 3 digits

		return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
	} // else if (decomposedColor.type.indexOf('hsl') !== -1)

	return decomposedColor.values[2] / 100;
}
/**
 * 根据亮度，使颜色变暗或变浅。 浅色变暗，暗色变浅。
 */
function emphasize(color) {
	var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
	return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * 设置颜色的绝对透明度。 任何现有的alpha值都会被覆盖。
 */
function fade(color, value) {
	if (!color)
		return color;
	color = decomposeColor(color);
	value = clamp(value);

	if (color.type === 'rgb' || color.type === 'hsl') {
		color.type += 'a';
	}

	color.values[3] = value;
	return recomposeColor(color);
}
/**
 * 使颜色变暗。
 */
function darken(color, coefficient) {
	if (!color)
		return color;
	color = decomposeColor(color);
	coefficient = clamp(coefficient);

	if (color.type.indexOf('hsl') !== -1) {
		color.values[2] *= 1 - coefficient;
	} else if (color.type.indexOf('rgb') !== -1) {
		for (var i = 0; i < 3; i += 1) {
			color.values[i] *= 1 - coefficient;
		}
	}

	return recomposeColor(color);
}
/**
 * 淡化颜色。
 */
function lighten(color, coefficient) {
	if (!color)
		return color;
	color = decomposeColor(color);
	coefficient = clamp(coefficient);

	if (color.type.indexOf('hsl') !== -1) {
		color.values[2] += (100 - color.values[2]) * coefficient;
	} else if (color.type.indexOf('rgb') !== -1) {
		for (var i = 0; i < 3; i += 1) {
			color.values[i] += (255 - color.values[i]) * coefficient;
		}
	}

	return recomposeColor(color);
}

Color.getContrastText = function (background) {
	return getContrastRatio(background, common.white) >= 3 ? common.white : common.black;
};

/* harmony default export */ var style_Color = (Color);
// CONCATENATED MODULE: ./packages/base/style/config.js
const config = {};
config.distances = [];
for (var config_i = 0; config_i <= 100; config_i++) {
	if (config_i <= 10) {
		config.distances.push(config_i);
	} else {
		config.distances.push(config_i);
	}
}

config.sizes = [
	{
		name: "",
		text: "默认",
		"font-size": "15px",
		padding: "3px 13px",
		height: "34px",
		"line-height": "26px",
		"img-height": "26px",
		"circle-line-height": "32px"
	},
	{
		name: "xs",
		text: "最小",
		"font-size": "12px",
		padding: "1px 5px",
		height: "18px",
		"line-height": "14px",
		"img-height": "14px",
		"circle-line-height": "18px"
	},
	{
		name: "sm",
		text: "小",
		"font-size": "14px",
		padding: "2px 8px",
		height: "26px",
		"line-height": "20px",
		"img-height": "20px",
		"circle-line-height": "24px"
	},
	{
		name: "md",
		text: "大",
		"font-size": "18px",
		padding: "6px 18px",
		height: "42px",
		"line-height": "28px",
		"img-height": "28px",
		"circle-line-height": "40px"
	},
	{
		name: "lg",
		text: "最大",
		"font-size": "22px",
		padding: "8px 25px",
		height: "50px",
		"line-height": "32px",
		"img-height": "32px",
		"circle-line-height": "48px"
	}
];

config.cols = [{
	text: "0格",
	value: "0",
	width: "0%"
}, {
	text: "1格",
	value: "1",
	width: "8.33333333%"
}, {
	text: "2格",
	value: "2",
	width: "16.66666667%"
}, {
	text: "3格",
	value: "3",
	width: "25%"
}, {
	text: "4格",
	value: "4",
	width: "33.33333333%"
}, {
	text: "5格",
	value: "5",
	width: "41.66666667%"
}, {
	text: "6格",
	value: "6",
	width: "50%"
}, {
	text: "7格",
	value: "7",
	width: "58.33333333%"
}, {
	text: "8格",
	value: "8",
	width: "66.66666667%"
}, {
	text: "9格",
	value: "9",
	width: "75%"
}, {
	text: "10格",
	value: "10",
	width: "83.33333333%"
}, {
	text: "11格",
	value: "11",
	width: "91.66666667%"
}, {
	text: "12格",
	value: "12",
	width: "100%"
}, {
	text: "0.5格",
	value: "0.5",
	width: "4.166666665%"
}, {
	text: "1.5格",
	value: "1.5",
	width: "12.5%"
}, {
	text: "2.5格",
	value: "2.5",
	width: "20.833333335%"
}, {
	text: "3.5格",
	value: "3.5",
	width: "29.166666665%"
}, {
	text: "4.5格",
	value: "4.5",
	width: "37.5%"
}, {
	text: "5.5格",
	value: "5.5",
	width: "45.833333335%"
}, {
	text: "6.5格",
	value: "6.5",
	width: "54.166666665%"
}, {
	text: "7.5格",
	value: "7.5",
	width: "62.5%"
}, {
	text: "8.5格",
	value: "8.5",
	width: "70.833333335%"
}, {
	text: "9.5格",
	value: "9.5",
	width: "79.166666665%"
}, {
	text: "10.5格",
	value: "10.5",
	width: "87.5%"
}, {
	text: "11.5格",
	value: "11.5",
	width: "95.833333335%"
}];

config.colors = [
	{
		text: "白色",
		value: "white",
		colors: ["#FFFFFF"]
	}, {
		text: "黑色",
		value: "black",
		colors: ["#000000"]
	},
	{
		text: "主要",
		value: "primary",
		colors: ["#2196F3", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"]
	},
	{
		text: "信息",
		value: "info",
		colors: ["#607D8B", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F", "#263238"]
	},
	{
		text: "成功",
		value: "success",
		colors: ["#4CAF50", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"]
	},
	{
		text: "警告",
		value: "warn",
		colors: ["#FF9800", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100"]
	},
	{
		text: "危险",
		value: "danger",
		colors: ["#F44336", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"]
	},
	{
		text: "错误",
		value: "error",
		colors: ["#F44336", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"]
	},
	{
		text: "确定",
		value: "define",
		colors: ["#2196F3", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"]
	},
	{
		text: "取消",
		value: "cancel",
		colors: ["#9E9E9E", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"]
	}, {
		text: "红色",
		value: "red",
		colors: ["#F44336", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"]
	}, {
		text: "粉色",
		value: "pink",
		colors: ["#E91E63", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F"]
	}, {
		text: "紫色",
		value: "purple",
		colors: ["#9C27B0", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C"]
	}, {
		text: "深紫色",
		value: "deep-purple",
		colors: ["#673AB7", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92"]
	}, {
		text: "靛青色",
		value: "indigo",
		colors: ["#3F51B5", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E"]
	}, {
		text: "蓝色",
		value: "blue",
		colors: ["#2196F3", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"]
	}, {
		text: "浅蓝色",
		value: "light-blue",
		colors: ["#03A9F4", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B"]
	}, {
		text: "青色",
		value: "cyan",
		colors: ["#00BCD4", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F", "#006064"]
	}, {
		text: "兰绿色",
		value: "teal",
		colors: ["#009688", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40"]
	}, {
		text: "绿色",
		value: "green",
		colors: ["#4CAF50", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"]
	}, {
		text: "浅绿",
		value: "light-green",
		colors: ["#8BC34A", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E"]
	}, {
		text: "青柠色",
		value: "lime",
		colors: ["#CDDC39", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B", "#9E9D24", "#827717"]
	}, {
		text: "黄色",
		value: "yellow",
		colors: ["#FFEB3B", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17"]
	}, {
		text: "琥珀色",
		value: "amber",
		colors: ["#FFC107", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00", "#FF6F00"]
	}, {
		text: "橙色",
		value: "orange",
		colors: ["#FF9800", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100"]
	}, {
		text: "深橙色",
		value: "deep-orange",
		colors: ["#FF5722", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315", "#BF360C"]
	}, {
		text: "棕色",
		value: "brown",
		colors: ["#795548", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#795548", "#6D4C41", "#5D4037", "#4E342E", "#3E2723"]
	}, {
		text: "灰色",
		value: "grey",
		colors: ["#9E9E9E", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"]
	}, {
		text: "灰色",
		value: "gray",
		colors: ["#9E9E9E", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"]
	}, {
		text: "蓝灰色",
		value: "blue-grey",
		colors: ["#607D8B", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F", "#263238"]
	}, {
		text: "蓝灰色",
		value: "blue-gray",
		colors: ["#607D8B", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A", "#455A64", "#37474F", "#263238"]
	}];

/* harmony default export */ var style_config = (config);
// CONCATENATED MODULE: ./packages/base/style/css.js
let distanceCSS = `
/** 字体大小 **/
.ft-key,.hover-ft-key:hover{font-size: "value" !important;}
/** 宽度 **/
.wd-key,.hover-wd-key:hover{width: "value" !important;}
/** 高度 **/
.hg-key,.hover-hg-key:hover{height: "value" !important;}
/** 圆角 **/
.rd-key,.hover-rd-key:hover,.rdt-key,.hover-rdt-key:hover,.rdtl-key,.hover-rdtl-key:hover{border-top-left-radius: "value" !important;}
.rd-key,.hover-rd-key:hover,.rdt-key,.hover-rdt-key:hover,.rdtr-key,.hover-rdtr-key:hover{border-top-right-radius: "value" !important;}
.rd-key,.hover-rd-key:hover,.rdb-key,.hover-rdb-key:hover,.rdbl-key,.hover-rdbl-key:hover{border-bottom-left-radius: "value" !important;}
.rd-key,.hover-rd-key:hover,.rdb-key,.hover-rdb-key:hover,.rdbr-key,.hover-rdbr-key:hover{border-bottom-right-radius: "value" !important;}
/** 边框 **/
.bd-key,.bdl-key,.bdlr-key,.hover-bd-key:hover,.hover-bdl-key:hover,.hover-bdlr-key:hover{border-left-style: solid;border-left-width: "value" !important;}
.bd-key,.bdr-key,.bdlr-key,.hover-bd-key:hover,.hover-bdr-key:hover,.hover-bdlr-key:hover{border-right-style: solid;border-right-width: "value" !important;}
.bd-key,.bdt-key,.bdtb-key,.hover-bd-key:hover,.hover-bdt-key:hover,.hover-bdtb-key:hover{border-top-style: solid;border-top-width: "value" !important;}
.bd-key,.bdb-key,.bdtb-key,.hover-bd-key:hover,.hover-bdb-key:hover,.hover-bdtb-key:hover{border-bottom-style: solid;border-bottom-width: "value" !important;}
/** 内边距 **/
.pd-key,.pdl-key,.pdlr-key,.hover-pd-key:hover,.hover-pdl-key:hover,.hover-pdlr-key:hover{padding-left: "value" !important;}
.pd-key,.pdr-key,.pdlr-key,.hover-pd-key:hover,.hover-pdr-key:hover,.hover-pdlr-key:hover{padding-right: "value" !important;}
.pd-key,.pdt-key,.pdtb-key,.hover-pd-key:hover,.hover-pdt-key:hover,.hover-pdtb-key:hover{padding-top: "value" !important;}
.pd-key,.pdb-key,.pdtb-key,.hover-pd-key:hover,.hover-pdb-key:hover,.hover-pdtb-key:hover{padding-bottom: "value" !important;}
/** 外边距 **/
.mg-key,.mgl-key,.mglr-key,.hover-mg-key:hover,.hover-mgl-key:hover,.hover-mglr-key:hover{margin-left: "value" !important;}
.mg-key,.mgr-key,.mglr-key,.hover-mg-key:hover,.hover-mgr-key:hover,.hover-mglr-key:hover{margin-right: "value" !important;}
.mg-key,.mgt-key,.mgtb-key,.hover-mg-key:hover,.hover-mgt-key:hover,.hover-mgtb-key:hover{margin-top: "value" !important;}
.mg-key,.mgb-key,.mgtb-key,.hover-mg-key:hover,.hover-mgb-key:hover,.hover-mgtb-key:hover{margin-bottom: "value" !important;}

.mg--key,.mgl--key,.mglr--key,.hover-mg--key:hover,.hover-mgl--key:hover,.hover-mglr--key:hover{margin-left: -"value" !important;}
.mg--key,.mgr--key,.mglr--key,.hover-mg--key:hover,.hover-mgr--key:hover,.hover-mglr--key:hover{margin-right: -"value" !important;}
.mg--key,.mgt--key,.mgtb--key,.hover-mg--key:hover,.hover-mgt--key:hover,.hover-mgtb--key:hover{margin-top: -"value" !important;}
.mg--key,.mgb--key,.mgtb--key,.hover-mg--key:hover,.hover-mgb--key:hover,.hover-mgtb--key:hover{margin-bottom: -"value" !important;}
	`;
let colCSS = `
.col-key,.tm-window-xs .col-xs-key,.tm-window-sm .col-sm-key,.tm-window-md .col-md-key,.tm-window-lg .col-lg-key{float: left;width: "value" !important;}
.offset-key,.tm-window-xs .offset-xs-key,.tm-window-sm .offset-sm-key,.tm-window-md .offset-md-key,.tm-window-lg .offset-lg-key{margin-left: "value" !important;}
    `;
let sizeCSS = `
.font-key{font-size: "font-size";}

.tm-btn-key{line-height: "line-height";padding: "padding";font-size: "font-size";}
.tm-btn-key *{height: "line-height";display: inline-block;vertical-align: bottom;}
.tm-btn-key img{border-radius: 100px;}
.tm-btn-circle.tm-btn-key{height: "height";width: "height";padding:0px;line-height: "circle-line-height";}

.tm-nav-key li a{line-height: "line-height";padding: "padding";font-size: "font-size";}
.tm-nav-key li a *{height: "line-height";display: inline-block;vertical-align: bottom;}
.tm-nav-key li a img{border-radius: 100px;}
.tm-nav-circle.tm-nav-key li a{height: "height";width: "height";padding:0px;line-height: "circle-line-height";}
	`;
let colorCSS = `
/** color **/
.color-key,.active-color-key.tm-active,.tm-window-xs .color-xs-key,.tm-window-sm .color-sm-key,.tm-window-md .color-md-key,.tm-window-lg .color-lg-key{color: "color" !important;}
@media (hover: hover) {
	.active-color-key:hover{color: "color" !important;}
	.hover-color-key:hover{color: "color" !important;}
}
/** background color **/
.bg-key,.active-bg-key.tm-active,.tm-window-xs .bg-xs-key,.tm-window-sm .bg-sm-key,.tm-window-md .bg-md-key,.tm-window-lg .bg-lg-key{color: "whiteColor";background-color: "color" !important;}
@media (hover: hover) {
	.active-bg-key:hover{ color: "whiteColor";background-color: "color" !important;}
	.hover-bg-key:hover{ color: "whiteColor";background-color: "color" !important;}
}
/** border color **/
.bd-key,.hover-bd-key:hover{border-color: "color" !important;}
.bdl-key,.bdlr-key,.hover-bdl-key:hover,.hover-bdlr-key:hover{border-left-color: "color" !important;}
.bdr-key,.bdlr-key,.hover-bdr-key:hover,.hover-bdlr-key:hover{border-right-color: "color" !important;}
.bdt-key,.bdtb-key,.hover-bdt-key:hover,.hover-bdtb-key:hover{border-top-color: "color" !important;}
.bdb-key,.bdtb-key,.hover-bdb-key:hover,.hover-bdtb-key:hover{border-bottom-color: "color" !important;}
	`;
let componentCSS = `
/** btn color **/
.tm-btn.color-key,
.tm-btn.bd-key,
.tm-btn-color-key
{color: "color" !important;border-color: "color" !important;} /**background-color: #FFFFFF !important;**/
/** btn background color **/
.tm-btn.bg-key,
.tm-btn-bg-key{color: #FFFFFF !important;border-color: "color" !important;background-color: "color" !important;}

/** nav color **/
.tm-nav.color-key{color: "color" !important;border-color: "color" !important;}/**background-color: #FFFFFF !important;**/
/** nav background color **/
.tm-nav.bg-key{color: #FFFFFF !important;border-color: "color" !important;background-color: "color" !important;}
	`;
let componentActiveCSS = `
/** btn color **/
.tm-btn.color-key.tm-active,.tm-btn.color-key.tm-hover,
.tm-btn.bd-key.tm-active,.tm-btn.bd-key.tm-hover,
.tm-btn-color-key.tm-active,.tm-btn-color-key.tm-hover
{color: #FFFFFF !important;border-color: "color" !important;background-color: "color" !important;}
@media (hover: hover) {
	.tm-btn.color-key:hover,
	.tm-btn.bd-key:hover,
	.tm-btn-color-key:hover
	{color: #FFFFFF !important;border-color: "color" !important;background-color: "color" !important;}
}
/** btn background color **/
.tm-btn.bg-key.tm-active,.tm-btn.bg-key.tm-hover,
.tm-btn-bg-key.tm-active,.tm-btn-bg-key.tm-hover
{border-color: "activeColor" !important;background-color: "activeColor" !important;}
@media (hover: hover) {
	.tm-btn.bg-key:hover,
	.tm-btn-bg-key:hover
	{border-color: "activeColor" !important;background-color: "activeColor" !important;}
}
.tm-btn.active-color-key.tm-active,.tm-btn.active-color-key.tm-hover,
.tm-btn-active-color-key.tm-active,.tm-btn-active-color-key.tm-hover
{background-color: #FFFFFF !important;border-color: "color" !important;color: "color" !important;}
@media (hover: hover) {
	.tm-btn.active-color-key:hover,
	.tm-btn-active-color-key:hover
	{background-color: #FFFFFF !important;border-color: "color" !important;color: "color" !important;}
}
.tm-btn.active-bg-key.tm-active,.tm-btn.active-bg-key.tm-hover,
.tm-btn-active-bg-key.tm-active,.tm-btn-active-bg-key.tm-hover
{color: #FFFFFF !important;background-color: "color" !important;border-color: "color" !important;}
@media (hover: hover) {
	.tm-btn.active-bg-key:hover,
	.tm-btn-active-bg-key:hover
	{color: #FFFFFF !important;background-color: "color" !important;border-color: "color" !important;}
}

/** link color **/
.tm-link.color-key.tm-active,.tm-link.color-key.tm-hover,
.tm-link-color-key.tm-active,.tm-link-color-key.tm-hover
{color: "color";background-color: transparent;border-bottom-color: "color";}
@media (hover: hover) {
	.tm-link.color-key:hover,
	.tm-link-color-key:hover
	{color: "color";background-color: transparent;border-bottom-color: "color";}
}
.tm-link.active-color-key.tm-active,.tm-link.active-color-key.tm-hover,
.tm-link-active-color-key.tm-active,.tm-link-active-color-key.tm-hover
{color: "color" !important;background-color: transparent !important;border-bottom-color: "color" !important;}
@media (hover: hover) {
	.tm-link.active-color-key:hover,
	.tm-link-active-color-key:hover
	{color: "color" !important;background-color: transparent !important;border-bottom-color: "color" !important;}
}


/** nav color **/
.tm-nav.color-key .tm-active > a,
.tm-nav.color-key .tm-hover > a,
.tm-nav .color-key .tm-active > a,
.tm-nav .color-key .tm-hover > a,
.tm-nav .color-key.tm-active > a,
.tm-nav .color-key.tm-hover > a
{color: #FFFFFF !important;border-color: "color" !important;background-color: "color" !important;}
@media (hover: hover) {
	.tm-nav.color-key a:hover,
	.tm-nav .color-key a:hover
	{color: #FFFFFF !important;border-color: "color" !important;background-color: "color" !important;}
}
/** nav background color **/
.tm-nav.bg-key .tm-active > a,
.tm-nav.bg-key .tm-hover > a,
.tm-nav .bg-key .tm-active > a,
.tm-nav .bg-key .tm-hover > a,
.tm-nav .bg-key.tm-active > a,
.tm-nav .bg-key.tm-hover > a
{border-color: "activeColor" !important;background-color: "activeColor" !important;}
@media (hover: hover) {
	.tm-nav.bg-key a:hover,
	.tm-nav .bg-key a:hover
	{border-color: "activeColor" !important;background-color: "activeColor" !important;}
}
.tm-nav.active-color-key .tm-active > a,
.tm-nav.active-color-key .tm-hover > a,
.tm-nav .active-color-key .tm-active > a,
.tm-nav .active-color-key .tm-hover > a,
.tm-nav .active-color-key.tm-active > a,
.tm-nav .active-color-key.tm-hover > a
{background-color: #FFFFFF !important;border-color: "color" !important;color: "color" !important;}
@media (hover: hover) {
	.tm-nav.active-color-key a:hover,
	.tm-nav .active-color-key a:hover
	{background-color: #FFFFFF !important;border-color: "color" !important;color: "color" !important;}
}
.tm-nav.active-bg-key .tm-active > a,
.tm-nav.active-bg-key .tm-hover > a,
.tm-nav .active-bg-key .tm-active > a,
.tm-nav .active-bg-key .tm-hover > a,
.tm-nav .active-bg-key.tm-active > a,
.tm-nav .active-bg-key.tm-hover > a
{color: #FFFFFF !important;background-color: "color" !important;border-color: "color" !important;}
@media (hover: hover) {
	.tm-nav.active-bg-key a:hover,
	.tm-nav .active-bg-key a:hover
	{color: #FFFFFF !important;background-color: "color" !important;border-color: "color" !important;}
}
	`;

/* harmony default export */ var style_css = ({ distanceCSS, colCSS, sizeCSS, colorCSS, componentCSS, componentActiveCSS });
// CONCATENATED MODULE: ./packages/base/style/index.js





let style = new Object();
style.config = style_config;

style.getSizesCSS = function () {
	var css = '\n';
	style_config.sizes.forEach((one, index) => {
		let key = one.name;
		let tmKey = '';
		let sizeKey = '';
		if (tool.isEmpty(key)) {
			key = '';
			tmKey = '';
			sizeKey = '';
		} else {
			tmKey = 'tm-window-' + key + ' ';
			sizeKey = '.tm-size-' + key + '';
			key = '-' + key;
		}
		var text = style_css.sizeCSS;
		text = tool.replaceAll(text, 'tm-key ', tmKey);

		text = tool.replaceAll(text, '.tm-size-key', sizeKey);
		text = tool.replaceAll(text, '-key', key);
		for (let n in one) {
			text = tool.replaceAll(text, '"' + n + '"', one[n]);
		}
		css += text;
	});
	return css;
};
style.getDistancesCSS = function () {
	var css = '\n';
	style_config.distances.forEach((distance, index) => {
		let key = distance;
		var text = style_css.distanceCSS;
		text = tool.replaceAll(text, '-key', '-' + key + '');
		text = tool.replaceAll(text, '"value"', distance + 'px');
		css += text;
		css += '\n';

	});
	return css;
};
style.getColsCSS = function () {
	var css = '\n';
	style_config.cols.forEach((col, index) => {
		var key = col.value;
		key = key.replace(".", "-");

		var text = style_css.colCSS;
		text = tool.replaceAll(text, '-key', '-' + key + '');
		text = tool.replaceAll(text, '"value"', col.width);
		css += text;
		css += '\n';

	});
	return css;
};

style.getColorsCSS = function () {
	var css = '';
	style_config.colors.forEach((one, index) => {
		css += style.getColorCSS(one);
	});
	return css;
};
style.getColorCSS = function (one) {
	var css = '';
	var name = one.value;
	var text = one.text;
	var colors = one.colors;
	colors.forEach((color, index) => {
		var key = name;
		if (index > 0) {
			key = name + '-' + index;
		}
		var whiteColor = "";
		if (name != 'white') {
			whiteColor = "#FFFFFF";
		}
		let colorText = style_css.colorCSS;
		colorText = tool.replaceAll(colorText, '-key', '-' + key + '');
		colorText = tool.replaceAll(colorText, '"whiteColor"', whiteColor);
		colorText = tool.replaceAll(colorText, '"color"', color);
		css += colorText;
	});
	return css;
};

style.getComponentsCSS = function () {
	var css = '';
	style_config.colors.forEach((one, index) => {
		css += style.getComponentCSS(one);
	});
	return css;
};
style.getComponentCSS = function (one) {
	var css = '';
	var name = one.value;
	var text = one.text;
	var colors = one.colors;
	colors.forEach((color, index) => {
		var key = name;
		if (index > 0) {
			key = name + '-' + index;
			// return;
		}
		if (index >= colors.length - 1) {
			return;
		}
		var whiteColor = "";
		if (name != 'white') {
			whiteColor = "#FFFFFF";
		}
		var activeColor = color;
		if (colors.length >= 10) {
			if (index == 0 || index == 5) {
				activeColor = colors[8];
			} else {
				activeColor = colors[index + 1];
			}
		}

		var text = style_css.componentCSS;
		text = tool.replaceAll(text, '-key', '-' + key + '');
		text = tool.replaceAll(text, '"whiteColor"', whiteColor);
		text = tool.replaceAll(text, '"activeColor"', activeColor);
		text = tool.replaceAll(text, '"color"', color);
		css += text;
		css += '\n';
	});
	css += style.getComponentActiveCSS(one);
	return css;
};
style.getComponentActiveCSS = function (one) {
	var css = '';
	var name = one.value;
	var text = one.text;
	var colors = one.colors;
	colors.forEach((color, index) => {
		var key = name;
		if (index > 0) {
			key = name + '-' + index;
			// return;
		}
		if (index >= colors.length - 1) {
			return;
		}
		var whiteColor = "";
		if (name != 'white') {
			whiteColor = "#FFFFFF";
		}
		var activeColor = color;
		if (colors.length >= 10) {
			if (index == 0 || index == 5) {
				activeColor = colors[8];
			} else {
				activeColor = colors[index + 1];
			}
		}

		var text = style_css.componentActiveCSS;
		text = tool.replaceAll(text, '-key', '-' + key + '');
		text = tool.replaceAll(text, '"whiteColor"', whiteColor);
		text = tool.replaceAll(text, '"activeColor"', activeColor);
		text = tool.replaceAll(text, '"color"', color);
		css += text;
		css += '\n';
	});
	return css;
};
style.initStyle = function (arg) {

	if (window._COOS_STYLE_DOCUMENT == null) {
		let heads = document.getElementsByTagName('head');
		if (heads != null && heads.length > 0) {
			let head = heads[0];
			let dom = document.createElement('style');
			dom.setAttribute('id', 'COOS-STYLE');
			dom.setAttribute('type', 'text/css');
			if (head.firstChild) {
				head.insertBefore(dom, head.firstChild);
			} else {
				head.appendChild(dom);
			}
			window._COOS_STYLE_DOCUMENT = dom;
		}

		if (window._COOS_STYLE_DOCUMENT != null) {
			window._COOS_STYLE_BASE_NODE = document.createTextNode("");
			window._COOS_STYLE_DOCUMENT.appendChild(window._COOS_STYLE_BASE_NODE);

			window._COOS_STYLE_COMPONENT_NODE = document.createTextNode("");
			window._COOS_STYLE_DOCUMENT.appendChild(window._COOS_STYLE_COMPONENT_NODE);
		}
	}
};
style.appendBase = function (css) {
	style.initStyle();
	if (window._COOS_STYLE_BASE_NODE != null && css) {
		window._COOS_STYLE_BASE_NODE.appendData(css);
	}
};
style.appendComponent = function (css) {
	style.initStyle();
	if (window._COOS_STYLE_COMPONENT_NODE != null && css) {
		window._COOS_STYLE_COMPONENT_NODE.appendData(css);
	}
};

style.init = function () {
	var css = '';
	css += style.getSizesCSS();
	css += style.getDistancesCSS();
	css += style.getColsCSS();
	css += style.getColorsCSS();
	style.appendBase(css);
	css = style.getComponentsCSS();
	style.appendComponent(css);
};

style.writeColorCSS = function (one) {
	var css = style.getColorCSS(one);
	style.appendBase(css);
	css = style.getComponentCSS(one);
	style.appendComponent(css);
};
var map = {};
style.addColor = function (main) {
	if (map[main]) {
		return map[main];
	}
	if (tool.isEmpty(main) || main.indexOf('#') != 0) {
		return;
	}
	var one = {};
	var color = new style_Color({
		main: main
	});
	one.colors = color.getColors();
	one.text = main;
	one.value = main.substring(1);
	style.writeColorCSS(one);
	map[main] = one;
	return one;
};

style.getColorClass = function (color) {
	if (tool.isEmpty(color) || color.indexOf('{') >= 0) {
		return "";
	}
	if (color.indexOf('#') == 0) {
		style.addColor(color);
		color = color.substring('1');
	}
	return 'color-' + color;
};
style.getBGColorClass = function (color) {
	if (tool.isEmpty(color) || color.indexOf('{') >= 0) {
		return "";
	}
	if (color.indexOf('#') == 0) {
		style.addColor(color);
		color = color.substring('1');
	}
	return 'bg-' + color;
};

style.getActiveColorClass = function (color) {
	if (tool.isEmpty(color) || color.indexOf('{') >= 0) {
		return "";
	}
	if (color.indexOf('#') == 0) {
		style.addColor(color);
		color = color.substring('1');
	}
	return 'active-color-' + color;
};
style.getActiveBGColorClass = function (color) {
	if (tool.isEmpty(color) || color.indexOf('{') >= 0) {
		return "";
	}
	if (color.indexOf('#') == 0) {
		style.addColor(color);
		color = color.substring('1');
	}
	return 'active-bg-' + color;
};

/* harmony default export */ var base_style = (style);
// CONCATENATED MODULE: ./packages/base/Message.js

var Message = function (message, options) {
	this.initOptions(message, options);
};

Message.prototype.initOptions = function (message, options) {
	this.message = message;
	options = options || {};
	this.options = options;
	this.type = options.type;
	this.html = options.html;
	if (tool.isEmpty(options.duration)) {
		this.duration = 3000;
	} else {
		this.duration = parseInt(options.duration);
	}
	this.init();
};

Message.prototype.init = function () {
	this.initView();
};

Message.prototype.initView = function () {
	let message = document.createElement('div');

	let className = 'tm-message ';

	let type = this.type.toLowerCase();
	if (type == 'info') {
		className += 'tm-message-info ';
	} else if (type == 'success') {
		className += 'tm-message-success ';
	} else if (type == 'warn' || type == 'warning') {
		className += 'tm-message-warn ';
	} else if (type == 'error') {
		className += 'tm-message-error ';
	} else {
		className += ' ';
	}
	message.setAttribute("class", className);

	let icon = document.createElement('span');
	icon.setAttribute("class", "tm-message-icon");
	if (tool.isTrue(this.options['show-icon'])) {
		message.appendChild(icon);
	}

	let content = document.createElement('span');
	content.setAttribute("class", "tm-message-content");
	message.appendChild(content);

	if (this.message != null) {
		if (tool.isObject(this.message)) {
			content.appendChild(this.message);
		} else {
			content.innerHTML = '' + this.message;
		}
	}
	if (this.html != null) {
		if (tool.isObject(this.html)) {
			content.appendChild(this.html);
		} else {
			content.innerHTML = '' + this.html;
		}
	}
	let that = this;
	let close = document.createElement('a');
	close.setAttribute("class", "tm-message-close");
	close.addEventListener("click", function (e) {
		that.close();
	});
	if (tool.isTrue(this.options['show-close'])) {
		message.appendChild(close);
	}

	this.message = message;
	this.append(this.message);
};

Message.prototype.show = function () {
	setTimeout(() => {
		tool.addClass(this.message, 'tm-show');
		if (this.duration > 0) {
			setTimeout(() => {
				this.close();
			}, this.duration)
		}
	}, 10);
};
Message.prototype.close = function () {
	this.destroy();

};
Message.prototype.destroy = function () {
	tool.removeClass(this.message, 'tm-show');
	setTimeout(() => {
		if (this.message.parentElement) {
			this.message.parentElement.removeChild(this.message);
		}
		this.options.onDestroy && this.options.onDestroy();
	}, 300)

};

Message.prototype.append = function (message) {

	if (window.COOS_MESSAGE_BOX == null) {
		window.COOS_MESSAGE_BOX = document.createElement('div');
		window.COOS_MESSAGE_BOX.setAttribute("class", "tm-message-box");
		document.body.appendChild(window.COOS_MESSAGE_BOX);
	}
	window.COOS_MESSAGE_BOX.style['z-index'] = tool.getNextZIndex();
	window.COOS_MESSAGE_BOX.appendChild(message);
};

/* harmony default export */ var base_Message = (Message);
// CONCATENATED MODULE: ./packages/base/Dialog.js

var Dialog = function (options) {
	this.initOptions(options);
};

Dialog.prototype.initOptions = function (options) {
	options = options || {};
	this.options = options;
	this.title = options.title;
	this.html = options.html;
	this.footer = options.footer;
	this.init();
};

Dialog.prototype.init = function () {
	this.initView();

};

Dialog.prototype.initView = function () {
	let zIndex = this.options['zIndex'] || this.options['z-index'];
	if (tool.isEmpty(zIndex)) {
		zIndex = tool.getNextZIndex();
	}
	this.zIndex = zIndex;

	let dialog = document.createElement("div");
	dialog.setAttribute("class", "tm-dialog");
	if (tool.isNotEmpty(this.options['width'])) {
		dialog.style['width'] = this.options['width'];
	}

	this.dialog = dialog;

	let header = document.createElement("div");
	header.setAttribute("class", "tm-dialog-header");

	if (this.title != null) {
		dialog.appendChild(header);

		let title = document.createElement("div");
		title.setAttribute("class", "tm-dialog-title");
		if (tool.isObject(this.title)) {
			title.appendChild(this.title);
		} else {
			title.innerHTML = '' + this.title;
		}
		header.appendChild(title);
	}

	if (tool.isTrue(this.options['show-close'])) {
		dialog.appendChild(header);
		let close = document.createElement("a");
		close.setAttribute("class", "tm-dialog-close");
		let that = this;
		close.addEventListener("click", function (e) {
			that.close();
		});
		header.appendChild(close);
	}

	let body = document.createElement("div");
	body.setAttribute("class", "tm-dialog-body");
	if (this.html != null) {
		dialog.appendChild(body);
		if (tool.isObject(this.html)) {
			body.appendChild(this.html);
		} else {
			body.innerHTML = '' + this.html;
		}
	}
	let footer = document.createElement("div");
	footer.setAttribute("class", "tm-dialog-footer");
	if (this.footer != null) {
		dialog.appendChild(footer);
		if (tool.isObject(this.footer)) {
			footer.appendChild(this.footer);
		} else {
			footer.innerHTML = '' + this.footer;
		}
	}
	let wrapper = document.createElement('div');
	this.wrapper = wrapper;
	wrapper.setAttribute("class", "tm-dialog-wrapper");
	wrapper.style['z-index'] = zIndex;

	wrapper.appendChild(dialog);
	document.body.appendChild(wrapper);

	if (tool.isTrue(this.options['middle'])) {
		let height = dialog.clientHeight;
		let top = (window.outerHeight - height) / 2 - 100;
		if (top < 50) {
			top = 50;
		}
		dialog.style.top = top + 'px';
	}

};

Dialog.prototype.show = function () {
	this.showMask();
	tool.addClass(this.wrapper, 'tm-show');
};

Dialog.prototype.showMask = function () {
	if (tool.isTrue(this.options['show-mask'])) {
		this.maskIndex = tool.showMask(this.zIndex - 1);
	}
};

Dialog.prototype.hide = function () {
	tool.removeClass(this.wrapper, 'tm-show');
	this.hideMask();
};

Dialog.prototype.hideMask = function () {
	if (this.maskIndex != null) {
		tool.hideMask(this.maskIndex);
		this.maskIndex = null;
	}
};

Dialog.prototype.onClose = function () {
	let flag = true;
	if (tool.isFunction(this.options.onClose)) {
		flag = this.options.onClose();
	}
	if (tool.isUndefined(flag) || tool.isTrue(flag)) {
		return true;
	}
	return false;
};


Dialog.prototype.onClosed = function () {
	if (tool.isFunction(this.options.onClosed)) {
		this.options.onClosed();
	}
};

Dialog.prototype.close = function () {
	let flag = this.onClose();
	if (!flag) {
		return false;
	}
	this.hide();

	this.onClosed();
	return true;
};

Dialog.prototype.destroy = function () {
	this.wrapper.parentElement.removeChild(this.wrapper);
	this.hideMask();
};

/* harmony default export */ var base_Dialog = (Dialog);
// CONCATENATED MODULE: ./packages/base/MessageBox.js


var MessageBox = function (message, options) {
	this.initOptions(message, options);
};

MessageBox.prototype.initOptions = function (message, options) {
	this.message = message;
	options = options || {};
	this.options = options;
	this.type = options.type;
	this.init();
};

MessageBox.prototype.init = function () {
	this.initView();
	this.dialog = new base_Dialog(this.options);
};

MessageBox.prototype.initView = function () {
	let html = document.createElement('div');

	let className = 'pdtb-20 pdlr-20 ';

	let type = this.type.toLowerCase();
	html.setAttribute("class", className);

	if (this.message != null) {
		if (tool.isObject(this.message)) {
			if (window.jQuery && this.message instanceof window.jQuery) {
				window.jQuery(html).append(this.message);
			} else {
				html.appendChild(this.message);
			}
		} else {
			html.innerHTML = '' + this.message;
		}
	}
	if (this.html != null) {
		if (tool.isObject(this.html)) {
			if (window.jQuery && this.html instanceof window.jQuery) {
				window.jQuery(html).append(this.html);
			} else {
				html.appendChild(this.html);
			}
		} else {
			html.innerHTML = '' + this.html;
		}
	}

	let footer = document.createElement('div');
	footer.setAttribute("class", '');

	let confirm = document.createElement('a');
	confirm.setAttribute("class", 'tm-btn bg-green');
	confirm.innerHTML = '确认';

	let that = this;
	confirm.addEventListener("click", function (e) {
		that.close(true);
	});

	let cancel = document.createElement('a');
	cancel.setAttribute("class", 'tm-btn bg-grey');
	cancel.innerHTML = '取消';
	cancel.addEventListener("click", function (e) {
		that.close(false);
	});

	if (type == 'alert') {
		footer.appendChild(confirm);
		this.options.footer = footer;
	} else if (type == 'confirm') {
		this.options.footer = footer;
		this.options['show-close'] = true;
		footer.appendChild(cancel);

		footer.appendChild(confirm);
	}



	if (tool.isEmpty(this.options.width)) {
		this.options.width = '400px';
	}
	this.options.title = this.options.title || '提示'
	this.options.html = html;
	this.options.middle = true;
	this.options['show-mask'] = true;

	this.onClose_ = this.options.onClose;
	this.options.onClose = function () {
		return that.onClose(false)
	}
	this.options.onClosed = function () {
		that.cancel();
	};

};

MessageBox.prototype.onClose = function (arg) {
	let flag = true;
	if (tool.isFunction(this.onClose_)) {
		flag = this.onClose_(arg);
	}
	if (tool.isUndefined(flag) || tool.isTrue(flag)) {
		return true;
	}
	return false;
};

MessageBox.prototype.close = function (arg) {
	let flag = this.onClose(arg);
	if (!flag) {
		return;
	}
	let res = null;
	if (arg) {
		res = this.confirm();
	} else {
		res = this.cancel();
	}
	if (tool.isUndefined(res) || tool.isTrue(res)) {
		this.destroy();
	}
};

MessageBox.prototype.cancel = function () {
	if (tool.isFunction(this.options.onCancel)) {
		return this.options.onCancel();
	}
};
MessageBox.prototype.confirm = function () {
	if (tool.isFunction(this.options.onConfirm)) {
		return this.options.onConfirm();
	}

};

MessageBox.prototype.show = function () {
	this.dialog.show();
};

MessageBox.prototype.hide = function () {
	this.dialog.hide();
};

MessageBox.prototype.destroy = function () {
	this.dialog.destroy();
};

/* harmony default export */ var base_MessageBox = (MessageBox);
// CONCATENATED MODULE: ./packages/base/index.js






var base_co = tool;

base_co.style = base_style;

base_co.addColor = function (color) {
    if (base_co.isNotEmpty(color)) {
        if (color.startsWith("#")) {
            base_style.addColor(color);
            color = color.substring(1);
        }
    }
    return color;
}

base_co.info = function (arg1, options) {
    options = options || {};
    options.type = 'info';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new base_Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};
base_co.success = function (arg1, options) {
    options = options || {};
    options.type = 'success';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new base_Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};

base_co.warn = function (arg1, options) {
    options = options || {};
    options.type = 'warn';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new base_Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};

base_co.error = function (arg1, options) {
    options = options || {};
    options.type = 'error';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new base_Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};

base_co.alert = function (arg1) {
    let confirm,
        cancel,
        options = {};

    for (var i = 1; i < arguments.length; i++) {
        var argument = arguments[i];
        if (base_co.isFunction(argument)) {
            if (confirm == null) {
                confirm = argument;
            } else {
                cancel = argument;
            }
        } else if (base_co.isObject(argument)) {
            options = argument;
        }
    }
    options.type = 'alert';
    options.onConfirm = function () {
        if (base_co.isFunction(confirm)) {
            return confirm();
        }
    };
    options.onCancel = function () {
        if (base_co.isFunction(cancel)) {
            return cancel();
        }
    };

    var messageBox = new base_MessageBox(arg1, options);
    messageBox.show();
    return new Promise((resolve, reject) => {
        if (!base_co.isFunction(confirm)) {
            confirm = resolve;
        }
        if (!base_co.isFunction(cancel)) {
            cancel = reject;
        }
    });
};

base_co.confirm = function (arg1) {
    let confirm,
        cancel,
        options = {};

    for (var i = 1; i < arguments.length; i++) {
        var argument = arguments[i];
        if (base_co.isFunction(argument)) {
            if (confirm == null) {
                confirm = argument;
            } else {
                cancel = argument;
            }
        } else if (base_co.isObject(argument)) {
            options = argument;
        }
    }
    options.type = 'confirm';
    options.onConfirm = function () {
        if (base_co.isFunction(confirm)) {
            return confirm();
        }
    };
    options.onCancel = function () {
        if (base_co.isFunction(cancel)) {
            return cancel();
        }
    };

    var messageBox = new base_MessageBox(arg1, options);
    messageBox.show();
    return new Promise((resolve, reject) => {
        if (!base_co.isFunction(confirm)) {
            confirm = resolve;
        }
        if (!base_co.isFunction(cancel)) {
            cancel = reject;
        }
    });
};

base_co.dialog = function (options) {
    return new base_Dialog(options);
};

/* harmony default export */ var base = (base_co);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Color.vue?vue&type=template&id=bb4e5aae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.classObject,on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Color.vue?vue&type=template&id=bb4e5aae&

// CONCATENATED MODULE: ./packages/components/BaseVue.js



/* harmony default export */ var BaseVue = ({
    classObject() {
        let option = this;
        let res = {};
        if (base.isNotEmpty(option.color)) {
            let color = base.addColor(option.color);
            res["color-" + color] = true;
        }
        if (base.isNotEmpty(option.bg)) {
            let bg = base.addColor(option.bg);
            res["bg-" + bg] = true;
        }
        if (base.isNotEmpty(option.rd)) {
            res["rd-" + option.rd] = true;
        }
        if (base.isNotEmpty(option.pd)) {
            res["pd-" + option.pd] = true;
        }
        if (base.isNotEmpty(option.mg)) {
            res["mg-" + option.mg] = true;
        }
        if (base.isNotEmpty(option.ft)) {
            res["ft-" + option.ft] = true;
        }
        if (base.isNotEmpty(option.float)) {
            res["float-" + option.float] = true;
        }
        if (base.isNotEmpty(option.display)) {
            res["display-" + option.display] = true;
        }
        if (base.isNotEmpty(option.col)) {
            res["col-" + option.col] = true;
        }
        if (base.isNotEmpty(option.bd)) {
            res["bd-" + option.bd] = true;
        }
        if (base.isNotEmpty(option.bdcolor)) {
            res["bd-" + option.bdcolor] = true;
        }
        if (
            base.isNotEmpty(option.disabled) &&
            (base.isTrue(option.disabled) || option.disabled == "disabled")
        ) {
            res["tm-disabled"] = true;
        }
        if (this.isTeamideBtn) {
            if (base.isNotEmpty(this.size)) {
                res["tm-btn-" + this.size] = true;
            }
            if (base.isTrue(this.circle) || this.circle == "circle") {
                res["tm-btn-circle"] = true;
            }
        }
        if (this.isTeamideNav) {
            if (base.isNotEmpty(this.size)) {
                res["tm-nav-" + this.size] = true;
            }
            if (base.isTrue(this.circle) || this.circle == "circle") {
                res["tm-nav-circle"] = true;
            }
        }
        if (base.isTrue(this.vertical) || this.vertical == "vertical") {
            res["tm-vertical"] = true;
        }
        if (base.isTrue(this.horizontal) || this.horizontal == "horizontal") {
            res["tm-horizontal"] = true;
        }

        return res;
    }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Color.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Colorvue_type_script_lang_js_ = ({
  name: "tm-color",
  data() {
    return {};
  },
  props: ["color", "bg", "disabled"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Color.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Colorvue_type_script_lang_js_ = (Colorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/components/Color.vue





/* normalize component */

var component = normalizeComponent(
  components_Colorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Color = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Btn.vue?vue&type=template&id=393d6158&
var Btnvue_type_template_id_393d6158_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"tm-btn",class:_vm.classObject,attrs:{"href":_vm.href,"target":_vm.target},on:{"click":_vm.handleClick}},[(_vm.html != null && _vm.html != '')?_c('span',{domProps:{"innerHTML":_vm._s(_vm.html)}}):(_vm.text != null && _vm.text != '')?_c('span',{domProps:{"textContent":_vm._s(_vm.text)}}):_vm._e(),_vm._t("default")],2)}
var Btnvue_type_template_id_393d6158_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Btn.vue?vue&type=template&id=393d6158&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Btn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var Btnvue_type_script_lang_js_ = ({
  name: "tm-btn",
  data() {
    return { isTeamideBtn: true };
  },
  props: [
    "href",
    "target",
    "html",
    "text",
    "color",
    "bg",
    "size",
    "disabled",
    "rd",
    "circle"
  ],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Btn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Btnvue_type_script_lang_js_ = (Btnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Btn.vue





/* normalize component */

var Btn_component = normalizeComponent(
  components_Btnvue_type_script_lang_js_,
  Btnvue_type_template_id_393d6158_render,
  Btnvue_type_template_id_393d6158_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Btn = (Btn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Link.vue?vue&type=template&id=705e1e56&
var Linkvue_type_template_id_705e1e56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"tm-link",class:_vm.classObject,attrs:{"href":_vm.href,"target":_vm.target},on:{"click":_vm.handleClick}},[(_vm.html != null && _vm.html != '')?_c('span',{domProps:{"innerHTML":_vm._s(_vm.html)}}):(_vm.text != null && _vm.text != '')?_c('span',{domProps:{"textContent":_vm._s(_vm.text)}}):_vm._e(),_vm._t("default")],2)}
var Linkvue_type_template_id_705e1e56_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Link.vue?vue&type=template&id=705e1e56&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Link.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var Linkvue_type_script_lang_js_ = ({
  name: "tm-link",
  data() {
    return {};
  },
  props: ["href", "target", "html", "text", "color", "disabled"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Link.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Linkvue_type_script_lang_js_ = (Linkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Link.vue





/* normalize component */

var Link_component = normalizeComponent(
  components_Linkvue_type_script_lang_js_,
  Linkvue_type_template_id_705e1e56_render,
  Linkvue_type_template_id_705e1e56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Link = (Link_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Col.vue?vue&type=template&id=e4e6fb62&
var Colvue_type_template_id_e4e6fb62_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-col",class:_vm.classObject,on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var Colvue_type_template_id_e4e6fb62_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Col.vue?vue&type=template&id=e4e6fb62&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Col.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Colvue_type_script_lang_js_ = ({
  name: "tm-col",
  data() {
    return {};
  },
  props: ["col", "bdcolor", "bd", "pd", "mg", "rd"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Col.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Colvue_type_script_lang_js_ = (Colvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Col.vue





/* normalize component */

var Col_component = normalizeComponent(
  components_Colvue_type_script_lang_js_,
  Colvue_type_template_id_e4e6fb62_render,
  Colvue_type_template_id_e4e6fb62_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Col = (Col_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Row.vue?vue&type=template&id=395ae08b&
var Rowvue_type_template_id_395ae08b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-row",class:_vm.classObject,on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var Rowvue_type_template_id_395ae08b_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Row.vue?vue&type=template&id=395ae08b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Row.vue?vue&type=script&lang=js&
//
//
//
//
//
//




/* harmony default export */ var Rowvue_type_script_lang_js_ = ({
  name: "tm-row",
  data() {
    return {};
  },
  props: ["bd", "bdcolor", "pd", "mg", "rd"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Row.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Rowvue_type_script_lang_js_ = (Rowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Row.vue





/* normalize component */

var Row_component = normalizeComponent(
  components_Rowvue_type_script_lang_js_,
  Rowvue_type_template_id_395ae08b_render,
  Rowvue_type_template_id_395ae08b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Row = (Row_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Layout.vue?vue&type=template&id=c6773234&
var Layoutvue_type_template_id_c6773234_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-layout",style:({ width: _vm.w, height: _vm.h })},[_vm._t("default")],2)}
var Layoutvue_type_template_id_c6773234_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Layout.vue?vue&type=template&id=c6773234&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Layout.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Layoutvue_type_script_lang_js_ = ({
  name: "tm-layout",
  props: ["width", "height", "bar"],
  data() {
    return {
      co: base,
      w: "100%",
      h: "100%",
      barSize: "2px",
      moveSize: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    getHW(type) {
      if (base.isNotEmpty(this[type])) {
        let res = "";
        if (this[type] == "auto") {
          res = "calc(100%";
          let parentChildren = this.$parent.$children;
          if (parentChildren != null) {
            parentChildren.forEach((one) => {
              if (one.isLayoutBar) {
                res += " - " + this.barSize;
              } else {
                if (one != this) {
                  if (base.isNotEmpty(one[type]) && one[type] != "auto") {
                    res += " - " + one[type];
                  }
                  let moveSize = one.getMoveSize();
                  if (base.isNotEmpty(moveSize)) {
                    if (moveSize < 0) {
                      res += " + " + -moveSize + "px";
                    } else {
                      res += " - " + moveSize + "px";
                    }
                  }
                }
              }
            });
          }
          if (base.isNotEmpty(this.moveSize)) {
            if (this.moveSize < 0) {
              res += " - " + -this.moveSize + "px";
            } else {
              res += "+" + this.moveSize + "px";
            }
          }
          res += ")";
        } else {
          if (base.isNotEmpty(this.moveSize)) {
            res = "calc(" + this[type];
            if (this.moveSize < 0) {
              res += " - " + -this.moveSize + "px";
            } else {
              res += " + " + this.moveSize + "px";
            }
            res += ")";
          } else {
            res = this[type];
          }
        }
        return res;
      }
    },
    getMoveSize() {
      return this.moveSize;
    },
    onMoveX(moveSize) {
      this.moveSize = moveSize;
      let parentChildren = this.$parent.$children;
      if (parentChildren != null) {
        parentChildren.forEach((one) => {
          one.initSize && one.initSize();
        });
      }
    },
    onMoveY(moveSize) {
      this.moveSize = moveSize;
      let parentChildren = this.$parent.$children;
      if (parentChildren != null) {
        parentChildren.forEach((one) => {
          one.initSize && one.initSize();
        });
      }
    },
    initSize() {
      let w = this.getHW("width");
      if (base.isNotEmpty(w)) {
        this.w = w;
      }
      let h = this.getHW("height");
      if (base.isNotEmpty(h)) {
        this.h = h;
      }
    },
    init() {
      this.initSize();
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {},
});

// CONCATENATED MODULE: ./packages/components/Layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Layoutvue_type_script_lang_js_ = (Layoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Layout.vue





/* normalize component */

var Layout_component = normalizeComponent(
  components_Layoutvue_type_script_lang_js_,
  Layoutvue_type_template_id_c6773234_render,
  Layoutvue_type_template_id_c6773234_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Layout = (Layout_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/LayoutBar.vue?vue&type=template&id=f6b682d6&
var LayoutBarvue_type_template_id_f6b682d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-layout-bar",class:_vm.classObject,style:({ width: _vm.w, height: _vm.h })},[_c('div',{staticClass:"tm-layout-bar-part",class:_vm.partClassObject,on:{"mousedown":_vm.mousedown}})])}
var LayoutBarvue_type_template_id_f6b682d6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/LayoutBar.vue?vue&type=template&id=f6b682d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/LayoutBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var LayoutBarvue_type_script_lang_js_ = ({
  name: "tm-layout-bar",
  props: ["left", "right", "top", "bottom", "color"],
  data() {
    return {
      co: base,
      isLayoutBar: true,
      w: null,
      h: null,
    };
  },
  computed: {
    classObject() {
      let option = this;
      let res = {};
      if (base.isNotEmpty(option.color)) {
        let color = base.addColor(option.color);
        res["bg-" + color] = true;
      }
      if (this.left != undefined) {
        res["tm-layout-bar-left"] = true;
      }
      if (this.right != undefined) {
        res["tm-layout-bar-right"] = true;
      }
      if (this.top != undefined) {
        res["tm-layout-bar-top"] = true;
      }
      if (this.bottom != undefined) {
        res["tm-layout-bar-bottom"] = true;
      }
      return res;
    },
    partClassObject() {
      let option = this;
      let res = {};
      if (base.isNotEmpty(option.color)) {
        let color = base.addColor(option.color);
        res["bg-" + color] = true;
      }
      return res;
    },
  },
  watch: {},
  methods: {
    mousedown(event) {
      if (this.controlLayout == null) {
        return;
      }
      // 获取event对象，兼容性写法
      event = event || window.event;
      // 鼠标按下时的位置
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
      this.downMoveSize = this.lastMoveSize;
      this.mouseDowned = true;
    },
    mouseup(event) {
      this.mouseDowned = false;
    },
    mousemove(event) {
      if (!this.mouseDowned) {
        return;
      }
      // 获取event对象，兼容性写法
      event = event || window.event;
      // 鼠标按下时的位置

      if (this.left != undefined || this.right != undefined) {
        let moveSize = event.clientX - this.mouseDownX;
        if (this.left != undefined) {
          moveSize = -moveSize;
        }
        if (base.isNotEmpty(this.downMoveSize)) {
          moveSize += this.downMoveSize;
        }
        this.lastMoveSize = moveSize;
        this.controlLayout.onMoveX(moveSize);
      }
      if (this.top != undefined || this.bottom != undefined) {
        let moveSize = event.clientY - this.mouseDownY;
        if (this.top != undefined) {
          moveSize = -moveSize;
        }
        if (base.isNotEmpty(this.downMoveSize)) {
          moveSize += this.downMoveSize;
        }
        this.lastMoveSize = moveSize;
        this.controlLayout.onMoveY(moveSize);
      }
    },
    getControlLayout() {
      let parentChildren = this.$parent.$children;
      let layout = null;
      if (parentChildren != null) {
        let index = parentChildren.indexOf(this);
        if (this.left != undefined || this.top != undefined) {
          layout = parentChildren[index + 1];
        }
        if (this.right != undefined || this.bottom != undefined) {
          layout = parentChildren[index - 1];
        }
      }
      return layout;
    },
    init() {
      this.controlLayout = this.getControlLayout();
      if (this.left != undefined || this.right != undefined) {
        this.h = "100%";
        this.w = this.$parent.barSize;
      }
      if (this.top != undefined || this.bottom != undefined) {
        this.w = "100%";
        this.h = this.$parent.barSize;
      }
      document.addEventListener("mouseup", (event) => {
        this.mouseup(event);
      });
      document.addEventListener("mousemove", (event) => {
        this.mousemove(event);
      });
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {},
});

// CONCATENATED MODULE: ./packages/components/LayoutBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LayoutBarvue_type_script_lang_js_ = (LayoutBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/LayoutBar.vue





/* normalize component */

var LayoutBar_component = normalizeComponent(
  components_LayoutBarvue_type_script_lang_js_,
  LayoutBarvue_type_template_id_f6b682d6_render,
  LayoutBarvue_type_template_id_f6b682d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LayoutBar = (LayoutBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Panel.vue?vue&type=template&id=4526554e&
var Panelvue_type_template_id_4526554e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-panel",class:_vm.classObject,on:{"click":_vm.handleClick}},[_c('div',{staticClass:"tm-panel-header"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._t("header")],2),_c('div',{staticClass:"tm-panel-body"},[_vm._t("default")],2),_c('div',{staticClass:"tm-panel-footer"},[_vm._t("footer")],2)])}
var Panelvue_type_template_id_4526554e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Panel.vue?vue&type=template&id=4526554e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Panel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Panelvue_type_script_lang_js_ = ({
  name: "tm-panel",
  data() {
    return {};
  },
  props: ["title", "bdcolor", "bdwidth", "bdplace", "rd"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Panelvue_type_script_lang_js_ = (Panelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Panel.vue





/* normalize component */

var Panel_component = normalizeComponent(
  components_Panelvue_type_script_lang_js_,
  Panelvue_type_template_id_4526554e_render,
  Panelvue_type_template_id_4526554e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Panel = (Panel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Header.vue?vue&type=template&id=8b38bd6e&
var Headervue_type_template_id_8b38bd6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-header",class:_vm.classObject,on:{"click":_vm.handleClick}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._t("default"),_c('div',{staticClass:"tm-header-nav"},[_vm._t("nav")],2)],2)}
var Headervue_type_template_id_8b38bd6e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Header.vue?vue&type=template&id=8b38bd6e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "tm-header",
  data() {
    return {};
  },
  props: ["title", "bdcolor", "bdwidth"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Header.vue





/* normalize component */

var Header_component = normalizeComponent(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_8b38bd6e_render,
  Headervue_type_template_id_8b38bd6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Body.vue?vue&type=template&id=50944105&
var Bodyvue_type_template_id_50944105_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-body",class:_vm.classObject,on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var Bodyvue_type_template_id_50944105_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/Body.vue?vue&type=template&id=50944105&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/Body.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Bodyvue_type_script_lang_js_ = ({
  name: "tm-body",
  data() {
    return {};
  },
  props: ["bdcolor", "bd", "pd", "mg"],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/Body.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bodyvue_type_script_lang_js_ = (Bodyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/Body.vue





/* normalize component */

var Body_component = normalizeComponent(
  components_Bodyvue_type_script_lang_js_,
  Bodyvue_type_template_id_50944105_render,
  Bodyvue_type_template_id_50944105_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Body = (Body_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/nav/Nav.vue?vue&type=template&id=40ffff58&
var Navvue_type_template_id_40ffff58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"tm-nav",class:_vm.classObject,on:{"click":_vm.handleClick}},[(_vm.items != null)?[_vm._l((_vm.items),function(item,index){return [_c('NavItem',{key:index,attrs:{"item":item}})]})]:_vm._e(),_vm._t("default")],2)}
var Navvue_type_template_id_40ffff58_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/nav/Nav.vue?vue&type=template&id=40ffff58&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/nav/NavItem.vue?vue&type=template&id=7a357890&
var NavItemvue_type_template_id_7a357890_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"tm-nav-item",class:_vm.classObject,on:{"click":_vm.handleClick}},[_c('a',{attrs:{"href":_vm.href,"target":_vm.target}},[(_vm.html != null && _vm.html != '')?_c('span',{domProps:{"innerHTML":_vm._s(_vm.html)}}):(_vm.text != null && _vm.text != '')?_c('span',{domProps:{"textContent":_vm._s(_vm.text)}}):_vm._e(),_vm._t("default")],2)])}
var NavItemvue_type_template_id_7a357890_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/nav/NavItem.vue?vue&type=template&id=7a357890&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/nav/NavItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NavItemvue_type_script_lang_js_ = ({
  name: "tm-nav-item",
  components: {},
  data() {
    return { isTeamideNav: true };
  },
  props: [
    "href",
    "target",
    "html",
    "text",
    "color",
    "bg",
    "size",
    "disabled",
    "rd",
    "circle",
    "item",
  ],
  computed: {
    classObject: BaseVue.classObject,
  },
  watch: {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
  mounted() {},
  destroyed() {},
});

// CONCATENATED MODULE: ./packages/components/nav/NavItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_NavItemvue_type_script_lang_js_ = (NavItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/nav/NavItem.vue





/* normalize component */

var NavItem_component = normalizeComponent(
  nav_NavItemvue_type_script_lang_js_,
  NavItemvue_type_template_id_7a357890_render,
  NavItemvue_type_template_id_7a357890_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavItem = (NavItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/nav/Nav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Navvue_type_script_lang_js_ = ({
  name: "tm-nav",
  components: { NavItem: NavItem },
  data() {
    return { isTeamideNav: true };
  },
  props: [
    "color",
    "bg",
    "size",
    "disabled",
    "rd",
    "circle",
    "items",
    "vertical",
    "horizontal"
  ],
  computed: {
    classObject: BaseVue.classObject
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  },
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/nav/Nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_Navvue_type_script_lang_js_ = (Navvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/nav/Nav.vue





/* normalize component */

var Nav_component = normalizeComponent(
  nav_Navvue_type_script_lang_js_,
  Navvue_type_template_id_40ffff58_render,
  Navvue_type_template_id_40ffff58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Nav = (Nav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/nav/NavSub.vue?vue&type=template&id=1d6272c2&
var NavSubvue_type_template_id_1d6272c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"tm-nav-sub",class:_vm.classObject,on:{"click":_vm.handleClick}},[_c('a',{attrs:{"href":_vm.href,"target":_vm.target}},[(_vm.html != null && _vm.html != '')?_c('span',{domProps:{"innerHTML":_vm._s(_vm.html)}}):(_vm.text != null && _vm.text != '')?_c('span',{domProps:{"textContent":_vm._s(_vm.text)}}):_vm._e()]),_c('ul',[(_vm.items != null)?[_vm._l((_vm.items),function(item,index){return [_c('NavItem',{key:index,attrs:{"item":item}})]})]:_vm._e(),_vm._t("default")],2)])}
var NavSubvue_type_template_id_1d6272c2_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/nav/NavSub.vue?vue&type=template&id=1d6272c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/nav/NavSub.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var NavSubvue_type_script_lang_js_ = ({
  name: "tm-nav-sub",
  components: { NavItem: NavItem },
  data() {
    return { isTeamideNav: true };
  },
  props: [
    "href",
    "target",
    "html",
    "text",
    "color",
    "bg",
    "size",
    "disabled",
    "rd",
    "circle",
    "item",
    "items",
  ],
  computed: {
    classObject: BaseVue.classObject,
  },
  watch: {},
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
  mounted() {},
  destroyed() {},
});

// CONCATENATED MODULE: ./packages/components/nav/NavSub.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_NavSubvue_type_script_lang_js_ = (NavSubvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/nav/NavSub.vue





/* normalize component */

var NavSub_component = normalizeComponent(
  nav_NavSubvue_type_script_lang_js_,
  NavSubvue_type_template_id_1d6272c2_render,
  NavSubvue_type_template_id_1d6272c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavSub = (NavSub_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/Frame.vue?vue&type=template&id=fc781de0&
var Framevue_type_template_id_fc781de0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-frame",class:_vm.classObject,style:(_vm.styleObject)},[_vm._t("default")],2)}
var Framevue_type_template_id_fc781de0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/frame/Frame.vue?vue&type=template&id=fc781de0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/Frame.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Framevue_type_script_lang_js_ = ({
  name: "tm-frame",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      return res;
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/frame/Frame.vue?vue&type=script&lang=js&
 /* harmony default export */ var frame_Framevue_type_script_lang_js_ = (Framevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/frame/Frame.vue





/* normalize component */

var Frame_component = normalizeComponent(
  frame_Framevue_type_script_lang_js_,
  Framevue_type_template_id_fc781de0_render,
  Framevue_type_template_id_fc781de0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Frame = (Frame_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FrameMain.vue?vue&type=template&id=76915dc9&
var FrameMainvue_type_template_id_76915dc9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-frame-main",class:_vm.classObject,style:(_vm.styleObject)},[_vm._t("default")],2)}
var FrameMainvue_type_template_id_76915dc9_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/frame/FrameMain.vue?vue&type=template&id=76915dc9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FrameMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FrameMainvue_type_script_lang_js_ = ({
  name: "tm-frame-main",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      if (this.$parent && this.$parent.isFrmae) {
      }
      return {};
    },
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {},
});

// CONCATENATED MODULE: ./packages/components/frame/FrameMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var frame_FrameMainvue_type_script_lang_js_ = (FrameMainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/frame/FrameMain.vue





/* normalize component */

var FrameMain_component = normalizeComponent(
  frame_FrameMainvue_type_script_lang_js_,
  FrameMainvue_type_template_id_76915dc9_render,
  FrameMainvue_type_template_id_76915dc9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FrameMain = (FrameMain_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FrameHeader.vue?vue&type=template&id=d9e8b64a&
var FrameHeadervue_type_template_id_d9e8b64a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-frame-header",class:_vm.classObject,style:(_vm.styleObject)},[_vm._t("default")],2)}
var FrameHeadervue_type_template_id_d9e8b64a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/frame/FrameHeader.vue?vue&type=template&id=d9e8b64a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FrameHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FrameHeadervue_type_script_lang_js_ = ({
  name: "tm-frame-header",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "height", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      let height = this.height;
      if (base.isNotEmpty(height)) {
        res.height = height;
      }
      return res;
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/frame/FrameHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var frame_FrameHeadervue_type_script_lang_js_ = (FrameHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/frame/FrameHeader.vue





/* normalize component */

var FrameHeader_component = normalizeComponent(
  frame_FrameHeadervue_type_script_lang_js_,
  FrameHeadervue_type_template_id_d9e8b64a_render,
  FrameHeadervue_type_template_id_d9e8b64a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FrameHeader = (FrameHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FrameFooter.vue?vue&type=template&id=8166d8c0&
var FrameFootervue_type_template_id_8166d8c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-frame-footer",class:_vm.classObject,style:(_vm.styleObject)},[_vm._t("default")],2)}
var FrameFootervue_type_template_id_8166d8c0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/frame/FrameFooter.vue?vue&type=template&id=8166d8c0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FrameFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FrameFootervue_type_script_lang_js_ = ({
  name: "tm-frame-footer",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      let height = this.height;
      if (base.isNotEmpty(height)) {
        res.height = height;
      }
      return res;
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/frame/FrameFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var frame_FrameFootervue_type_script_lang_js_ = (FrameFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/frame/FrameFooter.vue





/* normalize component */

var FrameFooter_component = normalizeComponent(
  frame_FrameFootervue_type_script_lang_js_,
  FrameFootervue_type_template_id_8166d8c0_render,
  FrameFootervue_type_template_id_8166d8c0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FrameFooter = (FrameFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"537b2d5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FramePart.vue?vue&type=template&id=2ac78cd6&
var FramePartvue_type_template_id_2ac78cd6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tm-frame-part",class:_vm.classObject,style:(_vm.styleObject)},[_vm._t("default")],2)}
var FramePartvue_type_template_id_2ac78cd6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/frame/FramePart.vue?vue&type=template&id=2ac78cd6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/frame/FramePart.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FramePartvue_type_script_lang_js_ = ({
  name: "tm-frame-part",
  data() {
    return {};
  },
  props: ["bg", "bdcolor", "bd", "pd", "mg", "rd", "width", "horizontal"],
  computed: {
    classObject: BaseVue.classObject,
    styleObject() {
      let res = {};
      let width = this.width;
      if (base.isNotEmpty(width)) {
        res.width = width;
      } else {
        if (
          this.$parent &&
          this.$parent.$slots &&
          this.$parent.$slots.default
        ) {
          this.$parent.$slots.default.some((vnode, index) => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            if (tag == "tm-frame-part") {
              res.flex = "1";
            }
          });
        }
      }
      return res;
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  destroyed() {}
});

// CONCATENATED MODULE: ./packages/components/frame/FramePart.vue?vue&type=script&lang=js&
 /* harmony default export */ var frame_FramePartvue_type_script_lang_js_ = (FramePartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/frame/FramePart.vue





/* normalize component */

var FramePart_component = normalizeComponent(
  frame_FramePartvue_type_script_lang_js_,
  FramePartvue_type_template_id_2ac78cd6_render,
  FramePartvue_type_template_id_2ac78cd6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FramePart = (FramePart_component.exports);
// EXTERNAL MODULE: ./packages/style/font.css
var font = __webpack_require__("3953");

// EXTERNAL MODULE: ./packages/style/base.css
var style_base = __webpack_require__("94cf");

// EXTERNAL MODULE: ./packages/style/make.css
var make = __webpack_require__("35d6");

// EXTERNAL MODULE: ./packages/style/nav.css
var nav = __webpack_require__("b474");

// EXTERNAL MODULE: ./packages/style/frame.css
var style_frame = __webpack_require__("8dae");

// EXTERNAL MODULE: ./packages/style/layout.css
var layout = __webpack_require__("5591");

// CONCATENATED MODULE: ./packages/index.js




























const components = [components_Color, Btn, Link, Col, Row, Layout, LayoutBar, Panel, Header, Body, Nav, NavItem, NavSub, Frame, FrameMain, FrameHeader, FrameFooter, FramePart];

const install = function (Vue, options) {
  components.forEach(component => {
    if (component.name) {
      Vue.component(component.name, component);
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

base.install = install;

if (typeof window !== 'undefined') {
  window.teamide = base;
  base.style.init();
}

/* harmony default export */ var packages_0 = (base);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});