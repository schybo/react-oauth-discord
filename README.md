# react-oauth-discord

# Usage

```
/**
 * Primary UI component for user interaction
 */
export const DiscordButtonStory = ({
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
  return (
    <DiscordLogin
      discordClientId={DISCORD_CLIENT_ID}
      redirectUri={DISCORD_REDIRECT_URI}
      debug={true}
      props={props}
    ></DiscordLogin>
  )
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
```
