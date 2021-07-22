import {
  forwardRef,
  useEffect,
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
  style: configStyle,
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
        placeholder,
        style,
        type = 'text',
        value,
        ...rest
      } = { ...config, ...props }
      const defaultRef = useRef<HTMLInputElement>(null)
      const ref = externalRef || defaultRef
      const [state, setState] = useState<string>()

      const node = getRefCurrent<HTMLInputElement>(ref)

      useEffect(() => {
        const node = getRefCurrent(ref)
        function handleBlur() {
          setState(node?.value)
        }
        function handleKeydown(event: KeyboardEvent) {
          if (children && node && event.code === 'Escape') node.blur()
        }
        if (node) {
          if (state !== node.value) setState(node.value)
          node.addEventListener('blur', handleBlur)
          node.addEventListener('keydown', handleKeydown)
        }
        return () => {
          if (node) {
            node.removeEventListener('blur', handleBlur)
            node.removeEventListener('keydown', handleKeydown)
          }
        }
      }, [children, ref, state])

      const isFilled =
        typeof (value || defaultValue || placeholder) !== 'undefined' ||
        !!node?.value

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
          style={{ ...configStyle, ...style }}
        >
          {before}
          <span className="ui-input__wrapper">
            <input
              {...rest}
              defaultValue={defaultValue}
              disabled={disabled}
              placeholder={placeholder}
              ref={ref}
              type={type}
              value={value}
            />
            {caption && (
              <span className="ui-input__label">
                {caption}
                <span className="ui-input__label--error-bullet">{error}</span>
              </span>
            )}
          </span>
          {after}
          {children && <nav className="ui-input__menu">{children}</nav>}
        </label>
      )
    }
  )
