import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Paper',
}

const Template: ComponentStory<() => JSX.Element> = (args) => (
  <div className="flex gap-2">
    <div className="ui-bg-paper rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-paper-primary rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-paper-secondary rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-paper-error rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-paper-success rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-paper-warning rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-paper-info rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
