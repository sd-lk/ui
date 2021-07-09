import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'
import { Badge } from '@sdlk/react'

export default {
  title: 'Utility/Badge',
}

const Template: ComponentStory<typeof Badge> = ({ className, ...props }) => (
  <Badge {...props} className={clsx('ui-badge', className)}>
    123K
  </Badge>
)

export const Primary = Template.bind({})
Primary.args = { className: 'ui-paper-primary text-ink' }
