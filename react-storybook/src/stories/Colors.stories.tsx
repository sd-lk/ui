import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Colors',
}

const Template: ComponentStory<() => JSX.Element> = (args) => (
  <div className="flex gap-2">
    <div className="flex flex-col gap-2">
      <div className="text-ink-primary border-ink-primary dark:text-ink-primary-dark dark:border-ink-primary-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-primary dark:bg-primary-dark text-ink rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 mr-14">
      <div className="text-ink-secondary border-ink-secondary dark:text-ink-secondary-dark dark:border-ink-secondary-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-secondary dark:bg-secondary-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-error border-ink-error dark:text-ink-error-dark dark:border-ink-error-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-error dark:bg-error-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-success border-ink-success dark:text-ink-success-dark dark:border-ink-success-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-success dark:bg-success-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-warning border-ink-warning dark:text-ink-warning-dark dark:border-ink-warning-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-warning dark:bg-warning-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 mr-14">
      <div className="text-ink-info border-ink-info dark:text-ink-info-dark dark:border-ink-info-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-info dark:bg-info-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink border-ink dark:text-ink-dark dark:border-ink-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-paper dark:bg-paper-dark text-ink dark:text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 justify-end">
      <div className="bg-paper-2 text-ink rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
