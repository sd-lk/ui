import { forwardRef, ElementType, Ref } from 'react'
import clsx from 'clsx'

import {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '../PolymorphicComponent'

export type SpinnerProps = { children?: never }

export type SpinnerConfig<
  E extends ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, Partial<SpinnerProps>>

const defaultElement = 'span'

export const createSpinner = <C extends ElementType = typeof defaultElement>({
  className: configClassName,
  element: configElement,
  ...config
}: SpinnerConfig<C>): PolymorphicComponent<C, SpinnerProps> =>
  forwardRef(
    <E extends ElementType = C>(
      {
        className,
        role = 'progressbar',
        element,
        ...rest
      }: PolymorphicComponentProps<E, SpinnerProps>,
      ref: Ref<Element>
    ) => {
      const Tag: ElementType = configElement || element || defaultElement

      return (
        <Tag
          {...config}
          {...rest}
          className={clsx('ui-spinner', configClassName, className)}
          ref={ref}
          role={role}
        />
      )
    }
  ) as PolymorphicComponent<C, SpinnerProps>
