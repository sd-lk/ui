import { ComponentStory } from '@storybook/react'
import { LinearProgress } from '@sdlk/react'

export default {
  title: 'React/LinearProgress',
}

const Template: ComponentStory<typeof LinearProgress> = (props) => (
  <LinearProgress {...props} />
)

export const Primary = Template.bind({})
Primary.args = { className: 'text-ink-primary' }
