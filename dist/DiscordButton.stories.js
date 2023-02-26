"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Large = void 0;
var _react = _interopRequireDefault(require("react"));
var _DiscordButton = require("./DiscordButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://book.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/DiscordButton',
  component: _DiscordButton.DiscordButtonStory,
  // More on argTypes: https://book.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://book.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_DiscordButton.DiscordButtonStory, args);
const Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Sign in with Discord'
};
const Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Sign in with Discord'
};