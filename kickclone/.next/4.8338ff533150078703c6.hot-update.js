webpackHotUpdate(4,{

/***/ "./pages/test1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ExploreList__ = __webpack_require__("./components/ExploreList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Profile__ = __webpack_require__("./components/Profile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_NavBar__ = __webpack_require__("./components/NavBar.js");
var _jsxFileName = '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/pages/test1.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();

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
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = HomePage;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(HomePage, 'HomePage', '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/pages/test1.js');
	reactHotLoader.register(_default, 'default', '/Users/jeanecarlos/Desktop/Projects/hacknyu/kickclone/pages/test1.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/test1")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8338ff533150078703c6.hot-update.js.map