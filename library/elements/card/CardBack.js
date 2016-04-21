'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _klassName = require('teapan/klassName');

var _klassName2 = _interopRequireDefault(_klassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardBack = function (_React$Component) {
	_inherits(CardBack, _React$Component);

	function CardBack(props) {
		_classCallCheck(this, CardBack);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CardBack).call(this, props));
	}

	_createClass(CardBack, [{
		key: 'renderChildren',
		value: function renderChildren() {
			var props = this.props;
			var height = props.height;
			var flipped = props.flipped;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['height', 'flipped', 'className', 'children']);

			var klassName = (0, _klassName2.default)('card-back', 'clearfix', className);

			return _react2.default.createElement(
				'div',
				_extends({}, others, {
					className: klassName,
					tabIndex: -1,
					style: { opacity: flipped ? 1 : 0, height: height + 'px' }
				}),
				children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return this.props.flipped ? this.renderChildren() : null;
		}
	}]);

	return CardBack;
}(_react2.default.Component);

;

CardBack.propTypes = {
	flipped: _react.PropTypes.bool,
	height: _react.PropTypes.number,
	className: _react.PropTypes.string,
	children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string])
};

CardBack.defaultProps = {
	flipped: false
};

exports.default = CardBack;
//# sourceMappingURL=CardBack.js.map