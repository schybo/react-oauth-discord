"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiscordLogin = exports.DiscordButtonStory = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url-search-params.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.url.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./discordButton.css");
const _excluded = ["discordClientId", "redirectUri", "responseType", "scopes", "debug", "primary", "backgroundColor", "size", "label"],
  _excluded2 = ["primary", "backgroundColor", "size", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// Example DISCORD_WEB_URL
// https://discord.com/api/oauth2/authorize?client_id=1077903194962796556&redirect_uri=http%3A%2F%2Flocalhost%3A8910%2F.redwood%2Ffunctions%2FdiscordAuth&response_type=code&scope=identify%20email

const DISCORD_BASE_OAUTH_URL = 'https://discord.com/api/oauth2/authorize';
const DISCORD_CLIENT_ID = '1077903194962796556';
const DISCORD_REDIRECT_URI = 'http://localhost:8910/.redwood/functions/discordAuth';
const DiscordLogin = _ref => {
  let {
      discordClientId,
      redirectUri,
      responseType = 'code',
      scopes = ['identify', 'email'],
      debug = false,
      primary,
      backgroundColor,
      size,
      label
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const params = new URLSearchParams({
    client_id: discordClientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope: scopes.join(' ')
  });
  if (debug) {
    console.log("Parameter string: ".concat(params.toString()));
  }
  const url = new URL(DISCORD_BASE_OAUTH_URL);
  url.search = params;
  if (debug) {
    console.log("Final URL: ".concat(url, "}"));
  }

  /* box-shadow: none;
    border-color: #d2e3fc;
    outline: none; hover */

  const mode = primary ? 'discord-button--primary' : 'discord-button--secondary';
  return /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    className: 'discord-link'
  }, /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ['discord-button', "discord-button--".concat(size), mode].join(' '),
    style: backgroundColor && {
      backgroundColor
    }
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 25,
      height: 25,
      marginRight: 5
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 245 240",
    fill: "#7289da"
  }, /*#__PURE__*/_react.default.createElement("path", {
    className: "st0",
    d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "st0",
    d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
  }))), /*#__PURE__*/_react.default.createElement("span", null, label || 'Sign in with Discord')));
};

/**
 * Primary UI component for user interaction
 */
exports.DiscordLogin = DiscordLogin;
const DiscordButtonStory = _ref2 => {
  let {
      primary,
      backgroundColor,
      size,
      label
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement(DiscordLogin, {
    discordClientId: DISCORD_CLIENT_ID,
    redirectUri: DISCORD_REDIRECT_URI,
    debug: true,
    props: props
  });
};
exports.DiscordButtonStory = DiscordButtonStory;
DiscordButtonStory.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes.default.bool,
  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,
  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: _propTypes.default.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func
};
DiscordButtonStory.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};