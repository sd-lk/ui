import { ComponentStory } from '@storybook/react'
import { LinearProgress } from '@sdlk/react'

export default {
  title: 'Example/LinearProgress',
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<typeof LinearProgress> = (props) => (
  <LinearProgress {...props} />
)

export const Primary = Template.bind({})
Primary.args = { className: 'text-ink-primary' }
