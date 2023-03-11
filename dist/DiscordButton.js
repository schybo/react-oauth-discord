'use strict';

var React = require('react');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".discord-button {\n  transition: all 0.218s;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  color: #3c4043;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: 'Google Sans', arial, sans-serif;\n  font-size: 12px;\n  height: 40px;\n  letter-spacing: 0.25px;\n  outline: none;\n  overflow: hidden;\n  padding: 0 12px;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  width: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.discord-button:hover {\n  box-shadow: none;\n  border-color: #d2e3fc;\n  background-color: rgba(66, 133, 244, 0.04);\n  outline: none;\n  transition: all 0.218s;\n}\n\n.discord-button--small {\n  font-size: 12px;\n  padding: 0 16px;\n}\n.discord-button--medium {\n  font-size: 14px;\n  padding: 0 20px;\n}\n.discord-button--large {\n  font-size: 16px;\n  padding: 0 24px;\n}\n";
styleInject(css_248z);

const _excluded = ["discordClientId", "redirectUri", "responseType", "scopes", "debug", "backgroundColor", "size", "label", "onClick", "newTab", "buttonClasses"];

// Example DISCORD_WEB_URL
// https://discord.com/api/oauth2/authorize?client_id=1077903194962796556&redirect_uri=http%3A%2F%2Flocalhost%3A8910%2F.redwood%2Ffunctions%2FdiscordAuth&response_type=code&scope=identify%20email

const DISCORD_BASE_OAUTH_URL = 'https://discord.com/api/oauth2/authorize';
const DiscordLogin = _ref => {
  let {
      discordClientId,
      redirectUri,
      responseType = 'code',
      scopes = ['identify', 'email'],
      debug = false,
      backgroundColor,
      size,
      label,
      onClick,
      newTab = false,
      buttonClasses
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const params = new URLSearchParams({
    client_id: discordClientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope: scopes.join(' ')
  });
  if (debug) {
    console.log("Parameter string: " + params.toString());
  }
  const url = new URL(DISCORD_BASE_OAUTH_URL);
  url.search = params;
  if (debug) {
    console.log("Final URL: " + url + "}");
  }
  const defaultOnClick = e => {
    e.preventDefault();
    // window.location.href = url
    newTab ? window.open(url, '_blank') : window.open(url);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick || defaultOnClick,
    className: "discord-button discord-button--" + size + " " + buttonClasses,
    style: backgroundColor && {
      backgroundColor
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 25,
      height: 25,
      marginRight: 5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 245 240",
    fill: "#7289da"
  }, /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "st0",
    d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
  }))), /*#__PURE__*/React.createElement("span", null, label && label != '' ? label : 'Sign in with Discord'));
};

exports.DiscordLogin = DiscordLogin;
//# sourceMappingURL=DiscordButton.js.map
