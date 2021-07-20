import {
  forwardRef,
  useEffect,
  useRef,
  ReactNode,
  ComponentProps,
  useState,
} from 'react'
import clsx from 'clsx'
import { getRefCurrent } from '@sdlk/react'

type BaseProps = Omit<ComponentProps<'textarea'>, 'children'>

export type TextAreaProps = {
  autoHeight?: boolean
  caption?: ReactNode
  error?: ReactNode
  fancy?: boolean
  labelClassName?: string
}

type Props = TextAreaProps & BaseProps

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      autoHeight,
      caption,
      className,
      defaultValue,
      error = '•',
      fancy,
      labelClassName,
      placeholder,
      style,
      value,
      ...rest
    },
    externalRef
  ): JSX.Element => {
    const defaultRef = useRef<HTMLTextAreaElement>(null)
    const ref = externalRef || defaultRef
    const [state, setState] = useState<string>()

    useEffect(() => {
      const node = getRefCurrent(ref)
      function handleBlur() {
        setState(node.value)
      }
      function handleInput() {
        if (autoHeight) {
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
          fancy && 'ui-textarea--fancy'
        )}
        style={style}
      >
        <textarea
          {...rest}
          className={className}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={ref}
          value={value}
        />
        {caption && (
          <span className={clsx('ui-textarea__label', labelClassName)}>
            {caption}
            <span className="ui-textarea__label--error-bullet">{error}</span>
          </span>
        )}
      </label>
    )
  }
)
