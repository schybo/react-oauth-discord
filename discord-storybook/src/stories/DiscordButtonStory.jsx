import React from 'react'
import PropTypes from 'prop-types'
import './discordButtonStory.css'

// Example DISCORD_WEB_URL
// https://discord.com/api/oauth2/authorize?client_id=1077903194962796556&redirect_uri=http%3A%2F%2Flocalhost%3A8910%2F.redwood%2Ffunctions%2FdiscordAuth&response_type=code&scope=identify%20email

const DISCORD_BASE_OAUTH_URL = 'https://discord.com/api/oauth2/authorize'

const DiscordLogin = ({
  discordClientId,
  redirectUri,
  responseType = 'code',
  scopes = ['identify', 'email'],
  debug = false,
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const params = new URLSearchParams({
    client_id: discordClientId,
    redirect_uri: redirectUri,
    response_type: responseType,
    scope: scopes.join(' '),
  })

  if (debug) {
    console.log(`Parameter string: ${params.toString()}`)
  }
  const url = new URL(DISCORD_BASE_OAUTH_URL)
  url.search = params

  if (debug) {
    console.log(`Final URL: ${url}}`)
  }
  console.log('Final URL')

  /* box-shadow: none;
    border-color: #d2e3fc;
    outline: none; hover */

  const mode = primary ? 'discord-button--primary' : 'discord-button--secondary'

  return (
    <a href={url} className={'discord-link'}>
      <button
        type="button"
        className={['discord-button', `discord-button--${size}`, mode].join(
          ' '
        )}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        <div style={{ width: 25, height: 25, marginRight: 5 }}>
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 245 240"
            fill="#7289da"
          >
            <path
              className="st0"
              d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
            />
            <path
              className="st0"
              d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
            />
          </svg>
        </div>
        <span>{label || 'Sign in with Discord'}</span>
      </button>
    </a>
  )
}

// export default DiscordLogin

/**
 * Primary UI component for user interaction
 */
export const DiscordButtonStory = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  // return <DiscordLogin></DiscordLogin>
  return (
    <p>
      <DiscordLogin></DiscordLogin>
    </p>
  )
  // return (
  //   <button
  //     type="button"
  //     className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
  //     style={backgroundColor && { backgroundColor }}
  //     {...props}
  //   >
  //     {label}
  //   </button>
  // );
}

DiscordButtonStory.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
}

DiscordButtonStory.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
}