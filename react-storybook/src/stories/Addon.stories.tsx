import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Addon',
}

const Template: ComponentStory<() => JSX.Element> = (args) => (
  <div className="ui-addon">A</div>
)

export const Primary = Template.bind({})
Primary.args = {}
