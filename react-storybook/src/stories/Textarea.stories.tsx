import { ComponentStory } from '@storybook/react'
import { TextArea } from '@sdlk/react'

export default {
  title: 'React/TextArea',
}

const InputTemplate: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} />
)

export const Default = InputTemplate.bind({})
Default.args = { caption: 'Caption', rows: 4, required: true }

export const CustomBg = InputTemplate.bind({})
CustomBg.args = {
  caption: 'Caption',
  rows: 4,
  // required: true,
  className: 'ui-bg-paper-info',
}

export const Autoheight = InputTemplate.bind({})
Autoheight.args = { caption: 'Caption', rows: 1, autoHeight: true }

export const Fancy = InputTemplate.bind({})
Fancy.args = {
  caption: 'Fancy',
  fancy: true,
  rows: 1,
  autoHeight: true,
  required: true,
}
