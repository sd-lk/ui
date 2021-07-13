import { ComponentStory } from '@storybook/react'

export default {
  title: 'Utility/Checkbox',
}

const Checkbox: ComponentStory<'input'> = (props) => (
  <input type="checkbox" {...props} />
)

export const Default = Checkbox.bind({})
Default.args = {
  className: 'ui-checkbox',
}

export const Primary = Checkbox.bind({})
Primary.args = { className: 'ui-checkbox ui-ink-secondary' }
