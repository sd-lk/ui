import { ComponentStory } from '@storybook/react'

export default {
  title: 'Utility/Switch',
}

const Checkbox: ComponentStory<'input'> = (props) => (
  <input type="checkbox" {...props} />
)

export const Default = Checkbox.bind({})
Default.args = { className: 'ui-switch' }

export const Primary = Checkbox.bind({})
Primary.args = { className: 'ui-switch checked:ui-paper-primary' }

export const Small = Checkbox.bind({})
Small.args = { className: 'ui-switch-small checked:ui-paper-success' }

export const Big = Checkbox.bind({})
Big.args = {
  className: 'ui-paper-error ui-switch-big checked:ui-paper-info',
  defaultChecked: true,
}
