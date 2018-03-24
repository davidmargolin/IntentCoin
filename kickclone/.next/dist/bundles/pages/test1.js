module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/components/Card.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { width: 220, backgroundColor: 'white', height: 165, boxShadow: "1px 1px 4px #cEcEcE", borderRadius: 6, margin: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.props.image, style: { alignSelf: 'center', maxWidth: '100%', maxHeight: '100%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        })
      );
    }
  }]);

  return Card;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./components/CardSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__("./components/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/components/CardSection.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CardSection = function (_Component) {
	_inherits(CardSection, _Component);

	function CardSection() {
		_classCallCheck(this, CardSection);

		return _possibleConstructorReturn(this, (CardSection.__proto__ || Object.getPrototypeOf(CardSection)).apply(this, arguments));
	}

	_createClass(CardSection, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ style: { padding: 20 }, __source: {
						fileName: _jsxFileName,
						lineNumber: 7
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h2',
					{ style: { marginLeft: 30 }, __source: {
							fileName: _jsxFileName,
							lineNumber: 8
						}
					},
					' ',
					this.props.title
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{
						style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' },
						__source: {
							fileName: _jsxFileName,
							lineNumber: 9
						}
					},
					this.props.image_list.map(function (item, index) {
						return (
							// <Link
							// 	to={'/' + this.props.title + '/' + index + '/' + item['name']}
							// >
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], { image: item['profile_picture'], __source: {
									fileName: _jsxFileName,
									lineNumber: 16
								}
							})
							// </Link>

						);
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{
							style: {
								flexDirection: 'column',
								textAlign: 'center',
								width: 270,
								height: 195,
								justifyContent: 'center',
								display: 'flex'
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 19
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							't',
							{ style: { color: '#6A6FEA' }, __source: {
									fileName: _jsxFileName,
									lineNumber: 29
								}
							},
							'See More'
						)
					)
				)
			);
		}
	}]);

	return CardSection;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CardSection);

/***/ }),

/***/ "./components/ExploreList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardSection__ = __webpack_require__("./components/CardSection.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/components/ExploreList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ExploreList = function (_Component) {
  _inherits(ExploreList, _Component);

  function ExploreList() {
    _classCallCheck(this, ExploreList);

    return _possibleConstructorReturn(this, (ExploreList.__proto__ || Object.getPrototypeOf(ExploreList)).apply(this, arguments));
  }

  _createClass(ExploreList, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { padding: 20 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardSection__["a" /* default */], { image_list: this.props.health, title: 'Health', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardSection__["a" /* default */], { image_list: this.props.environment, title: 'Environment', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardSection__["a" /* default */], { image_list: this.props.education, title: 'Education', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        })
      );
    }
  }]);

  return ExploreList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ExploreList);

/***/ }),

/***/ "./components/NavBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/components/NavBar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    padding: 0;\n    margin: 0;\n\n  }\n'], ['\n  body {\n    padding: 0;\n    margin: 0;\n\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tbackground-color: white;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n'], ['\n\tbackground-color: white;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\twidth: 100%;\n\tbackground-color: white;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbox-shadow: 1px 1px 2px #cecece;\n'], ['\n\twidth: 100%;\n\tbackground-color: white;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbox-shadow: 1px 1px 2px #cecece;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tborder-radius: 50%;\n\tmargin: 14px;\n\twidth: 50px;\n\theight: 50px;\n\tborder-color: black;\n\tborder-radius: 5px;\n'], ['\n\tborder-radius: 50%;\n\tmargin: 14px;\n\twidth: 50px;\n\theight: 50px;\n\tborder-color: black;\n\tborder-radius: 5px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\twidth: 375px;\n\theight: 30px;\n\tborder-radius: 1;\n\toutline: none;\n\tfont-family: \'Source Sans Pro\', sans-serif;\n\tfont-size: 18px;\n\tpadding: 8px;\n\tmargin-left: 70px;\n\tfont-weight: bold;\n'], ['\n\twidth: 375px;\n\theight: 30px;\n\tborder-radius: 1;\n\toutline: none;\n\tfont-family: \'Source Sans Pro\', sans-serif;\n\tfont-size: 18px;\n\tpadding: 8px;\n\tmargin-left: 70px;\n\tfont-weight: bold;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tfont-family: \'Source Sans Pro\', sans-serif;\n\tfont-size: 30px;\n\tcolor: black;\n\tflex: 2;\n'], ['\n\tfont-family: \'Source Sans Pro\', sans-serif;\n\tfont-size: 30px;\n\tcolor: black;\n\tflex: 2;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tjustify-content: \'flex-end\';\n\tlist-style-type: none;\n\tcolor: #6a6fea;\n\tfont-size: 20px;\n\tfont-weight: bolder;\n\tmargin-right: 30px;\n\tfont-family: \'Source Sans Pro\', sans-serif;\n'], ['\n\tjustify-content: \'flex-end\';\n\tlist-style-type: none;\n\tcolor: #6a6fea;\n\tfont-size: 20px;\n\tfont-weight: bolder;\n\tmargin-right: 30px;\n\tfont-family: \'Source Sans Pro\', sans-serif;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\tdisplay: block;\n\tpadding: 8px;\n\ttext-decoration: none;\n'], ['\n\tdisplay: block;\n\tpadding: 8px;\n\ttext-decoration: none;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject);

var NavLeft = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject2);

var NavBar1 = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject3);

var Logo = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.img(_templateObject4);

var Input = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input(_templateObject5);
var MainHeader = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.h1(_templateObject6);
var ProjectButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.ul(_templateObject7);
var ProjectButtonLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject8);

var NavBar = function (_Component) {
	_inherits(NavBar, _Component);

	function NavBar() {
		_classCallCheck(this, NavBar);

		return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	}

	_createClass(NavBar, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				NavBar1,
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 74
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					NavLeft,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 75
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
						className: 'Logo',
						src: 'https://i.pinimg.com/originals/3c/eb/9a/3ceb9ae6a1040db7fe5b5f35fcd05aac.jpg',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 77
						}
					}),
					' ',
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						MainHeader,
						{ className: 'Name', __source: {
								fileName: _jsxFileName,
								lineNumber: 83
							}
						},
						'CharityBlock'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, { type: 'text', placeholder: 'Search Charities...', __source: {
							fileName: _jsxFileName,
							lineNumber: 85
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					ProjectButton,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 87
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'button',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 88
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							ProjectButtonLink,
							{ href: '', __source: {
									fileName: _jsxFileName,
									lineNumber: 89
								}
							},
							'Make a project'
						)
					)
				)
			);
		}
	}]);

	return NavBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./components/Profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Card__ = __webpack_require__("./components/Card.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/components/Profile.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { borderRightWidth: 0.5, borderRightColor: 'lightgray', borderRightStyle: 'solid' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { height: 110, width: 400, backgroundColor: '#6A6FEA' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { position: 'relative', top: 20, left: 25, width: 320, display: 'flex' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://cdn.technologyreview.com/i/images/SO15MITKendall.timrowex299.jpg?sw=280', style: { width: 70, height: 70, borderRadius: 100 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { flexDirection: 'column', marginLeft: 15, justifyContent: 'center', display: 'flex' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                't',
                { style: { fontSize: 20, color: 'white', padding: 2 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  }
                },
                'David Margolin'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                't',
                { style: { fontSize: 12, color: 'white', padding: 2 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  }
                },
                'davidmargolin0305@gmail.com'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { style: { margin: 20, color: '#6A6FEA' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          'Your Projects'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Card__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          })
        )
      );
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Profile);

/***/ }),

/***/ "./pages/test1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ExploreList__ = __webpack_require__("./components/ExploreList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Profile__ = __webpack_require__("./components/Profile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_NavBar__ = __webpack_require__("./components/NavBar.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/pages/test1.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var HomePage = function (_Component) {
	_inherits(HomePage, _Component);

	function HomePage(props) {
		_classCallCheck(this, HomePage);

		var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

		_this.state = {
			health: [],
			edu: [],
			env: []
		};
		return _this;
	}

	_createClass(HomePage, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			var config = {
				apiKey: 'AIzaSyDhAV5hjYWpyG-9YnCMq9XgVFON27o6SpE',
				authDomain: 'wombat-344c7.firebaseapp.com',
				databaseURL: 'https://wombat-344c7.firebaseio.com',
				projectId: 'wombat-344c7',
				storageBucket: 'wombat-344c7.appspot.com',
				messagingSenderId: '97936250813'
			};
			try {
				__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp(config);
			} catch (err) {
				// we skip the "already exists" message which is
				// not an actual error when we're hot-reloading
				if (!/already exists/.test(err.message)) {
					console.error('Firebase initialization error', err.stack);
				}
			}

			var health_list = [];
			__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('Health').once('value', function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					var childData = childSnapshot.val();
					health_list.push(childData);
					_this2.setState({ health: health_list });
				});
			});
			var edu_list = [];
			__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('Education').once('value', function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					var childData = childSnapshot.val();
					edu_list.push(childData);
					_this2.setState({ edu: edu_list });
				});
			});
			var env_list = [];
			__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('Environment').once('value', function (snapshot) {
				snapshot.forEach(function (childSnapshot) {
					var childData = childSnapshot.val();
					env_list.push(childData);
					_this2.setState({ env: env_list });
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 71
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_NavBar__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 72
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ style: { display: 'flex', flexDirection: 'row', width: '100%' }, __source: {
							fileName: _jsxFileName,
							lineNumber: 74
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Profile__["a" /* default */], {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 75
						}
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_ExploreList__["a" /* default */], {
						education: this.state.edu,
						environment: this.state.env,
						health: this.state.health,
						style: { margin: 'auto', display: 'flex' },
						__source: {
							fileName: _jsxFileName,
							lineNumber: 76
						}
					})
				)
			);
		}
	}]);

	return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/test1.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=test1.js.map