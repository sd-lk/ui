import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Utility/Badge',
}

const Template: ComponentStory<'span'> = ({ className, ...props }) => (
  <span {...props} className={clsx('ui-badge', className)}>
    123K
  </span>
)

export const Primary = Template.bind({})
Primary.args = { className: 'ui-paper-primary text-ink' }
