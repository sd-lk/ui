import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spinner } from '@sdlk/react'

export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    role: { control: 'text', defaultValue: 'propgress', description: 'sddsd' },
    'aria-valuenow': { control: 'number' },
    'aria-valuemin': { control: 'number' },
    'aria-valuemax': { control: 'number' },
    'aria-valuetext': { control: 'text' },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})

export const Customized = Template.bind({})
Customized.args = { className: 'w-12 h-12 border-4 ui-ink-info' }
