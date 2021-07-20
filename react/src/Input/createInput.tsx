import {
  forwardRef,
  FocusEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  ReactElement,
  ReactNode,
  ComponentProps,
  useState,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import clsx from 'clsx'

import { getRefCurrent } from '../helpers'

type BaseProps = ComponentProps<'input'>

export type InputProps = {
  after?: ReactElement
  before?: ReactElement
  caption?: ReactNode
  children?: ReactNode
  error?: ReactNode
  fancy?: boolean
}

type Props = InputProps & BaseProps

type InputFactory = (
  config: Partial<Props>
) => ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
>

export const createInput: InputFactory = ({
  className: configClassName,
  ...config
}) =>
  forwardRef(
    (props, externalRef): JSX.Element => {
      const {
        after,
        before,
        children,
        caption,
        className,
        defaultValue,
        disabled,
        error = '•',
        fancy,
        onBlur,
        onKeyDown,
        placeholder,
        style,
        type = 'text',
        value,
        ...rest
      } = { ...config, ...props }
      const defaultRef = useRef<HTMLInputElement>(null)
      const ref = externalRef || defaultRef
      const [, setState] = useState(0)

      const handleBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
          if (onBlur) onBlur(event)
          setState((state) => state + 1)
        },
        [onBlur]
      )

      const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
          if (children && event.code === 'Escape') event.currentTarget.blur()
          if (onKeyDown) onKeyDown(event)
        },
        [onKeyDown, children]
      )

      const isFilled =
        typeof (value || defaultValue || placeholder) !== 'undefined' ||
        !!getRefCurrent<HTMLInputElement>(ref)?.value

      return (
        <label
          className={clsx(
            'ui-input',
            after && 'ui-input--after',
            before && 'ui-input--before',
            children && 'ui-input--menu',
            disabled && 'ui-input--disabled',
            fancy && 'ui-input--fancy',
            isFilled && 'ui-input--filled',
            configClassName,
            className
          )}
          style={style}
        >
          {before}
          <span className="ui-input__wrapper">
            <input
              {...rest}
              defaultValue={defaultValue}
              disabled={disabled}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              ref={ref}
              type={type}
              value={value}
            />
            {caption && (
              <span className="ui-input__label">
                {caption}
                <span className="input__label--error-bullet">{error}</span>
              </span>
            )}
          </span>
          {after}
          {children && <nav className="ui-input__menu">{children}</nav>}
        </label>
      )
    }
  )
