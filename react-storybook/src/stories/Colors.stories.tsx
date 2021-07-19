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
      <div className="bg-paper-primary dark:bg-paper-primary-dark text-ink rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 mr-14">
      <div className="text-ink-secondary border-ink-secondary dark:text-ink-secondary-dark dark:border-ink-secondary-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-paper-secondary dark:bg-paper-secondary-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-error border-ink-error dark:text-ink-error-dark dark:border-ink-error-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-paper-error dark:bg-paper-error-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-success border-ink-success dark:text-ink-success-dark dark:border-ink-success-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-paper-success dark:bg-paper-success-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-warning border-ink-warning dark:text-ink-warning-dark dark:border-ink-warning-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-paper-warning dark:bg-paper-warning-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 mr-14">
      <div className="text-ink-info border-ink-info dark:text-ink-info-dark dark:border-ink-info-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="bg-paper-info dark:bg-paper-info-dark text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
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
