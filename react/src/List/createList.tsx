import { forwardRef, ElementType, Ref } from 'react'
import clsx from 'clsx'

import {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '../PolymorphicComponent'

export type ListProps = { role?: 'string' }

export type ListConfig<
  E extends ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, Partial<ListProps>>

const defaultElement = 'ul'

export const createList = <C extends ElementType = typeof defaultElement>({
  className: configClassName,
  element: configElement,
  ...config
}: ListConfig<C>): PolymorphicComponent<C, ListProps> =>
  forwardRef(
    <E extends ElementType = C>(
      {
        className,
        element,
        children,
        ...rest
      }: PolymorphicComponentProps<E, ListProps>,
      ref: Ref<Element>
    ) => {
      const Tag: ElementType = configElement || element || defaultElement

      return (
        <Tag
          {...config}
          {...rest}
          className={clsx('ui-list', configClassName, className)}
          ref={ref}
        >
          {children}
        </Tag>
      )
    }
  ) as PolymorphicComponent<C, ListProps>
