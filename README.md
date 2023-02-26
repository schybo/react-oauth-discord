# react-oauth-discord

Discord OAuth2 React Button built for [**Schybo Quizzing**](https://schybo.com)

Sign users in automatically when they return to your site on any device or browser,
supports both the Authorization and Implicit flow

## Install

```sh
$ npm install @schybo-quizzing/react-oauth-discord@latest

# or

$ yarn add @schybo-quizzing/react-oauth-discord@latest
```

![button](https://schybo.com/images/discordButton.png)

## Demo & How to use to fetch user details

https://react-oauth.vercel.app/

## User authorization for Discord APIs (with custom button)

OAuth 2.0 implicit and authorization code flows for web apps

> OAuth2 enables application developers to build applications that utilize authentication and data from the Discord API. Within Discord, there are multiple types of OAuth2 authentication. We support the authorization code grant, the implicit grant, client credentials, and some modified special-for-Discord flows for Bots and Webhooks.

## How to use

1. Get your [**Discord API client ID**](https://discord.com/developers/applications)

https://discord.com/developers/applications > Application > OAuth2

> Key Point: Add both `http://localhost` and `http://localhost:<port_number>` to the Authorized JavaScript origins box for local tests or development.

2. Import Discord Button

### Sign In With Google

```jsx
import { DiscordLogin } from '@schybo-quizzing/react-oauth-discord'

<DiscordLogin
  discordClientId={DISCORD_CLIENT_ID}
  redirectUri={DISCORD_REDIRECT_URI}
  debug={true}
  backgroundColor={backgroundColor}
  size={size}
  label={label}
  newTab={newTab}
  props={props}>
<DiscordLogin>
```

#### Implicit flow

```jsx
import { DiscordLogin } from '@schybo-quizzing/react-oauth-discord'

const login = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.code;
}

<DiscordLogin
  discordClientId={DISCORD_CLIENT_ID}
  redirectUri={DISCORD_REDIRECT_URI}
  debug={true}
  backgroundColor={backgroundColor}
  size={size}
  label={label}
  newTab={newTab}
  props={props}
  onclick={login}>
<DiscordLogin>
```

## API

| Required | Prop            | Type                           | Description                                                                                                  |
| :------: | --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
|    ✓     | discordClientId | `string`                       | Your Discord Client Id. Find yours at: https://discord.com/developers/applications > Application > OAuth2    |
|    ✓     | redirectUri     | `function`                     | redirect Url after oAuth success or failure. See below for more information                                  |
|          | debug           | `boolean`                      | Provides helpful console debugging statements                                                                |
|          | backgroundColor | `string`                       | Background color of button                                                                                   |
|          | size            | `large` \| `medium` \| `small` | Button [size](https://developers.google.com/identity/gsi/web/reference/js-reference#size)                    |
|          | label           | `string`                       | Button contents. Default: `Sign in with Discord`                                                             |
|          | scopes          | `[string]`                     | String array of scopes you need access to. Default: `['identify', 'email']`. See below for more information. |
|          | responseType    | `string`                       | Response type wanted from Discord oAuth. Default: `code`                                                     |
|          | newTab          | `boolean`                      | Whether to open the oAuth box in a new tab                                                                   |
|          | onclick         | `function`                     | Optional click handler                                                                                       |
|          | props           | `JSON`                         | Optional extra props                                                                                         |
|          |

## redirectUri

URL to redirect too after success or failure of user auth. Will attach discord code to be used in follow up api requests as the query parameter `code`. Has to match one of the URLs under https://discord.com/developers/applications > Application > OAuth2. If doing server auth Authorization flow, redirect to your server endpoint handling the rest of the login. Otherwise you can redirect to your and handle there

## scopes

String array of scopes you need access to. Identify should always be applied, and if you're doing the Authorization flow you'll probably need `identify` as well. Default is ['identify', 'email']
