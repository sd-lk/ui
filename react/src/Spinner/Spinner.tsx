import { forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'

export type SpinnerProps = HTMLAttributes<HTMLDivElement>

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, role = 'progressbar' }, ref) => (
    <div className={clsx('ui-spinner', className)} ref={ref} role={role} />
  )
)
