import { forwardRef, ElementType, Ref } from 'react'
import clsx from 'clsx'

import {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '../PolymorphicComponent'

export type BadgeProps = {
  className?: string
}

export type BadgeConfig<
  E extends ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, Partial<BadgeProps>>

const defaultElement = 'span'

export const createBadge = <C extends ElementType = typeof defaultElement>(
  config?: BadgeConfig<C>
): PolymorphicComponent<C, BadgeProps> =>
  forwardRef(
    <E extends ElementType = C>(
      {
        className,
        children,
        element,
        ...rest
      }: PolymorphicComponentProps<E, BadgeProps>,
      ref: Ref<Element>
    ) => {
      const Tag: ElementType = config?.element || element || defaultElement

      return (
        <Tag
          {...config}
          {...rest}
          className={clsx('ui-badge', config?.className, className)}
          ref={ref}
        >
          {children}
        </Tag>
      )
    }
  ) as PolymorphicComponent<C, BadgeProps>
