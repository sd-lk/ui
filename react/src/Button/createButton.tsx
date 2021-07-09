import { forwardRef, ElementType, Ref, ReactNode } from 'react'
import clsx from 'clsx'

import { Spinner } from '../Spinner'
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '../PolymorphicComponent'

export type ButtonProps = {
  busy?: boolean
  busyIndicator?: ReactNode
  className?: string
}

export type ButtonConfig<
  E extends ElementType = typeof defaultElement
> = PolymorphicComponentProps<E, Partial<ButtonProps>>

const defaultElement = 'button'

export const createButton = <C extends ElementType = typeof defaultElement>(
  config?: ButtonConfig<C>
): PolymorphicComponent<C, ButtonProps> =>
  forwardRef(
    <E extends ElementType = C>(
      {
        busy,
        busyIndicator = <Spinner />,
        className,
        children,
        element,
        ...rest
      }: PolymorphicComponentProps<E, ButtonProps>,
      ref: Ref<Element>
    ) => {
      const Tag: ElementType = config?.element || element || defaultElement

      return (
        <Tag
          aria-busy={busy}
          {...config}
          {...rest}
          className={clsx(
            'ui-button',
            busy && 'ui-button--busy',
            config?.className,
            className
          )}
          ref={ref}
        >
          {busy ? (
            <>
              <span>{children}</span>
              <span>{busyIndicator}</span>
            </>
          ) : (
            children
          )}
        </Tag>
      )
    }
  ) as PolymorphicComponent<C, ButtonProps>
