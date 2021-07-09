import { ComponentStory } from '@storybook/react'

export default {
  title: 'Utility/Paper',
}

const Template: ComponentStory<() => JSX.Element> = (args) => (
  <div className="flex gap-2">
    <div className="ui-paper rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-paper-primary rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-paper-secondary rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-paper-error rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-paper-success rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-paper-warning rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-paper-info rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
