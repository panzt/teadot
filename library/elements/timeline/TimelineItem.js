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

var _props = require('../../constant/props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineItem = function (_React$Component) {
	_inherits(TimelineItem, _React$Component);

	function TimelineItem(props) {
		_classCallCheck(this, TimelineItem);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineItem).call(this, props));
	}

	_createClass(TimelineItem, [{
		key: 'render',
		value: function render() {
			var props = this.props;
			var skin = props.skin;
			var className = props.className;
			var children = props.children;

			var others = _objectWithoutProperties(props, ['skin', 'className', 'children']);

			var klassName = (0, _klassName2.default)('timeline-item', _defineProperty({}, 'timeline-item--' + skin, skin), className);

			return _react2.default.createElement(
				'li',
				_extends({}, others, {
					className: klassName
				}),
				_react2.default.createElement('div', { className: 'timeline-item-tail' }),
				_react2.default.createElement('div', { className: 'timeline-item-origin' }),
				_react2.default.createElement(
					'div',
					{ className: 'timeline-item-content' },
					children
				)
			);
		}
	}]);

	return TimelineItem;
}(_react2.default.Component);

;

TimelineItem.propTypes = {
	skin: _react.PropTypes.oneOf(_props.SKINS),
	children: _react.PropTypes.node,
	className: _react.PropTypes.string
};

TimelineItem.defaultProps = {};

exports.default = TimelineItem;
//# sourceMappingURL=TimelineItem.js.map