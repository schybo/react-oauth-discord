import React from 'react'

import { DiscordButtonStory } from './DiscordButton'

// More on default export: https://book.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DiscordButton',
  component: DiscordButtonStory,
  // More on argTypes: https://book.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// More on component templates: https://book.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DiscordButtonStory {...args} />

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Sign in with Discord',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Sign in with Discord',
}
