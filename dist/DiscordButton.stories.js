"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;
var _react = _interopRequireDefault(require("react"));
var _DiscordButtonStory = require("./DiscordButtonStory");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Example/DiscordButtonStory',
  component: _DiscordButtonStory.DiscordButtonStory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
const Template = args => /*#__PURE__*/_react.default.createElement(_DiscordButtonStory.DiscordButtonStory, args);
const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'DiscordButtonStory'
};
const Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'DiscordButtonStory'
};
const Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'DiscordButtonStory'
};
const Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'DiscordButtonStory'
};