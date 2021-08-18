import {
  forwardRef,
  useRef,
  ReactNode,
  ComponentProps,
  useState,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  useEffect,
} from 'react'
import clsx from 'clsx'

import { getRefCurrent } from '../helpers'

type BaseProps = Omit<ComponentProps<'textarea'>, 'children'>

export type TextAreaProps = {
  autoHeight?: boolean
  caption?: ReactNode
  error?: ReactNode
  fancy?: boolean
  captionClassName?: string
  wrapperClassName?: string
}

type Props = TextAreaProps & BaseProps

type TextAreaFactory = (
  config: Partial<Props>
) => ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLTextAreaElement>
>

export const createTextArea: TextAreaFactory = ({
  className: configClassName,
  captionClassName: configCaptionClassName,
  style: configStyle,
  wrapperClassName: configWrapperClassName,
  ...config
}) =>
  forwardRef(
    (props, externalRef): JSX.Element => {
      const {
        autoHeight,
        caption,
        className,
        defaultValue,
        error = '•',
        fancy,
        captionClassName,
        placeholder,
        style,
        value,
        wrapperClassName,
        ...rest
      } = { ...config, ...props }
      const defaultRef = useRef<HTMLTextAreaElement>(null)
      const ref = externalRef || defaultRef
      const [state, setState] = useState<string>()

      useEffect(() => {
        const node = getRefCurrent(ref)
        function handleBlur() {
          setState(node?.value)
        }
        function handleInput() {
          if (autoHeight && node) {
            node.style.height = 'auto'
            node.style.height = `${node.scrollHeight}px`
          }
        }
        if (node) {
          if (state !== node.value) setState(node.value)
          node.addEventListener('blur', handleBlur)
          node.addEventListener('input', handleInput)
        }
        return () => {
          if (node) {
            node.removeEventListener('blur', handleBlur)
            node.removeEventListener('input', handleInput)
          }
        }
      }, [autoHeight, ref, state])

      const isFilled =
        typeof (value || defaultValue || placeholder) !== 'undefined' || !!state

      return (
        <label
          className={clsx(
            'ui-textarea',
            isFilled && 'ui-textarea--filled',
            fancy && 'ui-textarea--fancy',
            configWrapperClassName,
            wrapperClassName
          )}
        >
          <textarea
            {...rest}
            className={clsx('ui-textarea__input', configClassName, className)}
            defaultValue={defaultValue}
            placeholder={placeholder}
            ref={ref}
            style={{ ...configStyle, ...style }}
            value={value}
          />
          {caption && (
            <span
              className={clsx(
                'ui-textarea__caption',
                configCaptionClassName,
                captionClassName
              )}
            >
              {caption}
              <span className="ui-textarea__caption--error-bullet">
                {error}
              </span>
            </span>
          )}
        </label>
      )
    }
  )
