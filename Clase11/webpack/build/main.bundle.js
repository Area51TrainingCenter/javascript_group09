/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Alarma = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _relojClase = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alarma = exports.Alarma = function (_Reloj) {
	_inherits(Alarma, _Reloj);

	function Alarma(elemento, horaAlarma) {
		_classCallCheck(this, Alarma);

		return _possibleConstructorReturn(this, (Alarma.__proto__ || Object.getPrototypeOf(Alarma)).call(this, elemento));
	}

	_createClass(Alarma, [{
		key: "agregarAlarma",
		value: function agregarAlarma(horaAlarma) {
			this.setearAlarma(horaAlarma);
		}
	}]);

	return Alarma;
}(_relojClase.Reloj);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reloj = exports.Reloj = function () {
	function Reloj(elemento) {
		_classCallCheck(this, Reloj);

		this.elemento = elemento;
		this.listaAlarmas = [];
	}

	_createClass(Reloj, [{
		key: "actualizar",
		value: function actualizar() {
			this.tiempo = new Date();

			this.horas = this.tiempo.getHours();
			this.minutos = this.tiempo.getMinutes();
			this.segundos = this.tiempo.getSeconds();

			this.horas = this.horas < 10 ? "0" + this.horas : this.horas;
			this.minutos = this.minutos < 10 ? "0" + this.minutos : this.minutos;
			this.segundos = this.segundos < 10 ? "0" + this.segundos : this.segundos;

			this.elemento.innerHTML = this.horas + ":" + this.minutos + ":" + this.segundos;

			this.verificarAlarmas(this.horas, this.minutos, this.segundos);
		}
	}, {
		key: "verificarAlarmas",
		value: function verificarAlarmas(horas, minutos, segundos) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.listaAlarmas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var alarma = _step.value;

					if (alarma.horas == horas && alarma.minutos == minutos && alarma.segundos == segundos) {
						console.log("Alarma sonando");
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: "iniciar",
		value: function iniciar() {
			var _this = this;

			this.actualizar();

			setInterval(function () {
				return _this.actualizar();
			}, 1000);
		}
	}, {
		key: "setearAlarma",
		value: function setearAlarma(horaAlarma) {
			this.listaAlarmas.push(horaAlarma);
		}
	}]);

	return Reloj;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _alarmaClase = __webpack_require__(0);

var h1 = document.querySelector("h1");
var horaAlarma = { horas: 20, minutos: 29, segundos: 50 };

var alarma = new _alarmaClase.Alarma(h1);
alarma.agregarAlarma(horaAlarma);
alarma.iniciar();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map