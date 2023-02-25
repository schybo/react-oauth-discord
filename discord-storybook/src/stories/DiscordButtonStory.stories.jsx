import React from 'react'

import { DiscordButtonStory } from './DiscordButtonStory'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DiscordButtonStory',
  component: DiscordButtonStory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DiscordButtonStory {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'DiscordButtonStory',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'DiscordButtonStory',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'DiscordButtonStory',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'DiscordButtonStory',
}
